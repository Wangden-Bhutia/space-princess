/* v52 (Part 7F): offline media moved to stable cache 'zippet-media-v1' (survives updates; migrated from old caches), persist request, storage size, remove button.
 * Zippet's Walk Home service worker (cache names keep the old 'space-princess-' prefix so old caches are cleaned up).
 * >>> BUMP THE VERSION BELOW ON EVERY RELEASE (v1 -> v2 -> v3 ...) <<<
 * A new name makes phones download the new files and delete the old cache.
 * Bump CACHE only. Do NOT rename MEDIA, or every phone re-downloads all media. */
// v4 (Batch 1): parent gate, time limit, Sound Blending planet, pure phonics clips, 110 re-recorded clips.
// Also: audio/index.json is network-first (new clips are seen without a version bump);
// mp3s are cache-first; Range requests (iOS Safari <audio>) are answered with a 206 slice of the cached file,
// or passed straight to the network if not cached yet; only full 200 responses are ever cached.
// v5 (Batch 2): Quick Look planet, take away, per-item review, sparkles, Royal Collection II, parent progress report, 94 new clips.
// v6 (Batch 3): Tens and Ones, Shape Sparkles, Pattern Parade, Measure Magic, Trace, Story Corner, journey, decorate, 441 new clips.
// v51 (Part 7E): background music (music/*.mp3, composed), Web Audio player, settings switch.
const CACHE = 'space-princess-v52';
const MEDIA = 'zippet-media-v1'; // stable media store (audio/*.mp3, assets/*.webp, music/*.mp3): NEVER rename in normal releases
const isMedia = p => (p.includes('/audio/') && p.endsWith('.mp3')) || (p.includes('/assets/') && p.endsWith('.webp')) || (p.includes('/music/') && p.endsWith('.mp3'));
const pathOf = r => { try { return new URL(typeof r === 'string' ? r : r.url, self.location.href).pathname; } catch (e) { return ''; } };

// Core files, relative so it works under a GitHub Pages subpath like /space-princess/
const CORE = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './fonts/Andika-Regular.woff2', // optional: may be missing; each file is cached on its own and a missing one is skipped (catch below)
  './fonts/Andika-Bold.woff2',
  './audio/index.json'  // list of recorded clips; regenerate with tools/make-audio-index.sh
];

self.addEventListener('install', e => {
  // Add each file separately so one missing file never fails the install.
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(CORE.map(u => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(async keys => {
        const old = keys.filter(k => k.startsWith('space-princess-') && k !== CACHE);
        // One-time migration: copy media already saved in old caches into MEDIA, so nothing is downloaded again.
        const media = await caches.open(MEDIA);
        for (const k of old) {
          try {
            const c = await caches.open(k);
            for (const req of await c.keys()) {
              if (!isMedia(pathOf(req)) || await media.match(req)) continue;
              const res = await c.match(req);
              if (res) await media.put(req, res).catch(() => {});
            }
          } catch (err) {}
        }
        return Promise.all(old.map(k => caches.delete(k)));
      })
      .then(() => self.clients.claim())
  );
});

function putIfFull(req, res) {
  // Never cache partial (206) or opaque/error responses: cache.put rejects 206 and they would break playback later.
  if (res && res.status === 200 && res.type === 'basic') {
    const copy = res.clone();
    caches.open(isMedia(pathOf(req)) ? MEDIA : CACHE).then(c => c.put(req, copy)).catch(() => {});
  }
  return res;
}

async function rangeResponse(req) {
  const hit = await caches.match(req.url);
  if (!hit) {
    // Not cached yet: let the network answer the Range request, and fetch the full file in the background for next time.
    fetch(req.url).then(full => putIfFull(new Request(req.url), full)).catch(() => {});
    return fetch(req);
  }
  const buf = await hit.arrayBuffer();
  const m = /bytes=(\d*)-(\d*)/.exec(req.headers.get('range') || '');
  const size = buf.byteLength;
  let start = m && m[1] ? +m[1] : 0, end = m && m[2] ? +m[2] : size - 1;
  if (m && !m[1] && m[2]) { start = Math.max(0, size - +m[2]); end = size - 1; } // suffix range "bytes=-500"
  end = Math.min(end, size - 1);
  if (start > end || start >= size) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${size}` } });
  return new Response(buf.slice(start, end + 1), {
    status: 206, statusText: 'Partial Content',
    headers: {
      'Content-Type': hit.headers.get('Content-Type') || 'audio/mpeg',
      'Content-Range': `bytes ${start}-${end}/${size}`,
      'Content-Length': String(end - start + 1),
      'Accept-Ranges': 'bytes'
    }
  });
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // 1) Range requests (iOS Safari audio): slice the cached file, or go to the network.
  if (req.headers.has('range')) { e.respondWith(rangeResponse(req).catch(() => fetch(req))); return; }

  // 2) audio/index.json: network-first so newly added clips are picked up; cached copy when offline.
  if (url.pathname.endsWith('/audio/index.json')) {
    e.respondWith(fetch(req).then(res => putIfFull(new Request(url.pathname), res)).catch(() => caches.match(req, { ignoreSearch: true })));
    return;
  }

  // 3) Everything else (pages, icons, mp3s, assets/*.webp art): cache-first; a missing asset just 404s and the game shows its emoji, then network (and cache full 200 responses).
  e.respondWith(
    caches.match(req, { ignoreSearch: req.mode === 'navigate' }).then(hit => {
      if (hit) return hit;
      return fetch(req).then(res => putIfFull(req, res)).catch(() => {
        // Offline: pages fall back to the cached game.
        if (req.mode === 'navigate') return caches.match('./index.html');
        return Response.error();
      });
    })
  );
});

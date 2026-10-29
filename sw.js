/* Space Princess service worker.
 * >>> BUMP THE VERSION BELOW ON EVERY RELEASE (v1 -> v2 -> v3 ...) <<<
 * A new name makes phones download the new files and delete the old cache. */
// v2 (Phase 3): index.html changed (haptics, streaks, days played, recorded voice) + audio/index.json added.
const CACHE = 'space-princess-v3';

// Core files, relative so it works under a GitHub Pages subpath like /space-princess/
const CORE = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
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
      .then(keys => Promise.all(keys.filter(k => k.startsWith('space-princess-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    caches.match(req, { ignoreSearch: req.mode === 'navigate' }).then(hit => {
      if (hit) return hit; // cache-first
      return fetch(req).then(res => {
        // Lazily cache successful same-origin responses (e.g. /audio/*.mp3 the first time they play).
        if (res && res.ok && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => {
        // Offline: pages fall back to the cached game.
        if (req.mode === 'navigate') return caches.match('./index.html');
        return Response.error();
      });
    })
  );
});

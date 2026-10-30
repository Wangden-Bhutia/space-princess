# Part 6D — Thunderfluff Collection, hill scenes, beats and stories

## Choices (simplest option each time)
- Sticker count kept at 24 + 24 ("keep the count"), so stickerFor numbering and old saves are unchanged; 🦋 left out (cool-hued).
- Old `D.bg` ids (castle/ship/anything unknown) migrate to `hill` via `bgOf()`; button ids bgCastle/bgShip kept so old tests/handlers still work; new bgViolet/bgPink.
- Bear/Moose/Elephant are picture words (`STORY_SIGHT`), always shown with their emoji; NOT added to SIGHT, so the Sight Word planet is unchanged.
- "the dog" in group-1 stories ("pup" needs u), "the pup" from group 2, "Zippet" only in group-4 stories.
- Same story order, g and dg flags, so SP.done progress indexes still point at the same slots. Story 17 (Duck in the Mud) already fit the world and is unchanged.
- BADGES (contains 🪐) left as-is so earned badges in old saves still match.
- "Ten! A tall tower of ten!" was spoken but missing from the phrase list; now listed.

## Edits (existing code → replacement, where)
### 1. #collS h2
Existing:
```
<h2>👑 My Royal Collection</h2>
```
Replacement:
```
<h2>🌟 My Thunderfluff Collection</h2>
```

### 2. STICKERS
Existing:
```
const STICKERS=["👑","🦄","🌈","🌟","🧚","🏰","💖","🪐","🚀","🌙","🐱","🦋","🌸","💎","🎀","🍭","🐬","☄️","🛸","👽","🌻","🐶","🧁","🎠"];
```
Replacement:
```
const STICKERS=["🐶","🐻","🫎","🐘","🐥","🪵","🔴","🐝","🌳","🌄","🏡","🍓","🌰","🍂","🌼","🪶","🍄","🐞","🐸","🐿️","🦉","🌙","🌅","⭐"]; // Part 6D: Thunderfluff Collection (world items; emoji placeholders; same count, so sticker numbers are unchanged)
```

### 3. STICKERS2
Existing:
```
const STICKERS2=["🌍","🌕","🌠","🔭","🛰️","🌌","🪄","💫","🌞","🧸","🎈","🍰","🐉","🦢","🐠","🍩","🎶","🦚","🌺","🎁","🏆","🐰","🦊","🌷"]; // Royal Collection II
```
Replacement:
```
const STICKERS2=["🍁","🌻","🌷","🌸","🍯","🥕","🍎","🍐","🧺","🪺","🐌","🪨","🦔","🦊","🐇","🐢","🐛","🐓","🎃","🕯️","🧣","🥧","🌾","🏮"]; // Thunderfluff Collection II
```

### 4. stickerFor comment
Existing:
```
// after 48 stickers: an endless royal medal every 5 stars
```
Replacement:
```
// after 48 stickers: an endless Thunderfluff medal every 5 stars
```

### 5. drawColl() headings
Existing:
```
head("👑 Royal Collection");if(i===STICKERS.length)head("🌌 Royal Collection II");
```
Replacement:
```
head("🐶 Thunderfluff Collection");if(i===STICKERS.length)head("🌅 Thunderfluff Collection II");
```

### 6. drawColl() medals heading
Existing:
```
head(`🏅 Royal medals: ${got-ALLST.length}`)
```
Replacement:
```
head(`🏅 Thunderfluff medals: ${got-ALLST.length}`)
```

### 7. Block Buddies + at ten (spoken)
Existing:
```
say("Ten! A royal ten with a crown!")
```
Replacement:
```
say("Ten! A tall tower of ten!")
```

### 8. #dcBack
Existing:
```
id="dcBack" aria-label="Back">👑</button>
```
Replacement:
```
id="dcBack" aria-label="Back">🌟</button>
```

### 9. #decoS background buttons (ids kept for old tests)
Existing:
```
<div><button class="tab" id="bgCastle">🏰 Castle</button> <button class="tab" id="bgShip">🚀 Spaceship</button></div>
```
Replacement:
```
<div id="bgTabs"><button class="tab" id="bgCastle" data-bg="hill" aria-label="Golden hill">🌄 Golden</button> <button class="tab" id="bgShip" data-bg="orange" aria-label="Orange dusk">🌅 Orange</button> <button class="tab" id="bgViolet" data-bg="violet" aria-label="Violet dusk">🌆 Violet</button> <button class="tab" id="bgPink" data-bg="pink" aria-label="Pink sky">🌸 Pink</button></div>
```

### 10. BGS (decorate backgrounds)
Existing:
```
const BGS={castle:`<svg viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"><rect width="400" height="300" fill="var(--gold-l)"/><rect y="230" width="400" height="70" fill="var(--green)"/><g fill="var(--rose-l)" stroke="var(--card)" stroke-width="3"><rect x="110" y="110" width="180" height="125"/><rect x="80" y="70" width="50" height="165"/><rect x="270" y="70" width="50" height="165"/></g><g fill="var(--plum)"><polygon points="75,72 105,25 135,72"/><polygon points="265,72 295,25 325,72"/><path d="M175 235 v-50 a25 25 0 0 1 50 0 v50z"/></g></svg>`,
 ship:`<svg viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"><rect width="400" height="300" fill="var(--plum-dk)"/><g fill="var(--card)" opacity=".7"><circle cx="40" cy="40" r="2"/><circle cx="350" cy="60" r="2"/><circle cx="300" cy="250" r="2"/><circle cx="70" cy="230" r="2"/></g><g stroke="var(--card)" stroke-width="3"><path d="M200 30 C260 80 270 170 250 240 H150 C130 170 140 80 200 30Z" fill="var(--card)"/><circle cx="200" cy="120" r="30" fill="var(--gold-l)"/><polygon points="150,200 105,260 150,245" fill="var(--rose)"/><polygon points="250,200 295,260 250,245" fill="var(--rose)"/></g><path d="M170 245 Q200 300 230 245Z" fill="var(--accent)"/></svg>`};
```
Replacement:
```
const BGS={ // Part 6D: hill scenes (palette tokens only); ids: hill (golden hill), orange (orange dusk), violet (violet dusk), pink (pink sky)
 hill:`<svg viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g_hill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--gold-l)"/><stop offset="1" style="stop-color:var(--gold)"/></linearGradient></defs><rect width="400" height="300" fill="url(#g_hill)"/><circle cx="320" cy="70" r="30" fill="var(--card)"/><circle cx="320" cy="70" r="42" fill="var(--card)" opacity=".25"/><ellipse cx="110" cy="300" rx="260" ry="120" fill="var(--green-l)"/><ellipse cx="340" cy="320" rx="240" ry="120" fill="var(--green)"/><rect x="60" y="150" width="12" height="44" rx="4" fill="var(--gold-dk)"/><circle cx="66" cy="140" r="26" fill="var(--ok)"/><g transform="translate(250 168)"><rect x="0" y="28" width="70" height="46" fill="var(--rose-l)" stroke="var(--card)" stroke-width="3"/><polygon points="-8,30 35,0 78,30" fill="var(--plum)"/><rect x="28" y="46" width="16" height="28" rx="6" fill="var(--accent-dk)"/><rect x="8" y="38" width="14" height="12" rx="2" fill="var(--gold-l)"/><rect x="50" y="38" width="14" height="12" rx="2" fill="var(--gold-l)"/></g><rect x="120" y="226" width="80" height="22" rx="11" fill="var(--accent-dk)"/><ellipse cx="122" cy="237" rx="9" ry="11" fill="var(--gold-l)"/></svg>`,
 orange:`<svg viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g_orange" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--accent-l)"/><stop offset="1" style="stop-color:var(--accent)"/></linearGradient></defs><rect width="400" height="300" fill="url(#g_orange)"/><circle cx="320" cy="70" r="30" fill="var(--gold-l)"/><circle cx="320" cy="70" r="42" fill="var(--gold-l)" opacity=".25"/><ellipse cx="110" cy="300" rx="260" ry="120" fill="var(--green)"/><ellipse cx="340" cy="320" rx="240" ry="120" fill="var(--ok)"/><rect x="60" y="150" width="12" height="44" rx="4" fill="var(--gold-dk)"/><circle cx="66" cy="140" r="26" fill="var(--ok)"/><g transform="translate(250 168)"><rect x="0" y="28" width="70" height="46" fill="var(--rose-l)" stroke="var(--card)" stroke-width="3"/><polygon points="-8,30 35,0 78,30" fill="var(--plum)"/><rect x="28" y="46" width="16" height="28" rx="6" fill="var(--accent-dk)"/><rect x="8" y="38" width="14" height="12" rx="2" fill="var(--gold)"/><rect x="50" y="38" width="14" height="12" rx="2" fill="var(--gold)"/></g><rect x="120" y="226" width="80" height="22" rx="11" fill="var(--accent-dk)"/><ellipse cx="122" cy="237" rx="9" ry="11" fill="var(--gold-l)"/></svg>`,
 violet:`<svg viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g_violet" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--plum-l)"/><stop offset="1" style="stop-color:var(--plum)"/></linearGradient></defs><rect width="400" height="300" fill="url(#g_violet)"/><circle cx="320" cy="70" r="30" fill="var(--card)"/><circle cx="320" cy="70" r="42" fill="var(--card)" opacity=".25"/><ellipse cx="110" cy="300" rx="260" ry="120" fill="var(--ok)"/><ellipse cx="340" cy="320" rx="240" ry="120" fill="var(--ok-dk)"/><rect x="60" y="150" width="12" height="44" rx="4" fill="var(--gold-dk)"/><circle cx="66" cy="140" r="26" fill="var(--ok)"/><g transform="translate(250 168)"><rect x="0" y="28" width="70" height="46" fill="var(--rose-l)" stroke="var(--card)" stroke-width="3"/><polygon points="-8,30 35,0 78,30" fill="var(--plum)"/><rect x="28" y="46" width="16" height="28" rx="6" fill="var(--accent-dk)"/><rect x="8" y="38" width="14" height="12" rx="2" fill="var(--gold)"/><rect x="50" y="38" width="14" height="12" rx="2" fill="var(--gold)"/></g><rect x="120" y="226" width="80" height="22" rx="11" fill="var(--accent-dk)"/><ellipse cx="122" cy="237" rx="9" ry="11" fill="var(--gold-l)"/></svg>`,
 pink:`<svg viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g_pink" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--rose-l)"/><stop offset="1" style="stop-color:var(--rose)"/></linearGradient></defs><rect width="400" height="300" fill="url(#g_pink)"/><circle cx="320" cy="70" r="30" fill="var(--gold-l)"/><circle cx="320" cy="70" r="42" fill="var(--gold-l)" opacity=".25"/><ellipse cx="110" cy="300" rx="260" ry="120" fill="var(--green-l)"/><ellipse cx="340" cy="320" rx="240" ry="120" fill="var(--green)"/><rect x="60" y="150" width="12" height="44" rx="4" fill="var(--gold-dk)"/><circle cx="66" cy="140" r="26" fill="var(--ok)"/><g transform="translate(250 168)"><rect x="0" y="28" width="70" height="46" fill="var(--rose-l)" stroke="var(--card)" stroke-width="3"/><polygon points="-8,30 35,0 78,30" fill="var(--plum)"/><rect x="28" y="46" width="16" height="28" rx="6" fill="var(--accent-dk)"/><rect x="8" y="38" width="14" height="12" rx="2" fill="var(--gold-l)"/><rect x="50" y="38" width="14" height="12" rx="2" fill="var(--gold-l)"/></g><rect x="120" y="226" width="80" height="22" rx="11" fill="var(--accent-dk)"/><ellipse cx="122" cy="237" rx="9" ry="11" fill="var(--gold-l)"/></svg>`};
const BG_IDS=["hill","orange","violet","pink"],bgOf=b=>BG_IDS.includes(b)?b:"hill";D.bg=bgOf(D.bg); // old saves: castle / ship / anything else → the golden hill
```

### 11. drawDeco() first line
Existing:
```
function drawDeco(){const d=$("deco");d.innerHTML=BGS[D.bg==="ship"?"ship":"castle"];$("bgCastle").classList.toggle("on",D.bg!=="ship");$("bgShip").classList.toggle("on",D.bg==="ship");
```
Replacement:
```
function drawDeco(){const d=$("deco");D.bg=bgOf(D.bg);d.innerHTML=BGS[D.bg];document.querySelectorAll("#bgTabs [data-bg]").forEach(b=>b.classList.toggle("on",b.dataset.bg===D.bg));
```

### 12. background button handlers
Existing:
```
$("bgCastle").onclick=()=>{D.bg="castle";saveD();drawDeco()};$("bgShip").onclick=()=>{D.bg="ship";saveD();drawDeco()};
```
Replacement:
```
document.querySelectorAll("#bgTabs [data-bg]").forEach(b=>b.onclick=()=>{D.bg=b.dataset.bg;saveD();sfx.tap();drawDeco()});
```

### 13. #decoBtn label
Existing:
```
🎨 Decorate my castle
```
Replacement:
```
🎨 Decorate my hill
```

### 14. openDeco() speech + phrases() line
Existing:
```
"Decorate your castle! Tap a sticker to add it."
```
Replacement:
```
"Decorate your hill! Tap a sticker to add it."
```

### 15. Decorate default background
Existing:
```
let D={bg:"castle",items:[]}
```
Replacement:
```
let D={bg:"hill",items:[]}
```

### 16. resetB3() default background
Existing:
```
function resetB3(){D={bg:"castle",items:[]}
```
Replacement:
```
function resetB3(){D={bg:"hill",items:[]}
```

### 17. BEATS4
Existing:
```
const BEATS4=["Zippet found the path home. Thank you!","One more step closer to home!","Zippet can see the cottage from here!","You lit the way home for Zippet!","You and Zippet made a path home together!","The cottage windows are glowing!"];
```
Replacement:
```
const BEATS4=["Bear woke up and showed Zippet the path. Let's look!","Moose stood tall and spotted the cottage. Let's look!","Elephant gave Zippet a gentle lift over the puddle.","The chick peeped from the log: this way home!","The Blinkle glowed softly, and Zippet said: Let's look!","Zippet and you reached the cottage. Home before dark!"]; // Part 6D: one friend per beat
```

### 18. HOME_ST
Existing:
```
const HOME_ST=["🏡","🌉","🛸","🏘️","🗼","🎠"];
```
Replacement:
```
const HOME_ST=["🏡","🚪","🌳","🌻","🪵","🕯️"]; // Part 6D: hill and cottage pieces (old saves keep the stickers they already have)
```

### 19. Adventure beat card icon
Existing:
```
🧱 ${beat}
```
Replacement:
```
🌄 ${beat}
```

### 20. STORIES (all 25)
Existing:
```
const STORIES=[
 {t:"Pip the Ant",g:0,i:"🐜",p:[["🐜","Pip is an ant."],["🐜💫","Pip spins and spins."],["🐜👏","Tap, tap, tap!"],["🥫🐜","Pip sits in a tin."],["😴🐜","Pip naps."]],q:["Where did Pip sit?",[["🥫 in a tin","tin"],["🍳 in a pan","pan"],["👖 in the pants","pants"]],"tin"],q2:["What did Pip do at the end?",[["😴 nap","nap"],["🌀 spin","spin"],["🎨 paint","paint"]],"nap"]},
 {t:"Nan Taps",g:0,i:"👵",p:[["👵","Nan sits."],["🥫👵","Nan taps a tin."],["🍳👵","Nan taps a pan."],["🎶","Tap, tap, tap, pat!"],["✋👵","I sit and tap."],["😴👵","Nan naps!"]],q:["Who naps?",[["👵 Nan","nan"],["🐜 Pip","pip"],["🧒 Tip","tip"]],"nan"],q2:["What did Nan tap first?",[["🥫 a tin","tin"],["🍳 a pan","pan"],["🚰 a tap","tap"]],"tin"]},
 {t:"Sam the Dog",g:1,i:"🐶",p:[["🐶","Sam is my dog."],["🐶⛏️","Sam digs and digs."],["🐶🟫","Sam got a mat."],["🐶","Sam sits on the mat."],["😴🐶","Sam naps on the mat."]],q:["What is Sam?",[["🐶 a dog","dog"],["🐷 a pig","pig"],["🐐 a goat","goat"]],"dog"],q2:["Where did Sam nap?",[["🟫 on the mat","mat"],["🍲 in a pot","pot"],["🗺️ on a map","map"]],"mat"]},
 {t:"Dad and the Map",g:1,i:"🗺️",p:[["👨🗺️","Dad got a map."],["👨✋","Dad and I go."],["🏞️","We go to a pond."],["🐶","I spot a dog."],["🐶🏖️","The dog digs in the sand."],["✋🐶","We pat the dog."]],q:["What did I spot?",[["🐶 a dog","dog"],["🐷 a pig","pig"],["🐐 a goat","goat"]],"dog"],q2:["Where did we go?",[["🏞️ to a pond","pond"],["⛰️ to the top","top"],["🌙 to the moon","moon"]],"pond"]},
 {t:"The Red Cup",g:2,i:"🥤",p:[["👧🥤","Meg got a red cup."],["🥤","The cup is on the rug."],["🐶","Pup runs to the rug."],["🐶🥤","Pup tips the cup!"],["🐶","No, Pup, no!"],["👧🐶","Meg pets Pup."],["💖","Meg is not cross."]],q:["What did Pup tip?",[["🥤 the cup","cup"],["🖊️ a pen","pen"],["🥫 a tin","tin"]],"cup"],q2:["What colour was the cup?",[["🔴 red","red"],["🌸 pink","pink"],["🟢 green","green"]],"red"]},
 {t:"Kit the Cat",g:2,i:"🐱",p:[["🐱","Kit is my cat."],["🐱☀️","She sits in the sun."],["🐱💨","Kit can run."],["👦🐱","Kit runs to Ted."],["👦","He pets Kit."],["😺","Kit is snug."]],q:["Who is Kit?",[["🐱 a cat","cat"],["🐶 a dog","dog"],["🦆 a duck","duck"]],"cat"],q2:["Who pets Kit?",[["👦 Ted","ted"],["👵 Nan","nan"],["👨 Dad","dad"]],"ted"]},
 {t:"The Big Bus",g:3,i:"🚌",p:[["🚌","The bus is big and red."],["👦🚌","Bob gets on the bus."],["👧🚌","Lil gets on the bus."],["🚌⛰️","The bus gets to the hill."],["👦👧","Bob and Lil hop off."],["🎉","It is fun!"]],q:["What colour was the bus?",[["🔴 red","red"],["🔵 blue","blue"],["🟢 green","green"]],"red"],q2:["Where did the bus go?",[["⛰️ to the hill","hill"],["🏖️ to the sea","sea"],["🏫 to school","school"]],"hill"]},
 {t:"Fin and the Hat",g:3,i:"🎩",p:[["👦🎩","Fin has a big hat."],["👦👧","Fin and Bel go up."],["💨🎩","The hat flips off!"],["👧","Bel runs and gets it."],["👧🎩","Let me help!"],["😊","Fin is glad."]],q:["What flipped off?",[["🎩 the hat","hat"],["🥤 a cup","cup"],["🥫 a tin","tin"]],"hat"],q2:["Who got the hat?",[["👧 Bel","bel"],["👦 Fin","fin"],["🐶 a dog","dog"]],"bel"]},
 {t:"Jen and Max",g:4,i:"🚐",p:[["👧🚐","Jen has a red van."],["👧👦","Jen and Max zip off."],["🐶","The vet helps a sick pup."],["🐶💖","Yes! The pup is well."],["🚐","Jen and Max zip back."]],q:["Who did the vet help?",[["🐶 a pup","pup"],["🦊 a fox","fox"],["🐱 a cat","cat"]],"pup"],q2:["What does Jen have?",[["🚐 a red van","van"],["🚲 a bike","bike"],["🚌 a bus","bus"]],"van"]},
 {t:"Zak and the Web",g:4,i:"🦊",p:[["🦊","Zak is a fox."],["🕸️","Zak spots a web."],["🐛🕸️","A bug is stuck in it!"],["🦊🐛","Zak lifts the bug."],["🐛💨","The bug zips off."],["🦊😊","Zak can be a pal."]],q:["Who did Zak help?",[["🐛 a bug","bug"],["🐱 a cat","cat"],["🐶 a dog","dog"]],"bug"],q2:["Where was the bug stuck?",[["🕸️ in a web","web"],["🥫 in a tin","tin"],["🎩 in a hat","hat"]],"web"]},
 // Pass 2 stories (appended so saved SP.done indexes stay the same)
 {t:"Ants in a Pan",g:0,i:"🐜",p:[["🐜🍳","Ants in a pan!"],["👵🍳","Nan taps the pan."],["🐜🐜","Tap, tap! The ants spin."],["🐜🥫","The ants nip in a tin."],["👵😊","Nan pats the tin."]],q:["Where did the ants go?",[["🥫 in a tin","tin"],["🍳 in a pan","pan"],["👖 in the pants","pants"]],"tin"],q2:["Who tapped the pan?",[["👵 Nan","nan"],["🐜 an ant","ant"],["🧒 Tip","tip"]],"nan"]},
 {t:"Tip Spins",g:0,i:"🌀",p:[["👦🌀","Tip spins."],["👦🌀","Spin, spin, spin!"],["👦😵","Tip sits."],["👧👦","Pat sits and Tip sits."],["😴","Tip and Pat nap."]],q:["What did Tip do?",[["🌀 spin","spin"],["🚰 tap","tap"],["🎨 paint","paint"]],"spin"],q2:["What did Tip and Pat do at the end?",[["😴 nap","nap"],["🚰 tap","tap"],["🎨 paint","paint"]],"nap"]},
 {t:"Snip, Snip",g:0,i:"✂️",p:[["✂️","Snip, snip!"],["👵✂️","Nan snips."],["👧💇","Nan snips at Pat."],["👧","Pat sits and sits."],["👧😊","Pat spins!"]],q:["Who snips?",[["👵 Nan","nan"],["🐜 Pip","pip"],["🧒 Tip","tip"]],"nan"],q2:["What did Pat do at the end?",[["🌀 spin","spin"],["😴 nap","nap"],["🚰 tap","tap"]],"spin"]},
 {t:"Momo Time",g:1,i:"🥟",p:[["👩🍲","Mom got a pot."],["🥟🍲","Momo in the pot!"],["👨","Dad sat and sat."],["👨🥟","Dad got a momo."],["✋👨🥟","Dad and I dip momos."],["😋","Mmm!"]],q:["What was in the pot?",[["🥟 momos","momo"],["🥭 mangos","mango"],["🥄 spoons","spoon"]],"momo"],q2:["Who got the pot?",[["👩 Mom","mom"],["👨 Dad","dad"],["🐶 a dog","dog"]],"mom"]},
 {t:"The Mist",g:1,i:"🌫️",p:[["🌫️","Mist, mist, mist."],["⛰️🌫️","Mist on the top."],["👨✋","Dad and I go."],["👣","We go on and on."],["⛰️🌞","At the top, no mist!"],["👨✋😊","Dad and I sit."]],q:["What was on the top?",[["🌫️ mist","mist"],["🌙 the moon","moon"],["🐐 a goat","goat"]],"mist"],q2:["What did Dad and I do at the end?",[["🪑 sit","sit"],["🚶 go","go"],["⛏️ dig","dig"]],"sit"]},
 {t:"Dot the Dog",g:1,i:"🐕",p:[["🐶","Dot is a dog."],["🐶⛏️","Dot digs and digs."],["🐶🗺️","Dot got a map!"],["👨","No, Dot, no!"],["👨🐶","Dad pats Dot."],["🐶😴","Dot naps on a mat."]],q:["What did Dot get?",[["🗺️ a map","map"],["🥄 a spoon","spoon"],["🥭 a mango","mango"]],"map"],q2:["Who said no to Dot?",[["👨 Dad","dad"],["👵 Nan","nan"],["🐷 a pig","pig"]],"dad"]},
 {t:"Drip, Drip",g:2,i:"🌧️",p:[["🌧️","Drip, drip, drip!"],["⛺","Meg is in a tent."],["⛺💧","Drip! It drips on Meg."],["🥤💧","Drip in the cup!"],["☀️","The sun is up."],["👧☀️","Meg runs in the sun."]],q:["Where did Meg sit?",[["⛺ in a tent","tent"],["🚗 in a car","car"],["🧦 in a sock","sock"]],"tent"],q2:["What came out at the end?",[["☀️ the sun","sun"],["🌙 the moon","moon"],["⭐ a star","star"]],"sun"]},
 {t:"Duck in the Mud",g:2,i:"🦆",p:[["🦆","A duck is in the mud."],["🦆🦆","Duck, duck, duck!"],["🦆🪨","The duck sits on a rock."],["🐶","A pup runs up."],["🦆💨","The duck runs and runs."],["🐶🦆","The pup and duck rest."]],q:["Where did the duck sit?",[["🪨 on a rock","rock"],["🚗 on a car","car"],["🎂 on a cake","cake"]],"rock"],q2:["Who ran up?",[["🐶 a pup","pup"],["🐱 a cat","cat"],["🐀 a rat","rat"]],"pup"]},
 {t:"The Red Drum",g:2,i:"🥁",p:[["🥁","Ted got a red drum."],["👦🥁","Dum, dum, dum!"],["👵","Nan runs in."],["👵🥁","Nan can drum!"],["👵👦🥁","Nan and Ted drum and drum."],["😄","Ted grins."]],q:["What did Ted get?",[["🥁 a drum","drum"],["🚗 a car","car"],["🪁 a kite","kite"]],"drum"],q2:["Who came in to drum?",[["👵 Nan","nan"],["👨 Dad","dad"],["🐶 a dog","dog"]],"nan"]},
 {t:"Up the Hill",g:3,i:"⛰️",p:[["⛰️","The hill is big."],["👨✋","Dad and I go up."],["🌫️","Fog, fog, fog!"],["🛖","We stop at a hut."],["🥟","We have hot momos."],["☀️","The fog lifts!"]],q:["Where did they stop?",[["🛖 at a hut","hut"],["🏫 at a school","school"],["🏪 at a shop","shop"]],"hut"],q2:["What did they eat?",[["🥟 momos","momo"],["🥕 a carrot","carrot"],["🍌 a banana","banana"]],"momo"]},
 {t:"The Lost Hen",g:3,i:"🐔",p:[["🐔","Bell is a hen."],["🐔❓","Bell is lost!"],["👧","Fran said, \"Help!\""],["🐔🪵","Is Bell on the log?"],["🐔🛏️","No! Bell is in the bed!"],["👧🐔💖","Fran hugs Bell."]],q:["Where was Bell?",[["🛏️ in the bed","bed"],["🪵 on the log","log"],["🌳 up a tree","tree"]],"bed"],q2:["What did Fran do at the end?",[["🤗 hug Bell","hug"],["🏃 run off","run"],["😴 nap","nap"]],"hug"]},
 {t:"Hot Dal",g:3,i:"🍲",p:[["👵🍲","Gran has a big pot."],["🍲","It is dal!"],["👦👧","Bob and Lil are glad."],["🍲😋","The dal is hot."],["👦👧🥄","Bob and Lil have lots."],["👵😊","They like dal!"]],q:["What was in the pot?",[["🍲 dal","dal"],["🥛 milk","milk"],["🍦 ice cream","icecream"]],"dal"],q2:["Who made the dal?",[["👵 Gran","gran"],["👨 Dad","dad"],["🐶 a dog","dog"]],"gran"]},
 {t:"The Windy Hill",g:4,i:"🌬️",p:[["🌬️","The wind is up."],["🚩","Max has a red flag."],["🌬️🚩","The wind tugs the flag."],["🚩💨","The flag zips up!"],["👦😮","Max yells, \"Yes!\""],["😊","What fun!"]],q:["What did the wind tug?",[["🚩 the flag","flag"],["🎩 a hat","hat"],["🧦 a sock","sock"]],"flag"],q2:["What did Max yell?",[["✅ Yes!","yes"],["❌ No!","no"],["👋 Hello!","hello"]],"yes"]},
 {t:"Jill and the Yak",g:4,i:"🐃",p:[["🐃","A yak is on the hill."],["🐃","The yak is big."],["👧🐃","Jill pats the yak."],["🐃","Yum! The yak licks Jill."],["👧😂","Jill yells, \"Yuck!\""],["👧🐃","Jill and the yak are pals."]],q:["What was on the hill?",[["🐃 a yak","yak"],["🐐 a goat","goat"],["🐘 an elephant","elephant"]],"yak"],q2:["What did the yak do to Jill?",[["👅 lick her","lick"],["🏃 run off","run"],["😴 sleep","sleep"]],"lick"]},
 {t:"Jam and Buns",g:4,i:"🍞",p:[["👩🍞","Mum has some buns."],["🍓","Mum has red jam."],["👩👦","Come and get one!"],["👦🍞","Zed dips a bun."],["👦😋","Yum, yum, yum!"],["👩👦","There is jam on Zed!"]],q:["What did Mum have?",[["🍞 buns","bun"],["🍕 pizza","pizza"],["🍉 a melon","melon"]],"bun"],q2:["Where was the jam at the end?",[["👦 on Zed","zed"],["🐶 on a dog","dog"],["🎩 on a hat","hat"]],"zed"]}];
```
Replacement:
```
const STORY_SIGHT=["bear","moose","elephant"]; // Part 6D: cast names read as picture words in stories (always shown with their picture); "Zippet" only once z is unlocked (group 4), before that "the dog" / "the pup"
const STORIES=[
 {t:"Bear Naps",g:0,i:"🐻",p:[["🐻","Bear sits."],["🐻🌳","Bear sits and sits."],["🐻😴","Bear naps."],["🐜🐻","An ant taps Bear."],["🐻🐜","Tap, tap, tap!"],["🐻😴","Bear naps and naps."]],q:["Who taps Bear?",[["🐜 an ant","ant"],["🍳 a pan","pan"],["🥫 a tin","tin"]],"ant"],q2:["What did Bear do?",[["😴 nap","nap"],["🌀 spin","spin"],["🚰 tap","tap"]],"nap"]},
 {t:"Moose Taps",g:0,i:"🫎",p:[["🫎","Moose sits."],["🫎🥫","Moose taps a tin."],["🫎🍳","Moose taps a pan."],["🎶","Tap, tap, tap, pat!"],["✋🫎","I sit and tap."],["😴🫎","Moose naps!"]],q:["Who naps?",[["🫎 Moose","moose"],["🐻 Bear","bear"],["🐘 Elephant","elephant"]],"moose"],q2:["What did Moose tap first?",[["🥫 a tin","tin"],["🍳 a pan","pan"],["🚰 a tap","tap"]],"tin"]},
 {t:"The Dog Digs",g:1,i:"🐶",p:[["🐶","It is a dog."],["🐶⛏️","The dog digs and digs."],["🐶🟫","The dog got a mat."],["🐶","The dog sits on the mat."],["😴🐶","The dog naps on the mat."]],q:["What is it?",[["🐶 a dog","dog"],["🐷 a pig","pig"],["🐐 a goat","goat"]],"dog"],q2:["Where did the dog nap?",[["🟫 on the mat","mat"],["🍲 in a pot","pot"],["🗺️ on a map","map"]],"mat"]},
 {t:"Moose and the Map",g:1,i:"🗺️",p:[["🫎🗺️","Moose got a map."],["🫎✋","Moose and I go."],["🏞️","We go to a pond."],["🐶","I spot a dog."],["🐶🏖️","The dog digs in the sand."],["✋🐶","We pat the dog."]],q:["What did I spot?",[["🐶 a dog","dog"],["🐷 a pig","pig"],["🐐 a goat","goat"]],"dog"],q2:["Where did we go?",[["🏞️ to a pond","pond"],["⛰️ to the top","top"],["🌙 to the moon","moon"]],"pond"]},
 {t:"The Red Cup",g:2,i:"🥤",p:[["🐻🥤","Bear got a red cup."],["🥤","The cup is on the rug."],["🐶","The pup runs to the rug."],["🐶🥤","The pup tips the cup!"],["🐻","No, pup, no!"],["🐻🐶","Bear pets the pup."],["🐻💖","Bear is not cross."]],q:["What did the pup tip?",[["🥤 the cup","cup"],["🖊️ a pen","pen"],["🥫 a tin","tin"]],"cup"],q2:["What colour was the cup?",[["🔴 red","red"],["🌸 pink","pink"],["🟢 green","green"]],"red"]},
 {t:"Elephant in the Sun",g:2,i:"🐘",p:[["🐘","Elephant is in the sun."],["🐘☀️","She sits in the sun."],["🐘💨","Elephant can run."],["🐘🐶","Elephant runs to the pup."],["🐘🐶","She pats the pup."],["🐶😊","The pup is snug."]],q:["Who is in the sun?",[["🐘 Elephant","elephant"],["🐻 Bear","bear"],["🫎 Moose","moose"]],"elephant"],q2:["Who did Elephant pat?",[["🐶 the pup","pup"],["🦆 a duck","duck"],["🐱 a cat","cat"]],"pup"]},
 {t:"Fog on the Log",g:3,i:"🪵",p:[["🪵","A log is on the hill."],["🐶🪵","A dog sits on the log."],["🌫️","Fog, fog, fog!"],["🐸🪵","A frog hops on the log."],["🐶🐸","Dog and frog in the fog."],["☀️","The fog lifts. Hop, hop!"]],q:["Who hops on the log?",[["🐸 a frog","frog"],["🐶 a dog","dog"],["🐻 Bear","bear"]],"frog"],q2:["What was on the hill?",[["🪵 a log","log"],["🛖 a hut","hut"],["🌳 an elm","elm"]],"log"]},
 {t:"Moose and the Hat",g:3,i:"🎩",p:[["🫎🎩","Moose has a big hat."],["🫎🐶","Moose and the pup go up."],["💨🎩","The hat flips off!"],["🐶","The pup runs and gets it."],["🐶🎩","Let me help!"],["🫎😊","Moose is glad."]],q:["What flipped off?",[["🎩 the hat","hat"],["🥤 a cup","cup"],["🥫 a tin","tin"]],"hat"],q2:["Who got the hat?",[["🐶 the pup","pup"],["🫎 Moose","moose"],["🐻 Bear","bear"]],"pup"]},
 {t:"Zippet Gets Wet",g:4,i:"🐶",p:[["🐶","Zippet is a pup."],["🐶💨","Zippet zips up the hill."],["🐘","Elephant is in a puddle."],["🐘💦","Elephant gets wet."],["🐶🐘","Zippet gets wet as well!"],["🐶🐘😄","Zippet and Elephant jump."]],q:["Where was Elephant?",[["💦 in a puddle","puddle"],["🪵 on a log","log"],["🛖 in a hut","hut"]],"puddle"],q2:["Who got wet as well?",[["🐶 Zippet","zippet"],["🐻 Bear","bear"],["🫎 Moose","moose"]],"zippet"]},
 {t:"Zippet and the Web",g:4,i:"🕸️",p:[["🐶","Zippet is on the hill."],["🕸️","Zippet spots a web."],["🐛🕸️","A bug is stuck in it!"],["🐶🐛","Zippet lifts the bug."],["🐛💨","The bug zips off."],["🐶😊","Zippet can be a pal."]],q:["Who did Zippet help?",[["🐛 a bug","bug"],["🐱 a cat","cat"],["🐶 a dog","dog"]],"bug"],q2:["Where was the bug stuck?",[["🕸️ in a web","web"],["🥫 in a tin","tin"],["🎩 in a hat","hat"]],"web"]},
 // Pass 2 stories (appended so saved SP.done indexes stay the same)
 {t:"Ants and Bear",g:0,i:"🐜",p:[["🐜🐻","Ants nip at Bear!"],["🐻","Bear naps and naps."],["🐜🐜","The ants spin and spin."],["🐜🥫","The ants nip in a tin."],["🐻😊","Bear sits. Bear pats the tin."]],q:["Where did the ants go?",[["🥫 in a tin","tin"],["🍳 in a pan","pan"],["👖 in the pants","pants"]],"tin"],q2:["Who had a nap?",[["🐻 Bear","bear"],["🫎 Moose","moose"],["🐘 Elephant","elephant"]],"bear"]},
 {t:"Moose Spins",g:0,i:"🌀",p:[["🫎🌀","Moose spins."],["🫎🌀","Spin, spin, spin!"],["🫎😵","Moose sits."],["🐘🫎","Elephant sits and Moose sits."],["😴🫎🐘","Moose and Elephant nap."]],q:["What did Moose do?",[["🌀 spin","spin"],["🚰 tap","tap"],["🎨 paint","paint"]],"spin"],q2:["What did Moose and Elephant do at the end?",[["😴 nap","nap"],["🚰 tap","tap"],["🎨 paint","paint"]],"nap"]},
 {t:"Snip, Snip",g:0,i:"✂️",p:[["✂️","Snip, snip!"],["🐘✂️","Elephant snips."],["🐘🌱","Elephant snips and snips."],["🐻","Bear sits and sits."],["🐻😊","Bear spins!"]],q:["Who snips?",[["🐘 Elephant","elephant"],["🐻 Bear","bear"],["🫎 Moose","moose"]],"elephant"],q2:["What did Bear do at the end?",[["🌀 spin","spin"],["😴 nap","nap"],["🚰 tap","tap"]],"spin"]},
 {t:"Momo Time",g:1,i:"🥟",p:[["🐻🍲","Bear got a pot."],["🥟🍲","Momo in the pot!"],["🫎","Moose sat and sat."],["🫎🥟","Moose got a momo."],["✋🫎🥟","Moose and I dip momos."],["😋","Mmm!"]],q:["What was in the pot?",[["🥟 momos","momo"],["🥭 mangos","mango"],["🥄 spoons","spoon"]],"momo"],q2:["Who got the pot?",[["🐻 Bear","bear"],["🫎 Moose","moose"],["🐶 a dog","dog"]],"bear"]},
 {t:"The Mist",g:1,i:"🌫️",p:[["🌫️","Mist, mist, mist."],["⛰️🌫️","Mist on the top."],["🐘✋","Elephant and I go."],["👣","We go on and on."],["⛰️🌞","At the top, no mist!"],["🐘✋😊","Elephant and I sit."]],q:["What was on the top?",[["🌫️ mist","mist"],["🌙 the moon","moon"],["🐐 a goat","goat"]],"mist"],q2:["What did Elephant and I do at the end?",[["🪑 sit","sit"],["🚶 go","go"],["⛏️ dig","dig"]],"sit"]},
 {t:"The Dog and the Map",g:1,i:"🐕",p:[["🐶","A dog is on a mat."],["🐶⛏️","The dog digs and digs."],["🐶🗺️","The dog got a map!"],["🐻","No, dog, no!"],["🐻🐶","Bear pats the dog."],["🐶😴","The dog naps on a mat."]],q:["What did the dog get?",[["🗺️ a map","map"],["🥄 a spoon","spoon"],["🥭 a mango","mango"]],"map"],q2:["Who said no to the dog?",[["🐻 Bear","bear"],["🫎 Moose","moose"],["🐷 a pig","pig"]],"bear"]},
 {t:"Drip, Drip",g:2,i:"🌧️",p:[["🌧️","Drip, drip, drip!"],["⛺🐻","Bear is in a tent."],["⛺💧🐻","Drip! It drips on Bear."],["🥤💧","Drip in the cup!"],["☀️","The sun is up."],["🐻☀️","Bear runs in the sun."]],q:["Where did Bear sit?",[["⛺ in a tent","tent"],["🚗 in a car","car"],["🧦 in a sock","sock"]],"tent"],q2:["What came out at the end?",[["☀️ the sun","sun"],["🌙 the moon","moon"],["⭐ a star","star"]],"sun"]},
 {t:"Duck in the Mud",g:2,i:"🦆",p:[["🦆","A duck is in the mud."],["🦆🦆","Duck, duck, duck!"],["🦆🪨","The duck sits on a rock."],["🐶","A pup runs up."],["🦆💨","The duck runs and runs."],["🐶🦆","The pup and duck rest."]],q:["Where did the duck sit?",[["🪨 on a rock","rock"],["🚗 on a car","car"],["🎂 on a cake","cake"]],"rock"],q2:["Who ran up?",[["🐶 a pup","pup"],["🐱 a cat","cat"],["🐀 a rat","rat"]],"pup"]},
 {t:"The Red Drum",g:2,i:"🥁",p:[["🫎🥁","Moose got a red drum."],["🫎🥁","Dum, dum, dum!"],["🐘","Elephant runs in."],["🐘🥁","Elephant can drum!"],["🐘🫎🥁","Elephant and Moose drum and drum."],["🫎😄","Moose grins."]],q:["What did Moose get?",[["🥁 a drum","drum"],["🚗 a car","car"],["🪁 a kite","kite"]],"drum"],q2:["Who came in to drum?",[["🐘 Elephant","elephant"],["🐻 Bear","bear"],["🐶 a dog","dog"]],"elephant"]},
 {t:"Up the Hill",g:3,i:"⛰️",p:[["⛰️","The hill is big."],["🐻✋","Bear and I go up."],["🌫️","Fog, fog, fog!"],["🛖","We stop at a hut."],["🥟","We have hot momos."],["☀️","The fog lifts!"]],q:["Where did they stop?",[["🛖 at a hut","hut"],["🏫 at a school","school"],["🏪 at a shop","shop"]],"hut"],q2:["What did they eat?",[["🥟 momos","momo"],["🥕 a carrot","carrot"],["🍌 a banana","banana"]],"momo"]},
 {t:"The Lost Hen",g:3,i:"🐔",p:[["🐔","Here is a red hen."],["🐔❓","The hen is lost!"],["🐘","Elephant said, \"Help!\""],["🐔🪵","Is the hen on the log?"],["🐔🛏️","No! It is in the bed!"],["🐘🐔💖","Elephant hugs the hen."]],q:["Where was the hen?",[["🛏️ in the bed","bed"],["🪵 on the log","log"],["🌳 up a tree","tree"]],"bed"],q2:["What did Elephant do at the end?",[["🤗 hug the hen","hug"],["🏃 run off","run"],["😴 nap","nap"]],"hug"]},
 {t:"Hot Dal",g:3,i:"🍲",p:[["🐻🍲","Bear has a big pot."],["🍲","It is dal!"],["🫎🐘","Moose and Elephant are glad."],["🍲😋","The dal is hot."],["🫎🐘🥄","They have lots and lots."],["🐻😊","They like dal!"]],q:["What was in the pot?",[["🍲 dal","dal"],["🥛 milk","milk"],["🍦 ice cream","icecream"]],"dal"],q2:["Who made the dal?",[["🐻 Bear","bear"],["🫎 Moose","moose"],["🐶 a dog","dog"]],"bear"]},
 {t:"The Windy Hill",g:4,i:"🌬️",p:[["🌬️","The wind is up."],["🚩","Zippet has a red flag."],["🌬️🚩","The wind tugs the flag."],["🚩💨","The flag zips up!"],["🐶😮","Zippet yells, \"Yes!\""],["😊","What fun!"]],q:["What did the wind tug?",[["🚩 the flag","flag"],["🎩 a hat","hat"],["🧦 a sock","sock"]],"flag"],q2:["What did Zippet yell?",[["✅ Yes!","yes"],["❌ No!","no"],["👋 Hello!","hello"]],"yes"]},
 {t:"Moose and the Yak",g:4,i:"🐃",p:[["🐃","A yak is on the hill."],["🐃","The yak is big."],["🫎🐃","Moose pats the yak."],["🐃🫎","Yum! The yak licks Moose."],["🫎😂","Moose yells, \"Yuck!\""],["🫎🐃","Moose and the yak are pals."]],q:["What was on the hill?",[["🐃 a yak","yak"],["🐐 a goat","goat"],["🐘 Elephant","elephant"]],"yak"],q2:["What did the yak do to Moose?",[["👅 lick him","lick"],["🏃 run off","run"],["😴 sleep","sleep"]],"lick"]},
 {t:"Jam and Buns",g:4,i:"🍞",p:[["🐻🍞","Bear has some buns."],["🐻🍓","Bear has red jam."],["🐻🐶","Come and get one!"],["🐶🍞","Zippet dips a bun."],["🐶😋","Yum, yum, yum!"],["🐻🐶","There is jam on Zippet!"]],q:["What did Bear have?",[["🍞 buns","bun"],["🍕 pizza","pizza"],["🍉 a melon","melon"]],"bun"],q2:["Where was the jam at the end?",[["🐶 on Zippet","zippet"],["🐻 on Bear","bear"],["🎩 on a hat","hat"]],"zippet"]}];
```

### 21. DG_STORIES (2 Sound Pairs stories)
Existing:
```
const DG_STORIES=[
 {t:"The Ship Shop",g:4,dg:1,i:"🚢",p:[["👩🏪","Shan has a shop."],["🚢","It has a big ship."],["👦👩","Chen chats with Shan."],["👦🚢","Chen gets the ship!"],["👩🎵","Shan sings a song."]],
  q:["What did Chen get?",[["🚢 the ship","ship"],["🐚 a shell","shell"],["🐟 a fish","fish"]],"ship"],q2:["What did Shan do at the end?",[["🎵 sing","sing"],["😴 sleep","sleep"],["🏃 run","run"]],"sing"]},
 {t:"Fish and Chips",g:4,dg:1,i:"🍟",p:[["👧👨","Beth and Dad get lunch."],["🐟🍟","They have fish and chips."],["👧🍟","Beth has a thin chip."],["🐦🍟","A gull gets the chip!"],["👨🍟","Dad gets Beth a big chip."],["👧😄","Then Beth sings!"]],
  q:["What did they have?",[["🐟🍟 fish and chips","fishchips"],["🍕 pizza","pizza"],["🎂 cake","cake"]],"fishchips"],q2:["Who got the thin chip?",[["🐦 a gull","gull"],["🐶 a dog","dog"],["👨 Dad","dad"]],"gull"]}];
```
Replacement:
```
const DG_STORIES=[
 {t:"The Chick and the Shell",g:4,dg:1,i:"🐥",p:[["🐥🪵","The chick is in the log."],["🐥🐚","The chick has a shell."],["🐶🐥","Zippet chats with the chick."],["🐥😴","Shh! The chick naps."],["🐥🎵","Then the chick sings a song."]],
  q:["What did the chick have?",[["🐚 a shell","shell"],["🚢 a ship","ship"],["🐟 a fish","fish"]],"shell"],q2:["What did the chick do at the end?",[["🎵 sing","sing"],["😴 sleep","sleep"],["🏃 run","run"]],"sing"]},
 {t:"Fish and Chips",g:4,dg:1,i:"🍟",p:[["🐘🐶","Elephant and Zippet get lunch."],["🐟🍟","They have fish and chips."],["🐶🍟","Zippet has a thin chip."],["🐦🍟","A gull gets the chip!"],["🐘🍟","Elephant gets Zippet a big chip."],["🐶😄","Then Zippet sings!"]],
  q:["What did they have?",[["🐟🍟 fish and chips","fishchips"],["🍕 pizza","pizza"],["🎂 cake","cake"]],"fishchips"],q2:["Who got the thin chip?",[["🐦 a gull","gull"],["🐶 a dog","dog"],["🐘 Elephant","elephant"]],"gull"]}];
```

### 22. checkStories() + checkStoryAnswers(): cast picture words
Existing:
```
sw=new Set(SIGHT.slice(0,SIGHT_AT[s.g]).map(w=>w.toLowerCase()))
```
Replacement:
```
sw=new Set([...SIGHT.slice(0,SIGHT_AT[s.g]),...STORY_SIGHT].map(w=>w.toLowerCase()))
```

### 23. new <script id="p6d"> before batch4
Existing:
```
<script id="batch4">
```
Replacement:
```
<script id="p6d">…</script>
<script id="batch4">
```

### New block `<script id="p6d">` — inserted immediately before `<script id="batch4">`
```html
<script id="p6d">
document.head.insertAdjacentHTML("beforeend",`<style>#storyS .top{flex-wrap:nowrap}#stTitle{flex:1;min-width:0;font-size:clamp(16px,4.4vw,26px);text-align:center;overflow-wrap:anywhere}#bgTabs{display:flex;flex-wrap:wrap;justify-content:center;gap:4px}#bgTabs .tab{margin:0;padding:6px 8px;font-size:clamp(14px,3.6vw,20px);min-width:0}</style>`); // long story titles stay in one top bar; the four scene buttons fit one row
// ---------- Part 6D: tests for the Thunderfluff Collection, hill scenes, beats and stories ----------
const OLD_SPACE=/🪐|🚀|👽|🛸|🌌|🔭|🛰️|👑|☄️|🌠|🌍|🌕|🏰|🦄|🧚/; // old castle/space items that must not come back as new stickers or home pieces
const OLD_NAMES=/\b(Pip|Nan|Tip|Pat|Sam|Dot|Meg|Ted|Kit|Bob|Lil|Fin|Bel|Jen|Max|Zak|Fran|Bell|Gran|Jill|Zed|Shan|Chen|Beth|Mom|Mum|Dad|princess)\b/;
const BEAT_FRIENDS=["Bear","Moose","Elephant","chick","Blinkle"];
__test3.check6D=function(){const bad=[],f=m=>{if(bad.length<40)bad.push(m)};
 if(STICKERS.length!==24||STICKERS2.length!==24)f("sticker counts");if(new Set(ALLST).size!==ALLST.length)f("duplicate sticker");ALLST.forEach(x=>{if(OLD_SPACE.test(x))f("old sticker "+x)});
 if(stickerFor(1)!==STICKERS[0]||stickerFor(25)!==STICKERS2[0]||stickerFor(49)!=="🏅"||stickerFor(0)!==null)f("stickerFor numbering");
 if(BG_IDS.some(b=>!BGS[b])||Object.keys(BGS).length!==4)f("backgrounds");["castle","ship","x",undefined].forEach(b=>{if(bgOf(b)!=="hill")f("bg migration "+b)});if(/#[0-9a-f]{3,6}\b/i.test(Object.values(BGS).join("")))f("hex colour in a background (tokens only)");
 if(/<text/i.test(Object.values(BGS).join("")))f("lettering in a background");
 if(BEATS4.length<4)f("beats");BEATS4.forEach((b,i)=>{const n=BEAT_FRIENDS.filter(w=>b.includes(w)).length;if(i<BEATS4.length-1&&n!==1)f("beat needs one friend: "+b);if(/\b(think|thinks|know|knows|want|wants|feel|feels)\b/i.test(b))f("beat word: "+b)});
 if(!/Home before dark!$/.test(BEATS4[BEATS4.length-1]))f("last beat must end Home before dark!");HOME_ST.forEach(x=>{if(OLD_SPACE.test(x))f("old home piece "+x)});
 if(STORIES.length!==27)f("stories "+STORIES.length);
 STORIES.forEach(s=>{const txt=[s.t,...s.p.map(p=>p[1]),s.q[0],s.q2[0],...s.q[1].map(c=>c[0]),...s.q2[1].map(c=>c[0])].join(" ");if(OLD_NAMES.test(txt))f(`${s.t}: old name "${txt.match(OLD_NAMES)[0]}"`);
  if(s.g<4&&/Zippet/.test(txt))f(`${s.t}: Zippet before z is unlocked`);s.p.forEach(([pic,t])=>{STORY_SIGHT.forEach(w=>{const E={bear:"🐻",moose:"🫎",elephant:"🐘"}[w];if(new RegExp("\\b"+w+"\\b","i").test(t)&&!pic.includes(E))f(`${s.t}: "${w}" without its picture: ${t}`)})})});
 const og=new Set(STORIES.flatMap(s=>s.p.flatMap(p=>words(p[1]).map(w=>w.toLowerCase()).filter(w=>/^[a-z]og$/.test(w)))));if(og.size<3)f("no -og rhyme story");
 if(__test3.checkStoryAnswers().length)f("checkStoryAnswers");if(checkStories().length)f("checkStories");
 const ph=__test3.phrases().map(p=>p[0]).filter(t=>/royal|Royal|princess/.test(t));if(ph.length)f("old words in phrases: "+ph.slice(0,3).join(" | "));
 return bad};
const _ph6d=__test3.phrases;__test3.phrases=function(){const L=_ph6d.call(this);L.push(["Ten! A tall tower of ten!","block-buddies"]);return L}; // spoken by the + button at ten (was missing from the list)
const _sc6d=__test3.selfCheck;__test3.selfCheck=function(N){const r=_sc6d.call(this,N);const b=__test3.check6D();if(b.length)r.bad.check6D=b;return r};
Object.assign(__test3,{BGS,BG_IDS,bgOf,STORY_SIGHT});
</script>

```

### sw.js
```
const CACHE = 'space-princess-v20';
```
→
```
const CACHE = 'space-princess-v21';
```

## Story diffs (old → new)
### 0. Pip the Ant → Bear Naps
```diff
- Pip is an ant.
- Pip spins and spins.
- Tap, tap, tap!
- Pip sits in a tin.
- Pip naps.
+ Bear sits.
+ Bear sits and sits.
+ Bear naps.
+ An ant taps Bear.
+ Tap, tap, tap!
+ Bear naps and naps.
```
Raw old:
```
{t:"Pip the Ant",g:0,i:"🐜",p:[["🐜","Pip is an ant."],["🐜💫","Pip spins and spins."],["🐜👏","Tap, tap, tap!"],["🥫🐜","Pip sits in a tin."],["😴🐜","Pip naps."]],q:["Where did Pip sit?",[["🥫 in a tin","tin"],["🍳 in a pan","pan"],["👖 in the pants","pants"]],"tin"],q2:["What did Pip do at the end?",[["😴 nap","nap"],["🌀 spin","spin"],["🎨 paint","paint"]],"nap"]}
```
Raw new:
```
{t:"Bear Naps",g:0,i:"🐻",p:[["🐻","Bear sits."],["🐻🌳","Bear sits and sits."],["🐻😴","Bear naps."],["🐜🐻","An ant taps Bear."],["🐻🐜","Tap, tap, tap!"],["🐻😴","Bear naps and naps."]],q:["Who taps Bear?",[["🐜 an ant","ant"],["🍳 a pan","pan"],["🥫 a tin","tin"]],"ant"],q2:["What did Bear do?",[["😴 nap","nap"],["🌀 spin","spin"],["🚰 tap","tap"]],"nap"]}
```

### 1. Nan Taps → Moose Taps
```diff
- Nan sits.
- Nan taps a tin.
- Nan taps a pan.
- Tap, tap, tap, pat!
- I sit and tap.
- Nan naps!
+ Moose sits.
+ Moose taps a tin.
+ Moose taps a pan.
+ Tap, tap, tap, pat!
+ I sit and tap.
+ Moose naps!
```
Raw old:
```
{t:"Nan Taps",g:0,i:"👵",p:[["👵","Nan sits."],["🥫👵","Nan taps a tin."],["🍳👵","Nan taps a pan."],["🎶","Tap, tap, tap, pat!"],["✋👵","I sit and tap."],["😴👵","Nan naps!"]],q:["Who naps?",[["👵 Nan","nan"],["🐜 Pip","pip"],["🧒 Tip","tip"]],"nan"],q2:["What did Nan tap first?",[["🥫 a tin","tin"],["🍳 a pan","pan"],["🚰 a tap","tap"]],"tin"]}
```
Raw new:
```
{t:"Moose Taps",g:0,i:"🫎",p:[["🫎","Moose sits."],["🫎🥫","Moose taps a tin."],["🫎🍳","Moose taps a pan."],["🎶","Tap, tap, tap, pat!"],["✋🫎","I sit and tap."],["😴🫎","Moose naps!"]],q:["Who naps?",[["🫎 Moose","moose"],["🐻 Bear","bear"],["🐘 Elephant","elephant"]],"moose"],q2:["What did Moose tap first?",[["🥫 a tin","tin"],["🍳 a pan","pan"],["🚰 a tap","tap"]],"tin"]}
```

### 2. Sam the Dog → The Dog Digs
```diff
- Sam is my dog.
- Sam digs and digs.
- Sam got a mat.
- Sam sits on the mat.
- Sam naps on the mat.
+ It is a dog.
+ The dog digs and digs.
+ The dog got a mat.
+ The dog sits on the mat.
+ The dog naps on the mat.
```
Raw old:
```
{t:"Sam the Dog",g:1,i:"🐶",p:[["🐶","Sam is my dog."],["🐶⛏️","Sam digs and digs."],["🐶🟫","Sam got a mat."],["🐶","Sam sits on the mat."],["😴🐶","Sam naps on the mat."]],q:["What is Sam?",[["🐶 a dog","dog"],["🐷 a pig","pig"],["🐐 a goat","goat"]],"dog"],q2:["Where did Sam nap?",[["🟫 on the mat","mat"],["🍲 in a pot","pot"],["🗺️ on a map","map"]],"mat"]}
```
Raw new:
```
{t:"The Dog Digs",g:1,i:"🐶",p:[["🐶","It is a dog."],["🐶⛏️","The dog digs and digs."],["🐶🟫","The dog got a mat."],["🐶","The dog sits on the mat."],["😴🐶","The dog naps on the mat."]],q:["What is it?",[["🐶 a dog","dog"],["🐷 a pig","pig"],["🐐 a goat","goat"]],"dog"],q2:["Where did the dog nap?",[["🟫 on the mat","mat"],["🍲 in a pot","pot"],["🗺️ on a map","map"]],"mat"]}
```

### 3. Dad and the Map → Moose and the Map
```diff
- Dad got a map.
- Dad and I go.
- We go to a pond.
- I spot a dog.
- The dog digs in the sand.
- We pat the dog.
+ Moose got a map.
+ Moose and I go.
+ We go to a pond.
+ I spot a dog.
+ The dog digs in the sand.
+ We pat the dog.
```
Raw old:
```
{t:"Dad and the Map",g:1,i:"🗺️",p:[["👨🗺️","Dad got a map."],["👨✋","Dad and I go."],["🏞️","We go to a pond."],["🐶","I spot a dog."],["🐶🏖️","The dog digs in the sand."],["✋🐶","We pat the dog."]],q:["What did I spot?",[["🐶 a dog","dog"],["🐷 a pig","pig"],["🐐 a goat","goat"]],"dog"],q2:["Where did we go?",[["🏞️ to a pond","pond"],["⛰️ to the top","top"],["🌙 to the moon","moon"]],"pond"]}
```
Raw new:
```
{t:"Moose and the Map",g:1,i:"🗺️",p:[["🫎🗺️","Moose got a map."],["🫎✋","Moose and I go."],["🏞️","We go to a pond."],["🐶","I spot a dog."],["🐶🏖️","The dog digs in the sand."],["✋🐶","We pat the dog."]],q:["What did I spot?",[["🐶 a dog","dog"],["🐷 a pig","pig"],["🐐 a goat","goat"]],"dog"],q2:["Where did we go?",[["🏞️ to a pond","pond"],["⛰️ to the top","top"],["🌙 to the moon","moon"]],"pond"]}
```

### 4. The Red Cup → The Red Cup
```diff
- Meg got a red cup.
- The cup is on the rug.
- Pup runs to the rug.
- Pup tips the cup!
- No, Pup, no!
- Meg pets Pup.
- Meg is not cross.
+ Bear got a red cup.
+ The cup is on the rug.
+ The pup runs to the rug.
+ The pup tips the cup!
+ No, pup, no!
+ Bear pets the pup.
+ Bear is not cross.
```
Raw old:
```
{t:"The Red Cup",g:2,i:"🥤",p:[["👧🥤","Meg got a red cup."],["🥤","The cup is on the rug."],["🐶","Pup runs to the rug."],["🐶🥤","Pup tips the cup!"],["🐶","No, Pup, no!"],["👧🐶","Meg pets Pup."],["💖","Meg is not cross."]],q:["What did Pup tip?",[["🥤 the cup","cup"],["🖊️ a pen","pen"],["🥫 a tin","tin"]],"cup"],q2:["What colour was the cup?",[["🔴 red","red"],["🌸 pink","pink"],["🟢 green","green"]],"red"]}
```
Raw new:
```
{t:"The Red Cup",g:2,i:"🥤",p:[["🐻🥤","Bear got a red cup."],["🥤","The cup is on the rug."],["🐶","The pup runs to the rug."],["🐶🥤","The pup tips the cup!"],["🐻","No, pup, no!"],["🐻🐶","Bear pets the pup."],["🐻💖","Bear is not cross."]],q:["What did the pup tip?",[["🥤 the cup","cup"],["🖊️ a pen","pen"],["🥫 a tin","tin"]],"cup"],q2:["What colour was the cup?",[["🔴 red","red"],["🌸 pink","pink"],["🟢 green","green"]],"red"]}
```

### 5. Kit the Cat → Elephant in the Sun
```diff
- Kit is my cat.
- She sits in the sun.
- Kit can run.
- Kit runs to Ted.
- He pets Kit.
- Kit is snug.
+ Elephant is in the sun.
+ She sits in the sun.
+ Elephant can run.
+ Elephant runs to the pup.
+ She pats the pup.
+ The pup is snug.
```
Raw old:
```
{t:"Kit the Cat",g:2,i:"🐱",p:[["🐱","Kit is my cat."],["🐱☀️","She sits in the sun."],["🐱💨","Kit can run."],["👦🐱","Kit runs to Ted."],["👦","He pets Kit."],["😺","Kit is snug."]],q:["Who is Kit?",[["🐱 a cat","cat"],["🐶 a dog","dog"],["🦆 a duck","duck"]],"cat"],q2:["Who pets Kit?",[["👦 Ted","ted"],["👵 Nan","nan"],["👨 Dad","dad"]],"ted"]}
```
Raw new:
```
{t:"Elephant in the Sun",g:2,i:"🐘",p:[["🐘","Elephant is in the sun."],["🐘☀️","She sits in the sun."],["🐘💨","Elephant can run."],["🐘🐶","Elephant runs to the pup."],["🐘🐶","She pats the pup."],["🐶😊","The pup is snug."]],q:["Who is in the sun?",[["🐘 Elephant","elephant"],["🐻 Bear","bear"],["🫎 Moose","moose"]],"elephant"],q2:["Who did Elephant pat?",[["🐶 the pup","pup"],["🦆 a duck","duck"],["🐱 a cat","cat"]],"pup"]}
```

### 6. The Big Bus → Fog on the Log
```diff
- The bus is big and red.
- Bob gets on the bus.
- Lil gets on the bus.
- The bus gets to the hill.
- Bob and Lil hop off.
- It is fun!
+ A log is on the hill.
+ A dog sits on the log.
+ Fog, fog, fog!
+ A frog hops on the log.
+ Dog and frog in the fog.
+ The fog lifts. Hop, hop!
```
Raw old:
```
{t:"The Big Bus",g:3,i:"🚌",p:[["🚌","The bus is big and red."],["👦🚌","Bob gets on the bus."],["👧🚌","Lil gets on the bus."],["🚌⛰️","The bus gets to the hill."],["👦👧","Bob and Lil hop off."],["🎉","It is fun!"]],q:["What colour was the bus?",[["🔴 red","red"],["🔵 blue","blue"],["🟢 green","green"]],"red"],q2:["Where did the bus go?",[["⛰️ to the hill","hill"],["🏖️ to the sea","sea"],["🏫 to school","school"]],"hill"]}
```
Raw new:
```
{t:"Fog on the Log",g:3,i:"🪵",p:[["🪵","A log is on the hill."],["🐶🪵","A dog sits on the log."],["🌫️","Fog, fog, fog!"],["🐸🪵","A frog hops on the log."],["🐶🐸","Dog and frog in the fog."],["☀️","The fog lifts. Hop, hop!"]],q:["Who hops on the log?",[["🐸 a frog","frog"],["🐶 a dog","dog"],["🐻 Bear","bear"]],"frog"],q2:["What was on the hill?",[["🪵 a log","log"],["🛖 a hut","hut"],["🌳 an elm","elm"]],"log"]}
```

### 7. Fin and the Hat → Moose and the Hat
```diff
- Fin has a big hat.
- Fin and Bel go up.
- The hat flips off!
- Bel runs and gets it.
- Let me help!
- Fin is glad.
+ Moose has a big hat.
+ Moose and the pup go up.
+ The hat flips off!
+ The pup runs and gets it.
+ Let me help!
+ Moose is glad.
```
Raw old:
```
{t:"Fin and the Hat",g:3,i:"🎩",p:[["👦🎩","Fin has a big hat."],["👦👧","Fin and Bel go up."],["💨🎩","The hat flips off!"],["👧","Bel runs and gets it."],["👧🎩","Let me help!"],["😊","Fin is glad."]],q:["What flipped off?",[["🎩 the hat","hat"],["🥤 a cup","cup"],["🥫 a tin","tin"]],"hat"],q2:["Who got the hat?",[["👧 Bel","bel"],["👦 Fin","fin"],["🐶 a dog","dog"]],"bel"]}
```
Raw new:
```
{t:"Moose and the Hat",g:3,i:"🎩",p:[["🫎🎩","Moose has a big hat."],["🫎🐶","Moose and the pup go up."],["💨🎩","The hat flips off!"],["🐶","The pup runs and gets it."],["🐶🎩","Let me help!"],["🫎😊","Moose is glad."]],q:["What flipped off?",[["🎩 the hat","hat"],["🥤 a cup","cup"],["🥫 a tin","tin"]],"hat"],q2:["Who got the hat?",[["🐶 the pup","pup"],["🫎 Moose","moose"],["🐻 Bear","bear"]],"pup"]}
```

### 8. Jen and Max → Zippet Gets Wet
```diff
- Jen has a red van.
- Jen and Max zip off.
- The vet helps a sick pup.
- Yes! The pup is well.
- Jen and Max zip back.
+ Zippet is a pup.
+ Zippet zips up the hill.
+ Elephant is in a puddle.
+ Elephant gets wet.
+ Zippet gets wet as well!
+ Zippet and Elephant jump.
```
Raw old:
```
{t:"Jen and Max",g:4,i:"🚐",p:[["👧🚐","Jen has a red van."],["👧👦","Jen and Max zip off."],["🐶","The vet helps a sick pup."],["🐶💖","Yes! The pup is well."],["🚐","Jen and Max zip back."]],q:["Who did the vet help?",[["🐶 a pup","pup"],["🦊 a fox","fox"],["🐱 a cat","cat"]],"pup"],q2:["What does Jen have?",[["🚐 a red van","van"],["🚲 a bike","bike"],["🚌 a bus","bus"]],"van"]}
```
Raw new:
```
{t:"Zippet Gets Wet",g:4,i:"🐶",p:[["🐶","Zippet is a pup."],["🐶💨","Zippet zips up the hill."],["🐘","Elephant is in a puddle."],["🐘💦","Elephant gets wet."],["🐶🐘","Zippet gets wet as well!"],["🐶🐘😄","Zippet and Elephant jump."]],q:["Where was Elephant?",[["💦 in a puddle","puddle"],["🪵 on a log","log"],["🛖 in a hut","hut"]],"puddle"],q2:["Who got wet as well?",[["🐶 Zippet","zippet"],["🐻 Bear","bear"],["🫎 Moose","moose"]],"zippet"]}
```

### 9. Zak and the Web → Zippet and the Web
```diff
- Zak is a fox.
- Zak spots a web.
- A bug is stuck in it!
- Zak lifts the bug.
- The bug zips off.
- Zak can be a pal.
+ Zippet is on the hill.
+ Zippet spots a web.
+ A bug is stuck in it!
+ Zippet lifts the bug.
+ The bug zips off.
+ Zippet can be a pal.
```
Raw old:
```
{t:"Zak and the Web",g:4,i:"🦊",p:[["🦊","Zak is a fox."],["🕸️","Zak spots a web."],["🐛🕸️","A bug is stuck in it!"],["🦊🐛","Zak lifts the bug."],["🐛💨","The bug zips off."],["🦊😊","Zak can be a pal."]],q:["Who did Zak help?",[["🐛 a bug","bug"],["🐱 a cat","cat"],["🐶 a dog","dog"]],"bug"],q2:["Where was the bug stuck?",[["🕸️ in a web","web"],["🥫 in a tin","tin"],["🎩 in a hat","hat"]],"web"]}
```
Raw new:
```
{t:"Zippet and the Web",g:4,i:"🕸️",p:[["🐶","Zippet is on the hill."],["🕸️","Zippet spots a web."],["🐛🕸️","A bug is stuck in it!"],["🐶🐛","Zippet lifts the bug."],["🐛💨","The bug zips off."],["🐶😊","Zippet can be a pal."]],q:["Who did Zippet help?",[["🐛 a bug","bug"],["🐱 a cat","cat"],["🐶 a dog","dog"]],"bug"],q2:["Where was the bug stuck?",[["🕸️ in a web","web"],["🥫 in a tin","tin"],["🎩 in a hat","hat"]],"web"]}
```

### 10. Ants in a Pan → Ants and Bear
```diff
- Ants in a pan!
- Nan taps the pan.
- Tap, tap! The ants spin.
- The ants nip in a tin.
- Nan pats the tin.
+ Ants nip at Bear!
+ Bear naps and naps.
+ The ants spin and spin.
+ The ants nip in a tin.
+ Bear sits. Bear pats the tin.
```
Raw old:
```
{t:"Ants in a Pan",g:0,i:"🐜",p:[["🐜🍳","Ants in a pan!"],["👵🍳","Nan taps the pan."],["🐜🐜","Tap, tap! The ants spin."],["🐜🥫","The ants nip in a tin."],["👵😊","Nan pats the tin."]],q:["Where did the ants go?",[["🥫 in a tin","tin"],["🍳 in a pan","pan"],["👖 in the pants","pants"]],"tin"],q2:["Who tapped the pan?",[["👵 Nan","nan"],["🐜 an ant","ant"],["🧒 Tip","tip"]],"nan"]}
```
Raw new:
```
{t:"Ants and Bear",g:0,i:"🐜",p:[["🐜🐻","Ants nip at Bear!"],["🐻","Bear naps and naps."],["🐜🐜","The ants spin and spin."],["🐜🥫","The ants nip in a tin."],["🐻😊","Bear sits. Bear pats the tin."]],q:["Where did the ants go?",[["🥫 in a tin","tin"],["🍳 in a pan","pan"],["👖 in the pants","pants"]],"tin"],q2:["Who had a nap?",[["🐻 Bear","bear"],["🫎 Moose","moose"],["🐘 Elephant","elephant"]],"bear"]}
```

### 11. Tip Spins → Moose Spins
```diff
- Tip spins.
- Spin, spin, spin!
- Tip sits.
- Pat sits and Tip sits.
- Tip and Pat nap.
+ Moose spins.
+ Spin, spin, spin!
+ Moose sits.
+ Elephant sits and Moose sits.
+ Moose and Elephant nap.
```
Raw old:
```
{t:"Tip Spins",g:0,i:"🌀",p:[["👦🌀","Tip spins."],["👦🌀","Spin, spin, spin!"],["👦😵","Tip sits."],["👧👦","Pat sits and Tip sits."],["😴","Tip and Pat nap."]],q:["What did Tip do?",[["🌀 spin","spin"],["🚰 tap","tap"],["🎨 paint","paint"]],"spin"],q2:["What did Tip and Pat do at the end?",[["😴 nap","nap"],["🚰 tap","tap"],["🎨 paint","paint"]],"nap"]}
```
Raw new:
```
{t:"Moose Spins",g:0,i:"🌀",p:[["🫎🌀","Moose spins."],["🫎🌀","Spin, spin, spin!"],["🫎😵","Moose sits."],["🐘🫎","Elephant sits and Moose sits."],["😴🫎🐘","Moose and Elephant nap."]],q:["What did Moose do?",[["🌀 spin","spin"],["🚰 tap","tap"],["🎨 paint","paint"]],"spin"],q2:["What did Moose and Elephant do at the end?",[["😴 nap","nap"],["🚰 tap","tap"],["🎨 paint","paint"]],"nap"]}
```

### 12. Snip, Snip → Snip, Snip
```diff
- Snip, snip!
- Nan snips.
- Nan snips at Pat.
- Pat sits and sits.
- Pat spins!
+ Snip, snip!
+ Elephant snips.
+ Elephant snips and snips.
+ Bear sits and sits.
+ Bear spins!
```
Raw old:
```
{t:"Snip, Snip",g:0,i:"✂️",p:[["✂️","Snip, snip!"],["👵✂️","Nan snips."],["👧💇","Nan snips at Pat."],["👧","Pat sits and sits."],["👧😊","Pat spins!"]],q:["Who snips?",[["👵 Nan","nan"],["🐜 Pip","pip"],["🧒 Tip","tip"]],"nan"],q2:["What did Pat do at the end?",[["🌀 spin","spin"],["😴 nap","nap"],["🚰 tap","tap"]],"spin"]}
```
Raw new:
```
{t:"Snip, Snip",g:0,i:"✂️",p:[["✂️","Snip, snip!"],["🐘✂️","Elephant snips."],["🐘🌱","Elephant snips and snips."],["🐻","Bear sits and sits."],["🐻😊","Bear spins!"]],q:["Who snips?",[["🐘 Elephant","elephant"],["🐻 Bear","bear"],["🫎 Moose","moose"]],"elephant"],q2:["What did Bear do at the end?",[["🌀 spin","spin"],["😴 nap","nap"],["🚰 tap","tap"]],"spin"]}
```

### 13. Momo Time → Momo Time
```diff
- Mom got a pot.
- Momo in the pot!
- Dad sat and sat.
- Dad got a momo.
- Dad and I dip momos.
- Mmm!
+ Bear got a pot.
+ Momo in the pot!
+ Moose sat and sat.
+ Moose got a momo.
+ Moose and I dip momos.
+ Mmm!
```
Raw old:
```
{t:"Momo Time",g:1,i:"🥟",p:[["👩🍲","Mom got a pot."],["🥟🍲","Momo in the pot!"],["👨","Dad sat and sat."],["👨🥟","Dad got a momo."],["✋👨🥟","Dad and I dip momos."],["😋","Mmm!"]],q:["What was in the pot?",[["🥟 momos","momo"],["🥭 mangos","mango"],["🥄 spoons","spoon"]],"momo"],q2:["Who got the pot?",[["👩 Mom","mom"],["👨 Dad","dad"],["🐶 a dog","dog"]],"mom"]}
```
Raw new:
```
{t:"Momo Time",g:1,i:"🥟",p:[["🐻🍲","Bear got a pot."],["🥟🍲","Momo in the pot!"],["🫎","Moose sat and sat."],["🫎🥟","Moose got a momo."],["✋🫎🥟","Moose and I dip momos."],["😋","Mmm!"]],q:["What was in the pot?",[["🥟 momos","momo"],["🥭 mangos","mango"],["🥄 spoons","spoon"]],"momo"],q2:["Who got the pot?",[["🐻 Bear","bear"],["🫎 Moose","moose"],["🐶 a dog","dog"]],"bear"]}
```

### 14. The Mist → The Mist
```diff
- Mist, mist, mist.
- Mist on the top.
- Dad and I go.
- We go on and on.
- At the top, no mist!
- Dad and I sit.
+ Mist, mist, mist.
+ Mist on the top.
+ Elephant and I go.
+ We go on and on.
+ At the top, no mist!
+ Elephant and I sit.
```
Raw old:
```
{t:"The Mist",g:1,i:"🌫️",p:[["🌫️","Mist, mist, mist."],["⛰️🌫️","Mist on the top."],["👨✋","Dad and I go."],["👣","We go on and on."],["⛰️🌞","At the top, no mist!"],["👨✋😊","Dad and I sit."]],q:["What was on the top?",[["🌫️ mist","mist"],["🌙 the moon","moon"],["🐐 a goat","goat"]],"mist"],q2:["What did Dad and I do at the end?",[["🪑 sit","sit"],["🚶 go","go"],["⛏️ dig","dig"]],"sit"]}
```
Raw new:
```
{t:"The Mist",g:1,i:"🌫️",p:[["🌫️","Mist, mist, mist."],["⛰️🌫️","Mist on the top."],["🐘✋","Elephant and I go."],["👣","We go on and on."],["⛰️🌞","At the top, no mist!"],["🐘✋😊","Elephant and I sit."]],q:["What was on the top?",[["🌫️ mist","mist"],["🌙 the moon","moon"],["🐐 a goat","goat"]],"mist"],q2:["What did Elephant and I do at the end?",[["🪑 sit","sit"],["🚶 go","go"],["⛏️ dig","dig"]],"sit"]}
```

### 15. Dot the Dog → The Dog and the Map
```diff
- Dot is a dog.
- Dot digs and digs.
- Dot got a map!
- No, Dot, no!
- Dad pats Dot.
- Dot naps on a mat.
+ A dog is on a mat.
+ The dog digs and digs.
+ The dog got a map!
+ No, dog, no!
+ Bear pats the dog.
+ The dog naps on a mat.
```
Raw old:
```
{t:"Dot the Dog",g:1,i:"🐕",p:[["🐶","Dot is a dog."],["🐶⛏️","Dot digs and digs."],["🐶🗺️","Dot got a map!"],["👨","No, Dot, no!"],["👨🐶","Dad pats Dot."],["🐶😴","Dot naps on a mat."]],q:["What did Dot get?",[["🗺️ a map","map"],["🥄 a spoon","spoon"],["🥭 a mango","mango"]],"map"],q2:["Who said no to Dot?",[["👨 Dad","dad"],["👵 Nan","nan"],["🐷 a pig","pig"]],"dad"]}
```
Raw new:
```
{t:"The Dog and the Map",g:1,i:"🐕",p:[["🐶","A dog is on a mat."],["🐶⛏️","The dog digs and digs."],["🐶🗺️","The dog got a map!"],["🐻","No, dog, no!"],["🐻🐶","Bear pats the dog."],["🐶😴","The dog naps on a mat."]],q:["What did the dog get?",[["🗺️ a map","map"],["🥄 a spoon","spoon"],["🥭 a mango","mango"]],"map"],q2:["Who said no to the dog?",[["🐻 Bear","bear"],["🫎 Moose","moose"],["🐷 a pig","pig"]],"bear"]}
```

### 16. Drip, Drip → Drip, Drip
```diff
- Drip, drip, drip!
- Meg is in a tent.
- Drip! It drips on Meg.
- Drip in the cup!
- The sun is up.
- Meg runs in the sun.
+ Drip, drip, drip!
+ Bear is in a tent.
+ Drip! It drips on Bear.
+ Drip in the cup!
+ The sun is up.
+ Bear runs in the sun.
```
Raw old:
```
{t:"Drip, Drip",g:2,i:"🌧️",p:[["🌧️","Drip, drip, drip!"],["⛺","Meg is in a tent."],["⛺💧","Drip! It drips on Meg."],["🥤💧","Drip in the cup!"],["☀️","The sun is up."],["👧☀️","Meg runs in the sun."]],q:["Where did Meg sit?",[["⛺ in a tent","tent"],["🚗 in a car","car"],["🧦 in a sock","sock"]],"tent"],q2:["What came out at the end?",[["☀️ the sun","sun"],["🌙 the moon","moon"],["⭐ a star","star"]],"sun"]}
```
Raw new:
```
{t:"Drip, Drip",g:2,i:"🌧️",p:[["🌧️","Drip, drip, drip!"],["⛺🐻","Bear is in a tent."],["⛺💧🐻","Drip! It drips on Bear."],["🥤💧","Drip in the cup!"],["☀️","The sun is up."],["🐻☀️","Bear runs in the sun."]],q:["Where did Bear sit?",[["⛺ in a tent","tent"],["🚗 in a car","car"],["🧦 in a sock","sock"]],"tent"],q2:["What came out at the end?",[["☀️ the sun","sun"],["🌙 the moon","moon"],["⭐ a star","star"]],"sun"]}
```

### 17. Duck in the Mud — unchanged

### 18. The Red Drum → The Red Drum
```diff
- Ted got a red drum.
- Dum, dum, dum!
- Nan runs in.
- Nan can drum!
- Nan and Ted drum and drum.
- Ted grins.
+ Moose got a red drum.
+ Dum, dum, dum!
+ Elephant runs in.
+ Elephant can drum!
+ Elephant and Moose drum and drum.
+ Moose grins.
```
Raw old:
```
{t:"The Red Drum",g:2,i:"🥁",p:[["🥁","Ted got a red drum."],["👦🥁","Dum, dum, dum!"],["👵","Nan runs in."],["👵🥁","Nan can drum!"],["👵👦🥁","Nan and Ted drum and drum."],["😄","Ted grins."]],q:["What did Ted get?",[["🥁 a drum","drum"],["🚗 a car","car"],["🪁 a kite","kite"]],"drum"],q2:["Who came in to drum?",[["👵 Nan","nan"],["👨 Dad","dad"],["🐶 a dog","dog"]],"nan"]}
```
Raw new:
```
{t:"The Red Drum",g:2,i:"🥁",p:[["🫎🥁","Moose got a red drum."],["🫎🥁","Dum, dum, dum!"],["🐘","Elephant runs in."],["🐘🥁","Elephant can drum!"],["🐘🫎🥁","Elephant and Moose drum and drum."],["🫎😄","Moose grins."]],q:["What did Moose get?",[["🥁 a drum","drum"],["🚗 a car","car"],["🪁 a kite","kite"]],"drum"],q2:["Who came in to drum?",[["🐘 Elephant","elephant"],["🐻 Bear","bear"],["🐶 a dog","dog"]],"elephant"]}
```

### 19. Up the Hill → Up the Hill
```diff
- The hill is big.
- Dad and I go up.
- Fog, fog, fog!
- We stop at a hut.
- We have hot momos.
- The fog lifts!
+ The hill is big.
+ Bear and I go up.
+ Fog, fog, fog!
+ We stop at a hut.
+ We have hot momos.
+ The fog lifts!
```
Raw old:
```
{t:"Up the Hill",g:3,i:"⛰️",p:[["⛰️","The hill is big."],["👨✋","Dad and I go up."],["🌫️","Fog, fog, fog!"],["🛖","We stop at a hut."],["🥟","We have hot momos."],["☀️","The fog lifts!"]],q:["Where did they stop?",[["🛖 at a hut","hut"],["🏫 at a school","school"],["🏪 at a shop","shop"]],"hut"],q2:["What did they eat?",[["🥟 momos","momo"],["🥕 a carrot","carrot"],["🍌 a banana","banana"]],"momo"]}
```
Raw new:
```
{t:"Up the Hill",g:3,i:"⛰️",p:[["⛰️","The hill is big."],["🐻✋","Bear and I go up."],["🌫️","Fog, fog, fog!"],["🛖","We stop at a hut."],["🥟","We have hot momos."],["☀️","The fog lifts!"]],q:["Where did they stop?",[["🛖 at a hut","hut"],["🏫 at a school","school"],["🏪 at a shop","shop"]],"hut"],q2:["What did they eat?",[["🥟 momos","momo"],["🥕 a carrot","carrot"],["🍌 a banana","banana"]],"momo"]}
```

### 20. The Lost Hen → The Lost Hen
```diff
- Bell is a hen.
- Bell is lost!
- Fran said, \"Help!\"
- Is Bell on the log?
- No! Bell is in the bed!
- Fran hugs Bell.
+ Here is a red hen.
+ The hen is lost!
+ Elephant said, \"Help!\"
+ Is the hen on the log?
+ No! It is in the bed!
+ Elephant hugs the hen.
```
Raw old:
```
{t:"The Lost Hen",g:3,i:"🐔",p:[["🐔","Bell is a hen."],["🐔❓","Bell is lost!"],["👧","Fran said, \"Help!\""],["🐔🪵","Is Bell on the log?"],["🐔🛏️","No! Bell is in the bed!"],["👧🐔💖","Fran hugs Bell."]],q:["Where was Bell?",[["🛏️ in the bed","bed"],["🪵 on the log","log"],["🌳 up a tree","tree"]],"bed"],q2:["What did Fran do at the end?",[["🤗 hug Bell","hug"],["🏃 run off","run"],["😴 nap","nap"]],"hug"]}
```
Raw new:
```
{t:"The Lost Hen",g:3,i:"🐔",p:[["🐔","Here is a red hen."],["🐔❓","The hen is lost!"],["🐘","Elephant said, \"Help!\""],["🐔🪵","Is the hen on the log?"],["🐔🛏️","No! It is in the bed!"],["🐘🐔💖","Elephant hugs the hen."]],q:["Where was the hen?",[["🛏️ in the bed","bed"],["🪵 on the log","log"],["🌳 up a tree","tree"]],"bed"],q2:["What did Elephant do at the end?",[["🤗 hug the hen","hug"],["🏃 run off","run"],["😴 nap","nap"]],"hug"]}
```

### 21. Hot Dal → Hot Dal
```diff
- Gran has a big pot.
- It is dal!
- Bob and Lil are glad.
- The dal is hot.
- Bob and Lil have lots.
- They like dal!
+ Bear has a big pot.
+ It is dal!
+ Moose and Elephant are glad.
+ The dal is hot.
+ They have lots and lots.
+ They like dal!
```
Raw old:
```
{t:"Hot Dal",g:3,i:"🍲",p:[["👵🍲","Gran has a big pot."],["🍲","It is dal!"],["👦👧","Bob and Lil are glad."],["🍲😋","The dal is hot."],["👦👧🥄","Bob and Lil have lots."],["👵😊","They like dal!"]],q:["What was in the pot?",[["🍲 dal","dal"],["🥛 milk","milk"],["🍦 ice cream","icecream"]],"dal"],q2:["Who made the dal?",[["👵 Gran","gran"],["👨 Dad","dad"],["🐶 a dog","dog"]],"gran"]}
```
Raw new:
```
{t:"Hot Dal",g:3,i:"🍲",p:[["🐻🍲","Bear has a big pot."],["🍲","It is dal!"],["🫎🐘","Moose and Elephant are glad."],["🍲😋","The dal is hot."],["🫎🐘🥄","They have lots and lots."],["🐻😊","They like dal!"]],q:["What was in the pot?",[["🍲 dal","dal"],["🥛 milk","milk"],["🍦 ice cream","icecream"]],"dal"],q2:["Who made the dal?",[["🐻 Bear","bear"],["🫎 Moose","moose"],["🐶 a dog","dog"]],"bear"]}
```

### 22. The Windy Hill → The Windy Hill
```diff
- The wind is up.
- Max has a red flag.
- The wind tugs the flag.
- The flag zips up!
- Max yells, \"Yes!\"
- What fun!
+ The wind is up.
+ Zippet has a red flag.
+ The wind tugs the flag.
+ The flag zips up!
+ Zippet yells, \"Yes!\"
+ What fun!
```
Raw old:
```
{t:"The Windy Hill",g:4,i:"🌬️",p:[["🌬️","The wind is up."],["🚩","Max has a red flag."],["🌬️🚩","The wind tugs the flag."],["🚩💨","The flag zips up!"],["👦😮","Max yells, \"Yes!\""],["😊","What fun!"]],q:["What did the wind tug?",[["🚩 the flag","flag"],["🎩 a hat","hat"],["🧦 a sock","sock"]],"flag"],q2:["What did Max yell?",[["✅ Yes!","yes"],["❌ No!","no"],["👋 Hello!","hello"]],"yes"]}
```
Raw new:
```
{t:"The Windy Hill",g:4,i:"🌬️",p:[["🌬️","The wind is up."],["🚩","Zippet has a red flag."],["🌬️🚩","The wind tugs the flag."],["🚩💨","The flag zips up!"],["🐶😮","Zippet yells, \"Yes!\""],["😊","What fun!"]],q:["What did the wind tug?",[["🚩 the flag","flag"],["🎩 a hat","hat"],["🧦 a sock","sock"]],"flag"],q2:["What did Zippet yell?",[["✅ Yes!","yes"],["❌ No!","no"],["👋 Hello!","hello"]],"yes"]}
```

### 23. Jill and the Yak → Moose and the Yak
```diff
- A yak is on the hill.
- The yak is big.
- Jill pats the yak.
- Yum! The yak licks Jill.
- Jill yells, \"Yuck!\"
- Jill and the yak are pals.
+ A yak is on the hill.
+ The yak is big.
+ Moose pats the yak.
+ Yum! The yak licks Moose.
+ Moose yells, \"Yuck!\"
+ Moose and the yak are pals.
```
Raw old:
```
{t:"Jill and the Yak",g:4,i:"🐃",p:[["🐃","A yak is on the hill."],["🐃","The yak is big."],["👧🐃","Jill pats the yak."],["🐃","Yum! The yak licks Jill."],["👧😂","Jill yells, \"Yuck!\""],["👧🐃","Jill and the yak are pals."]],q:["What was on the hill?",[["🐃 a yak","yak"],["🐐 a goat","goat"],["🐘 an elephant","elephant"]],"yak"],q2:["What did the yak do to Jill?",[["👅 lick her","lick"],["🏃 run off","run"],["😴 sleep","sleep"]],"lick"]}
```
Raw new:
```
{t:"Moose and the Yak",g:4,i:"🐃",p:[["🐃","A yak is on the hill."],["🐃","The yak is big."],["🫎🐃","Moose pats the yak."],["🐃🫎","Yum! The yak licks Moose."],["🫎😂","Moose yells, \"Yuck!\""],["🫎🐃","Moose and the yak are pals."]],q:["What was on the hill?",[["🐃 a yak","yak"],["🐐 a goat","goat"],["🐘 Elephant","elephant"]],"yak"],q2:["What did the yak do to Moose?",[["👅 lick him","lick"],["🏃 run off","run"],["😴 sleep","sleep"]],"lick"]}
```

### 24. Jam and Buns → Jam and Buns
```diff
- Mum has some buns.
- Mum has red jam.
- Come and get one!
- Zed dips a bun.
- Yum, yum, yum!
- There is jam on Zed!
+ Bear has some buns.
+ Bear has red jam.
+ Come and get one!
+ Zippet dips a bun.
+ Yum, yum, yum!
+ There is jam on Zippet!
```
Raw old:
```
{t:"Jam and Buns",g:4,i:"🍞",p:[["👩🍞","Mum has some buns."],["🍓","Mum has red jam."],["👩👦","Come and get one!"],["👦🍞","Zed dips a bun."],["👦😋","Yum, yum, yum!"],["👩👦","There is jam on Zed!"]],q:["What did Mum have?",[["🍞 buns","bun"],["🍕 pizza","pizza"],["🍉 a melon","melon"]],"bun"],q2:["Where was the jam at the end?",[["👦 on Zed","zed"],["🐶 on a dog","dog"],["🎩 on a hat","hat"]],"zed"]}];
```
Raw new:
```
{t:"Jam and Buns",g:4,i:"🍞",p:[["🐻🍞","Bear has some buns."],["🐻🍓","Bear has red jam."],["🐻🐶","Come and get one!"],["🐶🍞","Zippet dips a bun."],["🐶😋","Yum, yum, yum!"],["🐻🐶","There is jam on Zippet!"]],q:["What did Bear have?",[["🍞 buns","bun"],["🍕 pizza","pizza"],["🍉 a melon","melon"]],"bun"],q2:["Where was the jam at the end?",[["🐶 on Zippet","zippet"],["🐻 on Bear","bear"],["🎩 on a hat","hat"]],"zippet"]}];
```

### 25. The Ship Shop → The Chick and the Shell
```diff
- Shan has a shop.
- It has a big ship.
- Chen chats with Shan.
- Chen gets the ship!
- Shan sings a song.
+ The chick is in the log.
+ The chick has a shell.
+ Zippet chats with the chick.
+ Shh! The chick naps.
+ Then the chick sings a song.
```
Raw old:
```
{t:"The Ship Shop",g:4,dg:1,i:"🚢",p:[["👩🏪","Shan has a shop."],["🚢","It has a big ship."],["👦👩","Chen chats with Shan."],["👦🚢","Chen gets the ship!"],["👩🎵","Shan sings a song."]]
```
Raw new:
```
{t:"The Chick and the Shell",g:4,dg:1,i:"🐥",p:[["🐥🪵","The chick is in the log."],["🐥🐚","The chick has a shell."],["🐶🐥","Zippet chats with the chick."],["🐥😴","Shh! The chick naps."],["🐥🎵","Then the chick sings a song."]]
```

### 26. Fish and Chips → Fish and Chips
```diff
- Beth and Dad get lunch.
- They have fish and chips.
- Beth has a thin chip.
- A gull gets the chip!
- Dad gets Beth a big chip.
- Then Beth sings!
+ Elephant and Zippet get lunch.
+ They have fish and chips.
+ Zippet has a thin chip.
+ A gull gets the chip!
+ Elephant gets Zippet a big chip.
+ Then Zippet sings!
```
Raw old:
```
{t:"Fish and Chips",g:4,dg:1,i:"🍟",p:[["👧👨","Beth and Dad get lunch."],["🐟🍟","They have fish and chips."],["👧🍟","Beth has a thin chip."],["🐦🍟","A gull gets the chip!"],["👨🍟","Dad gets Beth a big chip."],["👧😄","Then Beth sings!"]]
```
Raw new:
```
{t:"Fish and Chips",g:4,dg:1,i:"🍟",p:[["🐘🐶","Elephant and Zippet get lunch."],["🐟🍟","They have fish and chips."],["🐶🍟","Zippet has a thin chip."],["🐦🍟","A gull gets the chip!"],["🐘🍟","Elephant gets Zippet a big chip."],["🐶😄","Then Zippet sings!"]]
```

## Functions and constants touched
STICKERS, STICKERS2, drawColl (headings, medals heading), stickerFor (comment only), #collS h2, BGS (replaced), BG_IDS (new), bgOf (new), D default (initial + resetB3), drawDeco, decorate tab handlers, #bgTabs/#dcBack markup, Decorate button label, decorate spoken line (2 places), BEATS4, HOME_ST, beat card icon, STORIES, DG_STORIES, STORY_SIGHT (new), checkStories, checkStoryAnswers, ten-tower spoken line, __test3.check6D (new), __test3.selfCheck (wrapped), __test3.phrases (wrapped), OLD_SPACE/OLD_NAMES/BEAT_FRIENDS (new, test only), story title / tab CSS (new), sw.js CACHE.
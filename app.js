// DKULTURE Beauty — demo site
// All service data, prices, durations and descriptions sourced from the live
// Square catalog (dkultureee-100224.square.site) — Sept 2026.

const BOOK_BASE = 'https://book.squareup.com/appointments/l95ll2kd6i7z3c/location/LCNDD56NV1QV9/services/';
const CASHAPP = 'https://cash.app/$Dnajiajaterria';

const SERVICES = [
  {
    id: 'wig-install', itemId: '3VPADTEEY7MZHRMHZCJIJWX6', cat: 'installs',
    name: 'Wig Install', price: 135, duration: '2 hr 30 min',
    desc: 'Full wig installation. Come washed and blow-dried; bring your unit 2–3 days before for bleaching & plucking, or add $35 same-day customization.',
    prep: 'Unit drop-off 2–3 days prior', img: 'assets/services/wig-install.jpeg', featured: true
  },
  {
    id: 'frontal-sew-in', itemId: 'E37Q7VXXASXELBAFZ564WAMT', cat: 'installs',
    name: 'Frontal Sew-In', price: 165, duration: '2 hr 45 min',
    desc: 'Come washed and blow-dried; bring your unit 2–3 days before for bleaching & plucking, or add $35 same-day customization.',
    prep: 'Unit drop-off 2–3 days prior', img: 'assets/services/frontal-sew-in.jpeg', featured: true
  },
  {
    id: 'traditional-sew-in', itemId: 'HTV57NGALBMDDLL6BJ7TQC6K', cat: 'installs',
    name: 'Traditional Sew-In', price: 150, duration: '3 hr 15 min',
    desc: 'Must provide 3–4 bundles for a fuller look. Come washed and blow-dried.',
    prep: 'Bring 3–4 bundles', img: 'assets/ig/DPwWkGjDa5d.jpg', featured: true
  },
  {
    id: 'quick-weave', itemId: '5ZARMGKNTO5WPVLBUX5GLYIC', cat: 'installs',
    name: 'Quick Weave', price: 116, duration: '1 hr 45 min',
    desc: 'Come washed and blow-dried; bring your unit 2–3 days before for bleaching & plucking, or add $35 same-day customization.',
    prep: 'Unit drop-off 2–3 days prior', img: 'assets/services/quick-weave.jpeg'
  },
  {
    id: 'touch-ups', itemId: 'L3KVXZIZZ2B6C7NZ2E5YZKGB', cat: 'care',
    name: 'Touch-Ups', price: 75, duration: '55 min',
    desc: 'For wigs still technically on — lace that is lifting. If the wig is completely off, it is considered a new install.',
    prep: 'Wig must still be on', img: 'assets/services/touch-ups.jpeg'
  },
  {
    id: 're-installs', itemId: '7JXRIJQEF4FKMRMFNM6R5OO6', cat: 'care',
    name: 'Re-Installs', price: 85, duration: '1 hr 10 min',
    desc: 'Only for units previously installed by DKULTURE. Units installed by another stylist add $35.',
    prep: 'DKULTURE installs only', img: 'assets/services/re-installs.jpeg'
  },
  {
    id: 'styling', itemId: 'JR65GUTZTNFSXIQSVCXWJVKT', cat: 'care',
    name: 'Styling', price: 50, duration: '45 min',
    desc: "Updo's, crimps, half-up half-down, wand curls and more.",
    img: 'assets/services/styling.jpeg'
  },
  {
    id: 'coloring', itemId: 'GKGLRYZFQZP4TWMRWIGBAQ23', cat: 'care',
    name: 'Coloring', price: 45, duration: '30 min',
    desc: 'Bring units 3–4 days prior — everything else is provided. Includes bundles & wigs.',
    prep: 'Unit drop-off 3–4 days prior', img: 'assets/services/coloring.jpeg'
  },
  {
    id: 'homecoming-special', itemId: 'A576OFNSPY4AE4AYRJEZZVKH', cat: 'specials',
    name: 'Homecoming Special', price: 95, duration: '30 min',
    desc: 'Come washed and blow-dried; bring your unit 2–3 days before for bleaching & plucking, or add $35 same-day customization.',
    prep: 'Unit drop-off 2–3 days prior', img: 'assets/services/homecoming-special.jpeg'
  },
  {
    id: 'a-purity-special', itemId: 'KT7CBHHCAMXRYHIR5THSSBRL', cat: 'specials',
    name: 'A Purity Special', price: 433, duration: '30 min',
    desc: 'Pay full price on a Purity wig and get the install for $95 with free customization. Come washed and blow-dried; bring unit 2–3 days prior or add $35 same-day customization.',
    prep: 'Purity wig + $95 install', img: 'assets/services/a-purity-special.jpeg'
  },
  {
    id: 'lace-mastering', itemId: 'BVITLBNL6AIGF2ORFL72BLCO', cat: 'class',
    name: 'Lace Mastering Class', price: 300, duration: '2 hr',
    desc: 'Learn the bald cap method, plucking, bleaching, lace placement, baby hair styling, makeup placement & styling. Includes lace kit, 1-on-1 business guidance, food & certificate of completion. Must provide your own model and wig.',
    prep: 'Bring your own model + wig', img: 'assets/services/lace-mastering.jpeg'
  },
  {
    id: 'travel-fee', itemId: 'IW2SE6U576BUP2NXND3OOA5I', cat: 'extras',
    name: 'Travel Fee', price: 35, duration: '30 min',
    desc: 'Prices may depend on how far you are.',
    img: null, noDeposit: true
  }
];

const grid = document.getElementById('serviceGrid');

function card(s) {
  const img = s.img
    ? `<div class="svc-media"><img src="${s.img}" alt="${s.name}" loading="lazy"></div>`
    : '';
  const prep = s.prep ? `<span class="svc-prep">${s.prep}</span>` : '';
  return `
  <article class="svc reveal" data-cat="${s.cat}" id="svc-${s.id}">
    ${img}
    <div class="svc-body">
      <div class="svc-head">
        <h3>${s.name}</h3>
        <span class="svc-price">$${s.price}</span>
      </div>
      <p class="svc-meta">${s.duration}${s.noDeposit ? '' : ' · $20 deposit required'}</p>
      <p class="svc-desc">${s.desc} <span class="svc-more">more</span></p>
      ${prep}
      <div class="svc-actions">
        <a class="btn btn-book" href="${BOOK_BASE}${s.itemId}" target="_blank" rel="noopener">Book — $${s.price}</a>
        ${s.noDeposit ? '' : `<a class="btn-dep" href="${CASHAPP}" target="_blank" rel="noopener"><span class="dep-full">Send $20 deposit · Cash App</span><span class="dep-short">$20 deposit</span></a>`}
      </div>
    </div>
  </article>`;
}

grid.innerHTML = SERVICES.map(card).join('');

// ---- Filters ----
document.getElementById('filters').addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  const f = chip.dataset.filter;
  document.querySelectorAll('.svc').forEach(el => {
    el.style.display = (f === 'all' || el.dataset.cat === f) ? '' : 'none';
  });
});

// ---- "Not sure?" helper ----
document.querySelectorAll('.helper-opt').forEach(btn => {
  btn.addEventListener('click', () => {
    const t = document.getElementById('svc-' + btn.dataset.goto);
    if (!t) return;
    t.scrollIntoView({ behavior: 'smooth', block: 'center' });
    t.classList.add('svc-flash');
    setTimeout(() => t.classList.remove('svc-flash'), 1800);
  });
});

// ---- Work gallery (real client photos from @dkultureee Instagram) ----
const IG_WORK = [
  ['DSIa3KBjVxg', 'reel', 'Frontal wig install'],
  ['DRXxSOHEkHc', 'reel', 'No-part install'],
  ['DQArfzjDYqB', 'reel', 'Homecoming install'],
  ['DT3GS_dDR2H', 'reel', 'Closure quick weave'],
  ['DU_WZbnEd3U', 'reel', 'Messy updo'],
  ['DVTyfh_kbOl', 'reel', 'Frontal wig install'],
  ['DW4LV9qAOow', 'reel', 'Flip-over install'],
  ['DXkJekIE78Z', 'reel', 'Everyday edges'],
  ['DcY6pQ9TGlw', 'reel', 'Deep wave install'],
  ['DFyb5DjyRv7', 'p', 'Custom color'],
  ['DP_-tfwDcO_', 'reel', 'Wig install'],
  ['DOv_kFaDe4S', 'p', 'Blonde unit']
];
const strip = document.getElementById('workStrip');
const workHTML = IG_WORK.map(([id, type, label]) =>
  `<a class="work-item" href="https://www.instagram.com/dkultureee/${type}/${id}/" target="_blank" rel="noopener"><img src="assets/ig/${id}.jpg" alt="${label} by DKULTURE Beauty" loading="lazy"></a>`
).join('');
strip.innerHTML = workHTML + workHTML; // duplicated for seamless drift loop

// ---- Hero title letter reveal ----
const title = document.getElementById('heroTitle');
const textNode = [...title.childNodes].find(n => n.nodeType === 3);
if (textNode) {
  const frag = document.createDocumentFragment();
  [...textNode.textContent].forEach((ch, i) => {
    const s = document.createElement('span');
    s.className = 'ltr';
    s.textContent = ch;
    s.style.animationDelay = `${0.15 + i * 0.055}s`;
    frag.appendChild(s);
  });
  title.replaceChild(frag, textNode);
}
const heroScript = title.querySelector('.hero-script');
if (heroScript) heroScript.style.animationDelay = '0.8s';

// ---- Auto-drift work gallery (pauses on touch, resumes after idle) ----
let drifting = true, idleTimer = null, rafId = null, pos = 0;
function driftFrame() {
  if (drifting) {
    pos += 0.45;
    const wrapAt = strip.children[IG_WORK.length]?.offsetLeft ?? strip.scrollWidth / 2;
    if (pos >= wrapAt) pos -= wrapAt; // seamless wrap — content is duplicated
    strip.scrollLeft = pos;
  } else {
    pos = strip.scrollLeft;
  }
  rafId = requestAnimationFrame(driftFrame);
}
function pauseDrift() {
  drifting = false;
  clearTimeout(idleTimer); idleTimer = setTimeout(() => { drifting = true; }, 4000);
}
['pointerdown', 'touchstart', 'wheel'].forEach(ev =>
  strip.addEventListener(ev, pauseDrift, { passive: true })
);

// center-focus zoom: the photo nearest the middle pops slightly (touch equivalent of hover)
const focusZoom = matchMedia('(hover: none)').matches;
const workImgs = [...strip.querySelectorAll('.work-item img')];
function applyFocusZoom() {
  if (!focusZoom) return;
  const center = strip.scrollLeft + strip.clientWidth / 2;
  workImgs.forEach(img => {
    const item = img.parentElement;
    const itemCenter = item.offsetLeft + item.offsetWidth / 2;
    const d = Math.abs(itemCenter - center) / strip.clientWidth;
    const scale = Math.max(1, 1.05 - d * 0.12);
    img.style.transform = `scale(${scale.toFixed(3)})`;
  });
}
strip.addEventListener('scroll', applyFocusZoom, { passive: true });
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) driftFrame();
setInterval(applyFocusZoom, 120);

// ---- Expandable service descriptions (mobile) ----
grid.addEventListener('click', (e) => {
  const more = e.target.closest('.svc-more');
  if (more) more.closest('.svc-desc').classList.toggle('open');
});

// ---- Mobile menu ----
const menuBtn = document.getElementById('menuBtn');
const menuOverlay = document.getElementById('menuOverlay');
function closeMenu() {
  menuBtn.classList.remove('open');
  menuOverlay.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}
menuBtn.addEventListener('click', () => {
  const open = menuOverlay.classList.toggle('open');
  menuBtn.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
menuOverlay.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

// ---- Hero image parallax ----
const heroImg = document.querySelector('.hero-img');
let ticking = false;
addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const y = scrollY;
    if (y < innerHeight * 1.5) heroImg.style.transform = `translateY(${y * 0.07}px) scale(1.12)`;
    ticking = false;
  });
}, { passive: true });

// ---- Reveal on scroll ----
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ---- Sticky mobile book bar (hide while services section visible) ----
const sticky = document.getElementById('stickyBook');
const svcSection = document.getElementById('services');
const heroSection = document.querySelector('.hero');
const barIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.target === heroSection && e.isIntersecting) sticky.classList.remove('show');
    if (e.target === heroSection && !e.isIntersecting) sticky.classList.add('show');
    if (e.target === svcSection && e.isIntersecting) sticky.classList.remove('show');
    if (e.target === svcSection && !e.isIntersecting && !heroVisible) sticky.classList.add('show');
  });
}, { threshold: 0.05 });
let heroVisible = true;
const heroIO = new IntersectionObserver(([e]) => {
  heroVisible = e.isIntersecting;
  if (heroVisible) sticky.classList.remove('show');
}, { threshold: 0.05 });
heroIO.observe(heroSection);
barIO.observe(svcSection);

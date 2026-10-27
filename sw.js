/* 제니툰 서비스워커 — 발행 시 V(캐시 버전)를 올릴 것 */
const V = 'zenitoon-v12';
const SHELL = [
  '/', '/index.html', '/data.js', '/firebase-config.js', '/zt-fire.js', '/zt-nav.js',
  '/manifest.webmanifest', '/offline.html',
  '/icon-192.png', '/icon-512.png', '/icon-maskable-512.png', '/apple-touch-icon.png', '/favicon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Firestore 실시간 통신·Netlify 폼은 캐시하지 않음
  if (url.hostname.includes('firestore.googleapis.com') || url.hostname.includes('googleapis.com') && !url.hostname.includes('fonts')) return;

  // 페이지 이동: 네트워크 우선 → 캐시 → 오프라인 안내
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(r => { const c = r.clone(); caches.open(V).then(x => x.put(req, c)); return r; })
        .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('/offline.html')))
    );
    return;
  }

  // 같은 사이트 파일·폰트·Firebase SDK: 캐시 먼저 보여주고 뒤에서 갱신
  const cacheable = url.origin === location.origin || /fonts\.(googleapis|gstatic)\.com|www\.gstatic\.com/.test(url.hostname);
  if (!cacheable) return;
  e.respondWith(
    caches.match(req).then(hit => {
      const net = fetch(req).then(r => {
        if (r && (r.ok || r.type === 'opaque')) { const c = r.clone(); caches.open(V).then(x => x.put(req, c)); }
        return r;
      }).catch(() => hit);
      return hit || net;
    })
  );
});

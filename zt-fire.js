/* 제니툰 Firebase 연동: 회차별 조회수·'도움됐어요', 상담 문의 저장
   컬렉션: zenitoon_stats/{회차id} {views, likes}, zenitoon_consults/{auto} */
const CFG = window.ZT_FIREBASE_CONFIG;
const V = '10.12.2';
let db = null, F = null;

async function init() {
  if (!CFG || db) return db;
  try {
    const app = await import(`https://www.gstatic.com/firebasejs/${V}/firebase-app.js`);
    F = await import(`https://www.gstatic.com/firebasejs/${V}/firebase-firestore.js`);
    db = F.getFirestore(app.initializeApp(CFG));
  } catch (e) { console.warn('[제니툰] Firebase 초기화 실패', e); db = null; }
  return db;
}
const ls = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
};

/* 조회수 1 증가 (같은 브라우저는 하루 1회) */
async function addView(id) {
  if (!(await init())) return;
  const key = 'zt-view-' + id, today = new Date().toISOString().slice(0, 10);
  if (ls.get(key) === today) return;
  const ref = F.doc(db, 'zenitoon_stats', id);
  try {
    const s = await F.getDoc(ref);
    if (s.exists()) await F.updateDoc(ref, { views: F.increment(1) });
    else await F.setDoc(ref, { views: 1, likes: 0 });
    ls.set(key, today);
  } catch (e) { console.warn(e); }
}
/* '도움됐어요' 1 증가 (브라우저당 1회) */
async function addLike(id) {
  if (!(await init())) return false;
  const key = 'zt-like-' + id;
  if (ls.get(key)) return false;
  const ref = F.doc(db, 'zenitoon_stats', id);
  try {
    const s = await F.getDoc(ref);
    if (s.exists()) await F.updateDoc(ref, { likes: F.increment(1) });
    else await F.setDoc(ref, { views: 0, likes: 1 });
    ls.set(key, '1');
    return true;
  } catch (e) { console.warn(e); return false; }
}
async function getStats(ids) {
  const out = {};
  if (!(await init())) return out;
  await Promise.all(ids.map(async id => {
    try { const s = await F.getDoc(F.doc(db, 'zenitoon_stats', id)); if (s.exists()) out[id] = s.data(); } catch (e) {}
  }));
  return out;
}
async function saveConsult(data) {
  if (!(await init())) return false;
  try {
    await F.addDoc(F.collection(db, 'zenitoon_consults'), { ...data, createdAt: F.serverTimestamp(), status: '접수' });
    return true;
  } catch (e) { console.warn(e); return false; }
}
const liked = id => !!ls.get('zt-like-' + id);
window.ZT_FIRE = { enabled: !!CFG, addView, addLike, getStats, saveConsult, liked };
window.dispatchEvent(new Event('zt-fire-ready'));

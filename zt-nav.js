/* 제니툰 회차 화면 뒤로가기 처리
   - 목록에서 들어왔으면 '← 제니툰'·휴대폰 뒤로가기 모두 이전 화면(목록)으로 돌아간다.
   - 링크로 바로 열었으면(카카오톡 공유 등) 뒤로가기 시 앱을 빠져나가지 않고 제니툰 목록으로 간다. */
(function(){
  var LIST = '../index.html';
  var fromList = false;
  try { var r = document.referrer ? new URL(document.referrer) : null; fromList = !!r && r.origin === location.origin; } catch (e) {}
  function back(ev){
    if (ev) ev.preventDefault();
    if (fromList && history.length > 1) history.back();
    else location.replace(LIST);
  }
  document.addEventListener('click', function(ev){
    var a = ev.target.closest && ev.target.closest('a[data-zt-back]');
    if (a) back(ev);
  });
  if (!fromList) {
    try {
      if (!history.state || !history.state.zt) {
        history.replaceState({ zt: 'ep-root' }, '', location.href);
        history.pushState({ zt: 'ep' }, '', location.href);
      }
    } catch (e) {}
    window.addEventListener('popstate', function(ev){
      if (ev.state && ev.state.zt === 'ep-root') location.replace(LIST);
    });
  }
})();

/* 글자 크기 조절 — 상단 바에 [가− | 가 100% | 가+] 단추를 넣고, 웹툰 본문(#app)을 확대·축소한다.
   - 선택한 크기는 이 기기에 저장되어 다른 회차에도 그대로 적용된다(저장 불가 환경에서는 이번 화면에만 적용).
   - 인쇄·PDF에는 적용하지 않는다. */
(function(){
  var STEPS = [0.9, 1, 1.15, 1.3, 1.45, 1.6];
  var KEY = 'zt-font-scale';
  var nav = document.querySelector('.zt-nav');
  var app = document.getElementById('app');
  if (!nav || !app) return;
  var cur = 1;
  try { var v = parseFloat(localStorage.getItem(KEY)); if (STEPS.indexOf(v) >= 0) cur = v; } catch (e) {}

  var st = document.createElement('style');
  st.textContent =
    '.zt-fs{display:flex;align-items:center;gap:4px;flex:0 0 auto}' +
    '.zt-fs button{border:2px solid var(--ink);background:var(--paper);color:var(--ink);border-radius:16px;font-family:Jua,sans-serif;font-size:14px;line-height:1;padding:4px 9px;cursor:pointer;min-width:34px;min-height:28px}' +
    '.zt-fs button:disabled{opacity:.35;cursor:default}' +
    '.zt-fs .zt-fs-v{min-width:46px;font-size:12px;padding:4px 6px}' +
    '@media (max-width:420px){.zt-nav{gap:6px;padding:8px 10px}.zt-nav span{font-size:12.5px}.zt-fs button{padding:4px 7px;min-width:30px}.zt-fs .zt-fs-v{min-width:40px}}' +
    'html.zt-big .cards,html.zt-big .nums{grid-template-columns:repeat(auto-fit,minmax(0,1fr))}' +
    '@media (max-width:760px){html.zt-big .cards,html.zt-big .nums{grid-template-columns:repeat(2,minmax(0,1fr))}}' +
    'html.zt-big #app{overflow-wrap:anywhere}html.zt-big .card,html.zt-big .num,html.zt-big .panel,html.zt-big .flow div,html.zt-big .bub{min-width:0}' +
    '@media print{#app{zoom:1!important}}';
  document.head.appendChild(st);

  var box = document.createElement('div');
  box.className = 'zt-fs';
  box.setAttribute('role', 'group');
  box.setAttribute('aria-label', '글자 크기');
  box.innerHTML =
    '<button type="button" data-d="-1" aria-label="글자 작게">가−</button>' +
    '<button type="button" class="zt-fs-v" data-d="0" aria-label="기본 크기로">100%</button>' +
    '<button type="button" data-d="1" aria-label="글자 크게">가+</button>';
  var pdf = nav.querySelector('.zt-pdf');
  nav.insertBefore(box, pdf || null);

  var bMinus = box.children[0], bVal = box.children[1], bPlus = box.children[2];
  function apply(save){
    app.style.zoom = cur === 1 ? '' : String(cur);
    document.documentElement.classList.toggle('zt-big', cur > 1);
    bVal.textContent = Math.round(cur * 100) + '%';
    bMinus.disabled = cur <= STEPS[0];
    bPlus.disabled = cur >= STEPS[STEPS.length - 1];
    if (save) { try { localStorage.setItem(KEY, String(cur)); } catch (e) {} }
  }
  box.addEventListener('click', function(ev){
    var b = ev.target.closest('button'); if (!b) return;
    var d = +b.getAttribute('data-d');
    var i = STEPS.indexOf(cur);
    cur = d === 0 ? 1 : STEPS[Math.min(STEPS.length - 1, Math.max(0, i + d))];
    var y = window.scrollY / Math.max(1, document.documentElement.scrollHeight);
    apply(true);
    window.scrollTo(0, y * document.documentElement.scrollHeight);
  });
  apply(false);
})();

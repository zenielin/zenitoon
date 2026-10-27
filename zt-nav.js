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

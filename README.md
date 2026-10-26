# 제니툰 (ZENI-TOON)

보고 이해하는 일터 이야기 — ㈜제니엘이노베이션 주간 웹툰집

- 배포: https://zeniel-toon.netlify.app (Netlify, GitHub main 브랜치 연동)
- 새 회차: `ep/NNN.html`, `ep/NNN.pdf`, `thumbs/NNN.png` 추가 후 `data.js`의 `issues` 맨 앞에 등록
- 발행 시 `sw.js`의 캐시 버전(V)을 올릴 것
- 상담 문의: Netlify Forms(`consult`) + Firebase Firestore(`zenitoon_consults`, 프로젝트 zeniel-toon·서울) 이중 저장
- 조회수·도움됐어요: Firestore `zenitoon_stats/{회차id}` — 보안 규칙은 firestore.rules (콘솔에 게시됨)
- 제작 스킬: zeniel-toon (doc-to-webtoon 기반)

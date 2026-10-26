/* 제니툰 데이터 — 새 회차는 issues 배열 맨 앞에 추가 */
window.TOON = {
  corners: {
    news:    { name: '노동뉴스 툰',          icon: '📰', color: '#e2403a' },
    case:    { name: '판례 4컷',             icon: '⚖️', color: '#2f6fd6' },
    qa:      { name: '아웃소싱 Q&A',         icon: '💬', color: '#8b5cf6' },
    safety:  { name: '현장 안전툰',          icon: '⛑️', color: '#f08c00' },
    support: { name: '고용지원사업',         icon: '🤝', color: '#2e9e6a' },
    stats:   { name: '숫자로 보는 노동시장', icon: '📊', color: '#0891b2' },
    check:   { name: '인사담당자 체크리스트', icon: '✅', color: '#be185d' }
  },
  issues: [
    {
      no: 3,
      type: 'special',
      date: '2026-10-26',
      title: '천만 원 회사의 2,000일 — 역주행 1위 뒤의 사람과 돈',
      saying: { text: '수적천석(水滴穿石)', note: '떨어지는 물방울이 바위를 뚫는다' },
      next: '판례 4컷 「도급과 파견의 경계」 · 현장 안전툰 「물류센터 지게차」',
      episodes: [
        {
          id: '003',
          corner: 'news',
          title: '천만 원 회사의 2,000일',
          summary: '직원 3명·자본금 1천만 원 기획사가 대표의 직접 캐스팅과 지켜진 약속, 작은 무대의 반복으로 2년 전 노래를 역주행 1위에 올린 사례. 작은 조직의 사람 경쟁력 체크리스트 수록.',
          page: 'ep/003.html',
          pdf: 'ep/003.pdf',
          thumb: 'thumbs/003.png',
          source: '유튜브 셀럽인생 영상 재구성 · 영상 인용 연구조사·KBS 보도·멜론 발표'
        }
      ]
    },
    {
      no: 2,
      type: 'special',
      date: '2026-10-26',
      title: '새우가 고래를 삼킨 뒤 — 크라운·해태 20년',
      saying: { text: '과유불급(過猶不及)', note: '지나침은 미치지 못함과 같다' },
      next: '판례 4컷 「도급과 파견의 경계」 · 현장 안전툰 「물류센터 지게차」',
      episodes: [
        {
          id: '002',
          corner: 'news',
          title: '새우가 고래를 삼킨 뒤',
          summary: '업계 4위가 차입매수(LBO)로 2위를 인수한 뒤 이자 부담·조직 통합 진통·과잉 증설로 20년간 매출 1조 원 안팎에 머문 사례. 인수·증설 전 점검 체크리스트 수록.',
          page: 'ep/002.html',
          pdf: 'ep/002.pdf',
          thumb: 'thumbs/002.png',
          source: '유튜브 경제꽈배기 영상 재구성 · MTN 2026.9.16 · 머니투데이 2007.9.17'
        }
      ]
    },
    {
      no: 1,
      type: 'weekly',            /* weekly = 주간호, special = 수시 특별편 */
      date: '2026-10-26',
      title: '창간호 — 지방노동감독 시대가 온다',
      saying: { text: '적소성대(積小成大)', note: '작은 것이 쌓여 큰 것을 이룬다' },
      next: '판례 4컷 「도급과 파견의 경계」 · 현장 안전툰 「물류센터 지게차」',
      episodes: [
        {
          id: '001',
          corner: 'news',
          title: '새내기 감독관, 감독학교 가다',
          summary: '숙련 감독관 노하우를 36개 점검항목으로 표준화, 9개 업종 모의 감독 실습. 12월 8일부터 30명 미만 사업장 지방감독 시작.',
          page: 'ep/001.html',
          pdf: 'ep/001.pdf',
          thumb: 'thumbs/001.png',
          source: '시사일보 2026.10.25 · 「노동감독관 직무집행법」 제28조'
        }
      ]
    }
  ]
};

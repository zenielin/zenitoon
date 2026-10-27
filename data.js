/* 제니툰 데이터 — 새 회차는 issues 배열 맨 앞에 추가 */
window.TOON = {
  corners: {
    news:        { name: '노동뉴스툰',            icon: '📰', color: '#e2403a' },
    case:        { name: '노동판례툰',            icon: '⚖️', color: '#2f6fd6' },
    outsourcing: { name: '아웃소싱툰',            icon: '🤝', color: '#8b5cf6' },
    safety:      { name: '안전관리툰',            icon: '⛑️', color: '#f08c00' },
    biz:         { name: '기업뉴스툰',            icon: '🏢', color: '#0891b2' },
    check:       { name: '인사담당자 체크리스트', icon: '✅', color: '#be185d' },
    aha:         { name: '그렇구나툰',            icon: '💡', color: '#2e9e6a' }
  },
  issues: [
    {
      no: 5,
      type: 'special',
      date: '2026-10-27',
      title: '“선생님이 없어요” — 프랑스 교실에서 붙은 불',
      saying: { text: '십년수목 백년수인(十年樹木 百年樹人)', note: '나무는 십 년, 사람은 백 년을 내다보고 기른다' },
      next: '노동판례툰 「도급과 파견의 경계」 · 안전관리툰 「물류센터 지게차」',
      episodes: [
        {
          id: '005',
          corner: 'news',
          title: '“선생님이 없어요” — 프랑스 교실에서 붙은 불',
          summary: '교외 고교의 교사 부족 시위가 노조·노란 조끼 합류로 전국 소요로 번진 과정, 순환도로 안팎의 격차·‘박물관 대륙’·표 없는 교실로 간 청구서, 한국 연금개혁·저출생에 비춘 교훈. 결원·청구서 점검표 수록.',
          page: 'ep/005.html',
          pdf: 'ep/005.pdf',
          thumb: 'thumbs/005.png',
          source: '유튜브 조수빈큐레이션(도도한서재) 영상 재구성 · 머니투데이·YTN·프랑스 경제재정부 등 확인'
        }
      ]
    },
    {
      no: 4,
      type: 'special',
      date: '2026-10-27',
      title: 'AI를 만드는 사람들이 본 2030년 — 신입이 사라지는 일터',
      saying: { text: '유비무환(有備無患)', note: '미리 준비하면 걱정이 없다' },
      next: '노동판례툰 「도급과 파견의 경계」 · 안전관리툰 「물류센터 지게차」',
      episodes: [
        {
          id: '004',
          corner: 'news',
          title: 'AI를 만드는 사람들이 본 2030년',
          summary: 'AI 개발사 직원 1,334명과 미국 성인 약 1만 1천 명의 2030년 전망 비교, AI 에이전트 근무시간 6배·기술직 신입 채용 비중 27%→9% 등 사내 고용 변화. AI 시대 인력 운영 점검표 수록.',
          page: 'ep/004.html',
          pdf: 'ep/004.pdf',
          thumb: 'thumbs/004.png',
          source: 'Anthropic 보고서 2편(2026.10.16) · 유튜브 미주일기 영상 참고 재구성'
        }
      ]
    },
    {
      no: 3,
      type: 'special',
      date: '2026-10-26',
      title: '천만 원 회사의 2,000일 — 역주행 1위 뒤의 사람과 돈',
      saying: { text: '수적천석(水滴穿石)', note: '떨어지는 물방울이 바위를 뚫는다' },
      next: '노동판례툰 「도급과 파견의 경계」 · 안전관리툰 「물류센터 지게차」',
      episodes: [
        {
          id: '003',
          corner: 'biz',
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
      next: '노동판례툰 「도급과 파견의 경계」 · 안전관리툰 「물류센터 지게차」',
      episodes: [
        {
          id: '002',
          corner: 'biz',
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
      next: '노동판례툰 「도급과 파견의 경계」 · 안전관리툰 「물류센터 지게차」',
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

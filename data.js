// 질문 4개
const qnaList = [
    {
      q: '1. 어느 나라 음식을 먹을까? ',
      a: [
        { answer: 'a. 역시 한식이 최고!', type: [0,1,2,3,4,5,6,7,8,9,10,11] },
        { answer: 'b. 중식이 좋아!', type: [12,13,14,15,16,17,18,19,20,21,22,23] },
        { answer: 'c. 일식이 땡겨!', type: [24,25,26,27,28,29,30,31,32,33,34,35] },
        { answer: 'd. 다른 나라 음식 먹고싶어!', type: [36,37,38,39,40,41,42,43,44,45,46,47] },

      ]
    },
    {
        q: '2. 어느 종류의 음식을 먹을까?',
        a: [
          { answer: 'a. 나는 면파야', type: [0,1,2,3,12,13,14,15,24,25,26,27,36,37,38,39] },
          { answer: 'b. 고기 들어간 음식 먹고싶어', type: [4,5,6,7,16,17,18,19,28,29,30,31,40,41,42,43 ] },
          { answer: 'c. 다른 종류 먹고싶어', type: [8,9,10,11,20,21,22,23,32,33,34,35,44,45,46,47] },
       
        ]
      },
      {
        q: '3. 매운거 먹을까?',
        a: [
          { answer: 'a. 신라면보다 매운거 먹고싶어', type: [0,1,4,5,8,9,12,13,16,17,20,21,24,25,28,29,32,33,36,37,40,41,44,45] },
          { answer: 'b. 안매운거 먹을래', type: [2,3,6,7,10,11,14,15,18,19,22,23,26,27,30,31,34,35,38,39,42,43,46,47] },
        ]
      },
      {
        q: '4. 국물있는 음식 먹을까?',
        a: [
          { answer: 'a. 국물 좋아', type: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46] },
          { answer: 'b. 국물 별로야', type: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47] },
        ]
      },
     
  ]
  // 음식 48개 결과
  const infoList = [
    {
      name: '장칼국수',
      desc: '고추장을 기본 베이스로 국물을 양념한 칼칼하고 달큰한 맛이 특징인 장칼국수 어떠세요?'
    },
    {
      name: '비빔냉면',
      desc: '감칠맛이 뛰어난 새콤달콤한 비빔냉면 어떠신가요?'
    },
    {
      name: '국수',
      desc: '깊고 깔금한 따뜻한 국물과 함께인 국수 어떨까요?'
    },
    {
      name: '짜파게티',
      desc: '오늘은 내가 짜파게티 요리사!'
    },
    {
      name: '닭볶음탕',
      desc: '포슬포슬한 감자와 쫄깃한 닭고기의 만남!! 닭볶음탕 어떠신가요?'
    },
    {
      name: '불족발',
      desc: '후회없이 맛있는 불족발!'
    },
    {
      name: '백숙',
      desc: '백슉 먹자했잖아 백슉!!!'
    },
    {
      name: '삼겹살',
      desc: '한국인의 소울푸드 삼겹살에 소주한잔..'
    },
    {
      name: '떡볶이',
      desc: '남녀노소, 취향저격 떡볶이!'
    },
    {
      name: '닭발',
      desc: '술 안주, 밥 반찬, 야식, 간식 어디에나 어울리는 닭발!'
    },
    {
      name: '곰탕',
      desc: '정성스럽게 고아낸 육수의 담백한 풍미가 느껴지는 곰탕 어떠신가요?'
    },
    {
      name: '비빔밥',
      desc: '한가지 음식 다양한 맛이 느껴지는 비빔밥 어떠세요?? '
    },
    {
      name: '짬뽕',
      desc: '칼칼하고 시원한 국물과 쫄깃한 면발의 만남! 짬뽕!'
    },
    {
      name: '사천짜장',
      desc: '맵찔이는 가라! 매운짜장면!!'
    },
    {
      name: '울면',
      desc: '울면 먹고 울면 안돼'
    },
    {
      name: '짜장면',
      desc: '중식의 일인자! 달콤 짭짤한 짜장면!'
    },
    {
      name: '훠궈',
      desc: '백탕, 홍탕 두 탕에 골라 넣어 먹을 수 있는 맛좋은 훠궈!'
    },
    {
      name: '마라샹궈',
      desc: '내 취향대로 골라 먹을수 있는 얼얼한 마라샹궈!'
    },
    {
      name: '전가복',
      desc: '이번에 한 번 도전해볼까요?'
    },
    {
      name: '탕수육',
      desc: '탕탕탕탕탕 탕수육은 무서워'
    },
    {
      name: '마라탕',
      desc: '내 취향대로 골라 먹을수 있는 얼얼한 마라탕!'
    },
    {
      name: '고추잡채',
      desc: '꽃빵과 찰떡궁합 고추잡채!'
    },
    {
      name: '중국식 달걀탕',
      desc: '감칠맛이 담겨있는 중국식 달걀탕!'
    },
    {
      name: '멘보샤',
      desc: '한 번 먹으면 계속 생각나는 멘보샤 어떠세요?'
    },
    {
      name: '라멘',
      desc: '후루룩 짭짭 맛좋은 라멘(라면)~ 매콤한 국물과 면발의 조화! 맛보러 가실까요? '
    },
    {
      name: '야끼소바',
      desc: '매콤한맛 야끼소바 어떠신가요?'
    },
    {
      name: '우동',
      desc: '통통한 면과 뜨끈한 국물의 조합!'
    },
    {
      name: '야끼소바',
      desc: '달콤 짭쪼름한 맛 야끼소바!'
    },
    {
      name: '차슈돈코츠라멘',
      desc: '깊고 진한 돈코츠 육수에 부드러운 차슈의 조화! 차슈돈코츠라멘 어떠세요?'
    },
    {
      name: '매운돈가스',
      desc: '바삭한 돈가스를 맵게 먹어볼까요?'
    },
    {
      name: '샤브샤브',
      desc: '뜨끈한 육수 속 다채로운 야채와 야들한 고기를 쏙쏙 건져먹는 즐거움! 샤브샤브'
    },
    {
      name: '규카츠',
      desc: '돈가스가 지겨울땐 규카츠!'
    },
    {
      name: '김치나베',
      desc: '나베중 한국인에 입맛에 가장 잘 맞는 김치나베 어떠세요?'
    },
    {
      name: '타코야끼',
      desc: '요즘 유행하는 타코야끼 맵게도 먹을 수 있어요!'
    },
    {
      name: '소바',
      desc: '몸에 좋은 메밀로 건강까지 생각할 수 았는 소바 어떨까요?'
    },
    {
      name: '초밥',
      desc: '일식 중에 베스트 오브 베스트!! 탱글한 회와 새콤달콤한 밥의 만남! 초밥집가서 먹는거 어떨까요?'
    },
    {
      name: '쌀국수',
      desc: '베트남 전통음식 쌀국수를 맵게 먹어보는건 어떨까요?'
    },
    {
      name: '아라비아따 파스타',
      desc: '파스타도 매운맛이 대세! 아라비아따 파스타 어떠세요'
    },
    {
      name: '쌀국수',
      desc: '베트남 전통음식 쌀국수 어떠세요?'
    },
    {
      name: '알리오 올리오',
      desc: '올리브 오일과 마늘의 만남  알리오 올리오!'
    },
    {
      name: '커리',
      desc: '샨티 샨티 카레 카레야 완전 좋아 아 레알 좋아!'
    },
    {
      name: '타코',
      desc: '강렬한 태양의 향연, 멕시코 타코!'
    },
    {
      name: '스튜',
      desc: '한국의 찌개와 비슷한 스튜 어떠신가요?'
    },
    {
      name: '치킨',
      desc: '누가 뭐래도 치킨은 진리! 가장 대표적인 맛있는 음식!'
    },
    {
      name: '똠양꿍',
      desc: '매운맛, 단맛, 신맛, 짠맛을 모두 품은 마성의 요리 똠얌꿍!'
    },
    {
      name: '커리',
      desc: '샨티 샨티 카레 카레야 완전 좋아 아 레알 좋아!'
    },
    {
      name: '어묵탕',
      desc: '시원하고 담백한 어묵탕 어떠세요?'
    },
    {
      name: '피자',
      desc: '치즈 가득! 피자 한판은 정말 사르르 녹아! 맛있겠다! 피자 너 당첨이다!'
    },
  ]
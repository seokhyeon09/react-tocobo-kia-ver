const img = (path) => `/kia-file/${path}`;


export const collectionData = [
    {
      id: 1,
      title: '최근 출시',
      name: 'The Kia EV3 GT',
      kname: 'EV 전기차 / 전기차 GT 4WD',
      image: img('sec3-img1.png'),
      details_tit:[
        '출시일',
        '배터리 용량',
        '최고 출력',
        '외장 컬러'
      ],
      details_sub:[
        '2026-02-02',
        '81.4 kWh',
        '215kW / 292ps',
        '셰일 그레이'
      ],
    },
    {
      id: 2,
      title: '니로',
      name: 'Vita Berry Pore Toner',
      kname: '프레스티지 2WD / 1.6 하이브리드 / DCT',
      image: img('sec3-img2.png'),
      details_tit:[
        '복합 연비',
        '도심 연비',
        '고속도로 연비',
        '배기량'
      ],
      details_sub:[
        '20.8 km/L',
        '21.9 km/L',
        '19.6 km/L',
        '1,580 cc'
      ],
    },
    {
      id: 3,
      title: '적재 공간',
      name: '카니발',
      kname: '3.5 가솔린 / 7인승 X-Line A/T',
      image: img('sec3-img3.png'),
      details_tit:[
        '트렁크 용량',
        '복합 연비',
        '배기량',
        '최고 출력'
      ],
      details_sub:[
        '1672 L',
        '9 km/L',
        '3,470 cc',
        '294 ps / 6,400 rpm'
      ],
    },
    {
      id: 4,
      title: '안전성',
      name: '스포티지',
      kname: '1.6 가솔린 터보 / 시그니처 2WD A/T',
      image: img('sec3-img4.png'),
      details_tit:[
        '종합 안전 등급',
        '> 충돌 안전',
        '종합 안전 점수',
        '배기량'
      ],
      details_sub:[
        '1등급',
        'i',
        '94.10 점',
        '1,598 cc'
      ],
    },
    
  ]
  
  export default collectionData
  
const img = (path) => `/kia-file/${path}`;

export const heroSlides = [
    {
        id:'hero-1',
        title:'Movement<br> that inspires',
        subtxt:'우리는 움직일 때 새로운 생각을 할 수 있습니다. <br>움직임은 곧 새로운 생각, 영감, 그리고 진보입니다.',
        ctaTxt: "자세히보기",
        ctaHref: "/",
        image:{
            desk:img('main-img1.png'),
            mobile:img('m-main-img1.png')
        }
    },
    {
        id:'hero-2',
        title:'차량 그 이상의 플랫폼<br>- PBV',
        subtxt:'PV5 WAV와 오픈베드, 패신저 모델은 교통약자를 포함한 모든 이들에게<br>이동의 자유를 보장하고, 진정한 상생 실현을 위한 혁신적 솔루션',
        ctaTxt: "자세히보기",
        ctaHref: "/",
        image:{
            desk:img('main-img2.png'),
            mobile:img('m-main-img2.png')
        }
    },
    {
        id:'hero-3',
        title:'기아 플래그십 스토어<br>원주점',
        subtxt:'1:1 스케일의 차량 시뮬레이션,인공지능 서비스 로봇 DAL-e<br>기아가 상상하는 우리의 내일을 입체적으로 느낄 수 있습니다.',
        ctaTxt: "자세히보기",
        ctaHref: "/",
        image:{
            desk:img('main-img3.png'),
            mobile:img('m-main-img3.png')
        }
    },
]
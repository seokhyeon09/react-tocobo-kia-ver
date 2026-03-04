const img = (path) => `/kia-file/${path}`

export const headerData = {
    topBanner: {
        items: [
            {
                id: 'bner-1',
                text: "무슨 차를 살지 아직 결정 못 했다면 Best Kia (구매 차량 추천)",
                href: "#"
            },
            {
                id: 'bner-2',
                text: "'기아 플래그십 스토어' 개관",
                href: "#"
            },
            {
                id: 'bner-3',
                text: "이달의 구매혜택",
                href: "#"
            },
        ],
        closeBtn: {
            img: img('icon_close.svg'),
            alt: 'closeBtn',
        },
    },
    logo: {
        src: img('KIA.svg'),
        alt: 'KIA',
        href: '/',
    },

    header: {
        menu: [
            { id: "brand", label: "brand", href: "#brand" },
            { id: "shop", label: "shop", href: "#shop" },
            { id: "promotion", label: "promotion", href: "#promotion" },
            { id: "community", label: "community", href: "#community" },
        ],
        util: [
            { id: "language", label: "language", icon: img("icon_language_w.svg"), href: "#" },
            { id: "search", label: "search", icon: img("icon_search_w.svg"), href: "#" },
            { id: "myaccount", label: "myaccount", icon: img("icon_myp_w.svg"), href: "#" },
            { id: "cart", label: "cart", icon: img("icon_cart_w.svg"), href: "#" },
        ]
    }
}
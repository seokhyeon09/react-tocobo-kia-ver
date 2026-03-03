const img = (path) => `/kia-file/${path}`

export const categories = [
    {
        id: 1,
        name: "EV",
        href: "/",
        img: {
            src: img("cta-img1.png"),
            alt: "EV",
        },
    },
    {
        id: 2,
        name: "PBV",
        href: "/",
        img: {
            src: img("cta-img2.png"),
            alt: "PBV",
        },
    },
    {
        id: 3,
        name: "승용",
        href: "/",
        img: {
            src: img("cta-img3.png"),
            alt: "승용",
        },
    },
    {
        id: 4,
        name: "RV",
        href: "/",
        img: {
            src: img("cta-img4.png"),
            alt: "RV",
        },
    },
    {
        id: 5,
        name: "택시",
        href: "/",
        img: {
            src: img("cta-img5.png"),
            alt: "택시",
        },
    },
    {
        id: 6,
        name: "상용",
        href: "/",
        img: {
            src: img("cta-img6.png"),
            alt: "상용",
        },
    },
]
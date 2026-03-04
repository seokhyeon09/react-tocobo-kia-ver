const img = (path) => `/kia-file/${path}`;
export const helloData = {

  media: {
    type: "image",                     // "image" | "video"
    src: img("sec1-img.png"),   // public 폴더 기준
    alt: "Pink square demo image",
    radius: 24                         // 이미지 둥근 모서리(px)
  },

  eyebrow: "Hello❤️ We are TOCOBO!",
  title: "Movement that Inspires",
  description:
    "우리는 새로운 생각이 시작되는 공간과  시간을 만듭니다. 우리는 사람들이 움직임 속에서 영감을 얻는다고 믿습니다. 새로운 생각이 시작되는 공간과 시간을 만드는 것, 이것이 바로 우리가 존재하는 이유입니다.",
  cta: {
    label: "기아 브랜드",
    href: "/brand"
  }
};



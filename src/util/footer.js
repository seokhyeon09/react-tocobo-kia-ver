// src/util/footer.js
const img = (path) => `/kia-file/${path}`;
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

// 로고
export const logoData = {
  src: img("KIA.svg"),
  alt: "기아 로고",
  href: "/",
};

// 회사 정보
export const companyData = [
  "사업자 : 기아 주식회사",
  "대표 : 송호성, 최준영",
  "사업자등록번호 : 119-81-02316",
  "주소 : 서울특별시 서초구 헌릉로 12 (양재동)",
  "영업 : sales_specialvehicle@kia.com",
  "서비스 : service_specialvehicle@kia.com",
  "마케팅 : marketing_specialvehicle@kia.com",
];
export const footerLegal = {
  copyright: "© Kia Corp. All rights reserved",
  links: [
    { label: "이용약관", href: "/terms" },
    { label: "개인정보처리방침", href: "/privacy" },
    { label: "이용안내", href: "/guide" }
  ]
};
// 고객센터
export const customerCenterData = {
  title: "Customer Center",
  tel: { value: "080-200-2000", href: "tel:080-200-2000" },
  hours: "AM 10:00 - PM 5:00 (Lunch 12:00 - 13:00)",
  notice: "토, 일요일 및 공휴일 휴무",
  talk: { label: "1:1 TALK", href: "#" },
};

// 메뉴
export const footerMenus = [
  {
    title: "Brand",
    items: [
      { label: "Brand Story", href: "/brand-story" },
      { label: "Collection", href: "/collection" },
    ],
  },
  {
    title: "Shop",
    items: [
      { label: "All Product", href: "/shop" },
      { label: "MakeUp", href: "/shop/makeup" },
      { label: "Cleansing", href: "/shop/cleansing" },
      { label: "Skincare", href: "/shop/skincare" },
      { label: "Sun", href: "/shop/sun" },
      { label: "Lip", href: "/shop/lip" },
      { label: "Set/Etc", href: "/shop/etc" },
    ],
  },
  {
    title: "Promotion",
    items: [{ label: "Promotion", href: "/promotion" }],
  },
  {
    title: "Community",
    items: [
      { label: "Notice", href: "/notice" },
      { label: "FAQ", href: "/faq" },
      { label: "Review", href: "/review" },
      { label: "1:1 CS", href: "/cs" },
    ],
  },
];

export const socialLinks = [
  {
    id: "kakao",
    label: "KakaoTalk 채널",
    href: "https://pf.kakao.com/your-channel",
    icon: RiKakaoTalkFill
  },
  {
    id: "instagram",
    abel: "Instagram",
    href: "https://www.instagram.com/your-instagram",
    icon: FaInstagramSquare
  },
  {
    id: "youtube", 
    label: "YouTube",
    href: "https://www.youtube.com/@your-youtube",
    icon: FaYoutube
  },
];

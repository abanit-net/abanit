export type Client = {
  id: string
  name: string
  logo?: string
  url?: string
  desc: string
  services: string[]
}

export const clients: Client[] = [
  {
    id: "stoker",
    name: "استوکر",
    logo: "/img/logo/لوگو استوکر.png",
    url: "https://stoker.ir/",
    desc: "سایت فروشگاهی انواع لپ‌تاپ استوک.",
    services: ["طراحی سایت", "سئو", "تجربه کاربری"]
  },
  {
    id: "mobotelo",
    name: "موبوتلو",
    logo: "/img/logo/موبوتلو.png",
    url: "https://mobotelo.com/",
    desc: "سایت فروشگاهی موبایل و لوازم جانبی.",
    services: ["طراحی سایت", "فروشگاه آنلاین", "بهینه‌سازی"]
  },
  {
    id: "sibeshargh",
    name: "سیب شرق",
    logo: "/img/logo/سیب شرق.jpg",
    url: "https://sibeshargh.com/",
    desc: "سایت خدماتی در حوزه محصولات دیجیتال، فعال‌سازی و تعمیرات.",
    services: ["طراحی سایت", "خدمات دیجیتال", "پشتیبانی"]
  },
  {
    id: "digiactive",
    name: "دیجی اکتیو",
    logo: "/img/logo/دیجی اکتیو.png",
    url: "https://digiactive.co/",
    desc: "فروشگاه آنلاین گوشی، تبلت و لوازم جانبی.",
    services: ["طراحی فروشگاه", "بهینه‌سازی تبدیل", "سئو"]
  },
  {
    id: "daraservicevip",
    name: "دارا سرویس",
    logo: "/img/logo/دارار سرویس.png",
    url: "https://daraservicevip.ir/",
    desc: "خدمات سیستم‌های گرمایشی و سرمایشی از جمله پکیج.",
    services: ["طراحی سایت", "سئو", "خدمات B2C"]
  },
  {
    id: "arkajam",
    name: "آرکاجم",
    logo: "/img/logo/آرکاجم.png",
    url: "https://arkajam.com/",
    desc: "همکاری در توسعه وب و بهینه‌سازی حضور آنلاین.",
    services: ["طراحی سایت", "سئو", "طراحی گرافیک"]
  }
]

export default clients

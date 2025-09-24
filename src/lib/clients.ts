export type Client = {
  id: string
  name: string
  logo?: string
  desc: string
}

export const clients: Client[] = [
  {
    id: "mashhad-medical",
    name: "داﻧﺸﮕﺎه ﻋﻠﻮم ﭘﺰﺷﮑﻰ ﻣﺸﻬد",
    logo: "/img/logo/دانشگاه.jpg",
    desc: "همکاری در حوزه شبکه و امنیت و زیرساخت.",
  },
  {
    id: "astan-quds",
    name: "آﺳﺘﺎن ﻗﺪس رﺿﻮى",
    logo: "/img/logo/آستان.jpg",
    desc: "همکاری در پروژه‌های فناوری اطلاعات و خدمات دیجیتال.",
  },
  {
    id: "hoze-honari-tehran",
    name: "ﺣﻮزه ﻫﻨﺮى ﺗﻬﺮان",
    logo: "/img/logo/حوزه.jpg",
    desc: "توسعه پلتفرم‌های دیجیتال و سیستم‌های مدیریت محتوا.",
  },
  {
    id: "kahkeshan-noor",
    name: "ﻣﻮﺳﺴﻪ ﮐﻬﮑﺸﺎن ﻧﻮر ﺗﻬﺮان",
    logo: "/img/logo/کهکشان.png",
    desc: "ارائه راهکارهای نرم‌افزاری و خدمات فنی تخصصی.",
  },
  {
    id: "arkajam",
    name: "آرکاجم",
    logo: "/img/logo/آرکاجم.png",
    desc: "همکاری در توسعه وب و بهینه‌سازی حضور آنلاین.",
  },
  {
    id: "negah-sabz",
    name: "ﻧﮕﺎه ﺳﺒﺰ",
    logo: "/img/logo/نگاه سبز.jpg",
    desc: "توسعه سیستم‌های مدیریت و پلتفرم‌های دیجیتال.",
  },
  {
    id: "stoker",
    name: "استوکر",
    logo: "/img/logo/لوگو استوکر.png",
    desc: "سایت فروشگاهی انواع لپ‌تاپ استوک."
  },
  {
    id: "mobotelo",
    name: "موبوتلو",
    logo: "/img/logo/موبوتلو.png",
    desc: "سایت فروشگاهی موبایل و لوازم جانبی.",
  },
  {
    id: "sibeshargh",
    name: "سیب شرق",
    logo: "/img/logo/سیب شرق.jpg",
    desc: "سایت خدماتی در حوزه محصولات دیجیتال، فعال‌سازی و تعمیرات.",
  },
  {
    id: "digiactive",
    name: "دیجی اکتیو",
    logo: "/img/logo/دیجی اکتیو.png",
    desc: "فروشگاه آنلاین گوشی، تبلت و لوازم جانبی.",
  }
]

export default clients

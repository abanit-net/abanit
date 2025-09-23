export type Client = {
  id: string
  name: string
  logo?: string
  desc: string
}

export const clients: Client[] = [
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
  },
  {
    id: "daraservicevip",
    name: "دارا سرویس",
    logo: "/img/logo/دارار سرویس.png",
    desc: "خدمات سیستم‌های گرمایشی و سرمایشی از جمله پکیج.",
  },
  {
    id: "arkajam",
    name: "آرکاجم",
    logo: "/img/logo/آرکاجم.png",
    desc: "همکاری در توسعه وب و بهینه‌سازی حضور آنلاین.",
  },
  {
    id: "mashhad-medical",
    name: "داﻧﺸﮕﺎه ﻋﻠﻮم ﭘﺰﺷﮑﻰ ﻣﺸﻬﺪ و ﻧﯿﺸﺎﺑﻮر",
    logo: "",
    desc: "همکاری در توسعه وب و بهینه‌سازی حضور آنلاین.",
  },
  {
    id: "astan-quds",
    name: "آﺳﺘﺎن ﻗﺪس رﺿﻮى",
    desc: "همکاری در پروژه‌های فناوری اطلاعات و خدمات دیجیتال.",
  },
  {
    id: "hoze-honari-tehran",
    name: "ﺣﻮزه ﻫﻨﺮى ﺗﻬﺮان",
    desc: "توسعه پلتفرم‌های دیجیتال و سیستم‌های مدیریت محتوا.",
  },
  {
    id: "kahkeshan-noor",
    name: "ﻣﻮﺳﺴﻪ ﮐﻬﮑﺸﺎن ﻧﻮر ﺗﻬﺮان",
    desc: "ارائه راهکارهای نرم‌افزاری و خدمات فنی تخصصی.",
  },
  {
    id: "negah-sabz",
    name: "ﻧﮕﺎه ﺳﺒﺰ",
    desc: "توسعه سیستم‌های مدیریت و پلتفرم‌های دیجیتال.",
  }
]

export default clients

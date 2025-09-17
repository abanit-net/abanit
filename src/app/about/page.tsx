"use client"

import Image from "next/image"
import { motion } from "framer-motion"

// Moved to layout.tsx since this is a client component now

const images = [
  {
    src: "/img/photo/p1.png",
    alt: "تیم آبانیت در حال کار",
    caption: "همکاری تیمی"
  },
  {
    src: "/img/photo/p3.png",
    alt: "دفتر آبانیت",
    caption: "فضای کار خلاق"
  },
  {
    src: "/img/photo/p1.png",
    alt: "جلسه با مشتری",
    caption: "ارتباط با مشتریان"
  },
  {
    src: "/img/photo/p3.png",
    alt: "تکنولوژی های مورد استفاده",
    caption: "تکنولوژی های روز"
  }
]

const stats = [
  { number: "۵+", label: "سال تجربه" },
  { number: "۵۰+", label: "پروژه موفق" },
  { number: "۹۸٪", label: "رضایت مشتری" },
  { number: "۱۵+", label: "متخصص" },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 about-animated-bg"></div>
        <div className="container relative"><br /><br /><br />
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              داستان آبانیت
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed mb-8"
            >
              بیش از یک دهه تجربه در ارائه راهکارهای دیجیتال و خدمات فناوری اطلاعات
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-cyan-600">چشم‌انداز ما</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  آبانیت با هدف ارائه خدمات با کیفیت در حوزه فناوری اطلاعات شکل گرفته است. 
                  ما معتقدیم که تکنولوژی باید در خدمت کسب و کارها باشد و به رشد و توسعه آنها کمک کند.
                </p>
                <p>
                  تیم ما متشکل از متخصصان با تجربه در حوزه‌های مختلف است که با استفاده از دانش روز 
                  و تکنولوژی‌های پیشرفته، راهکارهای مناسب برای کسب و کارها ارائه می‌دهند.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="/img/photo/p2.png"
                alt="تیم آبانیت"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-cyan-600/5">
        <div className="container">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                className="text-center"
              >
                <div className="text-4xl font-bold text-cyan-600 mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            نگاهی به فضای کار ما
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-muted"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium">{image.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-cyan-600/5">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            ارزش‌های ما
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={item}
              className="p-6 rounded-2xl bg-card"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-600/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" className="stroke-current" strokeWidth="2"/>
                  <path d="M15 9L9 15M9 9L15 15" className="stroke-current" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">کیفیت</h3>
              <p className="text-muted-foreground leading-relaxed">
                ما به کیفیت کار خود اهمیت ویژه‌ای می‌دهیم و همواره در تلاشیم تا بهترین خدمات را ارائه دهیم.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="p-6 rounded-2xl bg-card"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-600/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" className="stroke-current" strokeWidth="2"/>
                  <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" className="stroke-current" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9 9H9.01" className="stroke-current" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M15 9H15.01" className="stroke-current" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">تعهد</h3>
              <p className="text-muted-foreground leading-relaxed">
                پایبندی به تعهدات و زمان‌بندی پروژه‌ها از اصول اساسی کار ماست.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="p-6 rounded-2xl bg-card"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-600/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" className="stroke-current" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">نوآوری</h3>
              <p className="text-muted-foreground leading-relaxed">
                همواره به دنبال راه‌های نو و خلاقانه برای حل مسائل و بهبود خدمات هستیم.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
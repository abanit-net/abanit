"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { colors } from "@/lib/theme"
import { PageFooter } from "@/components/ui/page-footer"

type Client = {
  id: string
  name: string
  logo?: string
  desc: string
  services: string[]
}

const clients: Client[] = [
  {
    id: "arkajam",
    name: "آرکاجم",
    logo: "/img/Abanit_18-01.png",
    desc: "همکاری در توسعه وب و بهینه‌سازی حضور آنلاین.",
    services: ["طراحی سایت", "سئو", "طراحی گرافیک"]
  },
  {
    id: "sibshargh",
    name: "سیب شرق",
    desc: "پروژه‌های طراحی وب و کمپین‌های برندینگ.",
    services: ["طراحی سایت", "سئو", "طراحی گرافیک"]
  },
  {
    id: "digiactive",
    name: "دیجی اکتیو",
    desc: "راه‌اندازی فروشگاه آنلاین و بهینه‌سازی تبدیل.",
    services: ["طراحی سایت", "سئو", "طراحی گرافیک"]
  },
  {
    id: "stocker",
    name: "استوکر",
    desc: "طراحی تجربه کاربری و هویت بصری محصولات.",
    services: ["طراحی سایت", "سئو", "طراحی گرافیک"]
  }
]

const container = {
  hidden: { opacity: 0, y: 12 },
  enter: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  enter: { opacity: 1, y: 0 }
}

export default function ClientsPage() {
  return (
    <div className="min-h-screen flex flex-col pt-28 md:pt-32">
      <main className="flex-1 w-full">
        <div className="container px-4 md:px-6">
          <motion.header
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-5xl mx-auto text-center mb-12"
          >
            <p className="text-sm text-piin-500 mb-3 font-medium">مشتریان و همکاران</p>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">اعتماد برندهای مطرح</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">ما با مجموعه‌های مختلف از استارتاپ‌ها تا سازمان‌های بزرگ همکاری کرده‌ایم. این صفحه نمونه‌ای از پروژه‌ها و سرویس‌هایی است که برای مشتریان انجام داده‌ایم.</p>
          </motion.header>

          <motion.section
            variants={container}
            initial="hidden"
            animate="enter"
            className="py-8 md:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {clients.map((c) => (
              <motion.article
                key={c.id}
                variants={cardVariants}
                className="relative rounded-2xl border border-white/6 bg-card/40 p-6 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300"
                style={{ backdropFilter: "saturate(120%) blur(8px)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shrink-0 overflow-hidden ring-1 ring-white/10">
                    {c.logo ? (
                      <Image src={c.logo} alt={`${c.name} logo`} width={56} height={56} className="object-cover" />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-white font-semibold text-lg">{c.name.split(" ").map(s=>s[0]).slice(0,2).join("")}</div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold mb-1">{c.name}</h3>
                    <p className="text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {c.services.map((s) => (
                      <span key={s} className={`inline-flex items-center text-xs px-3 py-1 rounded-full bg-white/6 text-white/90 ${colors.piin.light} ${colors.piin.dark}`}>{s}</span>
                    ))}
                  </div>

                  <div className="text-xs text-muted-foreground">همکاری اخیر</div>
                </div>
              </motion.article>
            ))}
          </motion.section>

        </div>
      </main>

      <PageFooter />
    </div>
  )
}

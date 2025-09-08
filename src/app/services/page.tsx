"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Monitor, Cpu, LayoutGrid, Server, Palette, BrainCircuit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageFooter } from "@/components/ui/page-footer"
import { colors } from "@/lib/theme"

export default function ServicesIndex() {
  const services = [
    { href: "/services/web", title: "وب‌سایت (Web)", desc: "طراحی و توسعه سایت‌ها و فروشگاه‌های حرفه‌ای", icon: Monitor },
    { href: "/services/ai", title: "هوش مصنوعی (AI)", desc: "راهکارهای هوش مصنوعی، پردازش تصویر و NLP", icon: BrainCircuit },
    { href: "/services/ux", title: "تجربه کاربری (UX)", desc: "طراحی محصول، پروتوتایپ و تست‌های کاربردپذیری", icon: LayoutGrid },
    { href: "/services/network", title: "شبکه و امنیت", desc: "راهکارهای شبکه، فایروال و زیرساخت امن", icon: Server },
    { href: "/services/hardware", title: "تجهیزات سخت‌افزاری", desc: "سرور، ذخیره‌سازی و تجهیزات دیتاسنتر", icon: Cpu },
    { href: "/services/design", title: "طراحی و موشن", desc: "هویت بصری، موشن‌گرافیک و بسته‌بندی", icon: Palette },
  ]

  return (
    <div className="min-h-screen flex flex-col pt-28 md:pt-32">
      <main className="w-full">
        <div className="max-w-6xl mx-auto px-6">
          <motion.header
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center py-8 md:py-12"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">خدمات ما</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">همه خدمات تخصصی ما در حوزه وب، هوش مصنوعی، UX، شبکه و سخت‌افزار و طراحی — قابل مشاهده و درخواست سریع.</p>
          </motion.header>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="py-6 md:py-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => {
                const Icon = s.icon
                return (
                  <article key={s.href} className="rounded-xl border bg-card/30 p-6 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-slate-100/60 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{s.title}</h3>
                          <p className="text-sm text-muted-foreground">{s.desc}</p>
                        </div>
                      </div>

                      <ul className="mt-3 text-sm text-muted-foreground space-y-1">
                        <li>مشاوره فنی</li>
                        <li>راه‌اندازی و پیاده‌سازی</li>
                        <li>پشتیبانی و نگهداری</li>
                      </ul>
                    </div>

                    <div className="mt-6">
                      <Link href={s.href} className="inline-block">
                        <Button className={`rounded-xl ${colors.piin.light} ${colors.piin.dark}`}>مشاهده</Button>
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
          </motion.section>

                    
        </div>
      </main>

      <PageFooter />
    </div>
  )
}

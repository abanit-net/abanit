"use client"

import { motion } from "framer-motion"
import { Palette } from "lucide-react"
import { PageFooter } from "@/components/ui/page-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function DesignServices() {
  return (
    <div className="min-h-screen flex flex-col pt-28 md:pt-32">
      <main className="w-full">
        <div className="max-w-6xl mx-auto px-6">
          <motion.section className="py-12 lg:py-20 text-center">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 p-3 flex items-center justify-center">
          <Palette className="w-6 h-6 text-muted-foreground" />
        </div>
              <span className="text-sm text-muted-foreground/90 font-medium">خدمات طراحی گرافیک و موشن</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">هویت بصری، موشن و تجربه کاربری که دیده می‌شود</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">طراحی لوگو، هویت برند، بسته‌بندی، ویدیوی معرفی و موشن‌گرافیک با تیم خلاق و متخصص.</p>

            <div className="flex items-center justify-center gap-4">
              <Button className="rounded-xl"><a href="#process">مشاهده فرآیند کاری</a></Button>
            </div>
          </motion.section>

          <motion.section id="services" className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">خدمات ما</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 2l7.586 7.586" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="11" cy="11" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">طراحی لوگو و برند</h3>
                <p className="text-sm text-muted-foreground mt-2">طراحی لوگو، هویت بصری و راهنمای برند</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">موشن گرافیک</h3>
                <p className="text-sm text-muted-foreground mt-2">ساخت انیمیشن و موشن‌گرافیک تبلیغاتی</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M15 12H9m12 0H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 9v6m0-6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="font-semibold">طراحی تبلیغات</h3>
                <p className="text-sm text-muted-foreground mt-2">طراحی بنر، پوستر و تبلیغات محیطی</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M21.17 8h.013" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">عکاسی تبلیغاتی</h3>
                <p className="text-sm text-muted-foreground mt-2">عکاسی محصول، صنعتی و تبلیغاتی</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 21h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">طراحی وب</h3>
                <p className="text-sm text-muted-foreground mt-2">طراحی رابط کاربری سایت و اپلیکیشن</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="font-semibold">طراحی بسته‌بندی</h3>
                <p className="text-sm text-muted-foreground mt-2">طراحی بسته‌بندی و لیبل محصولات</p>
              </div>
            </div>
          </motion.section>

          <motion.section id="process" className="py-8 lg:py-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">فرآیند کاری ما</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                از ایده تا اجرا، هر مرحله را با دقت و حرفه‌ای‌گری طی می‌کنیم
              </p>
            </div>

            {/* Process Steps */}
            <div className="relative">
              {/* Connection Line - Hidden on mobile */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />
              
              <div className="space-y-8 md:space-y-12">
                {[
                  {
                    step: "01",
                    title: "مشاوره و بررسی نیاز",
                    description: "درک کامل از نیازهای شما، تحلیل بازار هدف و تعرین اهداف پروژه",
                    icon: "💡",
                    side: "right"
                  },
                  {
                    step: "02", 
                    title: "تحقیق و ایده‌پردازی",
                    description: "بررسی رقبا، جمع‌آوری الهام و ایجاد مفاهیم اولیه برای طراحی",
                    icon: "🔍",
                    side: "left"
                  },
                  {
                    step: "03",
                    title: "طراحی و پیش‌نمایش",
                    description: "ایجاد طرح‌های اولیه، ارائه گزینه‌های مختلف و دریافت بازخورد شما",
                    icon: "✏️",
                    side: "right"
                  },
                  {
                    step: "04",
                    title: "بازنگری و تکمیل",
                    description: "اعمال تغییرات درخواستی، بهینه‌سازی و آماده‌سازی فایل‌های نهایی",
                    icon: "⚡",
                    side: "left"
                  },
                  {
                    step: "05",
                    title: "تحویل و پشتیبانی",
                    description: "ارائه فایل‌های نهایی در فرمت‌های مختلف و ارائه راهنمای استفاده",
                    icon: "🚀",
                    side: "right"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-start gap-4 md:gap-8 ${item.side === 'left' ? 'md:flex-row-reverse' : ''}`}
                    initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    {/* Icon - Always on left for mobile */}
                    <div className="relative z-10 flex-shrink-0">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 border-2 border-primary/20 flex items-center justify-center text-2xl shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.icon}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 ${item.side === 'left' ? 'md:text-right' : ''}`}>
                      <div className="bg-card/50 p-4 md:p-6 rounded-2xl border backdrop-blur-sm">
                        <div className={`flex items-center gap-3 mb-3 ${item.side === 'left' ? 'md:flex-row-reverse md:justify-end' : ''}`}>
                          <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary font-bold text-sm">
                            {item.step}
                          </span>
                          <h3 className="font-bold text-lg">{item.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for desktop alignment */}
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <motion.div 
              className="mt-16 text-center bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-2xl border"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <h3 className="text-xl font-bold mb-4">آماده شروع پروژه هستید؟</h3>
              <p className="text-muted-foreground mb-6">
                با ما تماس بگیرید تا مشاوره رایگان دریافت کنید
              </p>
              <div className="flex justify-center">
                <Button className="rounded-xl" asChild>
                  <a href="/info">شروع پروژه</a>
                </Button>
              </div>
            </motion.div>
          </motion.section>

        </div>
      </main>

      <PageFooter />
    </div>
  )
}

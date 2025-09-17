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
              <Button className="rounded-xl"><a href="#portfolio">مشاهده نمونه‌کار</a></Button>
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

          <motion.section id="portfolio" className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">نمونه‌کارها</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card/30 p-4 rounded-xl border">
                <div className="h-44 bg-grid-primary/5 rounded-md flex items-center justify-center text-muted-foreground">نمونه‌کار ۱</div>
                <div className="mt-3 font-medium">لوگو و هویت بصری</div>
              </div>
              <div className="bg-card/30 p-4 rounded-xl border">
                <div className="h-44 bg-grid-primary/5 rounded-md flex items-center justify-center text-muted-foreground">نمونه‌کار ۲</div>
                <div className="mt-3 font-medium">موشن گرافیک معرفی</div>
              </div>
              <div className="bg-card/30 p-4 rounded-xl border">
                <div className="h-44 bg-grid-primary/5 rounded-md flex items-center justify-center text-muted-foreground">نمونه‌کار ۳</div>
                <div className="mt-3 font-medium">طراحی UI برای اپلیکیشن</div>
              </div>
            </div>
          </motion.section>

        </div>
      </main>

      <PageFooter />
    </div>
  )
}

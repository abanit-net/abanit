"use client"

import { motion } from "framer-motion"
import { ServerIcon } from "lucide-react"
import { PageFooter } from "@/components/ui/page-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function NetworkServices() {
  return (
    <div className="min-h-screen flex flex-col pt-28 md:pt-32">
      <main className="w-full">
        <div className="max-w-7xl mx-auto px-6">
          <motion.section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-12 lg:py-20">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 p-3 flex items-center justify-center">
                  <ServerIcon className="w-6 h-6 text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground/90 font-medium">شبکه و زیرساخت — طراحی، امنیت، پشتیبانی</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">زیرساخت شبکه قابل اعتماد</h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl">پیاده‌سازی شبکه‌های امن، مقیاس‌پذیر و مدیریت‌شده که عملکرد کسب‌وکار شما را تضمین می‌کنند.</p>

            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-md bg-background/10 rounded-2xl p-6 border shadow-sm">
                <div className="h-44 rounded-lg overflow-hidden">
                  <Image
                    src="/img/network.webp"
                    alt="زیرساخت شبکه"
                    width={400}
                    height={176}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs text-muted-foreground">زمان راه‌اندازی</div>
                    <div className="font-semibold">1–4 هفته</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">سرویس 24/7</div>
                    <div className="font-semibold">بله</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section id="services" className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">خدمات شبکه</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 19l7-7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">طراحی شبکه</h3>
                <p className="text-sm text-muted-foreground mt-2">طراحی شبکه‌های LAN و WAN، توپولوژی، مسیریابی و سوئیچینگ</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M12 15V3m0 12l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">نصب و پیاده‌سازی</h3>
                <p className="text-sm text-muted-foreground mt-2">پیاده‌سازی زیرساخت شبکه، کابل‌کشی، نصب تجهیزات و راه‌اندازی</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">امنیت شبکه</h3>
                <p className="text-sm text-muted-foreground mt-2">فایروال، IDS/IPS، VPN و امنیت لایه‌های مختلف شبکه</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 21h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">مجازی‌سازی</h3>
                <p className="text-sm text-muted-foreground mt-2">راه‌اندازی و مدیریت سرورهای مجازی و زیرساخت ابری</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 5c0 1.66-4 3-9 3s-9-1.34-9-3 4-3 9-3 9 1.34 9 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">مدیریت و نگهداری</h3>
                <p className="text-sm text-muted-foreground mt-2">پشتیبانی 24/7، مانیتورینگ و رفع مشکلات شبکه</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">بهینه‌سازی عملکرد</h3>
                <p className="text-sm text-muted-foreground mt-2">تحلیل و بهبود کارایی شبکه، کاهش تاخیر و افزایش پهنای باند</p>
              </div>
            </div>
          </motion.section>

          <motion.section className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">امنیت و مطابقت</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/30 p-6 rounded-xl border">
                <h3 className="font-semibold">ارزیابی امنیت</h3>
                <p className="text-muted-foreground">اسکن آسیب‌پذیری، تست نفوذ و توصیه‌های اصلاحی</p>
              </div>
              <div className="bg-card/30 p-6 rounded-xl border">
                <h3 className="font-semibold">پالیسی و انطباق</h3>
                <p className="text-muted-foreground">پیاده‌سازی پالیسی‌های امنیتی و رعایت استانداردها</p>
              </div>
            </div>
          </motion.section>


          {/* CTA Section */}
          <motion.section 
            className="py-8 lg:py-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-2xl border">
              <h3 className="text-xl font-bold mb-4">آماده شروع پروژه هستید؟</h3>
              <p className="text-muted-foreground mb-6">
                با ما تماس بگیرید تا مشاوره رایگان دریافت کنید
              </p>
              <div className="flex justify-center">
                <Button className="rounded-xl" asChild>
                  <a href="/info">شروع پروژه</a>
                </Button>
              </div>
            </div>
          </motion.section>

        </div>
      </main>

      <PageFooter />
    </div>
  )
}

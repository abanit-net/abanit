"use client"

import { motion } from "framer-motion"
import { HardDriveIcon, ServerIcon, Cpu } from "lucide-react"
import { PageFooter } from "@/components/ui/page-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HardwareServices() {
  return (
    <div className="min-h-screen flex flex-col pt-28 md:pt-32">
      <main className="w-full">
        <div className="max-w-7xl mx-auto px-6">
          <motion.section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-12 lg:py-20">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 p-3 dark:bg-slate-800 p-0 flex items-center justify-center">
                  <HardDriveIcon className="w-6 h-6 text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground/90 font-medium">تجهیزات و راهکارهای سخت‌افزاری</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">تجهیزات مطمئن برای زیرساخت پایدار</h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl">تامین، نصب و پشتیبانی سرورها، ذخیره‌سازی و تجهیزات شبکه با گارانتی و خدمات پس از فروش حرفه‌ای.</p>

            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-md bg-background/10 rounded-2xl p-6 border shadow-sm">
                <div className="h-44 bg-grid-primary/5 rounded-lg flex items-center justify-center text-muted-foreground">تصویر تجهیز یا رَک</div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs text-muted-foreground">تحویل</div>
                    <div className="font-semibold">فوری / برنامه‌ای</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">گارانتی</div>
                    <div className="font-semibold">سازنده + محلی</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section id="offerings" className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">محصولات و خدمات</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 9h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M9 13h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M9 17h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">سرور و تجهیزات</h3>
                <p className="text-sm text-muted-foreground mt-2">فروش و تامین انواع سرور، رک، UPS و قطعات با گارانتی اصلی</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3.3 7l8.7 5 8.7-5" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 22V12" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="font-semibold">ذخیره‌سازی داده</h3>
                <p className="text-sm text-muted-foreground mt-2">راهکارهای SAN، NAS و سیستم‌های بکاپ و آرشیو داده</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">نظارت و مانیتورینگ</h3>
                <p className="text-sm text-muted-foreground mt-2">سیستم‌های مانیتورینگ سرور، شبکه و کنترل دما و رطوبت</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="font-semibold">پشتیبانی و نگهداری</h3>
                <p className="text-sm text-muted-foreground mt-2">خدمات پشتیبانی و نگهداری پیشگیرانه با SLA مشخص</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">تعمیر و عیب‌یابی</h3>
                <p className="text-sm text-muted-foreground mt-2">تعمیر تخصصی سرور، استوریج و تجهیزات شبکه</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M10 9H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">مستندسازی</h3>
                <p className="text-sm text-muted-foreground mt-2">تهیه مستندات فنی، راهنمای کاربری و دستورالعمل‌ها</p>
              </div>
            </div>
          </motion.section>

          <motion.section className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">مطالعات موردی</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <article className="bg-card/30 p-6 rounded-xl border">
                <h3 className="font-semibold">راه‌اندازی دیتاسنتر برای مجموعه X</h3>
                <p className="text-sm text-muted-foreground mt-2">طراحی رک، شبکه و ذخیره‌سازی با قابلیت توسعه و مانیتورینگ مرکزی.</p>
              </article>
              <article className="bg-card/30 p-6 rounded-xl border">
                <h3 className="font-semibold">پروژه ارتقای ذخیره‌سازی Y</h3>
                <p className="text-sm text-muted-foreground mt-2">انتقال امن داده و پیاده‌سازی راهکارهای بکاپ و آرشیو.</p>
              </article>
            </div>
          </motion.section>

        </div>
      </main>

      <PageFooter />
    </div>
  )
}

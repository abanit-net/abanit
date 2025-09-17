"use client"

import { motion } from "framer-motion"
import { BrainCircuitIcon } from "lucide-react"
import { PageFooter } from "@/components/ui/page-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AIServices() {
  return (
    <div className="min-h-screen flex flex-col pt-28 md:pt-32">
      <main className="w-full">
        <div className="max-w-7xl mx-auto px-6">
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-12 lg:py-20"
          >
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 p-3 flex items-center justify-center">
                 <BrainCircuitIcon className="w-6 h-6 text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground/90 font-medium">خدمات هوش مصنوعی — مدل، زیرساخت، ادغام</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">هوش مصنوعی برای تصمیم‌سازی هوشمند</h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl">طراحی و استقرار مدل‌های یادگیری ماشین، بینایی ماشین و پردازش زبان طبیعی برای اتوماسیون و افزایش بهره‌وری سازمان شما.</p>

              
            </div>

            <div className="w-full flex items-center justify-center">
              <div className="w-full max-w-md bg-background/10 rounded-2xl p-6 border shadow-sm">
                <div className="h-44 bg-grid-primary/5 rounded-lg flex items-center justify-center text-muted-foreground">نمایش مدل</div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs text-muted-foreground">دقت متوسط</div>
                    <div className="font-semibold">۹۰٪+</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">پشتیبانی</div>
                    <div className="font-semibold">سفارشی</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">خدمات هوش مصنوعی</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">طراحی چت بات و دستیار هوشمند</h3>
                <p className="text-sm text-muted-foreground mt-2">توسعه چت‌بات‌های هوشمند با قابلیت پردازش زبان طبیعی فارسی</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">دسته‌بندی و پردازش تصویر / متن</h3>
                <p className="text-sm text-muted-foreground mt-2">سیستم‌های خودکار تشخیص و دسته‌بندی تصاویر و متون</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7519 20.8284C12.9372 22.391 10.0631 22.391 8.24835 20.8284C6.43359 19.2678 6.43359 16.7322 8.24835 15.1716L11.5001 12.3497L14.7519 15.1716C16.5667 16.7322 16.5667 19.2678 14.7519 20.8284Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.7519 8.82843C13.9372 10.3891 11.0631 10.3891 9.24835 8.82843C7.43359 7.26777 7.43359 4.73223 9.24835 3.17157C11.0631 1.61091 13.9372 1.61091 15.7519 3.17157C17.5667 4.73223 17.5667 7.26777 15.7519 8.82843Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">اتوماسیون هوشمند</h3>
                <p className="text-sm text-muted-foreground mt-2">خودکارسازی فرایندهای تکراری با الگوریتم‌های هوشمند</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L4 8l8 4 8-4-8-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 12l8 4 8-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 16l8 4 8-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">توسعه API و مدیریت</h3>
                <p className="text-sm text-muted-foreground mt-2">توسعه و پیاده‌سازی API‌های هوشمند با پنل مدیریت اختصاصی</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">سیستم‌های پیشنهاددهنده</h3>
                <p className="text-sm text-muted-foreground mt-2">طراحی سیستم‌های هوشمند پیشنهاد محصول و محتوا</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15l-3-3m0 0l3-3m-3 3h8M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">اتوماسیون اداری</h3>
                <p className="text-sm text-muted-foreground mt-2">توسعه نرم‌افزارهای داخلی و اتوماسیون فرایندهای اداری</p>
              </div>
            </div>
          </motion.section>

          <motion.section className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">تکنولوژی‌های مورد استفاده</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['React', 'Node.js', 'Django', 'Laravel'].map((tech) => (
                <div key={tech} className="p-4 rounded-xl border bg-card/30 text-center">
                  <span className="font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section id="cases" className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">نمونه‌کارها</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3].map((n) => (
                <article key={n} className="bg-card/30 border rounded-xl overflow-hidden">
                  <div className="h-40 bg-grid-primary/10 flex items-center justify-center text-muted-foreground">نمونه {n}</div>
                  <div className="p-4">
                    <h3 className="font-semibold">پروژه هوش مصنوعی #{n}</h3>
                    <p className="text-sm text-muted-foreground mt-2">توضیح کوتاه و نتیجه‌ی کسب‌وکار</p>
                    <div className="mt-4"><a href="#" className="text-primary font-medium">جزئیات →</a></div>
                  </div>
                </article>
              ))}
            </div>
          </motion.section>

          <motion.section id="contact" className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">درخواست دمو / مشاوره</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <form className="space-y-4 bg-card/30 p-6 rounded-xl border">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="نام" />
                  <Input placeholder="ایمیل" type="email" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="شرکت" />
                  <Input placeholder="تلفن" />
                </div>
                <div>
                  <textarea className="w-full min-h-[112px] rounded-xl border bg-background px-3 py-2 text-sm" placeholder="توضیح کوتاه نیازها" />
                </div>
                <div>
                  <Button className="w-full rounded-xl">ارسال درخواست</Button>
                </div>
              </form>

              <div className="space-y-4">
                <div className="p-6 rounded-xl border bg-card/30">
                  <h3 className="font-semibold">تماس</h3>
                  <p className="text-muted-foreground">info@abanit.net</p>
                </div>
                <div className="p-6 rounded-xl border bg-card/30">
                  <h3 className="font-semibold">زیرساخت</h3>
                  <p className="text-muted-foreground">Docker, Kubernetes, Cloud</p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <PageFooter />
    </div>
  )
}

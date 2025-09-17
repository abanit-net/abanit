"use client"

import { motion } from "framer-motion"
import { LayoutGridIcon, PenTool, Users } from "lucide-react"
import { PageFooter } from "@/components/ui/page-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function UXServices() {
  return (
    <div className="min-h-screen flex flex-col pt-28 md:pt-32">
      <main className="w-full">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero - diagonal split with device mockup */}
          <motion.section className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12 lg:py-20">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 p-3 flex items-center justify-center">
                  <LayoutGridIcon className="w-6 h-6 text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground/90 font-medium">UI / UX — تحقیق تا تحویل</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">طراحی تجربه‌ای که کاربران دوست دارند</h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-lg">ما با تحقیق کاربرمحور، پروتوتایپ‌های سریع و تست‌های کاربردپذیری، محصول شما را به سطحی می‌رسانیم که کاربران زمان بیشتری را در آن می‌گذرانند و تبدیل‌ها افزایش می‌یابد.</p>

            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-2xl bg-gradient-to-br from-white/50 to-background/50 p-6 border shadow-sm">
                <div className="h-56 bg-grid-primary/5 rounded-lg flex items-center justify-center text-muted-foreground">پیش‌نمایش UI</div>
                <div className="mt-4 flex gap-3">
                  <div className="flex-1 text-sm">
                    <div className="text-xs text-muted-foreground">تحقیق</div>
                    <div className="font-semibold">پرسونا و سناریو</div>
                  </div>
                  <div className="flex-1 text-sm">
                    <div className="text-xs text-muted-foreground">نمونه‌سازی</div>
                    <div className="font-semibold">فریم و پروتوتایپ</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Services / Offerings */}
          <motion.section id="services" className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">خدمات اختصاصی UX</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 17l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">تحقیق کاربری</h3>
                <p className="text-sm text-muted-foreground mt-2">تحقیق و تحلیل رفتار کاربران، پرسونا و سناریوهای استفاده</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">طراحی تجربه کاربری</h3>
                <p className="text-sm text-muted-foreground mt-2">طراحی فرایند، معماری اطلاعات و نقشه سایت</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 9h18" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 21V9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="font-semibold">پروتوتایپ و نمونه‌سازی</h3>
                <p className="text-sm text-muted-foreground mt-2">ساخت نمونه اولیه تعاملی برای تست و اعتبارسنجی</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">تست کاربردپذیری</h3>
                <p className="text-sm text-muted-foreground mt-2">ارزیابی و بهبود تجربه کاربری با تست‌های واقعی</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">سیستم طراحی</h3>
                <p className="text-sm text-muted-foreground mt-2">ایجاد و مستندسازی سیستم طراحی یکپارچه</p>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold">طراحی رابط کاربری</h3>
                <p className="text-sm text-muted-foreground mt-2">طراحی ظاهر و المان‌های بصری محصول</p>
              </div>
            </div>
          </motion.section>

          {/* Design Sprint / Workshop */}
          <motion.section id="workshop" className="py-8 lg:py-16">
            <div className="grid lg:grid-cols-3 gap-6 items-start">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4">کارگاه طراحی سریع (Design Sprint)</h2>
                <p className="text-muted-foreground mb-6">یک برنامه فشرده ۵ روزه برای اعتبارسنجی ایده‌ها، ساخت نمونه‌ اولیه و سنجش بازخورد واقعی کاربران.</p>
                <ul className="list-inside list-decimal space-y-2 text-sm text-muted-foreground">
                  <li>روز ۱: تعریف چالش و اهداف</li>
                  <li>روز ۲: ایده‌پردازی و انتخاب راه‌حل</li>
                  <li>روز ۳: پروتوتایپ سریع</li>
                  <li>روز ۴: تست کاربردپذیری با کاربران</li>
                  <li>روز ۵: تحلیل نتایج و پیشنهاد مسیر</li>
                </ul>
                <div className="mt-6">
                  <Button className="rounded-xl">رزرو کارگاه</Button>
                </div>
              </div>

              <aside className="p-6 rounded-xl border bg-card/30">
                <div className="font-semibold mb-2">زمان تقریبی</div>
                <div className="text-muted-foreground mb-4">5 روز</div>
                <div className="font-semibold mb-2">هزینه</div>
                <div className="text-muted-foreground">تماس بگیرید</div>
              </aside>
            </div>
          </motion.section>

          {/* Case Studies */}
          <motion.section className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">نمونه‌کارهای UX</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3].map((n) => (
                <article key={n} className="bg-card/30 rounded-xl border overflow-hidden">
                  <div className="h-40 bg-grid-primary/10 flex items-center justify-center text-muted-foreground">کاور {n}</div>
                  <div className="p-4">
                    <h3 className="font-semibold">پروژه طراحی #{n}</h3>
                    <p className="text-sm text-muted-foreground mt-2">خلاصه‌ای از چالش و راه‌حل طراحی</p>
                    <div className="mt-4"><a href="#" className="text-primary font-medium">مشاهده مطالعه موردی →</a></div>
                  </div>
                </article>
              ))}
            </div>
          </motion.section>

          {/* Testimonials */}
          <motion.section className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">مشتریان درباره ما می‌گویند</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <blockquote className="p-6 rounded-xl border bg-card/30">
                <p className="text-muted-foreground">با بازطراحی تجربه کاربری، نرخ تکمیل فرم‌ها ۴۰٪ افزایش یافت.</p>
                <div className="mt-4 font-semibold">مدیر محصول — استارتاپ</div>
              </blockquote>
              <blockquote className="p-6 rounded-xl border bg-card/30">
                <p className="text-muted-foreground">تست‌های ما نشان داد کاربران فرآیند جدید را سریع‌تر درک می‌کنند.</p>
                <div className="mt-4 font-semibold">مدیر طراحی — شرکت سرویس</div>
              </blockquote>
            </div>
          </motion.section>

          {/* FAQ */}
          <motion.section className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">سوالات متداول</h2>
            <div className="grid gap-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="q1">
                  <AccordionTrigger>برای پروژه UX از کجا شروع کنیم؟</AccordionTrigger>
                  <AccordionContent>با یک جلسه نیازسنجی و بررسی اهداف کسب‌وکار شروع می‌کنیم.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2">
                  <AccordionTrigger>آیا نمونه‌کار واقعی دارید؟</AccordionTrigger>
                  <AccordionContent>بله، می‌توانیم نمونه‌کارها و مطالعات موردی را به شما ارایه دهیم.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.section>
        </div>
      </main>

      <PageFooter />
    </div>
  )
}

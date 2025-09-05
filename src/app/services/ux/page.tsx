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
                <div className="w-12 h-12 rounded-2xl bg-slate-100 p-3 flex items-center justify-center">
                  <LayoutGridIcon className="w-6 h-6 text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground/90 font-medium">UI / UX — تحقیق تا تحویل</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">طراحی تجربه‌ای که کاربران دوست دارند</h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-lg">ما با تحقیق کاربرمحور، پروتوتایپ‌های سریع و تست‌های کاربردپذیری، محصول شما را به سطحی می‌رسانیم که کاربران زمان بیشتری را در آن می‌گذرانند و تبدیل‌ها افزایش می‌یابد.</p>

              <div className="flex gap-3 flex-col sm:flex-row">
                <Button className="rounded-xl"><a href="#services">خدمات ما</a></Button>
                <Button className="rounded-xl bg-background/10 border"><a href="#workshop">کارگاه طراحی</a></Button>
              </div>
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl border bg-card/30">
                <div className="inline-flex items-center gap-3 mb-3">
                  <PenTool className="w-5 h-5 text-muted-foreground" />
                  <div className="font-semibold">طراحی UI</div>
                </div>
                <p className="text-sm text-muted-foreground">طراحی رابط بصری با تمرکز روی دسترسی و زیبایی.</p>
              </div>
              <div className="p-6 rounded-xl border bg-card/30">
                <div className="inline-flex items-center gap-3 mb-3">
                  <Users className="w-5 h-5 text-muted-foreground" />
                  <div className="font-semibold">تحقیق کاربری</div>
                </div>
                <p className="text-sm text-muted-foreground">مصاحبه، تست و تحلیل رفتار کاربران واقعی.</p>
              </div>
              <div className="p-6 rounded-xl border bg-card/30">
                <div className="inline-flex items-center gap-3 mb-3">
                  <div className="w-5 h-5" />
                  <div className="font-semibold">پروتوتایپ</div>
                </div>
                <p className="text-sm text-muted-foreground">پروتوتایپ تعاملی برای اعتبارسنجی سریع ایده‌ها.</p>
              </div>
              <div className="p-6 rounded-xl border bg-card/30">
                <div className="inline-flex items-center gap-3 mb-3">
                  <div className="w-5 h-5" />
                  <div className="font-semibold">سیستم طراحی</div>
                </div>
                <p className="text-sm text-muted-foreground">کتابخانه کامپوننت و راهنمای استایل برای توسعه پایدار.</p>
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

          {/* Contact + Mini Form */}
          <motion.section id="contact" className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">شروع پروژه UX</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <form className="space-y-4 bg-card/30 p-6 rounded-xl border">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="نام و نام خانوادگی" />
                  <Input placeholder="ایمیل" type="email" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="نام شرکت" />
                  <Input placeholder="تلفن" />
                </div>
                <div>
                  <textarea className="w-full min-h-[112px] rounded-xl border bg-background px-3 py-2 text-sm" placeholder="خلاصه پروژه" />
                </div>
                <div>
                  <Button className="w-full rounded-xl">ارسال درخواست</Button>
                </div>
              </form>

              <div className="space-y-4">
                <div className="p-6 rounded-xl border bg-card/30">
                  <h3 className="font-semibold">همکاری</h3>
                  <p className="text-muted-foreground">پروژه‌های کوتاه‌مدت، کارگاه و همکاری بلندمدت</p>
                </div>
                <div className="p-6 rounded-xl border bg-card/30">
                  <h3 className="font-semibold">آدرس</h3>
                  <p className="text-muted-foreground">تهران، خیابان ولیعصر</p>
                </div>
              </div>
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

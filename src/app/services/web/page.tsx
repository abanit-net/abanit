"use client"

import { motion } from "framer-motion"
import { MonitorIcon, GlobeIcon, CpuIcon, ShoppingCart } from "lucide-react"
import { PageFooter } from "@/components/ui/page-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function WebServices() {
  return (
    <div className="min-h-screen flex flex-col pt-28 md:pt-32"> {/* top padding to separate from header */}
      <main className="w-full">
        <div className="max-w-7xl mx-auto px-6">
          {/* HERO */}
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-12 lg:py-20"
          >
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 p-3 flex items-center justify-center">
                  <MonitorIcon className="w-6 h-6 text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground/90 font-medium">خدمات وب‌سایت — طراحی، توسعه، سئو</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
                سایت حرفه‌ای برای رشد کسب‌وکار شما
              </h1>

              <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                طراحی واکنش‌گرا، تجربه کاربری بهینه و سئو که باعث افزایش تبدیل و تماس‌های مشتریان می‌شود. از نمونه‌کار تا تحویل و پشتیبانی همراهتان خواهیم بود.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="rounded-xl" asChild={false}>
                  <a href="#cases" className="block">مشاهده نمونه کارها</a>
                </Button>
              </div>
            </div>

            <div className="w-full flex items-center justify-center">
              <div className="w-full max-w-md bg-background/10 rounded-2xl p-6 border border-primary/5 shadow-sm">
                <div className="h-44 bg-grid-primary/10 rounded-lg flex items-center justify-center text-muted-foreground">
                  تصویر یا پیش‌نمایش پروژه
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="text-sm">
                    <div className="text-xs text-muted-foreground">زمان اجرای معمول</div>
                    <div className="font-semibold">4–8 هفته</div>
                  </div>
                  <div className="text-sm">
                    <div className="text-xs text-muted-foreground">پشتیبانی</div>
                    <div className="font-semibold">ماهانه/سالیانه</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* FEATURES */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-8 lg:py-16"
          >
            <h2 className="text-2xl font-bold mb-6">آنچه ارائه می‌کنیم</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6 flex flex-col gap-3">
                <div className="inline-flex items-center gap-3">
                  <GlobeIcon className="w-6 h-6 text-muted-foreground" />
                  <h3 className="font-semibold">طراحی واکنش‌گرا</h3>
                </div>
                <p className="text-sm text-muted-foreground">نمایش بی‌نقص در موبایل، تبلت و دسکتاپ.</p>
              </div>

              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6 flex flex-col gap-3">
                <div className="inline-flex items-center gap-3">
                  <CpuIcon className="w-6 h-6 text-muted-foreground" />
                  <h3 className="font-semibold">عملکرد و بهینه‌سازی</h3>
                </div>
                <p className="text-sm text-muted-foreground">بهینه‌سازی سرعت، Caching و Core Web Vitals.</p>
              </div>

              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6 flex flex-col gap-3">
                <div className="inline-flex items-center gap-3">
                  <ShoppingCart className="w-6 h-6 text-muted-foreground" />
                  <h3 className="font-semibold">فروشگاه آنلاین</h3>
                </div>
                <p className="text-sm text-muted-foreground">تجربه خرید امن و ساده با درگاه‌های معتبر.</p>
              </div>

              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6 flex flex-col gap-3">
                <div className="inline-flex items-center gap-3">
                  <MonitorIcon className="w-6 h-6 text-muted-foreground" />
                  <h3 className="font-semibold">سئو و رشد ارگانیک</h3>
                </div>
                <p className="text-sm text-muted-foreground">تحلیل کلیدواژه، بهینه‌سازی محتوا و لینک‌سازی.</p>
              </div>
            </div>
          </motion.section>

          {/* PROCESS */}
          <motion.section className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">فرآیند کاری ما</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card/30 border border-primary/5 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">1</div>
                <div className="font-semibold">اصلاح هدف‌گذاری</div>
                <p className="text-sm text-muted-foreground mt-2">جلسه نیازسنجی و تعیین اهداف کسب‌وکار</p>
              </div>
              <div className="bg-card/30 border border-primary/5 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">2</div>
                <div className="font-semibold">طراحی و نمونه‌سازی</div>
                <p className="text-sm text-muted-foreground mt-2">طراحی UI/UX و تأیید پروتوتایپ</p>
              </div>
              <div className="bg-card/30 border border-primary/5 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">3</div>
                <div className="font-semibold">توسعه</div>
                <p className="text-sm text-muted-foreground mt-2">پیاده‌سازی، تست و بهینه‌سازی</p>
              </div>
              <div className="bg-card/30 border border-primary/5 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">4</div>
                <div className="font-semibold">تحویل و پشتیبانی</div>
                <p className="text-sm text-muted-foreground mt-2">آموزش، مانیتورینگ و پشتیبانی مستمر</p>
              </div>
            </div>
          </motion.section>

          {/* CASES */}
          <motion.section id="cases" className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">نمونه‌کارها</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <article key={n} className="bg-card/30 border border-primary/10 rounded-xl overflow-hidden">
                  <div className="h-40 bg-grid-primary/10 flex items-center justify-center text-muted-foreground">پیش‌نمایش {n}</div>
                  <div className="p-4">
                    <h3 className="font-semibold">پروژه نمونه #{n}</h3>
                    <p className="text-sm text-muted-foreground mt-2">توضیح کوتاه درباره پروژه و نتیجه کسب‌وکار</p>
                    <div className="mt-4">
                      <a href="#" className="text-primary font-medium">مشاهده جزئیات →</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </motion.section>

          {/* PRICING */}
          <motion.section className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">پکیج‌ها و تعرفه‌ها</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border bg-card/30">
                <div className="text-lg font-semibold">پکیج پایه</div>
                <div className="text-3xl font-extrabold mt-4">۴,۹۰۰,۰۰۰ تومان</div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>طراحی واکنش‌گرا</li>
                  <li>صفحات تا ۵ صفحه</li>
                  <li>پشتیبانی ۱ ماهه</li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full rounded-xl">شروع کنید</Button>
                </div>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="text-lg font-semibold">پکیج استاندارد</div>
                <div className="text-3xl font-extrabold mt-4">۹,۹۰۰,۰۰۰ تومان</div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>طراحی اختصاصی</li>
                  <li>فروشگاه ساده</li>
                  <li>پشتیبانی ۳ ماهه</li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full rounded-xl">درخواست دمو</Button>
                </div>
              </div>

              <div className="p-6 rounded-xl border bg-card/30">
                <div className="text-lg font-semibold">پکیج حرفه‌ای</div>
                <div className="text-3xl font-extrabold mt-4">۱۹,۹۰۰,۰۰۰ تومان</div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>فروشگاه کامل</li>
                  <li>سئو پایه</li>
                  <li>پشتیبانی ۶ ماهه</li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full rounded-xl">تماس برای پیشنهادات</Button>
                </div>
              </div>
            </div>
          </motion.section>

          {/* TESTIMONIALS */}
          <motion.section className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">نظر مشتریان</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <blockquote className="p-6 rounded-xl border bg-card/30">
                <p className="text-muted-foreground">آبانیت برای ما یک وبسایت جذاب ساخت که نرخ تبدیل را تا ۳۵٪ افزایش داد.</p>
                <div className="mt-4 font-semibold">مدیر عامل — شرکت نمونه</div>
              </blockquote>
              <blockquote className="p-6 rounded-xl border bg-card/30">
                <p className="text-muted-foreground">پشتیبانی سریع و حرفه‌ای. همیشه در دسترس بودند.</p>
                <div className="mt-4 font-semibold">مدیر بازاریابی — فروشگاه آنلاین</div>
              </blockquote>
            </div>
          </motion.section>


          {/* FAQ */}
          <motion.section className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">سوالات متداول</h2>
            <div className="grid gap-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="q1">
                  <AccordionTrigger>چقدر طول می‌کشد تا سایت آماده شود؟</AccordionTrigger>
                  <AccordionContent>بسته به پیچیدگی، معمولاً بین ۴ تا ۸ هفته.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2">
                  <AccordionTrigger>آیا پشتیبانی بعد از تحویل وجود دارد؟</AccordionTrigger>
                  <AccordionContent>بله، پکیج‌های پشتیبانی ماهانه و سالانه ارائه می‌شود.</AccordionContent>
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

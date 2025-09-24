"use client"

import { motion } from "framer-motion"
import { MonitorIcon, GlobeIcon, CpuIcon, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { PageFooter } from "@/components/ui/page-footer"
import { Button } from "@/components/ui/button"
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
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 p-3 flex items-center justify-center">
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
                <div className="h-44 rounded-lg overflow-hidden flex items-center justify-center">
                  <Image src="/img/screenshot/استوکر.jpg" alt="پیش‌نمایش استوکر" width={720} height={300} className="w-full h-full object-cover object-top" />
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
              {
                // List screenshots from public/img/screenshot (exclude استوکر.jpg which is used as hero)
                [
                  'موبوتلو.jpg',
                  'دیجی اکتیو.jpg',
                  'آرکاجم.png',
                ].map((file) => {
                  const name = file.replace(/\.[^/.]+$/, "");
                  const src = `/img/screenshot/${file}`;
                  return (
                    <article key={file} className="bg-card/30 border border-primary/10 rounded-xl overflow-hidden">
                      <div className="h-40 overflow-hidden">
                        <Image src={src} alt={name} width={720} height={300} className="w-full h-full object-cover object-top" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold">{name}</h3>
                        <p className="text-sm text-muted-foreground mt-2">نمونه‌کار طراحی و توسعه وب</p>
                      </div>
                    </article>
                  )
                })
              }
            </div>
          </motion.section>

          {/* SEO GROWTH */}
          <motion.section className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">رشد سئو و رتبه‌گیری در گوگل</h2>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4">افزایش رتبه در نتایج جستجو</h3>
                <p className="text-muted-foreground mb-6">
                  با استراتژی‌های سئو حرفه‌ای، وب‌سایت شما در صفحه اول گوگل قرار می‌گیرد و ترافیک ارگانیک شما تا ۳۰۰٪ افزایش پیدا می‌کند.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm">بهینه‌سازی کلیدواژه‌های هدف</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-sm">تولید محتوای با کیفیت</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-sm">لینک‌سازی داخلی و خارجی</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    <span className="text-sm">بهینه‌سازی فنی و سرعت</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card/30 border rounded-xl p-6">
                <h4 className="font-semibold mb-4 text-center">نمودار رشد ترافیک ارگانیک</h4>
                <div className="relative h-48 sm:h-56">
                  <svg className="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                    {/* Grid lines */}
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    
                    {/* Y-axis labels */}
                    <text x="15" y="25" fontSize="10" fill="currentColor" opacity="0.6" textAnchor="middle">100K</text>
                    <text x="15" y="75" fontSize="10" fill="currentColor" opacity="0.6" textAnchor="middle">50K</text>
                    <text x="15" y="125" fontSize="10" fill="currentColor" opacity="0.6" textAnchor="middle">25K</text>
                    <text x="15" y="175" fontSize="10" fill="currentColor" opacity="0.6" textAnchor="middle">0</text>
                    
                    {/* X-axis labels */}
                    <text x="60" y="195" fontSize="10" fill="currentColor" opacity="0.6" textAnchor="middle">ماه 1</text>
                    <text x="140" y="195" fontSize="10" fill="currentColor" opacity="0.6" textAnchor="middle">ماه 3</text>
                    <text x="220" y="195" fontSize="10" fill="currentColor" opacity="0.6" textAnchor="middle">ماه 6</text>
                    <text x="300" y="195" fontSize="10" fill="currentColor" opacity="0.6" textAnchor="middle">ماه 9</text>
                    <text x="380" y="195" fontSize="10" fill="currentColor" opacity="0.6" textAnchor="middle">ماه 12</text>
                    
                    {/* Growth curve */}
                    <path 
                      d="M 40 160 Q 100 140 140 120 T 220 80 T 300 50 T 380 30" 
                      fill="none" 
                      stroke="rgb(34, 197, 94)" 
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    
                    {/* Area under curve */}
                    <path 
                      d="M 40 160 Q 100 140 140 120 T 220 80 T 300 50 T 380 30 L 380 180 L 40 180 Z" 
                      fill="rgb(34, 197, 94)" 
                      fillOpacity="0.1"
                    />
                    
                    {/* Data points */}
                    <circle cx="40" cy="160" r="3" fill="rgb(34, 197, 94)"/>
                    <circle cx="140" cy="120" r="3" fill="rgb(34, 197, 94)"/>
                    <circle cx="220" cy="80" r="3" fill="rgb(34, 197, 94)"/>
                    <circle cx="300" cy="50" r="3" fill="rgb(34, 197, 94)"/>
                    <circle cx="380" cy="30" r="3" fill="rgb(34, 197, 94)"/>
                  </svg>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">+300%</div>
                    <div className="text-xs text-muted-foreground">افزایش ترافیک</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">صفحه 1</div>
                    <div className="text-xs text-muted-foreground">رتبه گوگل</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="text-2xl font-bold text-purple-600">85%</div>
                    <div className="text-xs text-muted-foreground">کلیدواژه‌های برتر</div>
                  </div>
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

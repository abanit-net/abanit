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
                <div className="w-12 h-12 rounded-2xl bg-slate-100 p-3 flex items-center justify-center">
                  <BrainCircuitIcon className="w-6 h-6 text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground/90 font-medium">خدمات هوش مصنوعی — مدل، زیرساخت، ادغام</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">هوش مصنوعی برای تصمیم‌سازی هوشمند</h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl">طراحی و استقرار مدل‌های یادگیری ماشین، بینایی ماشین و پردازش زبان طبیعی برای اتوماسیون و افزایش بهره‌وری سازمان شما.</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="rounded-xl"><a href="#contact">مشاوره رایگان</a></Button>
                <Button className="rounded-xl bg-background/10 border"><a href="#cases">نمونه‌کارها</a></Button>
              </div>
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
            <h2 className="text-2xl font-bold mb-6">قابلیت‌ها</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl border bg-card/30">
                <h3 className="font-semibold">پردازش زبان طبیعی</h3>
                <p className="text-sm text-muted-foreground mt-2">چت‌بات‌ها، تحلیل متن و استخراج اطلاعات</p>
              </div>
              <div className="p-6 rounded-xl border bg-card/30">
                <h3 className="font-semibold">بینایی ماشین</h3>
                <p className="text-sm text-muted-foreground mt-2">تشخیص تصویر، طبقه‌بندی و آنالیز ویدیو</p>
              </div>
              <div className="p-6 rounded-xl border bg-card/30">
                <h3 className="font-semibold">یادگیری ماشین</h3>
                <p className="text-sm text-muted-foreground mt-2">مدل‌های پیش‌بینی و تحلیل داده</p>
              </div>
              <div className="p-6 rounded-xl border bg-card/30">
                <h3 className="font-semibold">استقرار و MLOps</h3>
                <p className="text-sm text-muted-foreground mt-2">کانتینریزاسیون، CI/CD و نظارت مدل</p>
              </div>
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

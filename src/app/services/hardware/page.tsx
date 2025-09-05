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
                <div className="w-12 h-12 rounded-2xl bg-slate-100 p-3 flex items-center justify-center">
                  <HardDriveIcon className="w-6 h-6 text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground/90 font-medium">تجهیزات و راهکارهای سخت‌افزاری</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">تجهیزات مطمئن برای زیرساخت پایدار</h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl">تامین، نصب و پشتیبانی سرورها، ذخیره‌سازی و تجهیزات شبکه با گارانتی و خدمات پس از فروش حرفه‌ای.</p>

              <div className="flex gap-3 flex-col sm:flex-row">
                <Button className="rounded-xl"><a href="#contact">درخواست قیمت</a></Button>
                <Button className="rounded-xl bg-background/10 border"><a href="#cases">مشاهده پروژه‌ها</a></Button>
              </div>
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl border bg-card/30">
                <div className="inline-flex items-center gap-3 mb-3"><Cpu className="w-5 h-5 text-muted-foreground" /><div className="font-semibold">سرورها</div></div>
                <p className="text-sm text-muted-foreground">سرورهای رک‌مونت و توریک با کانفیگ سفارشی</p>
              </div>
              <div className="p-6 rounded-xl border bg-card/30">
                <div className="inline-flex items-center gap-3 mb-3"><HardDriveIcon className="w-5 h-5 text-muted-foreground" /><div className="font-semibold">ذخیره‌سازی</div></div>
                <p className="text-sm text-muted-foreground">SAN, NAS و آرشیو‌سازی با تضمین یکپارچگی داده</p>
              </div>
              <div className="p-6 rounded-xl border bg-card/30">
                <div className="inline-flex items-center gap-3 mb-3"><ServerIcon className="w-5 h-5 text-muted-foreground" /><div className="font-semibold">نصب و خدمات</div></div>
                <p className="text-sm text-muted-foreground">نصب، پیکربندی، مانیتورینگ و سرویس‌های نگهداری</p>
              </div>
              <div className="p-6 rounded-xl border bg-card/30">
                <div className="inline-flex items-center gap-3 mb-3"><div className="w-5 h-5" /><div className="font-semibold">پشتیبانی و SLA</div></div>
                <p className="text-sm text-muted-foreground">SLA سفارشی، مانیتورینگ 24/7 و تعمیرات سریع</p>
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

          <motion.section id="contact" className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">درخواست پیشنهاد فنی و قیمت</h2>
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
                  <textarea className="w-full min-h-[112px] rounded-xl border bg-background px-3 py-2 text-sm" placeholder="توضیح نیازها" />
                </div>
                <div>
                  <Button className="w-full rounded-xl">ارسال درخواست</Button>
                </div>
              </form>

              <div className="space-y-4">
                <div className="p-6 rounded-xl border bg-card/30">
                  <h3 className="font-semibold">تأمین تجهیزات</h3>
                  <p className="text-muted-foreground">تضمین اصالت و خدمات پس از فروش</p>
                </div>
                <div className="p-6 rounded-xl border bg-card/30">
                  <h3 className="font-semibold">پشتیبانی فنی</h3>
                  <p className="text-muted-foreground">پاسخگویی سریع و تعمیرات در محل</p>
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

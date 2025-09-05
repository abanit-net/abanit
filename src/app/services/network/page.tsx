"use client"

import { motion } from "framer-motion"
import { ServerIcon } from "lucide-react"
import { PageFooter } from "@/components/ui/page-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NetworkServices() {
  return (
    <div className="min-h-screen flex flex-col pt-28 md:pt-32">
      <main className="w-full">
        <div className="max-w-7xl mx-auto px-6">
          <motion.section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-12 lg:py-20">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 p-3 flex items-center justify-center">
                  <ServerIcon className="w-6 h-6 text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground/90 font-medium">شبکه و زیرساخت — طراحی، امنیت، پشتیبانی</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">زیرساخت شبکه قابل اعتماد و امن</h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl">پیاده‌سازی شبکه‌های امن، مقیاس‌پذیر و مدیریت‌شده که عملکرد کسب‌وکار شما را تضمین می‌کنند.</p>

              <div className="flex gap-3 flex-col sm:flex-row">
                <Button className="rounded-xl"><a href="#contact">درخواست بررسی</a></Button>
                <Button className="rounded-xl bg-background/10 border"><a href="#services">خدمات شبکه</a></Button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-md bg-background/10 rounded-2xl p-6 border shadow-sm">
                <div className="h-44 bg-grid-primary/5 rounded-lg flex items-center justify-center text-muted-foreground">نقشه شبکه</div>
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl border bg-card/30">
                <h3 className="font-semibold">طراحی و پیاده‌سازی</h3>
                <p className="text-sm text-muted-foreground mt-2">معماری شبکه، VLAN، وایرلس و کابل‌کشی ساخت‌یافته</p>
              </div>
              <div className="p-6 rounded-xl border bg-card/30">
                <h3 className="font-semibold">امنیت شبکه</h3>
                <p className="text-sm text-muted-foreground mt-2">فایروال، IDS/IPS، بررسی آسیب‌پذیری و مدیریت تهدید</p>
              </div>
              <div className="p-6 rounded-xl border bg-card/30">
                <h3 className="font-semibold">مجازی‌سازی</h3>
                <p className="text-sm text-muted-foreground mt-2">VM، هایپرازور، KVM و بهینه‌سازی منابع</p>
              </div>
              <div className="p-6 rounded-xl border bg-card/30">
                <h3 className="font-semibold">پشتیبانی مدیریت‌شده</h3>
                <p className="text-sm text-muted-foreground mt-2"> مانیتورینگ، SLA و رفع مشکلات فوری</p>
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

          <motion.section className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">مطالعه موردی</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <article className="bg-card/30 p-6 rounded-xl border">
                <h3 className="font-semibold">راه‌اندازی شبکه برای شرکت X</h3>
                <p className="text-sm text-muted-foreground mt-2">طراحی، نصب و پشتیبانی شبکه سازمانی با افزایش پایداری و کاهش قطعی.</p>
              </article>
              <article className="bg-card/30 p-6 rounded-xl border">
                <h3 className="font-semibold">امنیت و IDS برای سرویس Y</h3>
                <p className="text-sm text-muted-foreground mt-2">تست نفوذ و استقرار سیستم‌های تشخیص نفوذ برای جلوگیری از حملات.</p>
              </article>
            </div>
          </motion.section>

          <motion.section id="contact" className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">درخواست بررسی زیرساخت</h2>
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
                  <textarea className="w-full min-h-[112px] rounded-xl border bg-background px-3 py-2 text-sm" placeholder="توضیح کوتاه درباره زیرساخت" />
                </div>
                <div>
                  <Button className="w-full rounded-xl">ارسال درخواست</Button>
                </div>
              </form>

              <div className="space-y-4">
                <div className="p-6 rounded-xl border bg-card/30">
                  <h3 className="font-semibold">تماس فوری</h3>
                  <p className="text-muted-foreground">info@abanit.net</p>
                </div>
                <div className="p-6 rounded-xl border bg-card/30">
                  <h3 className="font-semibold">پشتیبانی</h3>
                  <p className="text-muted-foreground">SLA و مانیتورینگ 24/7</p>
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

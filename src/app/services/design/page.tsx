"use client"

import { motion } from "framer-motion"
import { Palette } from "lucide-react"
import { PageFooter } from "@/components/ui/page-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function DesignServices() {
  return (
    <div className="min-h-screen flex flex-col pt-28 md:pt-32">
      <main className="w-full">
        <div className="max-w-6xl mx-auto px-6">
          <motion.section className="py-12 lg:py-20 text-center">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 p-3 flex items-center justify-center">
                <Palette className="w-6 h-6 text-muted-foreground" />
              </div>
              <span className="text-sm text-muted-foreground/90 font-medium">خدمات طراحی گرافیک و موشن</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">هویت بصری، موشن و تجربه کاربری که دیده می‌شود</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">طراحی لوگو، هویت برند، بسته‌بندی، ویدیوی معرفی و موشن‌گرافیک با تیم خلاق و متخصص.</p>

            <div className="flex items-center justify-center gap-4">
              <Button className="rounded-xl"><a href="#portfolio">مشاهده نمونه‌کار</a></Button>
              <Button className="rounded-xl bg-background/10 border"><a href="#contact">درخواست پیشنهاد</a></Button>
            </div>
          </motion.section>

          <motion.section id="services" className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">خدمات ما</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border bg-card/30 text-center">
                <h3 className="font-semibold mb-2">هویت بصری و لوگو</h3>
                <p className="text-sm text-muted-foreground">طراحی لوگو و راهنمای هویت برند</p>
              </div>
              <div className="p-6 rounded-xl border bg-card/30 text-center">
                <h3 className="font-semibold mb-2">موشن گرافیک</h3>
                <p className="text-sm text-muted-foreground">کلیپ‌های معرفی، تیزر و موشن‌گرافیک تبلیغاتی</p>
              </div>
              <div className="p-6 rounded-xl border bg-card/30 text-center">
                <h3 className="font-semibold mb-2">طراحی UI/UX</h3>
                <p className="text-sm text-muted-foreground">طراحی صفحات، پروتوتایپ و تست کاربری</p>
              </div>
            </div>
          </motion.section>

          <motion.section id="portfolio" className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">نمونه‌کارها</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card/30 p-4 rounded-xl border">
                <div className="h-44 bg-grid-primary/5 rounded-md flex items-center justify-center text-muted-foreground">نمونه‌کار ۱</div>
                <div className="mt-3 font-medium">لوگو و هویت بصری</div>
              </div>
              <div className="bg-card/30 p-4 rounded-xl border">
                <div className="h-44 bg-grid-primary/5 rounded-md flex items-center justify-center text-muted-foreground">نمونه‌کار ۲</div>
                <div className="mt-3 font-medium">موشن گرافیک معرفی</div>
              </div>
              <div className="bg-card/30 p-4 rounded-xl border">
                <div className="h-44 bg-grid-primary/5 rounded-md flex items-center justify-center text-muted-foreground">نمونه‌کار ۳</div>
                <div className="mt-3 font-medium">طراحی UI برای اپلیکیشن</div>
              </div>
            </div>
          </motion.section>

          <motion.section id="contact" className="py-8 lg:py-16">
            <h2 className="text-2xl font-bold mb-6">درخواست پیشنهاد و بودجه</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <form className="space-y-4 bg-card/30 p-6 rounded-xl border">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="نام" />
                  <Input placeholder="ایمیل" type="email" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="شرکت یا وب‌سایت" />
                  <Input placeholder="تلفن" />
                </div>
                <div>
                  <textarea className="w-full min-h-[112px] rounded-xl border bg-background px-3 py-2 text-sm" placeholder="شرح پروژه و نیازها" />
                </div>
                <div>
                  <Button className="w-full rounded-xl">ارسال درخواست</Button>
                </div>
              </form>

              <div className="space-y-4">
                <div className="p-6 rounded-xl border bg-card/30">
                  <h3 className="font-semibold">استراتژی بصری</h3>
                  <p className="text-muted-foreground">تدوین لحن و زبان بصری برند</p>
                </div>
                <div className="p-6 rounded-xl border bg-card/30">
                  <h3 className="font-semibold">پکیج‌ها و قیمت‌گذاری</h3>
                  <p className="text-muted-foreground">پکیج‌های استاندارد و سفارشی برای کسب‌وکارها</p>
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

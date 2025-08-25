"use client"

import { motion } from "framer-motion"
import { LayoutGridIcon } from "lucide-react"
import { PageFooter } from "@/components/ui/page-footer"

export default function UXServices() {
  return (
    <div className="min-h-screen flex flex-col py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 p-4">
              <LayoutGridIcon className="w-full h-full text-white" />
            </div>
            <h1 className="text-4xl font-bold">طراحی رابط و تجربه کاربری</h1>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              با طراحی رابط کاربری جذاب و تجربه کاربری روان، محصول شما را به سطح بعدی می‌بریم.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">خدمات طراحی UI/UX</h2>
            <ul className="grid gap-4">
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">تحقیق و طراحی تجربه کاربری</h3>
                <p className="text-muted-foreground">بررسی نیازها، پرسونا و سفر کاربری</p>
              </li>
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">طراحی رابط کاربری</h3>
                <p className="text-muted-foreground">طراحی ظاهری زیبا و کاربردی</p>
              </li>
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">تست کاربردپذیری</h3>
                <p className="text-muted-foreground">آزمایش و بهینه‌سازی تجربه کاربری</p>
              </li>
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">سیستم طراحی</h3>
                <p className="text-muted-foreground">ایجاد سیستم طراحی منسجم و قابل توسعه</p>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">روند کار ما</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">تحقیق و بررسی</h3>
                <p className="text-muted-foreground">مطالعه بازار، رقبا و نیازهای کاربران</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">طراحی اولیه</h3>
                <p className="text-muted-foreground">ایجاد وایرفریم و نمونه‌های اولیه</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">طراحی نهایی</h3>
                <p className="text-muted-foreground">طراحی جزئیات و المان‌های بصری</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">تست و بهبود</h3>
                <p className="text-muted-foreground">آزمایش و بهینه‌سازی مداوم</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">ابزارهای مورد استفاده</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">طراحی UI</h3>
                <p className="text-muted-foreground">Figma, Adobe XD, Sketch</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">پروتوتایپ</h3>
                <p className="text-muted-foreground">Principle, Framer, InVision</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">تست و تحلیل</h3>
                <p className="text-muted-foreground">Hotjar, UserTesting</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <PageFooter />
    </div>
  )
}

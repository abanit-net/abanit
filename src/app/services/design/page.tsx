"use client"

import { motion } from "framer-motion"
import { PaletteIcon } from "lucide-react"
import { PageFooter } from "@/components/ui/page-footer"

export default function DesignServices() {
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 p-4">
              <PaletteIcon className="w-full h-full text-white" />
            </div>
            <h1 className="text-4xl font-bold">طراحی گرافیک و سوشال مدیا</h1>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              با طراحی خلاقانه و محتوای جذاب، برند شما را در فضای دیجیتال متمایز می‌کنیم.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">خدمات طراحی گرافیک</h2>
            <ul className="grid gap-4">
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">طراحی لوگو و هویت بصری</h3>
                <p className="text-muted-foreground">طراحی لوگو، ست اداری و هویت بصری برند</p>
              </li>
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">طراحی بنر و تبلیغات</h3>
                <p className="text-muted-foreground">طراحی بنر، پوستر و تصاویر تبلیغاتی</p>
              </li>
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">طراحی محتوای شبکه‌های اجتماعی</h3>
                <p className="text-muted-foreground">تولید محتوای بصری جذاب برای پلتفرم‌های مختلف</p>
              </li>
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">موشن گرافیک</h3>
                <p className="text-muted-foreground">ساخت انیمیشن و ویدیوهای موشن گرافیک</p>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">مدیریت سوشال مدیا</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">استراتژی محتوا</h3>
                <p className="text-muted-foreground">تدوین استراتژی محتوایی متناسب با اهداف برند</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">تولید محتوا</h3>
                <p className="text-muted-foreground">تولید محتوای متنی، تصویری و ویدیویی</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">مدیریت پلتفرم‌ها</h3>
                <p className="text-muted-foreground">مدیریت حرفه‌ای صفحات اجتماعی</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">آنالیز و گزارش</h3>
                <p className="text-muted-foreground">تحلیل عملکرد و ارائه گزارش‌های دوره‌ای</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">نرم‌افزارهای مورد استفاده</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">طراحی گرافیک</h3>
                <p className="text-muted-foreground">Adobe Photoshop, Illustrator</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">موشن گرافیک</h3>
                <p className="text-muted-foreground">After Effects, Premiere Pro</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">طراحی UI</h3>
                <p className="text-muted-foreground">Figma, Adobe XD</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <PageFooter />
    </div>
  )
}

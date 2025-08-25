"use client"

import { motion } from "framer-motion"
import { MonitorIcon } from "lucide-react"
import { PageFooter } from "@/components/ui/page-footer"

export default function WebServices() {
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 p-4">
              <MonitorIcon className="w-full h-full text-white" />
            </div>
            <h1 className="text-4xl font-bold">طراحی سایت‌های حرفه‌ای و سئو</h1>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              با طراحی سایت‌های مدرن و بهینه‌سازی برای موتورهای جستجو، کسب‌وکار شما را آنلاین می‌کنیم.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">خدمات طراحی سایت</h2>
            <ul className="grid gap-4">
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">طراحی سایت شرکتی</h3>
                <p className="text-muted-foreground">طراحی وب‌سایت‌های حرفه‌ای برای معرفی کسب‌وکار و خدمات شما</p>
              </li>
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">فروشگاه آنلاین</h3>
                <p className="text-muted-foreground">راه‌اندازی فروشگاه‌های اینترنتی با امکانات کامل و درگاه پرداخت</p>
              </li>
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">سئو و بهینه‌سازی</h3>
                <p className="text-muted-foreground">افزایش رتبه سایت در موتورهای جستجو و بهبود بازدید ارگانیک</p>
              </li>
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">پشتیبانی و نگهداری</h3>
                <p className="text-muted-foreground">خدمات پشتیبانی مستمر، بروزرسانی و بهینه‌سازی عملکرد</p>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">تکنولوژی‌های مورد استفاده</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">فرانت‌اند</h3>
                <p className="text-muted-foreground">React.js, Next.js, Vue.js</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">بک‌اند</h3>
                <p className="text-muted-foreground">Node.js, Python, PHP</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">CMS</h3>
                <p className="text-muted-foreground">WordPress, Strapi, Sanity</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">مزایای همکاری با ما</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">طراحی اختصاصی</h3>
                <p className="text-muted-foreground">طراحی منحصر به فرد متناسب با برند شما</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">سرعت بالا</h3>
                <p className="text-muted-foreground">بهینه‌سازی عملکرد و سرعت بارگذاری</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">ریسپانسیو</h3>
                <p className="text-muted-foreground">سازگار با تمامی دستگاه‌ها و مرورگرها</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">امنیت بالا</h3>
                <p className="text-muted-foreground">پیاده‌سازی استانداردهای امنیتی روز</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <PageFooter />
    </div>
  )
}

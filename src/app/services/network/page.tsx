"use client"

import { motion } from "framer-motion"
import { ServerIcon } from "lucide-react"
import { PageFooter } from "@/components/ui/page-footer"

export default function NetworkServices() {
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 p-4">
              <ServerIcon className="w-full h-full text-white" />
            </div>
            <h1 className="text-4xl font-bold">مشاوره، راه‌اندازی و پشتیبانی شبکه</h1>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              ما با ارائه راهکارهای جامع شبکه‌ای، به شما در ایجاد زیرساخت‌های قدرتمند IT کمک می‌کنیم.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">خدمات ما در حوزه شبکه</h2>
            <ul className="grid gap-4">
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">طراحی و پیاده‌سازی شبکه</h3>
                <p className="text-muted-foreground">بررسی نیازها، طراحی معماری و پیاده‌سازی شبکه‌های کامپیوتری متناسب با کسب‌وکار شما</p>
              </li>
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">امنیت شبکه</h3>
                <p className="text-muted-foreground">پیاده‌سازی راهکارهای امنیتی، فایروال و سیستم‌های تشخیص نفوذ</p>
              </li>
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">پشتیبانی و نگهداری</h3>
                <p className="text-muted-foreground">خدمات پشتیبانی ۲۴/۷، نظارت بر عملکرد و رفع مشکلات احتمالی</p>
              </li>
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">مجازی‌سازی و رایانش ابری</h3>
                <p className="text-muted-foreground">راه‌اندازی سرورهای مجازی و خدمات ابری برای افزایش کارایی و مقیاس‌پذیری</p>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">چرا آبانیت؟</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">تجربه و تخصص</h3>
                <p className="text-muted-foreground">بیش از یک دهه تجربه در زمینه شبکه و زیرساخت‌های IT</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">راهکارهای سفارشی</h3>
                <p className="text-muted-foreground">ارائه راهکارهای متناسب با نیازها و بودجه شما</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">پشتیبانی مداوم</h3>
                <p className="text-muted-foreground">خدمات پشتیبانی حرفه‌ای و پاسخگویی سریع</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">تضمین کیفیت</h3>
                <p className="text-muted-foreground">استفاده از تجهیزات با کیفیت و استانداردهای روز دنیا</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <PageFooter />
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { HardDriveIcon } from "lucide-react"
import { PageFooter } from "@/components/ui/page-footer"

export default function HardwareServices() {
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-violet-500 p-4">
              <HardDriveIcon className="w-full h-full text-white" />
            </div>
            <h1 className="text-4xl font-bold">واردات تجهیزات کامپیوتری</h1>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              با ارائه تجهیزات با کیفیت و خدمات پشتیبانی حرفه‌ای، زیرساخت سخت‌افزاری کسب‌وکار شما را تأمین می‌کنیم.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">محصولات و تجهیزات</h2>
            <ul className="grid gap-4">
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">سرورهای حرفه‌ای</h3>
                <p className="text-muted-foreground">سرورهای HPE, Dell, Lenovo با گارانتی معتبر</p>
              </li>
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">تجهیزات ذخیره‌سازی</h3>
                <p className="text-muted-foreground">Storage, SAN, NAS از برندهای معتبر</p>
              </li>
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">تجهیزات شبکه</h3>
                <p className="text-muted-foreground">سوییچ، روتر و فایروال‌های سازمانی</p>
              </li>
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">کامپیوتر و لپ‌تاپ</h3>
                <p className="text-muted-foreground">سیستم‌های حرفه‌ای برای کاربردهای مختلف</p>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">خدمات همراه</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">مشاوره و طراحی</h3>
                <p className="text-muted-foreground">مشاوره تخصصی در انتخاب تجهیزات مناسب</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">نصب و راه‌اندازی</h3>
                <p className="text-muted-foreground">نصب و پیکربندی تخصصی تجهیزات</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">گارانتی و پشتیبانی</h3>
                <p className="text-muted-foreground">خدمات گارانتی معتبر و پشتیبانی فنی</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">آموزش</h3>
                <p className="text-muted-foreground">آموزش کار با تجهیزات به تیم فنی شما</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">مزایای همکاری با ما</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">کیفیت تضمینی</h3>
                <p className="text-muted-foreground">تجهیزات اصل با گارانتی معتبر</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">قیمت رقابتی</h3>
                <p className="text-muted-foreground">بهترین قیمت بازار با کیفیت مطلوب</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">پشتیبانی ۲۴/۷</h3>
                <p className="text-muted-foreground">خدمات پشتیبانی شبانه‌روزی</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <PageFooter />
    </div>
  )
}

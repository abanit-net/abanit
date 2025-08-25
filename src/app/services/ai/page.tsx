"use client"

import { motion } from "framer-motion"
import { BrainCircuitIcon } from "lucide-react"
import { PageFooter } from "@/components/ui/page-footer"

export default function AIServices() {
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-400 to-pink-500 p-4">
              <BrainCircuitIcon className="w-full h-full text-white" />
            </div>
            <h1 className="text-4xl font-bold">هوش مصنوعی و برنامه‌نویسی</h1>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              با استفاده از آخرین فناوری‌های هوش مصنوعی و برنامه‌نویسی، راهکارهای هوشمند برای کسب‌وکار شما ارائه می‌دهیم.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">خدمات هوش مصنوعی</h2>
            <ul className="grid gap-4">
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">پردازش زبان طبیعی</h3>
                <p className="text-muted-foreground">توسعه چت‌بات‌ها و سیستم‌های پردازش متن هوشمند</p>
              </li>
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">بینایی ماشین</h3>
                <p className="text-muted-foreground">سیستم‌های تشخیص تصویر و پردازش ویدیو</p>
              </li>
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">یادگیری ماشین</h3>
                <p className="text-muted-foreground">توسعه مدل‌های پیش‌بینی و تحلیل داده</p>
              </li>
              <li className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">اتوماسیون هوشمند</h3>
                <p className="text-muted-foreground">خودکارسازی فرآیندها با استفاده از هوش مصنوعی</p>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">خدمات برنامه‌نویسی</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">توسعه نرم‌افزار سفارشی</h3>
                <p className="text-muted-foreground">طراحی و توسعه نرم‌افزارهای اختصاصی</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">اپلیکیشن موبایل</h3>
                <p className="text-muted-foreground">توسعه اپلیکیشن‌های iOS و Android</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">API و وب‌سرویس</h3>
                <p className="text-muted-foreground">طراحی و پیاده‌سازی API‌های قدرتمند</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">پشتیبانی فنی</h3>
                <p className="text-muted-foreground">نگهداری و بروزرسانی مستمر نرم‌افزارها</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">تکنولوژی‌های مورد استفاده</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">هوش مصنوعی</h3>
                <p className="text-muted-foreground">TensorFlow, PyTorch, scikit-learn</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">زبان‌های برنامه‌نویسی</h3>
                <p className="text-muted-foreground">Python, JavaScript, Java</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">ابزارها</h3>
                <p className="text-muted-foreground">Docker, Kubernetes, Git</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <PageFooter />
    </div>
  )
}

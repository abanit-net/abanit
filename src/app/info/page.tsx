"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"
import { PageFooter } from "@/components/ui/page-footer"
import { colors } from "@/lib/theme"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col pt-28 md:pt-32">
      <div className="flex-1">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  در تماس باشید
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  تیم متخصص ما آماده پاسخگویی و ارائه راهکارهای فنی متناسب با نیاز شماست
                </p>
                <div className="space-y-6">
                  <div className={`flex items-center gap-4 p-4 rounded-2xl ${colors.piin.light} ${colors.piin.dark} bg-opacity-10`}>
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">تلفن تماس</h3>
                      <p className="text-white/80">۰۹۳۳۵۱۶۸۴۱۳</p>
                    </div>
                  </div>
                  
                  <div className={`flex items-center gap-4 p-4 rounded-2xl ${colors.piin.light} ${colors.piin.dark} bg-opacity-10`}>
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">ایمیل</h3>
                      <p className="text-white/80">info@abanit.net</p>
                    </div>
                  </div>
                  
                  <div className={`flex items-center gap-4 p-4 rounded-2xl ${colors.piin.light} ${colors.piin.dark} bg-opacity-10`}>
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">آدرس</h3>
                      <p className="text-white/80">مشهد، فرامرز عباسی ۴۴، پلاک ۵۳</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <div className={`absolute inset-0 rounded-3xl ${colors.piin.light} ${colors.piin.dark} opacity-20 blur-3xl -z-10`}></div>
                <div className="relative aspect-square rounded-3xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                  <Image
                    src="/img/info.png"
                    alt="تصویر آبانیت هوش مصنوعی"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <PageFooter />
    </div>
  )
}

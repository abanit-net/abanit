"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageFooter } from "@/components/ui/page-footer"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 via-transparent to-cyan-100/20 dark:from-cyan-950/20 dark:via-transparent dark:to-cyan-900/10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <main className="flex-1 pt-28 md:pt-32 relative z-10">
        <div className="container px-4 md:px-6">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          ><br />
            <h1 className="text-3xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent">
              در تماس باشید
            </h1>
            <p className="text-lg md:text-l text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              تیم متخصص ما آماده پاسخگویی و ارائه راهکارهای فنی متناسب با نیاز شماست
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-6 mb-16"
            >
              <motion.div variants={item}>
                <h2 className="text-2xl font-bold mb-6 text-cyan-600 text-center">اطلاعات تماس</h2>
              </motion.div>

              <motion.div variants={item} className="grid md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-cyan-200/20 rounded-2xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg">
                        <Phone className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">تلفن تماس</h3>
                        <p className="text-muted-foreground text-lg">۰۹۳۳۵۱۶۸۴۱۳</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-cyan-200/20 rounded-2xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">ایمیل</h3>
                        <p className="text-muted-foreground text-lg">info@abanit.net</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-cyan-200/20 rounded-2xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg">
                        <MapPin className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">آدرس</h3>
                        <p className="text-muted-foreground text-lg">مشهد، فرامرز عباسی ۴۴، پلاک ۵۳</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-cyan-200/20 rounded-2xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg">
                        <Clock className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">ساعات کاری</h3>
                        <p className="text-muted-foreground text-lg">شنبه تا چهارشنبه: ۹ صبح تا ۶ عصر</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Quick Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-16"
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-6 text-cyan-600">تماس سریع</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  برای دریافت مشاوره رایگان و بررسی پروژه خود، همین حالا با ما در تماس باشید
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    شروع گفتگو
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 dark:hover:bg-cyan-950/20 transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    ارسال پیام
                  </Button>
                </div>
              </div>
            </motion.div>
            <br /><br /><br /><br /><br />
          </div>
        </div>
      </main>
      
      <PageFooter />
    </div>
  )
}

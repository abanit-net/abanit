"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Instagram, ExternalLink } from "lucide-react"
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

const socialItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 }
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 via-transparent to-cyan-100/20 dark:from-cyan-950/20 dark:via-transparent dark:to-cyan-900/10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <main className="flex-1 pt-20 md:pt-32 relative z-10">
        <div className="container px-4 md:px-6">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
          <br /><br />
            <h1 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent">
              در تماس باشید
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
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

              <motion.div variants={item} className="grid md:grid-cols-2 gap-4 md:gap-6">
                {/* Phone */}
                <motion.a 
                  href="tel:+989335168413"
                  className="group relative block"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-cyan-200/20 rounded-2xl p-4 md:p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group-hover:border-cyan-300/30">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <Phone className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-base md:text-lg mb-1 group-hover:text-cyan-600 transition-colors">تلفن تماس</h3>
                        <p className="text-muted-foreground text-base md:text-lg">۰۹۳۳۵۱۶۸۴۱۳</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a 
                  href="mailto:info@abanit.net"
                  className="group relative block"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-cyan-200/20 rounded-2xl p-4 md:p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group-hover:border-cyan-300/30">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <Mail className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-base md:text-lg mb-1 group-hover:text-cyan-600 transition-colors">ایمیل</h3>
                        <p className="text-muted-foreground text-base md:text-lg">info@abanit.net</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.a>

                {/* Address */}
                <motion.div 
                  className="group relative"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-cyan-200/20 rounded-2xl p-4 md:p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group-hover:border-cyan-300/30">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <MapPin className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-base md:text-lg mb-1 group-hover:text-cyan-600 transition-colors">آدرس</h3>
                        <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">مشهد، فرامرز عباسی ۴۴، پلاک ۵۳</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Working Hours */}
                <motion.div 
                  className="group relative"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-cyan-200/20 rounded-2xl p-4 md:p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group-hover:border-cyan-300/30">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <Clock className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-base md:text-lg mb-1 group-hover:text-cyan-600 transition-colors">ساعات کاری</h3>
                        <p className="text-muted-foreground text-sm md:text-lg">شنبه تا چهارشنبه: ۹ صبح تا ۶ عصر</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Social Media Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12 md:mt-16"
            >
              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-cyan-600">شبکه‌های اجتماعی</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-sm md:text-base px-4">
                  ما را در شبکه‌های اجتماعی دنبال کنید و از آخرین اخبار و خدمات ما باخبر شوید
                </p>
                
                <motion.div 
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="flex flex-wrap justify-center gap-4 md:gap-6"
                >
                  {/* Instagram */}
                  <motion.a
                    variants={socialItem}
                    href="https://www.instagram.com/Abanit.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300">
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.5 6.5H17.51" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-sm border border-pink-200/20 px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        اینستاگرام
                      </div>
                    </div>
                  </motion.a>

                  {/* WhatsApp */}
                  <motion.a
                    variants={socialItem}
                    href="https://wa.me/989335168413"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 to-green-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor">
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                      </svg>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-sm border border-green-200/20 px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        واتساپ
                      </div>
                    </div>
                  </motion.a>

                  {/* Telegram */}
                  <motion.a
                    variants={socialItem}
                    href="https://t.me/989335168413"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-blue-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                      </svg>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-sm border border-blue-200/20 px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        تلگرام
                      </div>
                    </div>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="mt-12 md:mt-16"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-cyan-600/5 rounded-3xl blur-2xl" />
                <div className="relative bg-card/50 backdrop-blur-sm border border-cyan-200/20 rounded-3xl p-6 md:p-8">
                  <div className="text-center">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-cyan-600">تماس سریع</h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-sm md:text-base">
                      برای دریافت مشاوره رایگان و بررسی پروژه خود، همین حالا با ما در تماس باشید
                    </p>
                    
                    {/* Mobile-first contact buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                      <motion.a
                        href="https://wa.me/989335168413"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="block"
                      >
                        <Button 
                          size="lg" 
                          className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-5 h-5 mr-2" fill="currentColor">
                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                          </svg>
                          واتساپ
                        </Button>
                      </motion.a>
                      
                      <motion.a
                        href="tel:+989335168413"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="block"
                      >
                        <Button 
                          variant="outline" 
                          size="lg"
                          className="w-full border-cyan-600 text-cyan-600 hover:bg-cyan-50 dark:hover:bg-cyan-950/20 transition-all duration-300"
                        >
                          <Phone className="w-5 h-5 mr-2" />
                          تماس تلفنی
                        </Button>
                      </motion.a>
                    </div>
                    
                    {/* Email button - full width on mobile */}
                    <motion.a
                      href="mailto:info@abanit.net"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="block mt-4"
                    >
                      <Button 
                        variant="ghost" 
                        size="lg"
                        className="w-full max-w-md mx-auto text-cyan-600 hover:bg-cyan-50 dark:hover:bg-cyan-950/20 transition-all duration-300"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        ارسال ایمیل
                      </Button>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Mobile spacing for sticky bar */}
            <div className="h-20 md:hidden" />
          </div>
        </div>
      </main><br /><br />
      
      <PageFooter />
    </div>
  )
}

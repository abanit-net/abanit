"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PageFooter } from "@/components/ui/page-footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <br /><br />
              <h1 className="text-4xl font-bold mb-4">تماس با ما</h1>
              <p className="text-xl text-muted-foreground">
                ما آماده پاسخگویی به سوالات و پیشنهادات شما هستیم
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">تلفن تماس</h3>
                <p className="text-muted-foreground">۰۲۱-۸۸۸۸۸۸۸۸</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">ایمیل</h3>
                <p className="text-muted-foreground">info@abanit.net</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">آدرس</h3>
                <p className="text-muted-foreground">تهران، خیابان ولیعصر</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6">ارسال پیام</h2>
              <form className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">نام و نام خانوادگی</label>
                    <Input className="bg-background" placeholder="نام خود را وارد کنید" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">شماره تماس</label>
                    <Input className="bg-background" placeholder="شماره تماس خود را وارد کنید" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">ایمیل</label>
                  <Input className="bg-background" type="email" placeholder="ایمیل خود را وارد کنید" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">پیام</label>
                  <textarea 
                    className="w-full min-h-[150px] rounded-xl border bg-background px-3 py-2 text-sm"
                    placeholder="پیام خود را وارد کنید"
                  />
                </div>
                <Button className="w-full md:w-auto">
                  ارسال پیام
                </Button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <PageFooter />
    </div>
  )
}

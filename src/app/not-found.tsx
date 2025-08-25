"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] relative overflow-hidden">
      {/* Background Elements */}
      <br /><br /><br /><br /><br /><br /><br /><br />
      <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 will-change-transform" />
        <div className="absolute right-1/4 top-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse transform-gpu" />
        <div className="absolute left-1/4 bottom-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700 transform-gpu" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full 
            [background-image:linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px)] 
            [background-size:40px_40px]"
          />
        </div>
      </div>

      <div className="container relative px-4 md:px-6 flex flex-col items-center justify-center max-w-3xl mx-auto text-center">
        <div className="relative backdrop-blur-sm rounded-3xl p-8 border border-primary/10 bg-background/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <motion.h1 
              className="text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground/80 to-foreground"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.1
              }}
            >
              ۴۰۴
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-semibold mb-4">صفحه مورد نظر یافت نشد</h2>
              <p className="text-xl text-muted-foreground mb-8">
                متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا به آدرس دیگری منتقل شده است.
              </p>
              <Link href="/">
                <Button
                  size="lg"
                  className="relative group bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl"
                >
                  <span className="relative z-10">بازگشت به صفحه اصلی</span>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-foreground/10 to-primary-foreground/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Background Glow */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
        </div>

        
      </div>
    </section>
  )
}

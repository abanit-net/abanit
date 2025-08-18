"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import "@/styles/circuit.css"

const clients = [
  {
    name: "شرکت الف",
    role: "صنعت نرم‌افزار",
    person: "علی محمدی",
    position: "مدیرعامل",
    testimonial: "همکاری با تیم آبانیت باعث رشد چشمگیر کسب و کار ما شد. استفاده از راهکارهای هوشمند و خلاقانه آن‌ها، مسیر موفقیت ما را هموار کرد.",
    image: "/img/client1.png",
    stats: {
      growth: "+۱۵۰٪",
      time: "۶ ماه",
      satisfaction: "۹۸٪"
    }
  },
  {
    name: "شرکت ب",
    role: "فین‌تک",
    person: "مریم احمدی",
    position: "مدیر فنی",
    testimonial: "کیفیت خدمات و پشتیبانی عالی آبانیت برای ما ارزشمند است. تیم متخصص و متعهد آن‌ها همیشه آماده کمک و ارائه راهکارهای مناسب هستند.",
    image: "/img/client2.png",
    stats: {
      growth: "+۲۰۰٪",
      time: "۳ ماه",
      satisfaction: "۱۰۰٪"
    }
  },
  {
    name: "شرکت ج",
    role: "خرده‌فروشی آنلاین",
    person: "رضا کریمی",
    position: "مدیر بازاریابی",
    testimonial: "راهکارهای هوشمند آبانیت به ما در توسعه بازار کمک کرد. استراتژی‌های دیجیتال مارکتینگ و SEO آن‌ها نتایج فوق‌العاده‌ای برای ما به همراه داشت.",
    image: "/img/client3.png",
    stats: {
      growth: "+۸۰٪",
      time: "۴ ماه",
      satisfaction: "۹۵٪"
    }
  },
  {
    name: "شرکت د",
    role: "هوش مصنوعی",
    person: "سارا محمودی",
    position: "مدیر محصول",
    testimonial: "همکاری با آبانیت تجربه‌ای فوق‌العاده بود. تیم آن‌ها با درک عمیق از نیازهای ما و ارائه راهکارهای نوآورانه، به ما در دستیابی به اهدافمان کمک کردند.",
    image: "/img/client4.png",
    stats: {
      growth: "+۱۲۰٪",
      time: "۸ ماه",
      satisfaction: "۹۷٪"
    }
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Clients() {
  return (
    <section className="relative py-32 circuit-background overflow-hidden">
      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-sm" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            مشتریان ما
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            داستان موفقیت برندهایی که به ما اعتماد کردند
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              variants={item}
              className="group"
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="client-card rounded-2xl p-6 cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{client.name}</h3>
                        <p className="text-sm text-muted-foreground">{client.role}</p>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-primary/50" />
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-4 p-4 bg-muted/30 rounded-xl">
                      <div className="text-center">
                        <div className="text-primary font-bold">{client.stats.growth}</div>
                        <div className="text-xs text-muted-foreground mt-1">رشد</div>
                      </div>
                      <div className="text-center">
                        <div className="text-primary font-bold">{client.stats.time}</div>
                        <div className="text-xs text-muted-foreground mt-1">زمان</div>
                      </div>
                      <div className="text-center">
                        <div className="text-primary font-bold">{client.stats.satisfaction}</div>
                        <div className="text-xs text-muted-foreground mt-1">رضایت</div>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between text-sm">
                      <div className="font-medium">{client.person}</div>
                      <div className="text-muted-foreground">{client.position}</div>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-0">
                  <div className="p-6">
                    <blockquote className="text-sm text-muted-foreground leading-relaxed">
                      "{client.testimonial}"
                    </blockquote>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

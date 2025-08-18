"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const faqItems = [
  {
    question: "هزینه خدمات شما چگونه محاسبه می‌شود؟",
    answer: "هزینه خدمات ما بر اساس نوع پروژه، پیچیدگی و زمان مورد نیاز محاسبه می‌شود. برای دریافت مشاوره رایگان و برآورد دقیق هزینه، با ما تماس بگیرید."
  },
  {
    question: "چه تضمینی برای کیفیت کار وجود دارد؟",
    answer: "ما با استفاده از استانداردهای روز دنیا و متدهای تضمین کیفیت، بهترین نتیجه را برای شما تضمین می‌کنیم. علاوه بر این، پشتیبانی ۶ ماهه رایگان برای تمام پروژه‌ها ارائه می‌دهیم."
  },
  {
    question: "مدت زمان اجرای پروژه چقدر است؟",
    answer: "زمان اجرای پروژه به عوامل مختلفی مانند پیچیدگی، حجم کار و نیازمندی‌های خاص بستگی دارد. ما در ابتدای پروژه، یک برنامه زمانبندی دقیق ارائه می‌دهیم."
  },
  {
    question: "آیا امکان تغییرات در حین پروژه وجود دارد؟",
    answer: "بله، ما از متدولوژی‌های چابک استفاده می‌کنیم که انعطاف‌پذیری بالایی دارند. تغییرات در هر مرحله از پروژه قابل اعمال هستند، اما ممکن است در زمان و هزینه تأثیرگذار باشند."
  },
  {
    question: "چه خدمات پشتیبانی ارائه می‌دهید؟",
    answer: "ما علاوه بر پشتیبانی ۶ ماهه رایگان، خدمات نگهداری و بهینه‌سازی مداوم را نیز ارائه می‌دهیم. تیم پشتیبانی ما ۲۴/۷ آماده پاسخگویی به نیازهای شماست."
  },
  {
    question: "آیا نمونه کارهای مشابه دارید؟",
    answer: "بله، ما نمونه کارهای متنوعی در صنایع مختلف داریم. شما می‌توانید در بخش نمونه کارها، پروژه‌های مشابه را مشاهده کنید یا با ما تماس بگیرید تا نمونه‌های مرتبط را برایتان ارسال کنیم."
  }
]

export function FAQ() {
  return (
    <section className="w-full py-24 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">سوالات متداول</h2>
          <p className="text-muted-foreground">پاسخ سوالات رایج شما درباره خدمات ما</p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {faqItems.map((faq, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-card rounded-2xl overflow-hidden border"
            >
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="px-6 py-4 text-right hover:no-underline hover:bg-muted/50 transition-colors group">
                    <span className="text-base font-medium group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
"use client";



import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const SocialIcon = ({ children, label }: { children: React.ReactNode; label: string }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="relative group"
  >
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="w-10 h-10 rounded-xl bg-background/80 backdrop-blur-sm border border-primary/10 flex items-center justify-center text-primary relative">
      {children}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm border border-primary/10 px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </div>
  </motion.div>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="text-muted-foreground hover:text-primary transition-colors duration-200 block"
    whileHover={{ x: 4 }}
  >
    {children}
  </motion.a>
);



import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FooterSection = ({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={className}
    >
      <div className="hidden md:block">
        <h3 className="font-bold text-lg text-cyan-600 mb-4">
          {title}
        </h3>
        <div className="space-y-4">
          {children}
        </div>
      </div>
      
      <div className="md:hidden">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="px-4 py-4 text-right hover:no-underline hover:bg-muted/50 transition-colors rounded-xl group">
              <span className="text-base font-medium group-hover:text-cyan-600 transition-colors">
                {title}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-4">
                {children}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </motion.div>
  )
}

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-background"
      style={{ ['--primary' as unknown as string]: '180 66% 36%' } as React.CSSProperties}
    >
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#00a6ed10,transparent)]" />
      </div>
      
      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[100px] opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px] opacity-50" />
      </div>
      
      {/* Glass Effect */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      <div className="relative">

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            <FooterSection title="درباره آبانیت">
              <p className="text-muted-foreground leading-relaxed">
                ارائه دهنده خدمات فناوری اطلاعات و راهکارهای دیجیتال برای کسب و کارها با بیش از یک دهه تجربه
              </p>
              <div className="flex gap-4 pt-4">
                <a href="https://www.instagram.com/abanit.net" target="_blank" rel="noopener noreferrer" aria-label="Instagram آبانیت">
                  <SocialIcon label="اینستاگرام">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17.5 6.5H17.51" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </SocialIcon>
                </a>

                {/* New contact icons: phone, WhatsApp, Telegram using provided number */}
                <a href="tel:+989335168213" aria-label="تماس تلفنی آبانیت" className="block">
                  <SocialIcon label="تماس">
                    <Phone className="w-5 h-5" />
                  </SocialIcon>
                </a>
                <a href="https://wa.me/989335168213" target="_blank" rel="noopener noreferrer" aria-label="واتساپ آبانیت">
                  <SocialIcon label="واتساپ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-5 h-5" fill="currentColor">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                    </svg>
                  </SocialIcon>
                </a>
                <a href="https://t.me/989335168213" target="_blank" rel="noopener noreferrer" aria-label="تلگرام آبانیت">
                  <SocialIcon label="تلگرام">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-5 h-5" fill="currentColor">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                    </svg>
                  </SocialIcon>
                </a>
              </div>
            </FooterSection>

            <FooterSection title="خدمات">
              <ul className="space-y-3">
                <li><FooterLink href="/services/web">طراحی سایت</FooterLink></li>
                <li><FooterLink href="/services/network">راه اندازى و پشتیبانى شبکه</FooterLink></li>
                <li><FooterLink href="/services/ai">هوش مصنوعی</FooterLink></li>
                <li><FooterLink href="/services/design">طراحی گرافیک</FooterLink></li>
              </ul>
            </FooterSection>

            <FooterSection title="تماس با ما">
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21C15.5 17.4 19 14.1764 19 10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10C5 14.1764 8.5 17.4 12 21Z" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-muted-foreground">مشهد، فرامرز عباسی ۴۴، پلاک ۵۳</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V21a1 1 0 0 1-1.11.993C10.21 21.7 2.3 13.79 2.007 3.11A1 1 0 0 1 3 2h4.09a1 1 0 0 1 .97.757l.7 2.8a1 1 0 0 1-.24.9L7.6 8.6a16 16 0 0 0 8.8 8.8l1.2-1.19a1 1 0 0 1 .9-.24l2.8.7a1 1 0 0 1 .76.97V16.92z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-muted-foreground">۰۹۳۳۵۱۶۸۴۱۳</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-muted-foreground">info@abanit.net</span>
                </li>
              </ul>
            </FooterSection>

            <FooterSection title="ساعات کاری">
              <ul className="space-y-3">
                <li className="text-muted-foreground">شنبه تا چهارشنبه: ۹ صبح تا ۶ عصر</li>
                <li className="text-muted-foreground">پنجشنبه: ۹ صبح تا ۲ بعد از ظهر</li>
                <li className="text-muted-foreground">جمعه: تعطیل</li>
              </ul>
            </FooterSection>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative border-t border-white/5">
          <div className="absolute inset-0 bg-cyan-950/20 backdrop-blur-xl" />
          <div className="relative max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm text-muted-foreground text-center md:text-right"
              >
                © {new Date().getFullYear()} آبانیت. تمامی حقوق محفوظ است.
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <span className="text-sm text-muted-foreground">طراحی و توسعه:</span>
                <a 
                  href="https://ringe.ir" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-muted-foreground hover:text-cyan-500 transition-colors"
                >
                  تیم رینگ
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
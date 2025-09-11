"use client";



import { motion } from "framer-motion";

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
                <a href="https://www.linkedin.com/company/abanit" target="_blank" rel="noopener noreferrer">
                  <SocialIcon label="لینکدین">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 9H2V21H6V9Z" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </SocialIcon>
                </a>
                <a href="https://www.instagram.com/abanit.net" target="_blank" rel="noopener noreferrer">
                  <SocialIcon label="اینستاگرام">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17.5 6.5H17.51" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </SocialIcon>
                </a>
                <a href="https://twitter.com/abanit_net" target="_blank" rel="noopener noreferrer">
                  <SocialIcon label="توییتر">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12397C16.6767 2.90125 15.7395 2.95718 14.8821 3.28305C14.0247 3.60892 13.2884 4.19438 12.773 4.95372C12.2575 5.71305 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                  <span className="text-muted-foreground">تهران، خیابان ولیعصر</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V21a1 1 0 0 1-1.11.993C10.21 21.7 2.3 13.79 2.007 3.11A1 1 0 0 1 3 2h4.09a1 1 0 0 1 .97.757l.7 2.8a1 1 0 0 1-.24.9L7.6 8.6a16 16 0 0 0 8.8 8.8l1.2-1.19a1 1 0 0 1 .9-.24l2.8.7a1 1 0 0 1 .76.97V16.92z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-muted-foreground">۰۲۱-۴۴۴۴۴۴۴۴</span>
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
                className="flex items-center gap-4"
              >
                <a href="/privacy" className="text-sm text-muted-foreground hover:text-cyan-500 transition-colors">حریم خصوصی</a>
                <a href="/terms" className="text-sm text-muted-foreground hover:text-cyan-500 transition-colors">شرایط استفاده</a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
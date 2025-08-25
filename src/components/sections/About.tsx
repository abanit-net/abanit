"use client";

import { Button } from "@/components/ui/button";
import { InteractiveTimeline } from "@/components/ui/interactive-timeline";

export function About() {
  return (
    <section className="relative py-20 px-4 md:px-6 mb-12 overflow-hidden" dir="rtl" aria-label="about">
  {/* Lightweight cool background */}
  <div className="absolute inset-0 about-cool-bg" aria-hidden="true" />

  {/* Soft overlay to ensure text readability (transparent in light so background shows) */}
  <div className="absolute inset-0 bg-background/0 dark:bg-background/60 z-10" />

  <div className="relative max-w-6xl mx-auto text-center z-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-[2.2] sm:leading-normal">آبانیت، ‌‌‌نبض خلاقیت ، رمز موفقیت</h2>

        <p className="text-base sm:text-lg text-muted-foreground max-w-5xl mx-auto mb-6 leading-[2.2] sm:leading-relaxed">
          آبانیت با تکیه بر تجربهٔ سال‌ها کار در حوزهٔ فناوری اطلاعات، راهکارهای دیجیتالِ مبتنی بر نیاز کسب‌وکارها ارائه می‌دهد. ما به ایجاد تجربه‌های قابل اتکا، امن و مقیاس‌پذیر برای مشتریان‌مان متعهدیم.
        </p>

        <div className="mb-12 max-w-5xl mx-auto">
          <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-2xl p-8">
            <InteractiveTimeline
              items={[
                {
                  number: "۱",
                  title: "تحلیل نیاز",
                  description: "بررسی دقیق نیازها و اهداف کسب‌وکار شما، شناسایی چالش‌ها و فرصت‌های بهبود"
                },
                {
                  number: "۲",
                  title: "طراحی راهکار",
                  description: "تدوین استراتژی و نقشه راه متناسب با نیازهای شما، با تمرکز بر نوآوری و کارایی"
                },
                {
                  number: "۳",
                  title: "پیاده‌سازی",
                  description: "اجرای پروژه با متدولوژی‌های چابک، تضمین کیفیت و بازخورد مستمر"
                },
                {
                  number: "۴",
                  title: "پشتیبانی",
                  description: "ارائه خدمات پشتیبانی و بهینه‌سازی مداوم برای اطمینان از موفقیت پایدار"
                }
              ]}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
        </div>
      </div>
    </section>
  );
}

export default About;

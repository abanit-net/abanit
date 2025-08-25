"use client";

import { Button } from "@/components/ui/button";

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right mb-8">
          <div className="p-6 rounded-2xl bg-card/50 border border-primary/10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">01</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">ماموریت ما</h3>
                <p className="text-muted-foreground leading-relaxed">
                  کمک به رشد کسب‌وکارها از طریق راهکارهای دیجیتال کاربردی؛ ارائه مشاوره، طراحی و پیاده‌سازی با تمرکز بر نتیجه‌محوری و پایداری.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-card/50 border border-primary/10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">02</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">روش کار</h3>
                <ol className="text-muted-foreground leading-relaxed list-inside list-decimal">
                  <li>تحلیل نیاز و تعریف اهداف کسب‌وکار</li>
                  <li>طراحی راهکار و تعیین نقشه مسیر</li>
                  <li>پیاده‌سازی با متدولوژی‌های چابک و تضمین کیفیت</li>
                  <li>پشتیبانی و بهینه‌سازی مستمر</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
        </div>
      </div>
    </section>
  );
}

export default About;

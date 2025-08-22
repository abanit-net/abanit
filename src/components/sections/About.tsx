"use client";

import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section className="relative py-20 px-4 md:px-6 mb-12 overflow-hidden" dir="rtl" aria-label="about">
  {/* Animated UI-coordinated background (uses CSS in globals.css) */}
  <div className="absolute inset-0 about-animated-bg" aria-hidden="true" />

  {/* Soft overlay: lighter in light mode, stronger in dark mode */}
  <div className="absolute inset-0 bg-background/20 dark:bg-background/60 backdrop-blur-sm z-10" />

  <div className="relative max-w-5xl mx-auto text-center z-20">
        <h2 className="text-4xl font-bold mb-4">درباره ما</h2>

        <p className="text-lg text-muted-foreground max-w-5xl mx-auto mb-6">
          آبانیت با تکیه بر تجربهٔ سال‌ها کار در حوزهٔ فناوری اطلاعات، راهکارهای دیجیتالِ مبتنی بر نیاز کسب‌وکارها ارائه می‌دهد. ما به ایجاد تجربه‌های قابل اتکا، امن و مقیاس‌پذیر برای مشتریان‌مان متعهدیم.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-2">ماموریت ما</h3>
            <p className="text-muted-foreground leading-relaxed">
              کمک به رشد کسب‌وکارها از طریق راهکارهای دیجیتال کاربردی؛ ارائه مشاوره، طراحی و پیاده‌سازی با تمرکز بر نتیجه‌محوری و پایداری.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">روش کار</h3>
            <ul className="text-muted-foreground leading-relaxed list-inside list-disc">
              <li>تحلیل نیاز و تعریف اهداف کسب‌وکار</li>
              <li>طراحی راهکار و تعیین نقشه مسیر</li>
              <li>پیاده‌سازی با متدولوژی‌های چابک و تضمین کیفیت</li>
              <li>پشتیبانی و بهینه‌سازی مستمر</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <a href="#contact">
            <Button className="rounded-2xl bg-primary text-primary-foreground px-8 py-3">درخواست مشاوره</Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;

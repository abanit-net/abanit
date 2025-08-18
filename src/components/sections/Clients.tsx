import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const clients = [
  {
    name: "شرکت الف",
    role: "مدیرعامل",
    person: "علی محمدی",
    testimonial: "همکاری با تیم آبانیت باعث رشد چشمگیر کسب و کار ما شد. استفاده از راهکارهای هوشمند و خلاقانه آن‌ها، مسیر موفقیت ما را هموار کرد.",
    logo: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 21H21M6 18V10M10 18V10M14 18V10M18 18V10M20 7L12.424 2.265C12.2702 2.16236 12.0874 2.10876 11.9013 2.10876C11.7152 2.10876 11.5324 2.16236 11.3786 2.265L4 7H20Z"
          className="stroke-primary"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "شرکت ب",
    role: "مدیر فنی",
    person: "مریم احمدی",
    testimonial: "کیفیت خدمات و پشتیبانی عالی آبانیت برای ما ارزشمند است. تیم متخصص و متعهد آن‌ها همیشه آماده کمک و ارائه راهکارهای مناسب هستند.",
    logo: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
          className="stroke-primary"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21"
          className="stroke-primary"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "شرکت ج",
    role: "مدیر بازاریابی",
    person: "رضا کریمی",
    testimonial: "راهکارهای هوشمند آبانیت به ما در توسعه بازار کمک کرد. استراتژی‌های دیجیتال مارکتینگ و SEO آن‌ها نتایج فوق‌العاده‌ای برای ما به همراه داشت.",
    logo: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 3H21M3 9H21M3 15H21M3 21H21"
          className="stroke-primary"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function Clients() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground">
            نظرات مشتریان
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            آنچه مشتریان ما درباره همکاری با آبانیت می‌گویند
          </p>
        </div>
        <ScrollArea className="w-full">
          <div className="flex space-x-8 pb-8 px-4">
            {clients.map((client) => (
              <Card key={client.name} className="min-w-[400px] hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div className="p-2 bg-primary/5 rounded-xl">
                        {client.logo}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{client.name}</h3>
                        <p className="text-sm text-muted-foreground">{client.role}</p>
                      </div>
                    </div>
                  </div>
                  <Separator className="mb-6" />
                  <blockquote className="text-muted-foreground">
                    {client.testimonial}
                  </blockquote>
                  <div className="mt-6 text-sm font-medium">
                    {client.person}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
}

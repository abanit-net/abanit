import { Card } from "@/components/ui/card";

const services = [
  {
    title: "طراحی سایت",
    description: "طراحی و توسعه وب‌سایت‌های مدرن و واکنش‌گرا با آخرین تکنولوژی‌ها",
    icon: "🌐",
  },
  {
    title: "بهینه‌سازی SEO",
    description: "بهبود رتبه سایت شما در موتورهای جستجو با استراتژی‌های SEO",
    icon: "📈",
  },
  {
    title: "هوش مصنوعی",
    description: "ارائه راهکارهای هوشمند با استفاده از تکنولوژی‌های هوش مصنوعی",
    icon: "🤖",
  },
  {
    title: "طراحی گرافیک",
    description: "طراحی خلاقانه و حرفه‌ای برای برند و محتوای دیجیتال شما",
    icon: "🎨",
  },
];

export function Services() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground">خدمات ما</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            راهکارهای جامع برای رشد کسب و کار شما
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

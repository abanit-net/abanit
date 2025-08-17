import { Card } from "@/components/ui/card";

const clients = [
  {
    name: "شرکت الف",
    logo: "👔",
    testimonial: "همکاری با تیم آبانیت باعث رشد چشمگیر کسب و کار ما شد.",
  },
  {
    name: "شرکت ب",
    logo: "🏢",
    testimonial: "کیفیت خدمات و پشتیبانی عالی آبانیت برای ما ارزشمند است.",
  },
  {
    name: "شرکت ج",
    logo: "🏪",
    testimonial: "راهکارهای هوشمند آبانیت به ما در توسعه بازار کمک کرد.",
  },
];

export function Clients() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground">
            مشتریان ما
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            نظرات برخی از مشتریان در مورد همکاری با آبانیت
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client) => (
            <Card key={client.name} className="p-6">
              <div className="text-4xl mb-4 text-center">{client.logo}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{client.name}</h3>
              <p className="text-muted-foreground text-center">{client.testimonial}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

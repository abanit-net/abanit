import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-8">
            خدمات فناوری اطلاعات{" "}
            <span className="text-primary">آبانیت</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-xl text-muted-foreground sm:text-2xl md:mt-5 md:max-w-3xl">
            توسعه کسب و کار شما با راهکارهای هوشمند دیجیتال
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg" variant="default">
              مشاوره رایگان
            </Button>
            <Button size="lg" variant="outline">
              مشاهده نمونه کارها
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
  <section 
      data-hero 
      className="relative min-h-[90vh] flex items-center justify-center hardware-accelerated content-visibility-auto size-contained"
      style={{ contain: 'paint layout' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 transform-gpu">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 will-change-transform" />
        <div className="fixed right-1/4 top-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse transform-gpu" />
        <div className="fixed left-1/4 bottom-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700 transform-gpu" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full 
            [background-image:linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px)] 
            [background-size:40px_40px]"
          />
        </div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-12 text-center">
          {/* Main Title with Animation */}
          <br /><br /><br />
          <div 
            className="relative backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-primary/10 bg-background/30"
            style={{
              animation: "bounce 3s ease-in-out infinite alternate",
              animationDelay: "calc(200ms * var(--index, 0))"
            }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground/80 to-foreground text-hero leading-[2.2] sm:leading-[2]">
              آبانیت؛ همراه شما در
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/60 mt-1 sm:mt-2 text-hero leading-[2.2] sm:leading-[2]">
              تحول دیجیتال کسب‌وکار
            </h1>
            <div className="absolute -inset-x-4 -inset-y-8 bg-primary/5 blur-2xl rounded-[30px] -z-10 transform-gpu" />
          </div>

          {/* Description */}
          <p className="max-w-[42rem] leading-[2.2] sm:leading-8 text-muted-foreground text-base sm:text-xl backdrop-blur-sm bg-background/30 p-4 sm:p-6 rounded-2xl border border-primary/10 mx-4 sm:mx-0">
            با بیش از یک دهه تجربه در ارائه راهکارهای نرم‌افزاری، به شما کمک می‌کنیم تا کسب‌وکارتان را به سطح بعدی ببرید
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Button 
              size="lg"
              className="relative group bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl dark:bg-[color:var(--primary)] dark:text-primary-foreground"
            >
              <span className="relative z-10">شروع همکاری</span>
              <div className="absolute inset-0 rounded-2xl bg-primary-foreground/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="relative group border-primary/20 hover:border-primary rounded-2xl dark:border-primary/30 dark:hover:border-primary/50"
            >
              <span className="relative z-10">مشاهده نمونه کارها</span>
              <div className="absolute inset-0 rounded-2xl bg-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-8 w-full">
            {[
              { number: "۱۰+", label: "سال تجربه" },
              { number: "۵۰+", label: "پروژه موفق" },
              { number: "۱۰۰+", label: "مشتری راضی" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
                className="relative group bg-card/30 hover:bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 duration-300 hover:scale-105 transition-all animate-fade-up"
              >
                <div className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/60">
                  {stat.number}
                </div>
                <div className="text-muted-foreground mt-2">
                  {stat.label}
                </div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

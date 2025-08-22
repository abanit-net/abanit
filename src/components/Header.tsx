"use client"
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Phone, Menu, Home, Blocks, Info, ImageIcon, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const menuItems = [
  { title: "خانه", href: "/", icon: Home },
  { title: "خدمات", href: "#services", icon: Blocks },
  { title: "درباره ما", href: "#about", icon: Info },
  { title: "نمونه کارها", href: "#portfolio", icon: ImageIcon },
  { title: "تماس", href: "#contact", icon: MessageCircle },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 p-4"
      dir="rtl"
      style={{ ['--primary' as unknown as string]: '180 60% 50%' } as React.CSSProperties}
    >
      <div
        className={`mx-auto max-w-6xl flex items-center justify-between h-14 rounded-2xl px-4 md:px-6 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl shadow-2xl dark:shadow-xl border border-primary/10 dark:bg-background/70 dark:border-primary/20"
            : "bg-transparent"
        }`}
      >
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="relative w-24 h-8">
            <Image 
              src="/img/Abanit_18-01.png" 
              alt="آبانیت" 
              width={96}
              height={32}
              className="w-full h-full object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary rounded-xl transition-colors relative group"
              >
                {item.title}
                <span className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              size="sm"
              className="bg-primary/10 hover:bg-primary/20 text-primary rounded-xl px-4"
            >
              تماس با ما
            </Button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden grid grid-cols-3 items-center w-full gap-2">
          {/* Right: Menu Button */}
          <div className="justify-self-start">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="default"
                  className="hover:bg-primary/5 hover:text-primary rounded-xl h-9 gap-2 px-2 text-foreground/70"
                >
                  <Menu className="h-5 w-5" />
                  منو
                </Button>
              </DialogTrigger>
                <DialogContent className="sm:max-w-[400px] p-0 gap-0 rounded-3xl text-right" dir="rtl">
                <DialogHeader className="p-6 text-right relative border-b">
                  <DialogTitle className="flex justify-end">
                    <Image 
                      src="/img/Abanit_18-01.png" 
                      alt="آبانیت" 
                      width={96}
                      height={32}
                      className="object-contain"
                    />
                  </DialogTitle>
                </DialogHeader>
                <div className="p-6 flex flex-col items-stretch gap-6">
                    <nav className="flex flex-col items-stretch gap-2 w-full text-right">
                    {menuItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="w-full px-4 py-3 text-right text-sm font-medium text-foreground/70 hover:text-primary rounded-xl hover:bg-primary/5 transition-all flex items-center justify-end gap-3 hover:gap-4 flex-row-reverse"
                          onClick={() => (document.querySelector('[role="dialog"] button[aria-label="Close"]') as HTMLButtonElement)?.click()}
                        >
                          {item.title}
                          <Icon className="h-5 w-5" />
                        </Link>
                      );
                    })}
                  </nav>
                  <div className="flex items-center justify-between gap-4 pt-4 border-t">
                    <Button
                      className="flex-1 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl flex items-center justify-center gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      تماس با ما
                    </Button>
                    <ThemeToggle />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Center: Logo */}
          <Link href="/" className="relative w-16 h-6 justify-self-center">
            <Image 
              src="/img/Abanit_18-01.png" 
              alt="آبانیت" 
              width={64}
              height={24}
              className="w-full h-full object-contain"
            />
          </Link>

          {/* Left: Contact Button */}
          <div className="justify-self-end">
            <Button
              size="sm"
              className="bg-primary/10 hover:bg-primary/20 text-primary rounded-xl px-2 flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              تماس
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}


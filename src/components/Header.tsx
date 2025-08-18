"use client"
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Phone, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const menuItems = [
  { title: "خانه", href: "/" },
  { title: "خدمات", href: "#services" },
  { title: "درباره ما", href: "#about" },
  { title: "نمونه کارها", href: "#portfolio" },
  { title: "تماس", href: "#contact" },
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
    <header className="fixed top-0 left-0 right-0 z-50 p-6">
      <div
        className={`mx-auto max-w-6xl flex items-center justify-between h-14 rounded-2xl px-6 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/60 backdrop-blur-lg shadow-sm border border-primary/5" 
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link 
          href="/" 
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
        >
          آبانیت
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1">
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
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button
            size="sm"
            className="bg-primary/10 hover:bg-primary/20 text-primary rounded-xl px-4"
          >
            تماس با ما
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-3">
          <Button
            size="sm"
            className="bg-primary/10 hover:bg-primary/20 text-primary rounded-xl px-4 flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
            تماس
          </Button>
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-primary/5 rounded-xl h-9 w-9"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right"
              className="w-[300px] p-0"
            >
              <SheetHeader className="p-6 border-b">
                <SheetTitle className="text-right text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  آبانیت
                </SheetTitle>
              </SheetHeader>
              <div className="py-6 px-4 flex flex-col items-stretch gap-2">
                <nav className="flex flex-col items-stretch gap-1 w-full">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="w-full px-4 py-2.5 text-right text-sm font-medium text-foreground/70 hover:text-primary rounded-lg hover:bg-primary/5 transition-colors flex items-center justify-end gap-2"
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
                <div className="mt-4 space-y-2">
                  <Button
                    className="w-full bg-primary/10 hover:bg-primary/20 text-primary rounded-xl flex items-center justify-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    تماس با ما
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}


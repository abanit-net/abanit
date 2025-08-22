"use client";

import Link from "next/link";
import { ServerIcon, MonitorIcon, BrainCircuitIcon, PaletteIcon, LayoutGridIcon, HardDriveIcon } from 'lucide-react';
import { motion } from "framer-motion";
import About from "./About";
import { useRef, useState } from "react";

const services = [
  {
    title: "مشاوره، راه اندازى و پشتیبانى شبکه",
    description: "زیرساخت‌های IT و راهکارهای شبکه‌ای",
    icon: ServerIcon,
    href: "/services/network",
    color: "from-cyan-400 to-blue-500"
  },
  {
    title: "طراحى سایت‌های حرفه‌ای و سئو",
    description: "توسعه وب‌سایت و بهینه‌سازی موتورهای جستجو",
    icon: MonitorIcon,
    href: "/services/web",
    color: "from-indigo-400 to-purple-500"
  },
  {
    title: "هوش مصنوعى و برنامه نویسى",
    description: "راهکارهای هوشمند و توسعه نرم‌افزار",
    icon: BrainCircuitIcon,
    href: "/services/ai",
    color: "from-fuchsia-400 to-pink-500"
  },
  {
    title: "طراحى گرافیک و سوشال مدیا",
    description: "محتوای بصری و مدیریت شبکه‌های اجتماعی",
    icon: PaletteIcon,
    href: "/services/design",
    color: "from-orange-400 to-red-500"
  },
  {
    title: "طراحى رابط و تجربه کاربرى",
    description: "UI/UX و طراحی تعاملی",
    icon: LayoutGridIcon,
    href: "/services/ux",
    color: "from-green-400 to-emerald-500"
  },
  {
    title: "واردات تجهیزات کامپیوترى",
    description: "سرور، کامپیوتر، لپ‌تاپ و قطعات",
    icon: HardDriveIcon,
    href: "/services/hardware",
    color: "from-blue-400 to-violet-500"
  }
];

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  color: string;
}

function ServiceCard({ service }: { service: Service }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateXValue = (e.clientY - centerY) / 20;
    const rotateYValue = (centerX - e.clientX) / 20;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);

    // Calculate glow position
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setGlowPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const Icon = service.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
      whileHover={{ scale: 1.02 }}
    >
      <Link href={service.href}>
        <div className="relative overflow-hidden rounded-[2rem] p-6 h-full bg-background/80 backdrop-blur-xl border border-primary/10 shadow-sm group">
          {/* Animated glow effect */}
          <div
            className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at ${glowPosition.x}px ${glowPosition.y}px, rgba(0, 200, 255, 0.15) 0%, transparent 50%)`,
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
            }}
          />

          <div className="relative z-10">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-4`}>
              <Icon className="w-full h-full text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
            
            <div className="mt-4 flex items-center text-primary font-semibold group-hover:text-primary/80 transition-colors">
              <span>اطلاعات بیشتر</span>
              <svg className="w-5 h-5 mr-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function Services() {
  return (
    <>
      {/* About is full-bleed and should live outside the constrained container */}
      <About />
      <section className="py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">خدمات ما</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            راهکارهای جامع دیجیتال برای کسب‌وکار شما
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.href}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

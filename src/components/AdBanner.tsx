"use client"

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Ad = {
  id: string;
  logo: string; // public path
  title: string;
  subtitle?: string;
  bg?: string; // tailwind bg class or inline color
}

const ads: Ad[] = [
  { id: 'stoker', logo: '/img/logo/لوگو استوکر.png', title: 'استوکر', subtitle: 'فروشگاه آنلاین', bg: 'from-cyan-500/80 to-cyan-400' },
  { id: 'mobotelo', logo: '/img/logo/موبوتلو.png', title: 'موبوتلو', subtitle: 'سرویس موبایل', bg: 'from-orange-400/80 to-orange-300' },
  { id: 'digiactive', logo: '/img/logo/دیجی اکتیو.png', title: 'دیجی اکتیو', subtitle: 'فروشگاه آنلاین', bg: 'from-violet-500/80 to-violet-400' }
];

export default function AdBanner() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % ads.length), 5000);
    return () => clearInterval(t);
  }, []);

  const current = ads[index];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl backdrop-blur-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className={`w-full p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r ${current.bg} text-white flex items-center gap-3 sm:gap-6 group relative overflow-hidden`}
          >
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center p-2 sm:p-2.5 border border-white/10 shadow-inner">
              <Image src={current.logo} alt={current.title} width={48} height={48} className="w-8 h-8 sm:w-10 sm:h-10 object-contain filter drop-shadow-md" />
            </div>
            <div className="flex-1 space-y-0.5 sm:space-y-1">
              <div className="font-semibold text-base sm:text-lg tracking-wide">{current.title}</div>
              {current.subtitle && (
                <div className="text-xs sm:text-sm text-white/90 font-medium">{current.subtitle}</div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <motion.a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium tracking-wide backdrop-blur-sm border border-white/10 transition-colors duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                مشاهده
              </motion.a>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-black/5 rounded-full blur-2xl" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

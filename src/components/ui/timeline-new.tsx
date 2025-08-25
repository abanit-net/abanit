import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimelineItem {
  number: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function InteractiveTimeline({ items }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Auto-advance with scroll
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % items.length;
        if (window.innerWidth < 768) {
          const nextElement = itemRefs.current[nextIndex];
          nextElement?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
          });
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovering, items.length]);

  // Handle manual selection scroll
  useEffect(() => {
    if (window.innerWidth < 768) {
      const element = itemRefs.current[activeIndex];
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }
  }, [activeIndex]);

  return (
    <div 
      className="relative w-full py-8"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="absolute top-12 left-0 right-0 h-0.5 bg-primary/10">
          <motion.div
            className="absolute top-0 right-0 h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: `${((activeIndex + 1) / items.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="relative flex flex-row-reverse justify-between items-start gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className={`relative flex-1 cursor-pointer group ${
                index === activeIndex ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: index === activeIndex ? 1 : 0.5, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-8 left-1/2 -translate-x-1/2">
                <div 
                  className={`w-8 h-8 rounded-full border-4 transition-colors duration-300 ${
                    index === activeIndex 
                      ? "border-primary bg-background" 
                      : "border-primary/30 bg-background group-hover:border-primary/60"
                  }`}
                />
              </div>
              <div className="pt-20 px-2 text-center">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3 transition-colors duration-300 ${
                  index === activeIndex 
                    ? "bg-primary text-white" 
                    : "bg-primary/10 text-primary group-hover:bg-primary/20"
                }`}>
                  {item.number}
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="flex overflow-x-auto snap-x snap-mandatory -mx-4 px-4 gap-4 no-scrollbar">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`relative flex-none w-[85vw] snap-center cursor-pointer ${
                index === activeIndex ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: index === activeIndex ? 1 : 0.5, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <div className="flex flex-row-reverse items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold ${
                    "bg-primary text-white"
                  }`}>
                    {item.number}
                  </div>
                  <div className="flex-1 text-right">
                    <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                    <p className="text-muted-foreground text-base leading-[2]">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="h-1 w-full bg-primary/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, repeat: index === activeIndex ? Infinity : 0 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 py-4">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === activeIndex 
                  ? "bg-primary" 
                  : "bg-primary/20 hover:bg-primary/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollToItem = useCallback((index: number) => {
    if (window.innerWidth >= 768) return;
    
    const container = scrollContainerRef.current;
    const item = itemRefs.current[index];
    
    if (container && item) {
      const scrollLeft = item.offsetLeft - container.offsetLeft;
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, []);

  const goToNext = useCallback(() => {
    if (isTransitioning || isHovering) return;
    
    const nextIndex = (activeIndex + 1) % items.length;
    setIsTransitioning(true);

    // First scroll to the next item
    scrollToItem(nextIndex);

    // Then update the index after scroll animation
    setTimeout(() => {
      setActiveIndex(nextIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 300);
  }, [activeIndex, isHovering, isTransitioning, items.length, scrollToItem]);

  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, [isHovering, goToNext]);

  // Scroll into view when manually changing index
  useEffect(() => {
    scrollToItem(activeIndex);
  }, [activeIndex, scrollToItem]);



  return (
    <div 
      className="relative w-full py-8"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Desktop Timeline */}
      <div className="hidden md:block">
        {/* Timeline Line */}
        <div className="absolute top-12 left-0 right-0 h-0.5 bg-primary/10">
          <motion.div
            className="absolute top-0 right-0 h-full bg-primary"
            initial={{ width: "0%" }}
            style={{ transformOrigin: "right" }}
            animate={{ width: `${((activeIndex + 1) / items.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Timeline Items */}
        <div className="relative flex justify-between items-start gap-4">
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
              {/* Dot */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2">
                <div 
                  className={`w-8 h-8 rounded-full border-4 transition-colors duration-300 ${
                    index === activeIndex 
                      ? "border-primary bg-background" 
                      : "border-primary/30 bg-background group-hover:border-primary/60"
                  }`}
                />
              </div>

              {/* Content */}
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

      {/* Mobile Timeline */}
      <div className="md:hidden">
        <div ref={scrollContainerRef} className="flex overflow-x-auto snap-x snap-mandatory -mx-4 px-4 gap-4 no-scrollbar">
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
              <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl transition-colors duration-300 ${
                    index === activeIndex 
                      ? "bg-primary/20 text-primary" 
                      : "bg-primary/5 text-primary/80"
                  }`}>
                    {item.number}
                  </div>
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                </div>
                <p className="text-muted-foreground text-base leading-[2]">
                  {item.description}
                </p>
                <div className="mt-4 h-1 bg-primary/10 rounded-full overflow-hidden">
                  {index === activeIndex && (
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ 
                        duration: 3,
                        onComplete: () => {
                          setActiveIndex((prev) => (prev + 1) % items.length);
                        }
                      }}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Progress Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === activeIndex 
                  ? "bg-primary" 
                  : "bg-primary/20"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

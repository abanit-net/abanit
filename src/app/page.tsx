import dynamic from "next/dynamic";
import "../styles/animations.css";

// Dynamic imports with loading fallback
const Hero = dynamic(() => import("@/components/sections/Hero").then(mod => ({ default: mod.Hero })), {
  loading: () => <div className="w-full h-screen animate-pulse bg-gradient-to-b from-background/5 to-background/20" />
});
const Services = dynamic(() => import("@/components/sections/Services").then(mod => ({ default: mod.Services })), {
  loading: () => <div className="w-full min-h-[50vh] animate-pulse bg-gradient-to-b from-background/5 to-background/20" />
});
const Clients = dynamic(() => import("@/components/sections/Clients").then(mod => ({ default: mod.Clients })), {
  loading: () => <div className="w-full min-h-[40vh] animate-pulse bg-gradient-to-b from-background/5 to-background/20" />
});
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(mod => ({ default: mod.FAQ })), {
  loading: () => <div className="w-full min-h-[60vh] animate-pulse bg-gradient-to-b from-background/5 to-background/20" />
});
const Footer = dynamic(() => import("@/components/sections/Footer").then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="w-full min-h-[30vh] animate-pulse bg-gradient-to-b from-background/5 to-background/20" />
});

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero section is always loaded immediately */}
      <Hero />
      
      {/* Other sections are loaded when scrolled into view */}
      <div className="relative" id="services">
        <Services />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-transparent opacity-30 pointer-events-none" />
      </div>
      
      <div className="relative bg-muted/30" id="clients">
        <Clients />
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent h-32 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent h-32 [mask-image:linear-gradient(to_top,white,transparent)]" />
      </div>
      
      <div className="relative" id="faq">
        <FAQ />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-transparent opacity-20 pointer-events-none backdrop-blur-sm" />
      </div>
      
      <Footer />
    </div>
  );
}

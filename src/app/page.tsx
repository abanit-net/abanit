import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Clients } from "@/components/sections/Clients";
import { Footer } from "@/components/sections/Footer";
import "../styles/animations.css";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Hero />
      <div className="relative">
        <Services />
        <div className="absolute inset-0 hero-gradient opacity-30 pointer-events-none" />
      </div>
      <div className="relative bg-muted/30">
        <Clients />
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent h-32" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent h-32" />
      </div>
      <Footer />
    </div>
  );
}

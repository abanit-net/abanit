import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Clients } from "@/components/sections/Clients";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Clients />
      <Footer />
    </div>
  );
}

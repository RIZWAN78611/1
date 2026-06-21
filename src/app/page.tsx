import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIInquiry from "@/components/AIInquiry";
import { Connect } from "@/components/Connect";
import WhatsAppButton from "@/components/WhatsAppButton";
import PrecisionCursor from "@/components/PrecisionCursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <PrecisionCursor />
      <Navbar />
      <Hero />
      <Connect />
      <Services />
      <Gallery />
      <About />
      <Contact />
      <Footer />
      <AIInquiry />
      <WhatsAppButton />
    </main>
  );
}

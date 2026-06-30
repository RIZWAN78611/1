import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Connect from "@/components/Connect";
import AIInquiry from "@/components/AIInquiry";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-slate-950 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <About />
      <Gallery />
      <Connect />
      <Contact />
      <Footer />
      <AIInquiry />
      <WhatsAppButton />
    </main>
  );
}

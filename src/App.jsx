import { useEffect } from "react";
import { config } from "./config";

import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  useEffect(() => {
    // Tema default
    if (config.layout.themeDefault === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Colores desde config -> CSS variables
    document.documentElement.style.setProperty("--primary", config.brand.primaryColor);
    document.documentElement.style.setProperty("--accent", config.brand.accentColor);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 text-black dark:bg-[#0b0b0c] dark:text-white">
      <main className="pb-8">
        <Hero />
        <Services />
        <Pricing />
        <FAQ />
        <Contact />
        <Footer />
      </main>

      <FloatingWhatsApp />
    </div>
  );
}

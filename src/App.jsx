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
    // Tema default (forzar estado exacto)
    const isDark = config?.layout?.themeDefault === "dark";
    document.documentElement.classList.toggle("dark", isDark);

    // Colores desde config -> CSS variables (a prueba de ediciones)
    const primary = config?.brand?.primaryColor;
    const accent = config?.brand?.accentColor;

    if (typeof primary === "string" && primary.trim()) {
      document.documentElement.style.setProperty("--primary", primary);
    }

    if (typeof accent === "string" && accent.trim()) {
      document.documentElement.style.setProperty("--accent", accent);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-950 dark:bg-[#0b0b0c] dark:text-white">
      {/* Fondo global sutil (para evitar “cortes” de color entre secciones) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-white dark:bg-[#0b0b0c]" />
        <div
          className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-60 dark:opacity-35"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.10) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute -top-56 right-[-180px] h-[520px] w-[520px] rounded-full blur-3xl opacity-40 dark:opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)",
          }}
        />
      </div>

      <main className="pb-10">
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

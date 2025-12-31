import Container from "../components/Container";
import Button from "../components/Button";
import { config } from "../config";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function Hero() {
  const waLink = buildWhatsAppLink({
    phoneE164: config.contact.whatsappNumberE164,
    text: config.contact.whatsappMessageBase,
  });

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="inicio" className="pt-10 sm:pt-14">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-10">
          {/* glow sutil dentro del card */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-40 dark:opacity-25"
               style={{ background: "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 60%)" }}
          />
          <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full blur-3xl opacity-30 dark:opacity-18"
               style={{ background: "radial-gradient(circle, rgba(255,255,255,0.14) 0%, transparent 60%)" }}
          />

          {/* Top bar */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/80 ring-1 ring-black/10 dark:bg-white/10 dark:ring-white/10">
                <span
                  className="text-sm font-extrabold"
                  style={{ color: "var(--primary)" }}
                >
                  {config.brand.logoText}
                </span>
              </div>

              <div className="text-sm font-semibold text-black/90 dark:text-white/90">
                {config.brand.name}
              </div>
            </div>

            <div className="hidden items-center gap-6 sm:flex">
              <button
                className="text-xs font-medium text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors"
                onClick={() => scrollTo("services")}
              >
                Servicios
              </button>
              <button
                className="text-xs font-medium text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors"
                onClick={() => scrollTo("pricing")}
              >
                Precios
              </button>
              <button
                className="text-xs font-medium text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors"
                onClick={() => scrollTo("faq")}
              >
                FAQ
              </button>
              <button
                className="text-xs font-medium text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors"
                onClick={() => scrollTo("contact")}
              >
                Contacto
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="mt-10 sm:mt-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[11px] font-semibold tracking-wide text-black/70 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              <span className="h-2 w-2 rounded-full bg-black/50 dark:bg-white/50" />
              Landing WhatsApp — Starter
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-black dark:text-white sm:text-6xl sm:leading-[1.05]">
              {config.content.headline}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-black/65 dark:text-white/65 sm:text-lg">
              {config.content.subheadline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={waLink} variant="primary">
                Contactar por WhatsApp
              </Button>

              <Button onClick={() => scrollTo("pricing")} variant="secondary">
                Ver precios
              </Button>
            </div>

            <p className="mt-5 text-xs text-black/50 dark:text-white/50">
              Edita todo desde <span className="font-semibold">src/config.js</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

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
    <section className="pt-8 sm:pt-10">
      <Container>
        <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-10">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[color:var(--primary)] text-black font-extrabold">
                {config.brand.logoText}
              </div>
              <div className="text-sm font-semibold text-black dark:text-white">
                {config.brand.name}
              </div>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <button
                className="text-xs text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
                onClick={() => scrollTo("services")}
              >
                Servicios
              </button>
              <button
                className="text-xs text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
                onClick={() => scrollTo("pricing")}
              >
                Precios
              </button>
              <button
                className="text-xs text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
                onClick={() => scrollTo("faq")}
              >
                FAQ
              </button>
              <button
                className="text-xs text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
                onClick={() => scrollTo("contact")}
              >
                Contacto
              </button>
            </div>
          </div>

          <div className="mt-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black dark:border-white/10 dark:bg-white/10 dark:text-white">
              <span className="h-2 w-2 rounded-full bg-black/70 dark:bg-white/70" />
              Landing WhatsApp — Starter
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-black dark:text-white sm:text-5xl">
              {config.content.headline}
            </h1>

            <p className="mt-4 text-sm leading-6 text-black/70 dark:text-white/70 sm:text-base">
              {config.content.subheadline}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={waLink} variant="primary">
                Contactar por WhatsApp
              </Button>

              <Button onClick={() => scrollTo("pricing")} variant="secondary">
                Ver precios
              </Button>
            </div>

            <p className="mt-4 text-xs text-black/50 dark:text-white/50">
              Edita todo desde <span className="font-semibold">src/config.js</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

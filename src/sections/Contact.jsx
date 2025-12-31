import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { config } from "../config";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

function onlyDigits(value = "") {
  return String(value).replace(/[^\d]/g, "");
}

export default function Contact() {
  const phone = onlyDigits(config?.contact?.whatsappNumberE164 || "");
  const email = config?.contact?.email || "hola@tudominio.com";
  const igUser = config?.contact?.instagram || "tuinstagram";

  // Reglas: wa.me/<numero_sin_mas>
  const whatsappUrl = `https://wa.me/${phone}`;

  // (Opcional) mensaje prellenado, sin romper la URL base:
  const msg = config?.contact?.whatsappMessageBase || "";
  const whatsappUrlWithText = msg
    ? `${whatsappUrl}?text=${encodeURIComponent(msg)}`
    : whatsappUrl;

  const instagramUrl = `https://instagram.com/${igUser}`;
  const mailtoUrl = `mailto:${email}`;

  return (
    <section id="contacto" className="py-14 sm:py-20">
      <Container>
        <SectionTitle
          title="Contacto"
          subtitle="Elige tu canal preferido para comenzar."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* WhatsApp */}
          <div className="rounded-2xl border border-black/10 bg-white/70 p-6 text-center shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl border border-black/10 bg-white/80 text-black/70 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              <FaWhatsapp />
            </div>

            <h3 className="mt-5 text-base font-semibold text-black dark:text-white">
              WhatsApp
            </h3>
            <p className="mt-1 text-sm text-black/60 dark:text-white/60">
              {phone ? `+${phone}` : "+56900000000"}
            </p>

            <a
              href={whatsappUrlWithText}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white hover:opacity-90 dark:bg-white dark:text-black"
            >
              <FaWhatsapp /> Contactar
            </a>
          </div>

          {/* Email */}
          <div className="rounded-2xl border border-black/10 bg-white/70 p-6 text-center shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl border border-black/10 bg-white/80 text-black/70 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              <FaEnvelope />
            </div>

            <h3 className="mt-5 text-base font-semibold text-black dark:text-white">
              Email
            </h3>
            <p className="mt-1 text-sm text-black/60 dark:text-white/60">
              {email}
            </p>

            <a
              href={mailtoUrl}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-black/5 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            >
              <FaEnvelope /> Enviar email
            </a>
          </div>

          {/* Instagram */}
          <div className="rounded-2xl border border-black/10 bg-white/70 p-6 text-center shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl border border-black/10 bg-white/80 text-black/70 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              <FaInstagram />
            </div>

            <h3 className="mt-5 text-base font-semibold text-black dark:text-white">
              Instagram
            </h3>
            <p className="mt-1 text-sm text-black/60 dark:text-white/60">
              @{igUser}
            </p>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-black/5 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            >
              <FaInstagram /> Ver perfil
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-black/50 dark:text-white/50">
          Todo editable en <code>src/config.js</code>
        </p>
      </Container>
    </section>
  );
}

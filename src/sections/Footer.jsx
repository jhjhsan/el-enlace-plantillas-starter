import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { config } from "../config";
import Container from "../components/Container";

function onlyDigits(value = "") {
  return String(value).replace(/[^\d]/g, "");
}

export default function Footer() {
  const brandName = config?.brand?.name || "Tu Marca";
  const logoText = config?.brand?.logoText || "TM";

  const email = config?.contact?.email || "hola@tudominio.com";
  const igUser = config?.contact?.instagram || "tuinstagram";

  const phone = onlyDigits(config?.contact?.whatsappNumberE164 || "");
  const baseMsg = config?.contact?.whatsappMessageBase || "";

  const instagramUrl = `https://instagram.com/${igUser}`;
  const mailtoUrl = `mailto:${email}`;
  const whatsappBase = phone ? `https://wa.me/${phone}` : "https://wa.me/56900000000";
  const whatsappUrl = baseMsg
    ? `${whatsappBase}?text=${encodeURIComponent(baseMsg)}`
    : whatsappBase;

  return (
    <footer className="mt-16 border-t border-black/10 py-10 dark:border-white/10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-black/10 bg-white/70 font-extrabold text-black shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white">
              {logoText}
            </div>

            <div>
              <p className="text-sm font-semibold text-black/90 dark:text-white/90">
                {brandName}
              </p>
              <p className="mt-1 text-xs text-black/50 dark:text-white/50">
                © {new Date().getFullYear()}. Todos los derechos reservados.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold text-black/80 hover:bg-black/5 dark:border-white/10 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/15"
            >
              <FaWhatsapp /> WhatsApp
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold text-black/80 hover:bg-black/5 dark:border-white/10 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/15"
            >
              <FaInstagram /> Instagram
            </a>

            <a
              href={mailtoUrl}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold text-black/80 hover:bg-black/5 dark:border-white/10 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/15"
            >
              <FaEnvelope /> Email
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-black/45 dark:text-white/45">
          Todo editable en <code>src/config.js</code>
        </p>
      </Container>
    </footer>
  );
}

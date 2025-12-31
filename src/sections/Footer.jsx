import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { config } from "../config";

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
    <footer className="bg-slate-950 text-white py-8 mt-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-3">
          <div className="bg-white text-slate-900 rounded-full w-10 h-10 flex items-center justify-center font-bold">
            {logoText}
          </div>
          <div>
            <p className="font-semibold">{brandName}</p>
            <p className="text-xs opacity-70">
              © {new Date().getFullYear()}. Todos los derechos reservados.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 opacity-80 hover:opacity-100"
          >
            <FaWhatsapp /> <span>WhatsApp</span>
          </a>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 opacity-80 hover:opacity-100"
          >
            <FaInstagram /> <span>Instagram</span>
          </a>

          <a
            href={mailtoUrl}
            className="inline-flex items-center gap-2 opacity-80 hover:opacity-100"
          >
            <FaEnvelope /> <span>Email</span>
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-white/40 mt-6">
        Todo editable en <code>src/config.js</code>
      </p>
    </footer>
  );
}

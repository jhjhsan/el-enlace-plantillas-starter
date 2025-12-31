import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { config } from "../config";

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
    <section id="contacto" className="py-16 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
        {/* WhatsApp */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
          <p className="opacity-70">{phone ? `+${phone}` : "+56900000000"}</p>
          <a
            href={whatsappUrlWithText}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-4 bg-white text-slate-900 px-5 py-2 rounded-full font-medium hover:opacity-90"
          >
            <FaWhatsapp /> Contactar
          </a>
        </div>

        {/* Email */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="opacity-70">{email}</p>
          <a
            href={mailtoUrl}
            className="inline-flex items-center gap-2 mt-4 border border-white/20 px-5 py-2 rounded-full hover:border-white/40"
          >
            <FaEnvelope /> Enviar email
          </a>
        </div>

        {/* Instagram */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold mb-2">Instagram</h3>
          <p className="opacity-70">@{igUser}</p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-4 border border-white/20 px-5 py-2 rounded-full hover:border-white/40"
          >
            <FaInstagram /> Ver perfil
          </a>
        </div>
      </div>

      <p className="text-center text-sm text-white/50 mt-6">
        Todo editable en <code>src/config.js</code>
      </p>
    </section>
  );
}

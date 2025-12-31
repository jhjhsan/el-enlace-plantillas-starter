import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const config = {
    contact: {
      whatsappNumber: "+56900000000",
      whatsappUrl: "https://wa.me/56900000000",
      email: "hola@tudominio.com",
      instagramUser: "tuinstagram",
      instagramUrl: "https://instagram.com/tuinstagram",
    },
  };

  return (
    <section className="py-16 bg-[#111] text-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* WhatsApp */}
        <div>
          <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
          <p className="opacity-70">{config.contact.whatsappNumber}</p>
          <a
            href={config.contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-4 bg-[#E3B455] px-5 py-2 rounded-full text-black font-medium hover:opacity-90"
          >
            <FaWhatsapp /> Contactar
          </a>
        </div>

        {/* Email */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="opacity-70">{config.contact.email}</p>
          <a
            href={`mailto:${config.contact.email}`}
            className="inline-flex items-center gap-2 mt-4 border border-white/20 px-5 py-2 rounded-full hover:border-white/40"
          >
            <FaEnvelope /> Enviar email
          </a>
        </div>

        {/* Instagram */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Instagram</h3>
          <p className="opacity-70">@{config.contact.instagramUser}</p>
          <a
            href={config.contact.instagramUrl}
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

import { FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const config = {
    contact: {
      email: "hola@tudominio.com",
      instagramUrl: "https://instagram.com/tuinstagram",
    },
  };

  return (
    <footer className="bg-[#0a0a0a] text-white py-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-3">
          <div className="bg-[#E3B455] text-black rounded-full w-10 h-10 flex items-center justify-center font-bold">
            TM
          </div>
          <div>
            <p className="font-semibold">Tu Marca</p>
            <p className="text-xs opacity-70">© 2025. Todos los derechos reservados.</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <a href={config.contact.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 opacity-80 hover:opacity-100">
            <FaInstagram /> <span>Instagram</span>
          </a>

          <a href={`mailto:${config.contact.email}`} className="inline-flex items-center gap-2 opacity-80 hover:opacity-100">
            <FaEnvelope /> <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

import { config } from "../config";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function FloatingWhatsApp() {
  const waLink = buildWhatsAppLink({
    phoneE164: config?.contact?.whatsappNumberE164 || "",
    text: config?.contact?.whatsappMessageBase || "",
  });

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-4 py-3 text-sm font-bold text-black shadow-lg hover:opacity-90 active:scale-[0.99]"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
    >
      WhatsApp
      <span className="rounded-full bg-black/10 px-2 py-1 text-[10px] font-semibold">
        Chat
      </span>
    </a>
  );
}

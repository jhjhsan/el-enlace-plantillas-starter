export function buildWhatsAppLink({ phoneE164, text }) {
  const phone = String(phoneE164 || "").replace(/[^\d]/g, "");
  const encoded = encodeURIComponent(text || "");

  if (!phone) return "https://wa.me/";

  return encoded ? `https://wa.me/${phone}?text=${encoded}` : `https://wa.me/${phone}`;
}

export function buildWhatsAppLink({ phoneE164, text }) {
  const encoded = encodeURIComponent(text || "");
  return `https://wa.me/${phoneE164}?text=${encoded}`;
}

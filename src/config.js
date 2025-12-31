export const config = {
  brand: {
    name: "El Enlace Plantillas",
    logoText: "EL",
    primaryColor: "#D8A353",
    accentColor: "#00BFFF",
  },

  contact: {
    whatsappNumberE164: "56900000000",
    whatsappMessageBase: "Hola! Vengo desde tu landing. Quiero más info 👋",
    email: "hola@tudominio.com",
    instagram: "el-enlace-plantillas",
  },

  content: {
    headline: "Vende más por WhatsApp con una landing lista para usar",
    subheadline:
      "Template moderno, rápido y editable desde un solo archivo. Cambia textos, colores y links en minutos.",
    services: [
      {
        title: "Landing 1 página",
        description:
          "Secciones esenciales para convertir: hero, servicios, precios, FAQ y contacto.",
      },
      {
        title: "CTA a WhatsApp",
        description:
          "Botón principal + botón flotante sticky para maximizar mensajes.",
      },
      {
        title: "Editable en 1 archivo",
        description:
          "Todo vive en src/config.js para evitar soporte y personalización.",
      },
    ],
    faqs: [
      { q: "¿Necesito backend?", a: "No. Es 100% frontend (React + Vite + Tailwind)." },
      { q: "¿Cómo cambio el WhatsApp?", a: "Edita whatsappNumberE164 en src/config.js." },
      { q: "¿Incluye instalación?", a: "No. Es DIY: template + instrucciones." },
      { q: "¿Puedo usarlo para clientes?", a: "Sí. Puedes usarlo para proyectos propios o de clientes." },
      { q: "¿Puedo cambiar colores y textos?", a: "Sí. Todo se cambia desde src/config.js." },
      { q: "¿Funciona en móvil?", a: "Sí. Es mobile-first y responsive." },
    ],
  },

  pricing: {
    currency: "USD",
    plans: [
      { name: "Básico", price: "8", features: ["1 página", "WhatsApp", "Responsive"] },
      { name: "Pro", price: "19", features: ["Secciones completas", "Mejor diseño", "Más conversión"], highlight: true },
      { name: "Plus", price: "29", features: ["Ideal para agencias", "Listo para clonar", "Deploy rápido"] },
    ],
  },

 layout: {
  themeDefault: "light",
  enableThemeToggle: false,
},
};



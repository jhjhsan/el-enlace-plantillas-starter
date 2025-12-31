import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { config } from "./config";

/**
 * ✅ Limpieza total:
 * Elimina cualquier rastro de modo oscuro previo
 * (Evita que Vercel o el navegador guarden "dark" en localStorage o classList)
 */
document.documentElement.classList.remove("dark");
document.body.classList.remove("dark");
document.getElementById("root")?.classList.remove("dark");

// 🔆 Modo claro fijo para este proyecto
document.documentElement.classList.add("light");

// 🎨 Variables de color personalizadas
const primary = config?.brand?.primaryColor;
const accent = config?.brand?.accentColor;

if (typeof primary === "string" && primary.trim()) {
  document.documentElement.style.setProperty("--primary", primary);
}
if (typeof accent === "string" && accent.trim()) {
  document.documentElement.style.setProperty("--accent", accent);
}

// 🚀 Render principal
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

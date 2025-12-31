import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { config } from "./config";

// Aplicar tema + variables ANTES del primer render (evita inconsistencias / flashes)
const isDark = config?.layout?.themeDefault === "dark";
document.documentElement.classList.toggle("dark", isDark);

const primary = config?.brand?.primaryColor;
const accent = config?.brand?.accentColor;

if (typeof primary === "string" && primary.trim()) {
  document.documentElement.style.setProperty("--primary", primary);
}
if (typeof accent === "string" && accent.trim()) {
  document.documentElement.style.setProperty("--accent", accent);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

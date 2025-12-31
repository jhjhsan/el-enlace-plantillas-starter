import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { config } from "./config";

/**
 * ✅ Limpieza total:
 * evita que body/#root conserven "dark" y activen el modo oscuro por el CSS
 */
document.documentElement.classList.remove("dark");
document.body.classList.remove("dark");
document.getElementById("root")?.classList.remove("dark");

// Aplicar tema según config (control único)
const isDark = config?.layout?.themeDefault === "dark";
if (isDark) document.documentElement.classList.add("dark");

// Variables de color
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

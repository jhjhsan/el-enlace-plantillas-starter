import Container from "../components/Container";
import { config } from "../config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10">
      <Container>
        <div className="flex flex-col gap-3 rounded-3xl border border-black/10 bg-white/70 p-6 text-sm text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-2xl bg-[color:var(--primary)] text-black font-extrabold">
              {config.brand.logoText}
            </div>
            <div>
              <div className="font-semibold text-black dark:text-white">
                {config.brand.name}
              </div>
              <div className="text-xs">© {year}. Todos los derechos reservados.</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              className="underline"
              href={`https://instagram.com/${config.contact.instagram}`}
              target="_blank"
              rel="noreferrer"
            >
              📷 Instagram
            </a>
            <a className="underline" href={`mailto:${config.contact.email}`}>
              ✉️ Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

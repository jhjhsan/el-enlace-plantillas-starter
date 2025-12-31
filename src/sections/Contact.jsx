import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import Button from "../components/Button";
import { config } from "../config";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function Contact() {
  const waLink = buildWhatsAppLink({
    phoneE164: config.contact.whatsappNumberE164,
    text: config.contact.whatsappMessageBase,
  });

  return (
    <section id="contact" className="py-12 sm:py-16">
      <Container>
        <SectionTitle
          title="Contacto"
          subtitle="Sin backend, sin formularios: contacto directo."
        />

        <Card>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-black dark:text-white">
                WhatsApp
              </div>
              <div className="mt-1 text-xs text-black/60 dark:text-white/60">
                +{config.contact.whatsappNumberE164}
              </div>
              <div className="mt-3">
                <Button href={waLink} variant="primary">
                  💬 Contactar
                </Button>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-black dark:text-white">
                Email
              </div>
              <div className="mt-1 text-xs text-black/60 dark:text-white/60">
                {config.contact.email}
              </div>
              <div className="mt-3">
                <Button
                  href={`mailto:${config.contact.email}`}
                  variant="secondary"
                >
                  ✉️ Enviar email
                </Button>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-black dark:text-white">
                Instagram
              </div>
              <div className="mt-1 text-xs text-black/60 dark:text-white/60">
                @{config.contact.instagram}
              </div>
              <div className="mt-3">
                <Button
                  href={`https://instagram.com/${config.contact.instagram}`}
                  variant="secondary"
                >
                  📷 Ver perfil
                </Button>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs text-black/50 dark:text-white/50">
            Todo editable en <span className="font-semibold">src/config.js</span>
          </p>
        </Card>
      </Container>
    </section>
  );
}

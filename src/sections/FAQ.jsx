import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { config } from "../config";

export default function FAQ() {
  return (
    <section id="faq" className="py-12 sm:py-16">
      <Container>
        <SectionTitle
          title="Preguntas frecuentes"
          subtitle="Respuestas rápidas para evitar soporte."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {config.content.faqs.map((item, idx) => (
            <Card key={idx}>
              <details>
                <summary className="cursor-pointer text-sm font-semibold text-black dark:text-white">
                  {item.q}
                </summary>
                <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                  {item.a}
                </p>
              </details>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

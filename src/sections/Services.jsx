import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { config } from "../config";

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16">
      <Container>
        <SectionTitle
          title="Servicios"
          subtitle="Lo esencial para convertir visitas en mensajes."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {config.content.services.map((s, idx) => (
            <Card key={idx}>
              <h3 className="text-base font-semibold text-black dark:text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                {s.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

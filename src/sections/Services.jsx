import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { config } from "../config";

export default function Services() {
  return (
    <section id="services" className="py-14 sm:py-20">
      <Container>
        <SectionTitle
          title="Servicios"
          subtitle="Lo esencial para convertir visitas en mensajes."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {config.content.services.map((s, idx) => (
            <Card key={idx} className="group">
              <div className="flex flex-col">
             <h3 className="text-lg font-semibold text-black dark:text-white">
  {s.title}
</h3>
<p className="mt-2 text-[15px] leading-relaxed text-black/70 dark:text-white/70 sm:text-base">
  {s.description}
</p>

                {/* detalle visual mínimo para “premium” */}
                <div className="mt-6 h-px w-full bg-black/5 dark:bg-white/10" />
                <p className="mt-3 text-xs text-black/45 dark:text-white/45">
                  Listo para editar en <span className="font-semibold">src/config.js</span>
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}


import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { config } from "../config";

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 sm:py-16">
      <Container>
        <SectionTitle
          title="Precios"
          subtitle="Elige el plan que mejor calce con tu necesidad."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {config.pricing.plans.map((p, idx) => (
            <Card
              key={idx}
              className={p.highlight ? "ring-2 ring-[color:var(--primary)]" : ""}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-base font-semibold text-black dark:text-white">
                  {p.name}
                </h3>
                {p.highlight ? (
                  <span className="rounded-full bg-[color:var(--primary)] px-2 py-1 text-[10px] font-semibold text-black">
                    Recomendado
                  </span>
                ) : null}
              </div>

              <div className="mt-4 flex items-end gap-2">
                <div className="text-3xl font-extrabold text-black dark:text-white">
                  {config.pricing.currency} {p.price}
                </div>
                <div className="pb-1 text-xs text-black/60 dark:text-white/60">
                  / pago único
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-black/70 dark:text-white/70">
                {p.features.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-black/60 dark:bg-white/60" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

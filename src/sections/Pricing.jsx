import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { config } from "../config";

export default function Pricing() {
  return (
    <section id="precios" className="py-14 sm:py-20">
      <Container>
        <SectionTitle
          title="Precios"
          subtitle="Elige el plan que mejor calce con tu necesidad."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {config.pricing.plans.map((p, idx) => {
            const featured = !!p.highlight;

            return (
              <Card
                key={idx}
                className={[
                  "relative overflow-hidden transition-all",
                  "hover:-translate-y-0.5 hover:shadow-md",
                  featured ? "ring-2 ring-[color:var(--primary)]" : "",
                ].join(" ")}
              >
                {featured ? (
                  <div className="absolute top-4 left-6">
                    <span className="rounded-full bg-[color:var(--primary)] px-3 py-1 text-[11px] font-semibold text-black">
                      Recomendado
                    </span>
                  </div>
                ) : null}

                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight text-black dark:text-white">
                    {p.name}
                  </h3>
                </div>

                <div className="mt-6 flex items-end gap-2">
                  <div className="text-4xl font-extrabold tracking-tight text-black dark:text-white">
                    {config.pricing.currency} {p.price}
                  </div>
                  <div className="pb-1 text-xs text-black/60 dark:text-white/60">
                    / pago único
                  </div>
                </div>

                <div className="mt-6 h-px w-full bg-black/5 dark:bg-white/10" />

                <ul className="mt-5 space-y-3 text-sm text-black/65 dark:text-white/65">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        className="mt-[7px] h-1.5 w-1.5 rounded-full"
                        style={{
                          backgroundColor: featured ? "var(--primary)" : undefined,
                        }}
                      />
                      <span className="leading-6">{f}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

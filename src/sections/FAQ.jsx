import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { config } from "../config";

export default function FAQ() {
  return (
    <section id="faq" className="py-14 sm:py-20">
      <Container>
        <SectionTitle
          title="Preguntas frecuentes"
          subtitle="Respuestas rápidas para evitar soporte."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {config.content.faqs.map((item, idx) => (
            <Card key={idx} className="p-0 overflow-hidden">
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 sm:p-6">
                  <span className="text-sm sm:text-base font-semibold text-black dark:text-white">
                    {item.q}
                  </span>

                  {/* chevron (CSS puro, sin librerías) */}
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-black/10 text-black/60 transition-transform duration-200 group-open:rotate-180 dark:border-white/10 dark:text-white/60">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="h-px w-full bg-black/5 dark:bg-white/10" />

                <p className="p-5 sm:p-6 text-sm leading-6 text-black/65 dark:text-white/65">
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

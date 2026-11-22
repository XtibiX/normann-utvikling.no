import { ArrowDownRight, ArrowRight } from "lucide-react";

const events = [
  { key: "embriq", value: "quant · smart-grid", year: "2012" },
  { key: "proteket", value: "bestillingssystem · java", year: "2014" },
  { key: "embriq", value: "gruppeleder · quant", year: "2015" },
  { key: "statnett", value: "hr-integrasjon · jwt", year: "2016" },
  { key: "statnett", value: "ems-integrasjon · camel", year: "2018" },
  { key: "sparebank1", value: "meldings-api → kafka", year: "2019" },
  { key: "sparebank1", value: "kotlin-migrering · aws", year: "2021" },
  { key: "ruter", value: "passasjertelling · streams", year: "2023" },
  { key: "tet-digital", value: "snowflake · dataplattform", year: "2023" },
  { key: "normann", value: "tech lead · selvstendig", year: "2023" },
  { key: "ruter", value: "apc + dørstatus · eks", year: "2024" },
  { key: "tet-digital", value: "github actions · argocd", year: "2026" },
  { key: "tet-digital", value: "reiseinnsikt · tech lead", year: "2026" },
];

const stats = [
  { value: "14+", label: "år med backend-utvikling" },
  { value: "11+", label: "år som gruppeleder og tech lead" },
  { value: "3", label: "sektorer: finans, transport, energi" },
];

const StreamPanel = () => {
  // Rendered twice so the -50% translate loops seamlessly.
  const rows = [...events, ...events];
  return (
    <div
      className="relative overflow-hidden rounded-lg border border-ink bg-ink font-mono text-[12px] text-paper shadow-[12px_12px_0_0_hsl(var(--signal))]"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-paper/10 px-4 py-3">
        <span className="text-paper/60">
          topic <span className="text-paper">normann.karriere</span>
        </span>
        <span className="flex items-center gap-2 text-signal">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-signal" />
          live
        </span>
      </div>
      <div className="border-b border-paper/10 px-4 py-2 text-paper/45">
        $ consume --from-beginning --partition 0
      </div>
      <div className="relative h-72 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]">
        <ul className="animate-stream">
          {rows.map((e, i) => (
            <li key={i} className="grid grid-cols-[3.5rem_6.5rem_1fr] gap-2 border-b border-paper/5 px-4 py-2.5">
              <span className="text-paper/35">{String((i % events.length) + 1).padStart(4, "0")}</span>
              <span className="truncate text-signal">{e.key}</span>
              <span className="flex justify-between gap-2 text-paper/80">
                <span className="truncate">{e.value}</span>
                <span className="hidden text-paper/35 sm:inline">{e.year}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between border-t border-paper/10 px-4 py-2 text-paper/40">
        <span>lag 0</span>
        <span>commit ok</span>
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="grid-lines pointer-events-none absolute inset-0" />

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-8 flex items-center gap-3" data-reveal>
              <span className="h-px w-8 bg-ink/30" />
              Tech Lead &amp; backend-utvikler
            </p>
            <h1
              className="text-[clamp(4rem,13vw,10.5rem)] leading-[0.82]"
              data-reveal
              style={{ transitionDelay: "80ms" }}
            >
              Normann
              <br />
              <em className="italic">Utvikling</em>
              <span className="text-signal">.</span>
            </h1>
            <p
              className="mt-10 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl"
              data-reveal
              style={{ transitionDelay: "160ms" }}
            >
              14+ års erfaring med backend-utvikling, arkitektur og teknisk ledelse. Spesialisert på{" "}
              <span className="text-ink">Kotlin/Spring Boot</span>, <span className="text-ink">Kafka Streams</span>,
              skalerbare skyløsninger og <span className="text-ink">AI-assistert utvikling</span>.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row" data-reveal style={{ transitionDelay: "240ms" }}>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-paper transition-colors hover:bg-signal hover:text-ink"
              >
                Ta kontakt
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#experience"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-ink/25 px-7 py-3.5 transition-colors hover:border-ink"
              >
                Se erfaring
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-6" data-reveal style={{ transitionDelay: "320ms" }}>
            <StreamPanel />
          </div>
        </div>

        <dl className="mt-24 grid border-t border-ink/15 sm:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex items-baseline gap-4 border-b border-ink/15 py-6 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-serif text-6xl leading-none">{s.value}</dd>
              <dd className="max-w-[12rem] text-sm leading-snug text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

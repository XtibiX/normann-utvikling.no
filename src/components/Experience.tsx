import { SectionHeading } from "@/components/SectionHeading";

const experiences = [
  {
    period: "2023 – i dag",
    company: "Normann Utvikling",
    role: "Selvstendig, Tech Lead & Fullstack-utvikler",
    description: "Konsulentoppdrag med fokus på teknisk ledelse og fullstack-utvikling.",
    highlights: [],
    current: true,
  },
  {
    period: "04.2026 – i dag",
    company: "TET Digital",
    role: "Tech Lead – Reiseinnsikt",
    description:
      "Teknisk ansvar for Reiseinnsikt, etablert ved sammenslåing av teamene Passasjertelling og Observert Trafikk. Utvidet ansvar for arkitektur, teknisk retning og leveranser på tvers av begge fagområdene.",
    highlights: [
      "Leder sammenslåingen av to team til ett felles team med felles arkitektur og arbeidsform",
      "Gjennomførte migrering fra GitLab til GitHub, med GitHub Actions for CI/CD",
      "Innfører GitOps-basert utrulling med ArgoCD på AWS EKS",
      "Tar i bruk AI-assistert utvikling med Claude Code og agenter i teamets daglige arbeid",
      "Bygger teamets «Second Brain» – en felles kunnskapsbase som samler kode, Notion-dokumentasjon, Snowflake-tabeller og dbt-modeller, tilgjengelig for både utviklere og AI-agenter",
    ],
    current: true,
  },
  {
    period: "02.2023 – 03.2026",
    company: "Ruter → TET Digital",
    role: "Tech Lead – Team Passasjertelling",
    description:
      "Ansvar for standardisering og behandling av kjøretøydata (APC og dørstatus) for kollektivtransport. Teamet startet i Ruter og ble fra 2025 en del av TET Digital, da utviklingsmiljøet i Ruter ble skilt ut i eget selskap.",
    highlights: [
      "Bygget nytt team fra grunnen med fokus på sanntidsovervåkning av passasjertrafikk",
      "Implementerte Kafka Streams og AWS EKS for skalerbar dataarkitektur",
      "Første team i TET Digital som tok i bruk Snowflake som dataplattform",
      "Kotlin/Spring Boot med JDK 21, MQTT, og ML-modeller for prediksjoner",
    ],
  },
  {
    period: "01.2019 – 01.2023",
    company: "Sparebank 1",
    role: "Backend-utvikler – Dialog & Salg",
    description:
      "Design og utvikling av backend-infrastruktur for kunde-bank kommunikasjon med fokus på API-design og meldingshåndtering.",
    highlights: [
      "Hovedansvar for nytt meldings REST-API med sanntidshåndtering over Kafka",
      "Implementerte transaksjonell persistering med Kafka og PostgreSQL",
      "Migrerte backend til Kotlin/Spring Boot på Sparebank1s plattform",
      "OpenAPI/Swagger kontraktstyrt API-design for CRM-integrasjoner",
      "AWS migrering med GitHub Actions CI/CD",
    ],
  },
  {
    period: "03.2018 – 01.2019",
    company: "Statnett SF",
    role: "Integrasjonsutvikler",
    description: "Design og utvikling av integrasjoner for EMS-bytte i det sentrale elektrisitetsnettet.",
    highlights: [
      "Guaranteed delivery mellom systemer med Enterprise Integration Patterns",
      "Tilgjengeliggjøring av nettmodell i GraphDB via REST API",
      "Apache Camel, Red Hat Fuse, Docker, OpenShift",
    ],
  },
  {
    period: "01.2015 – 10.2016",
    company: "Nettalliansen – Embriq Quant",
    role: "Backend-utvikler & Integrasjonsansvarlig",
    description:
      "Utvikling av backend-infrastruktur for Smart Grid-plattform med fokus på integrasjoner og datahåndtering.",
    highlights: [
      "Backend-utvikling for kritisk plattform med høyt transaksjonsvolum",
      "Ansvar for integrasjoner mellom systemkomponenter og kundesystemer",
      "Java/Spring backend med Oracle DB og JMS",
      "SOAP WebServices og REST API-integrasjoner",
      "Smidig utvikling med Scrum/Kanban",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-28 sm:py-36">
      <div className="container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          label="Erfaring"
          title={
            <>
              En logg over
              <br />
              <em className="italic">systemer som betyr noe.</em>
            </>
          }
          lead="14+ års erfaring fra ledende norske selskaper innen offentlig og privat sektor."
        />

        <ol className="mt-20">
          {experiences.map((exp, i) => (
            <li
              key={exp.company + exp.period}
              className="group grid gap-6 border-t border-ink/15 py-12 lg:grid-cols-12 lg:gap-8"
              data-reveal
            >
              <div className="flex items-start justify-between gap-4 lg:col-span-3 lg:flex-col lg:justify-start">
                <div>
                  <p className="font-mono text-xs text-muted-foreground">
                    offset {String(experiences.length - 1 - i).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-mono text-sm">{exp.period}</p>
                </div>
                {exp.current && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-signal/40 bg-signal/10 px-3 py-1 font-mono text-[11px] text-signal-ink">
                    <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-signal" />
                    pågående
                  </span>
                )}
              </div>

              <div className="lg:col-span-9">
                <h3 className="text-4xl leading-none transition-colors group-hover:text-signal-ink sm:text-5xl">
                  {exp.company}
                </h3>
                <p className="mt-3 font-medium">{exp.role}</p>
                <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">{exp.description}</p>
                {exp.highlights.length > 0 && (
                  <ul className="mt-8 grid gap-x-10 gap-y-3 md:grid-cols-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm leading-relaxed">
                        <span className="font-mono text-signal-ink">→</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

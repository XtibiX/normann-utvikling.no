import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

interface Engagement {
  period: string;
  company: string;
  role: string;
  description: string;
  highlights: string[];
  current?: boolean;
}

const experiences: Engagement[] = [
  {
    period: "04.2026 – i dag",
    company: "TET Digital",
    role: "Tech Lead – Reiseinnsikt",
    description:
      "Teknisk ansvar for Reiseinnsikt, etablert ved sammenslåing av teamene Passasjertelling og Observert Trafikk. Utvidet ansvar for arkitektur, teknisk retning og leveranser på tvers av begge fagområdene.",
    highlights: [
      "Leder sammenslåingen av to team til ett team med felles arkitektur og arbeidsform",
      "Innfører GitOps-basert utrulling med ArgoCD på AWS EKS, med CI/CD i GitHub Actions",
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
      "Nøkkelteam med ansvar for standardisering og behandling av kjøretøydata (APC og dørstatus) for kollektivtransport. Teamet eier applikasjonene som håndterer MQTT-datastrømmer fra kjøretøy, og leverer sanntidsinformasjon om passasjertelling og kapasitet. Teamet startet i Ruter og ble fra 2025 en del av TET Digital, da utviklingsmiljøet i Ruter ble skilt ut i eget selskap.",
    highlights: [
      "Bygget nytt team fra grunnen av, med vekt på sanntidsovervåkning av passasjertrafikk og kapasitet",
      "Skalerbar dataarkitektur med Kotlin/Spring Boot (JDK 21) og Kafka Streams på AWS EKS, med CI/CD i GitLab og Helm",
      "Første team i TET Digital som tok i bruk Snowflake, med dataprodukter for analyse og prediksjon",
      "Tett samarbeid med ML-teamet om modeller som predikerer kapasitet ut fra reisemønstre og sanntids APC-data",
      "Overvåking med DataDog og Prometheus, med varsling til Slack",
      "Kunnskapsdeling på tvers av team, og tekniske intervjuer av kandidater til TET Digital",
    ],
  },
  {
    period: "02.2023 – i dag",
    company: "Normann Utvikling",
    role: "Selvstendig, Tech Lead & backend-utvikler",
    description: "Konsulentoppdrag med fokus på teknisk ledelse, arkitektur og backend-utvikling.",
    highlights: [],
    current: true,
  },
  {
    period: "01.2019 – 01.2023",
    company: "SpareBank 1",
    role: "Fullstack-utvikler – Dialog & Salg",
    description:
      "Teamet eier kundechat, meldingspostkasse og dokumenter – kommunikasjonen mellom kunde, bot og rådgiver. Design og utvikling av backend-infrastruktur med vekt på API-design og meldingshåndtering, i et miljø med rundt 200 utviklere.",
    highlights: [
      "Hovedansvar for nytt REST-API for meldinger mellom CRM og kundeappen, med sanntidshåndtering over Kafka",
      "Implementerte transaksjonell persistering med Kafka og PostgreSQL",
      "Migrerte backend til Kotlin/Spring Boot på SpareBank 1s plattform",
      "Kontraktstyrt API-design med OpenAPI/Swagger for CRM-integrasjoner",
      "Migrering til AWS, med CI/CD i GitHub Actions",
      "Hypotesedrevet utvikling med A/B-testing, MVP-er og brukerundersøkelser",
      "Presenterte arbeidet for bankene i SpareBank 1-alliansen",
    ],
  },
];

const earlier: Engagement[] = [
  {
    period: "03.2018 – 01.2019",
    company: "Statnett SF",
    role: "Integrasjonsutvikler – EMS-bytte",
    description:
      "Design og utvikling av integrasjoner for EMS-bytte i det sentrale elektrisitetsnettet, i et prosjekt med over 150 utviklere i flere land. Teamet på tre hadde ansvar for hele verdikjeden fra design til utrulling.",
    highlights: [
      "Garantert levering (guaranteed delivery) mellom systemer med Enterprise Integration Patterns",
      "Gjorde nettmodellen tilgjengelig i GraphDB via REST-API",
      "Veiledet kunden, kartla behov og forankret design i teamet",
      "Apache Camel, Red Hat Fuse, Docker, OpenShift",
    ],
  },
  {
    period: "10.2016 – 02.2018",
    company: "Statnett SF",
    role: "Systemarkitekt / seniorutvikler – HR & lønn",
    description:
      "Integrasjon mellom nye skytjenester for HR og lønn (Bluegarden, Saba Cloud) og Statnetts interne systemer – Statnetts første bruk av skytjenester.",
    highlights: [
      "Hovedansvar for integrasjonen, med arkitektrolle i første fase",
      "Utviklet et JWT-basert sikkerhetsrammeverk for Statnett i samråd med arkitektrådet",
      "Bidro til overgangen fra fossefall til smidig, med prototyping og hyppigere leveranser",
      "Apache Camel, Red Hat Fuse, SOAP og REST",
    ],
  },
  {
    period: "01.2015 – 10.2016",
    company: "Nettalliansen – Embriq Quant",
    role: "Backend-utvikler og integrasjonsansvarlig",
    description:
      "Backend-utvikling og integrasjoner for Quant, en markedsledende plattform for smart grid i Norge, for Nettalliansen, Hafslund Nett, Agder Energi Nett, Lyse og Troms Kraft.",
    highlights: [
      "Backend-utvikling for kritisk plattform med høyt transaksjonsvolum",
      "Ansvar for integrasjoner mellom systemkomponenter og kundesystemer",
      "Java/Spring backend med Oracle DB og JMS",
      "SOAP-webtjenester og REST-API-integrasjoner",
      "Smidig utvikling med Scrum/Kanban",
    ],
  },
  {
    period: "05.2014 – 12.2014",
    company: "Proteket AS",
    role: "Fullstack-utvikler – Proteket Online 2.0",
    description: "Modernisering av et bestillings- og logistikksystem for tannteknikk.",
    highlights: ["Hovedansvar for alle miljøer", "Java 8, Spring, Hibernate og MariaDB"],
  },
  {
    period: "06.2012 – 04.2014",
    company: "Agder Energi Nett og Hafslund Nett – Embriq Quant",
    role: "Systemutvikler",
    description: "Utvikling av Quant for håndtering av måledata og smarte strømmålere (AMS).",
    highlights: ["Java/Spring, Oracle DB og JMS", "Smidig utvikling med Scrum"],
  },
];

const background = [
  {
    title: "Utdanning",
    items: [
      { period: "2009 – 2011", text: "Master i informatikk, Universitetet i Oslo" },
      { period: "2005 – 2009", text: "Bachelor i informatikk, Universitetet i Oslo" },
    ],
  },
  {
    title: "Arbeidsgivere",
    items: [
      { period: "02.2023 – i dag", text: "Normann Utvikling (selvstendig)" },
      { period: "06.2018 – 01.2023", text: "Knowit Dataess AS" },
      { period: "2011 – 06.2018", text: "Embriq AS" },
    ],
  },
];

const ExperienceItem = ({ exp, offset, reveal = true }: { exp: Engagement; offset: number; reveal?: boolean }) => (
  <li
    className="group grid gap-6 border-t border-ink/15 py-12 lg:grid-cols-12 lg:gap-8"
    data-reveal={reveal ? "" : undefined}
  >
    <div className="flex items-start justify-between gap-4 lg:col-span-3 lg:flex-col lg:justify-start">
      <div>
        <p className="font-mono text-xs text-muted-foreground">offset {String(offset).padStart(2, "0")}</p>
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
      <h3 className="text-4xl leading-none transition-colors group-hover:text-signal-ink sm:text-5xl">{exp.company}</h3>
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
);

export const Experience = () => {
  const [showEarlier, setShowEarlier] = useState(false);
  const total = experiences.length + earlier.length;

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
            <ExperienceItem key={exp.company + exp.period} exp={exp} offset={total - 1 - i} />
          ))}
        </ol>

        <div className="border-t border-ink/15 py-12" data-reveal>
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            <h3 className="eyebrow lg:col-span-3 lg:pt-1">Tidligere oppdrag · 2012–2018</h3>
            <div className="lg:col-span-9">
              {!showEarlier && (
                <ul className="border-t border-ink/10">
                  {earlier.map((exp) => (
                    <li
                      key={exp.company + exp.period}
                      className="grid gap-1 border-b border-ink/10 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6"
                    >
                      <span className="font-mono text-xs text-muted-foreground sm:pt-0.5">{exp.period}</span>
                      <span className="text-sm leading-relaxed">
                        <span className="font-medium">{exp.company}</span>
                        <span className="text-ink/60"> · {exp.role}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              <button
                type="button"
                onClick={() => setShowEarlier((v) => !v)}
                aria-expanded={showEarlier}
                aria-controls="earlier-engagements"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 text-sm transition-colors hover:border-ink"
              >
                {showEarlier ? "Vis mindre" : "Les mer om tidligere oppdrag"}
                <ChevronDown
                  className={`h-4 w-4 transition-transform motion-reduce:transition-none ${showEarlier ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>

        <ol id="earlier-engagements" hidden={!showEarlier}>
          {earlier.map((exp, i) => (
            <ExperienceItem key={exp.company + exp.period} exp={exp} offset={earlier.length - 1 - i} reveal={false} />
          ))}
        </ol>

        <div className="grid gap-10 border-t border-ink/15 pt-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8" data-reveal>
          {background.map((block, i) => (
            <div key={block.title} className={i === 0 ? "lg:col-span-4 lg:col-start-4" : "lg:col-span-5"}>
              <h3 className="eyebrow">{block.title}</h3>
              <ul className="mt-5 space-y-3">
                {block.items.map((item) => (
                  <li key={item.text} className="grid gap-1 text-sm sm:grid-cols-[9rem_1fr] sm:gap-4">
                    <span className="font-mono text-xs text-muted-foreground sm:pt-0.5">{item.period}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { SectionHeading } from "@/components/SectionHeading";

const technicalExpertise = [
  {
    title: "Kotlin & Spring Boot",
    version: "JDK 21",
    description:
      "Hovedkompetanse i moderne backend-utvikling med Kotlin og Spring Boot. Ekspert på reaktiv programmering med WebFlux og Coroutines.",
    tags: ["Backend", "Microservices", "REST API"],
  },
  {
    title: "Kafka Streams",
    version: "Enterprise",
    description:
      "Dyp erfaring med sanntidsdatabehandling og event-driven arkitektur. Bygget kritiske streaming-løsninger for finans og transport.",
    tags: ["Data Streaming", "Real-time", "Event-driven"],
  },
  {
    title: "AWS EKS",
    version: "Kubernetes",
    description:
      "Omfattende erfaring med container-orkestrering og cloud-native løsninger. Designet og driftet skalerbare produksjonsmiljøer.",
    tags: ["Cloud", "DevOps", "Infrastructure"],
  },
  {
    title: "AI-assistert utvikling",
    version: "Claude Code",
    description:
      "Bruker AI-agenter og Claude Code aktivt i utvikling, kodegjennomgang og dokumentasjon. Erfaring med å innføre AI-verktøy i team på en trygg og strukturert måte, og med å bygge kunnskapsbaser som agenter kan jobbe mot.",
    tags: ["AI-agenter", "Claude Code", "Second Brain"],
  },
];

export const TechnicalExpertise = () => {
  return (
    <section id="kompetanse" className="bg-ink py-28 text-paper sm:py-36">
      <div className="container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          index="02"
          label="Teknisk kompetanse"
          title={
            <>
              Bygget for systemer
              <br />
              <em className="italic text-signal">som ikke får gå ned.</em>
            </>
          }
          lead="Spesialisert i moderne backend-teknologier for kritiske systemer."
        />

        <ul className="mt-20 border-t border-paper/15">
          {technicalExpertise.map((tech, i) => (
            <li
              key={tech.title}
              className="group grid gap-4 border-b border-paper/15 py-10 transition-colors hover:bg-paper/[0.03] lg:grid-cols-12 lg:gap-8"
              data-reveal
            >
              <span className="font-mono text-xs text-paper/40 lg:col-span-1 lg:pt-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex items-baseline gap-4 lg:col-span-4">
                <h3 className="text-4xl transition-colors group-hover:text-signal sm:text-5xl">{tech.title}</h3>
              </div>
              <div className="lg:col-span-5">
                <p className="leading-relaxed text-paper/70">{tech.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {tech.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-paper/20 px-3 py-1 font-mono text-[11px] text-paper/70">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="font-mono text-xs text-signal lg:col-span-2 lg:pt-3 lg:text-right">{tech.version}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

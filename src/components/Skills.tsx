const skillCategories = [
  {
    title: "Backend & API",
    skills: ["Kotlin/Spring Boot (JDK 21)", "Java 17+", "REST-API-design", "Spring WebFlux", "Coroutines"],
  },
  {
    title: "Data & Streaming",
    skills: ["Kafka Streams", "Kafka Connect", "Snowflake", "dbt", "PostgreSQL", "Oracle DB"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS EKS", "Docker", "Kubernetes/Helm", "GitHub Actions", "ArgoCD (GitOps)", "GitLab → GitHub-migrering", "DataDog/Prometheus"],
  },
  {
    title: "Integrasjoner",
    skills: ["MQTT", "Apache Camel", "GraphDB", "Enterprise Integration Patterns", "Microservices"],
  },
  {
    title: "AI & verktøy",
    skills: ["Claude Code", "AI-agenter", "Second Brain / kunnskapsbase"],
  },
];

export const Skills = () => {
  return (
    <section aria-labelledby="stack-heading" className="bg-ink pb-28 text-paper sm:pb-36">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <h2 id="stack-heading" className="eyebrow text-paper/55">
              <span className="text-signal">02.1</span> — Nøkkelkompetanse
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg border border-paper/15 bg-paper/15 sm:grid-cols-2 lg:col-span-9 xl:grid-cols-5">
            {skillCategories.map((category, i) => (
              <div key={category.title} className="bg-ink p-6 sm:last:col-span-2 xl:last:col-span-1" data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                <h3 className="font-sans text-sm font-medium tracking-normal text-paper">{category.title}</h3>
                <ul className="mt-5 space-y-2.5">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex gap-2 font-mono text-[12.5px] leading-snug text-paper/65">
                      <span className="text-signal">›</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

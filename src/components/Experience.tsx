import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    period: "2023 – i dag",
    company: "Normann Utvikling",
    role: "Selvstendig, Tech Lead & Fullstack-utvikler",
    description: "Konsulentoppdrag med fokus på teknisk ledelse og fullstack-utvikling.",
    highlights: []
  },
  {
    period: "02.2023 – i dag",
    company: "TET Digital & Ruter",
    role: "Tech Lead - Team Passasjertelling",
    description: "Ansvar for standardisering og behandling av kjøretøydata (APC og dørstatus) for kollektivtransport.",
    highlights: [
      "Bygget nytt team fra grunnen med fokus på sanntidsovervåkning av passasjertrafikk",
      "Implementerte Kafka Streams og AWS EKS for skalerbar dataarkitektur",
      "Første team i TET Digital som tok i bruk Snowflake som dataplatform",
      "Kotlin/Spring Boot med JDK 21, MQTT, og ML-modeller for prediksjoner"
    ]
  },
  {
    period: "01.2019 – 01.2023",
    company: "Sparebank 1",
    role: "Backend-utvikler - Dialog & Salg",
    description: "Design og utvikling av backend-infrastruktur for kunde-bank kommunikasjon med fokus på API-design og meldingshåndtering.",
    highlights: [
      "Hovedansvar for nytt meldings REST-API med sanntidshåndtering over Kafka",
      "Implementerte transaksjonell persistering med Kafka og PostgreSQL",
      "Migrerte backend til Kotlin/Spring Boot på Sparebank1s plattform",
      "OpenAPI/Swagger kontraktstyrt API-design for CRM-integrasjoner",
      "AWS migrering med GitHub Actions CI/CD"
    ]
  },
  {
    period: "03.2018 – 01.2019",
    company: "Statnett SF",
    role: "Integrasjonsutvikler",
    description: "Design og utvikling av integrasjoner for EMS-bytte i det sentrale elektrisitetsnettet.",
    highlights: [
      "Guaranteed delivery mellom systemer med Enterprise Integration Patterns",
      "Tilgjengeliggjøring av nettmodell i GraphDB via REST API",
      "Apache Camel, Red Hat Fuse, Docker, OpenShift"
    ]
  },
  {
    period: "01.2015 – 10.2016",
    company: "Nettalliansen - Embriq Quant",
    role: "Backend-utvikler & Integrasjonsansvarlig",
    description: "Utvikling av backend-infrastruktur for Smart Grid-plattform med fokus på integrasjoner og datahåndtering.",
    highlights: [
      "Backend-utvikling for kritisk plattform med høyt transaksjonsvolum",
      "Ansvar for integrasjoner mellom systemkomponenter og kundesystemer",
      "Java/Spring backend med Oracle DB og JMS",
      "SOAP WebServices og REST API-integrasjoner",
      "Smidig utvikling med Scrum/Kanban"
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Erfaring
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            14+ års erfaring fra ledende norske selskaper innen offentlig og privat sektor
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-accent hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{exp.company}</CardTitle>
                    <CardDescription className="text-base font-medium text-foreground">
                      {exp.role}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                {exp.highlights.length > 0 && (
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start text-sm">
                        <Briefcase className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

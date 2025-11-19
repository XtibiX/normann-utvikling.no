import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const technicalExpertise = [
  {
    title: "Kotlin & Spring Boot",
    version: "JDK 21",
    description: "Hovedkompetanse i moderne backend-utvikling med Kotlin og Spring Boot. Ekspert på reaktiv programmering med WebFlux og Coroutines.",
    tags: ["Backend", "Microservices", "REST API"]
  },
  {
    title: "Kafka Streams",
    version: "Enterprise",
    description: "Dyp erfaring med sanntidsdatabehandling og event-driven arkitektur. Bygget kritiske streaming-løsninger for finans og transport.",
    tags: ["Data Streaming", "Real-time", "Event-driven"]
  },
  {
    title: "AWS EKS",
    version: "Kubernetes",
    description: "Omfattende erfaring med container-orkestrering og cloud-native løsninger. Designet og driftet skalerbare produksjonsmiljøer.",
    tags: ["Cloud", "DevOps", "Infrastructure"]
  },
  {
    title: "Spring Boot",
    version: "3.x",
    description: "Ekspertise i å bygge enterprise-grade applikasjoner med Spring Boot. Fokus på sikkerhet, ytelse og vedlikeholdbarhet.",
    tags: ["Framework", "Enterprise", "Backend"]
  }
];

export const TechnicalExpertise = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Teknisk Kompetanse
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Spesialisert i moderne backend-teknologier for kritiske systemer
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {technicalExpertise.map((tech, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-accent transition-all duration-300 hover:shadow-elegant group"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                    {tech.title}
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {tech.version}
                  </Badge>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {tech.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tech.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline"
                      className="border-accent/30 text-accent hover:bg-accent/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
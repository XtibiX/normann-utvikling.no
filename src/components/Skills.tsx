import { Code2, Database, Cloud, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    icon: Code2,
    title: "Backend & API",
    skills: ["Kotlin/Spring Boot (JDK 21)", "Java 17+", "REST API Design", "Spring WebFlux", "Coroutines"]
  },
  {
    icon: Database,
    title: "Data & Streaming",
    skills: ["Kafka Streams", "Kafka Connect", "Snowflake", "PostgreSQL", "Oracle DB"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS EKS", "Docker", "Kubernetes/Helm", "GitLab CI/CD", "DataDog/Prometheus"]
  },
  {
    icon: Zap,
    title: "Integrasjoner",
    skills: ["MQTT", "Apache Camel", "GraphDB", "Enterprise Integration Patterns", "Microservices"]
  }
];

export const Skills = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Nøkkelkompetanse
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dyp kompetanse i moderne backend-teknologier, datastreaming og systemarkitektur
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-accent transition-all duration-300 hover:shadow-elegant"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-accent mr-2">▪</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

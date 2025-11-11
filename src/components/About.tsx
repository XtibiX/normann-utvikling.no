import { Award, Users, Lightbulb, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const highlights = [
  {
    icon: Target,
    title: "Tech Lead med 14+ års erfaring",
    description: "Spesialisert på backend-arkitektur og teknisk ledelse"
  },
  {
    icon: Lightbulb,
    title: "Backend & Integrasjoner",
    description: "Ekspert på Kotlin/Spring Boot, Kafka og skybaserte løsninger"
  },
  {
    icon: Users,
    title: "Teamledelse",
    description: "8 års erfaring som gruppeleder og tech lead"
  },
  {
    icon: Award,
    title: "Smidig metodikk",
    description: "Tidligere nestleder for Smidig-konferansen 2014-2015"
  }
];

export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Om meg</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Teknisk leder med lidenskap for backend-utvikling og skalerbare systemløsninger
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">Rolf Erik Normann</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Med over 14 års erfaring som backend-utvikler og nesten 3 år som Tech Lead, har jeg 
                spesialisert meg på å bygge robuste, skalerbare backend-løsninger. Min hovedkompetanse 
                ligger i <span className="text-accent font-semibold">Kotlin/Spring Boot (JDK 21)</span>, 
                <span className="text-accent font-semibold"> Kafka Streams</span>, og moderne 
                <span className="text-accent font-semibold"> skyløsninger som AWS EKS</span>.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Jeg har ledet utviklingen av kritiske backend-systemer for sanntidsdatabehandling, 
                designet API-arkitekturer for store finansinstitusjoner, og bygget integrasjonsløsninger 
                for kritisk infrastruktur. Min styrke er å kombinere teknisk dybdekompetanse med 
                ledererfaring for å levere løsninger av høy kvalitet.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Som Tech Lead fokuserer jeg på å bygge effektive team, etablere robuste 
                DevOps-praksiser, og sikre kontinuerlig forbedring gjennom datadrevne beslutninger 
                og moderne utviklingsmetodikk.
              </p>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30"></div>
                <img 
                  src={profilePhoto} 
                  alt="Rolf Erik Normann - Tech Lead" 
                  className="relative rounded-2xl shadow-elegant w-80 h-80 object-cover border-4 border-card"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

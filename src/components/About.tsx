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
                Med over 14 års erfaring i IT-bransjen har jeg funnet min lidenskap i å skape 
                verdi gjennom godt håndverk og sterke team. Som Tech Lead handler det ikke bare om 
                å levere kode, men om å bygge løsninger som faktisk løser reelle problemer og som 
                kan vokse med virksomheten.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Jeg tror på at de beste løsningene kommer fra team som jobber godt sammen, der 
                teknisk dyktighet kombineres med god kommunikasjon og en kultur for læring. 
                Min rolle er å legge til rette for dette - både ved å dele min tekniske erfaring 
                og ved å skape et miljø der alle kan bidra med sitt beste.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Fra kritiske backend-systemer for finanssektoren til sanntidsløsninger for transport 
                og energi - jeg har hatt gleden av å jobbe med systemer som betyr noe. Det som driver 
                meg er å kombinere teknisk dypdykk med pragmatisk problemløsning, alltid med fokus på 
                å levere reell verdi til brukerne.
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

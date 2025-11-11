import { Mail, Linkedin, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Ta kontakt
            </h2>
            <p className="text-xl text-muted-foreground">
              Interessert i et samarbeid? Ta gjerne kontakt for en uforpliktende samtale.
            </p>
          </div>
          
          <Card className="border-2 hover:border-accent transition-all duration-300 shadow-elegant">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-accent/10 transition-colors">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">E-post</div>
                    <a 
                      href="mailto:kontakt@normann-utvikling.no" 
                      className="text-accent hover:underline"
                    >
                      kontakt@normann-utvikling.no
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-accent/10 transition-colors">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Linkedin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">LinkedIn</div>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      Finn meg på LinkedIn
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-accent/10 transition-colors">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Github className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">GitHub</div>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      Se mine prosjekter
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

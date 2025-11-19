import { Card, CardContent } from "@/components/ui/card";

const clients = [
  { name: "TET Digital", logo: null },
  { name: "Ruter", logo: null },
  { name: "Sparebank 1", logo: null },
  { name: "Statnett", logo: null },
  { name: "Nettalliansen", logo: null },
  { name: "Embriq Quant", logo: null },
];

export const Clients = () => {
  return (
    <section id="clients" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Kunder & Samarbeidspartnere
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Jeg har hatt gleden av å samarbeide med ledende bedrifter innen finans, transport og energi
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client) => (
            <Card key={client.name} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex items-center justify-center h-32">
                <div className="text-center">
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {client.name}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

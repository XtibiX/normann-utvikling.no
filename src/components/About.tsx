import profilePhoto from "@/assets/profile-photo.jpg";
import { SectionHeading } from "@/components/SectionHeading";

const highlights = [
  { title: "Tech Lead med 14+ års erfaring", description: "Spesialisert på backend-arkitektur og teknisk ledelse" },
  { title: "Backend & integrasjoner", description: "Ekspert på Kotlin/Spring Boot, Kafka og skybaserte løsninger" },
  { title: "Teamledelse", description: "8 års erfaring som gruppeleder og tech lead" },
  { title: "Smidig metodikk", description: "Tidligere nestleder for Smidig-konferansen 2014–2015" },
];

export const About = () => {
  return (
    <section id="om" className="py-28 sm:py-36">
      <div className="container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          label="Om meg"
          title={
            <>
              Godt håndverk,
              <br />
              <em className="italic">sterke team.</em>
            </>
          }
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-12 lg:gap-8">
          <figure className="lg:col-span-4 lg:col-start-1" data-reveal>
            <div className="relative mx-auto max-w-sm lg:mx-0">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-lg bg-signal" />
              <img
                src={profilePhoto}
                alt="Rolf Erik Normann"
                className="relative aspect-[4/5] w-full rounded-lg object-cover grayscale contrast-[1.08]"
              />
            </div>
            <figcaption className="eyebrow mt-8">Rolf Erik Normann — Tech Lead</figcaption>
          </figure>

          <div className="lg:col-span-7 lg:col-start-6" data-reveal style={{ transitionDelay: "120ms" }}>
            <p className="text-2xl leading-snug sm:text-[1.7rem]">
              Med over 14 års erfaring i IT-bransjen har jeg funnet lidenskapen min i å skape verdi gjennom godt
              håndverk og sterke team. For meg som Tech Lead handler det ikke bare om å levere kode, men om å bygge løsninger
              som tar tak i reelle problemer og som kan vokse med virksomheten.
            </p>
            <div className="mt-10 grid gap-6 text-ink/70 sm:grid-cols-2 sm:gap-10">
              <p className="leading-relaxed">
                Jeg tror at de beste løsningene kommer fra team som jobber godt sammen, der teknisk dyktighet
                kombineres med god kommunikasjon og en kultur for læring. Rollen min er å legge til rette for dette –
                både ved å dele av den tekniske erfaringen min og ved å skape et miljø der alle kan bidra med sitt beste.
              </p>
              <p className="leading-relaxed">
                Fra kritiske backend-systemer for finanssektoren til sanntidsløsninger for transport og energi – jeg
                har hatt gleden av å jobbe med systemer som betyr noe. Det som driver meg er å kombinere teknisk
                dypdykk med pragmatisk problemløsning, alltid med fokus på å levere reell verdi til brukerne.
              </p>
            </div>

            <ol className="mt-16 grid border-t border-ink/15 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <li
                  key={item.title}
                  className="group border-b border-ink/15 py-6 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
                >
                  <span className="font-mono text-xs text-signal-ink">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-sans text-base font-medium tracking-normal">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

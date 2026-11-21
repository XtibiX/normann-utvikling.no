import { ArrowUpRight } from "lucide-react";

const channels = [
  { label: "LinkedIn", text: "Finn meg på LinkedIn", href: "https://www.linkedin.com/in/rolf-erik-normann/" },
  { label: "GitHub", text: "Se mine prosjekter", href: "https://github.com/xtibix" },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-ink/15 bg-paper-deep/60 py-28 sm:py-36">
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="eyebrow flex items-center gap-3" data-reveal>
          <span className="text-signal-ink">04</span>
          <span className="h-px w-8 bg-ink/25" />
          <span>Ta kontakt</span>
        </div>

        <h2 className="mt-10 max-w-5xl text-[clamp(3rem,9vw,8rem)] leading-[0.88]" data-reveal>
          Interessert i et <em className="italic">samarbeid?</em>
        </h2>
        <p className="mt-8 max-w-xl text-lg text-ink/70" data-reveal>
          Ta gjerne kontakt for en uforpliktende samtale.
        </p>

        <a
          href="mailto:rolferik@normann-utvikling.no"
          className="group mt-16 flex items-center justify-between gap-6 border-y border-ink py-8 transition-colors hover:bg-ink hover:text-paper sm:px-6"
          data-reveal
        >
          <span>
            <span className="eyebrow block group-hover:text-paper/60">E-post</span>
            <span className="mt-2 block font-serif text-[1.6rem] [overflow-wrap:anywhere] sm:text-5xl lg:text-6xl">
              rolferik@normann-utvikling.no
            </span>
          </span>
          <ArrowUpRight className="h-7 w-7 shrink-0 sm:h-10 sm:w-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal" />
        </a>

        <ul className="grid sm:grid-cols-2">
          {channels.map((c) => (
            <li key={c.label} className="border-b border-ink/15 sm:odd:border-r">
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-6 transition-colors hover:text-signal-ink sm:px-6"
              >
                <span>
                  <span className="eyebrow block">{c.label}</span>
                  <span className="mt-1 block text-lg">{c.text}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

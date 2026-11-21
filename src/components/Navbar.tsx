import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#om", label: "Om" },
  { href: "#kompetanse", label: "Kompetanse" },
  { href: "#experience", label: "Erfaring" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled ? "border-b border-ink/10 bg-paper/80 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="font-mono text-sm tracking-tight">
          normann<span className="text-signal">/</span>utvikling
        </a>
        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link-underline text-sm text-ink/70 transition-colors hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full bg-ink px-4 py-2 text-sm text-paper transition-colors hover:bg-signal hover:text-ink"
          >
            Ta kontakt
          </a>
        </div>
      </div>
    </nav>
  );
};

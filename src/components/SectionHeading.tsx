import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: React.ReactNode;
  lead?: string;
  tone?: "light" | "dark";
  className?: string;
}

export const SectionHeading = ({ index, label, title, lead, tone = "light", className }: SectionHeadingProps) => {
  const dark = tone === "dark";
  return (
    <header className={cn("grid gap-6 lg:grid-cols-12 lg:gap-8", className)} data-reveal>
      <div className="lg:col-span-3">
        <div className={cn("eyebrow flex items-center gap-3", dark && "text-paper/55")}>
          <span className={dark ? "text-signal" : "text-signal-ink"}>{index}</span>
          <span className={cn("h-px w-8", dark ? "bg-paper/25" : "bg-ink/25")} />
          <span>{label}</span>
        </div>
      </div>
      <div className="lg:col-span-9">
        <h2 className={cn("text-5xl leading-[0.95] sm:text-6xl lg:text-7xl", dark && "text-paper")}>{title}</h2>
        {lead && (
          <p className={cn("mt-6 max-w-2xl text-lg leading-relaxed", dark ? "text-paper/65" : "text-muted-foreground")}>
            {lead}
          </p>
        )}
      </div>
    </header>
  );
};

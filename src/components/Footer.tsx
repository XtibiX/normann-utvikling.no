export const Footer = () => {
  return (
    <footer className="bg-ink text-paper">
      <div className="container px-4 pb-10 pt-20 sm:px-6 lg:px-8">
        <p className="font-serif text-[clamp(3.5rem,15vw,13rem)] leading-[0.8] tracking-[-0.03em] text-paper/90">
          normann<span className="text-signal">.</span>
        </p>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-paper/15 pt-6 font-mono text-xs text-paper/50 sm:flex-row">
          <span>© {new Date().getFullYear()} Normann Utvikling. Alle rettigheter reservert.</span>
          <span>Tech Lead &amp; backend-utvikler</span>
        </div>
      </div>
    </footer>
  );
};

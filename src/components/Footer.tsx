export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Normann Utvikling. Alle rettigheter reservert.
          </div>
          <div className="text-sm text-muted-foreground">
            Tech Lead & Fullstack-utvikler
          </div>
        </div>
      </div>
    </footer>
  );
};

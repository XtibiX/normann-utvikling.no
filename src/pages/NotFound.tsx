import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <p className="eyebrow">offset ikke funnet</p>
        <h1 className="mt-4 text-[clamp(6rem,20vw,12rem)] leading-none">
          404<span className="text-signal">.</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">Denne siden finnes ikke.</p>
        <a href="/" className="link-underline mt-8 inline-block font-mono text-sm">
          ← Tilbake til forsiden
        </a>
      </div>
    </div>
  );
};

export default NotFound;

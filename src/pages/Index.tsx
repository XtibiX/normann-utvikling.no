import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { About } from "@/components/About";
import { TechnicalExpertise } from "@/components/TechnicalExpertise";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const useRevealOnScroll = () => {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);
};

const Index = () => {
  useRevealOnScroll();
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Clients />
        <About />
        <TechnicalExpertise />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;

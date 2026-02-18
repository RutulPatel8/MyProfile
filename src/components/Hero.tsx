import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { Linkedin, Mail } from "lucide-react";

const TypeWriter = ({ text }: { text: string }) => {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx < text.length) {
      const timer = setTimeout(() => {
        setDisplayed((p) => p + text[idx]);
        setIdx((i) => i + 1);
      }, 40);
      return () => clearTimeout(timer);
    }
  }, [idx, text]);

  return (
    <span className="font-mono">
      {displayed}
      <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-blink align-middle" />
    </span>
  );
};

const Hero = () => {
  const { name, title, tagline, linkedin, email } = portfolioData.meta;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(190_100%_50%/0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="font-mono text-primary text-sm mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {"// Hello, I'm"}
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold mb-4 opacity-0 animate-fade-up tracking-tight" style={{ animationDelay: "0.3s" }}>
          <span className="gradient-text">{name}</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          {title}
        </p>
        <div className="text-base sm:text-lg text-foreground/80 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.7s" }}>
          <TypeWriter text={tagline} />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.9s" }}>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail size={18} /> Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/40 flex justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

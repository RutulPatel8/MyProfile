import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowDown, Linkedin, Mail, Sparkles } from "lucide-react";

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
      <span className="ml-1 inline-block h-6 w-0.5 animate-blink align-middle bg-primary" />
    </span>
  );
};

const Hero = () => {
  const { name, title, tagline, linkedin, email } = portfolioData.meta;

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(190_100%_50%/0.18)_0%,transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-20 text-center sm:px-6">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary opacity-0 animate-fade-up">
          <Sparkles size={14} />
          Open to Software Engineering Opportunities
        </div>

        <p className="mb-4 font-mono text-sm text-primary opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          {"// Hello, I'm"}
        </p>
        <h1
          className="mb-4 text-5xl font-bold tracking-tight opacity-0 animate-fade-up sm:text-7xl"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="gradient-text">{name}</span>
        </h1>
        <p
          className="mb-6 text-xl text-muted-foreground opacity-0 animate-fade-up sm:text-2xl"
          style={{ animationDelay: "0.5s" }}
        >
          {title}
        </p>

        <div
          className="mx-auto mb-10 max-w-2xl rounded-2xl border border-border/70 bg-card/55 px-5 py-4 text-base text-foreground/80 shadow-2xl shadow-black/20 backdrop-blur-xl opacity-0 animate-fade-up sm:text-lg"
          style={{ animationDelay: "0.7s" }}
        >
          <TypeWriter text={tagline} />
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.9s" }}
        >
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/40 px-6 py-3 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
          >
            <Mail size={18} /> Get in Touch
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-muted-foreground hover:text-primary transition-colors">
        <div className="flex flex-col items-center gap-2 text-xs font-mono uppercase tracking-widest">
          Scroll
          <ArrowDown size={16} />
        </div>
      </a>
    </section>
  );
};

export default Hero;

import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { User } from "lucide-react";

const About = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div ref={ref} className="max-w-3xl mx-auto opacity-0 transition-all duration-700 translate-y-8 [&.visible]:opacity-100 [&.visible]:translate-y-0">
        <SectionHeading title="About Me" />
        <div className="bg-card border border-border rounded-2xl p-8 sm:p-10 glow-border relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <User size={18} className="text-primary" />
            </div>
            <span className="font-mono text-sm text-primary">whoami</span>
          </div>
          <p className="text-foreground/80 leading-relaxed text-base sm:text-lg relative z-10">
            {portfolioData.about}
          </p>
          <div className="mt-6 pt-6 border-t border-border flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">📍 {portfolioData.meta.location}</span>
            <span className="flex items-center gap-2">📧 {portfolioData.meta.email}</span>
            <span className="flex items-center gap-2">📞 {portfolioData.meta.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

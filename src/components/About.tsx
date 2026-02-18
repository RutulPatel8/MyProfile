import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div ref={ref} className="max-w-3xl mx-auto opacity-0 transition-all duration-700 translate-y-8 [&.visible]:opacity-100 [&.visible]:translate-y-0">
        <SectionHeading label="01" title="About Me" />
        <div className="bg-card border border-border rounded-xl p-6 sm:p-8 glow-border">
          <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
            {portfolioData.about}
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground font-mono">
            <span>📍 {portfolioData.meta.location}</span>
            <span>📧 {portfolioData.meta.email}</span>
            <span>📞 {portfolioData.meta.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

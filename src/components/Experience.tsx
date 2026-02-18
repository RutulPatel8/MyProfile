import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase, MapPin } from "lucide-react";

const Experience = () => {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-24 px-4 sm:px-6">
      <div ref={ref} className="max-w-4xl mx-auto opacity-0 transition-all duration-700 translate-y-8 [&.visible]:opacity-100 [&.visible]:translate-y-0">
        <SectionHeading label="03" title="Experience" />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {portfolioData.experience.map((exp, i) => (
              <div key={i} className="relative pl-12 sm:pl-16">
                {/* Dot */}
                <div className="absolute left-2.5 sm:left-4.5 top-1 w-3 h-3 rounded-full bg-primary animate-pulse-glow" />

                <div className="bg-card border border-border rounded-xl p-5 sm:p-6 hover:border-primary/40 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold">{exp.role}</h3>
                      <p className="text-primary font-mono text-sm flex items-center gap-1.5">
                        <Briefcase size={14} /> {exp.company}
                      </p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p className="font-mono">{exp.period}</p>
                      <p className="flex items-center gap-1 justify-end">
                        <MapPin size={12} /> {exp.location}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-foreground/75 flex gap-2">
                        <span className="text-primary mt-0.5 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

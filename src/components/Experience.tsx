import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-24 px-4 sm:px-6">
      <div ref={ref} className="max-w-4xl mx-auto opacity-0 transition-all duration-700 translate-y-8 [&.visible]:opacity-100 [&.visible]:translate-y-0">
        <SectionHeading title="Work Experience" />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[18px] sm:left-[22px] top-3 bottom-3 w-px bg-gradient-to-b from-primary via-border to-transparent" />

          <div className="space-y-8">
            {portfolioData.experience.map((exp, i) => (
              <div key={i} className="relative pl-12 sm:pl-14">
                {/* Dot */}
                <div className="absolute left-2.5 sm:left-3.5 top-6 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                <div className="bg-card border border-border rounded-2xl p-6 sm:p-7 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold">{exp.role}</h3>
                      <p className="text-primary text-sm flex items-center gap-1.5 font-medium mt-0.5">
                        <Briefcase size={14} /> {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5 font-mono text-xs">
                        <Calendar size={12} /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs">
                        <MapPin size={12} /> {exp.location}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-foreground/75 flex gap-3">
                        <span className="text-primary mt-0.5 shrink-0 text-xs">●</span>
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

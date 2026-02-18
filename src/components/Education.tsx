import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, Award, Globe } from "lucide-react";

const Education = () => {
  const ref = useScrollReveal();

  return (
    <section id="education" className="py-24 px-4 sm:px-6">
      <div ref={ref} className="max-w-4xl mx-auto opacity-0 transition-all duration-700 translate-y-8 [&.visible]:opacity-100 [&.visible]:translate-y-0">
        <SectionHeading label="05" title="Education & Certifications" />

        <div className="space-y-6 mb-10">
          {portfolioData.education.map((edu, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-5 sm:p-6 flex gap-4 hover:border-primary/40 transition-all duration-300">
              <GraduationCap className="text-primary shrink-0 mt-1" size={22} />
              <div>
                <h3 className="font-bold text-base">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
                <p className="text-xs text-muted-foreground font-mono mt-1">{edu.period}</p>
                <p className="text-sm text-primary font-semibold mt-1">{edu.note}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Award className="text-primary" size={20} /> Certifications
        </h3>
        <div className="space-y-3 mb-10">
          {portfolioData.certifications.map((cert, i) => (
            <div key={i} className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3 hover:border-primary/40 transition-colors">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="text-sm text-foreground/85">{cert}</span>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Globe className="text-primary" size={20} /> Languages
        </h3>
        <div className="flex flex-wrap gap-3">
          {portfolioData.languages.map((lang) => (
            <span key={lang} className="text-sm px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border">
              {lang}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

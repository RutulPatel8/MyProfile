import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, Award, Globe } from "lucide-react";

const Education = () => {
  const ref = useScrollReveal();

  return (
    <section id="education" className="py-24 px-4 sm:px-6">
      <div ref={ref} className="max-w-4xl mx-auto opacity-0 transition-all duration-700 translate-y-8 [&.visible]:opacity-100 [&.visible]:translate-y-0">
        <SectionHeading title="Education & Certifications" />

        <div className="space-y-4 mb-12">
          {portfolioData.education.map((edu, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-6 flex gap-4 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <GraduationCap className="text-primary" size={18} />
              </div>
              <div>
                <h3 className="font-bold text-base">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{edu.institution}</p>
                <p className="text-xs text-muted-foreground font-mono mt-1">{edu.period}</p>
                {edu.note && (
                  <span className="inline-block mt-2 text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20 font-medium">
                    {edu.note}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
              <Award className="text-primary" size={18} /> Certifications
            </h3>
            <div className="space-y-2.5">
              {portfolioData.certifications.map((cert, i) => (
                <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl px-4 py-3 hover:border-primary/30 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span className="text-sm text-foreground/85">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
              <Globe className="text-primary" size={18} /> Languages
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {portfolioData.languages.map((lang) => (
                <span key={lang} className="text-sm px-4 py-2 rounded-xl bg-card text-foreground/80 border border-border">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

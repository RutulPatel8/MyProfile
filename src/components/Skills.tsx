import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Skills = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 px-4 sm:px-6">
      <div ref={ref} className="max-w-5xl mx-auto opacity-0 transition-all duration-700 translate-y-8 [&.visible]:opacity-100 [&.visible]:translate-y-0">
        <SectionHeading label="02" title="Skills & Technologies" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(portfolioData.skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 hover:glow-sm transition-all duration-300 group"
            >
              <h3 className="text-sm font-semibold text-primary font-mono mb-3 group-hover:text-glow transition-all">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary/40 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

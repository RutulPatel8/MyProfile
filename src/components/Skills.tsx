import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categoryIcons: Record<string, string> = {
  "Backend Development": "⚙️",
  "Frontend Development": "🎨",
  "Cloud Technologies": "☁️",
  "Database Management": "🗄️",
  "Tools & DevOps": "🔧",
  "Messaging & Caching": "📡",
  Monitoring: "📊",
  Methodologies: "🔄",
};

const Skills = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-card/30">
      <div ref={ref} className="max-w-5xl mx-auto opacity-0 transition-all duration-700 translate-y-8 [&.visible]:opacity-100 [&.visible]:translate-y-0">
        <SectionHeading title="Skills & Technologies" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(portfolioData.skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">{categoryIcons[category] || "💻"}</span>
                <h3 className="text-sm font-semibold text-foreground">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground border border-border hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-default"
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

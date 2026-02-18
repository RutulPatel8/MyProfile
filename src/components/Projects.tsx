import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Zap } from "lucide-react";

const Projects = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0 transition-all duration-700 translate-y-8 [&.visible]:opacity-100 [&.visible]:translate-y-0">
        <SectionHeading label="04" title="Projects" />
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="mb-1">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground font-mono">{project.subtitle}</p>
              </div>

              <p className="text-sm text-foreground/70 mt-3 leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="mt-4 flex items-start gap-2 text-sm">
                <Zap size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/80">{project.impact}</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-mono"
                  >
                    {tech}
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

export default Projects;

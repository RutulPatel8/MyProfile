import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Zap, FolderOpen } from "lucide-react";

const Projects = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 bg-card/30">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0 transition-all duration-700 translate-y-8 [&.visible]:opacity-100 [&.visible]:translate-y-0">
        <SectionHeading title="Featured Projects" />
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group flex flex-col hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <FolderOpen size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{project.subtitle}</p>
                </div>
              </div>

              <p className="text-sm text-foreground/70 leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="mt-4 flex items-start gap-2 text-sm bg-primary/5 border border-primary/10 rounded-lg px-3 py-2.5">
                <Zap size={14} className="text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/80 text-xs leading-relaxed">{project.impact}</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-secondary text-muted-foreground border border-border font-mono"
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

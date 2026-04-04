import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { Menu, X } from "lucide-react";

const navLinks = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-4 z-50 px-4 sm:px-6">
      <div
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border px-4 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border-primary/20 bg-background/75 shadow-xl shadow-black/30 backdrop-blur-xl"
            : "border-border/70 bg-background/45 backdrop-blur-lg"
        }`}
      >
        <a href="#hero" className="font-mono text-lg font-bold tracking-tight text-primary">
          {"<"}
          {portfolioData.meta.name.split(" ")[0]}
          {" />"}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="group relative text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              {l}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          className="text-muted-foreground transition-colors hover:text-primary md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-border/70 bg-background/90 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { portfolioData } from "@/data/portfolio";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4 text-center">
    <p className="text-sm text-muted-foreground font-mono">
      © {new Date().getFullYear()} {portfolioData.meta.name} — Built with passion
    </p>
  </footer>
);

export default Footer;

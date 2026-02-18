import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  const ref = useScrollReveal();
  const { email, phone, location, linkedin } = portfolioData.meta;

  const contacts = [
    { icon: Mail, label: "Email", value: email, href: `mailto:${email}` },
    { icon: Phone, label: "Phone", value: phone, href: `tel:${phone}` },
    { icon: MapPin, label: "Location", value: location, href: "#" },
    { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: linkedin },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div ref={ref} className="max-w-3xl mx-auto opacity-0 transition-all duration-700 translate-y-8 [&.visible]:opacity-100 [&.visible]:translate-y-0">
        <SectionHeading label="06" title="Get in Touch" />
        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-5 flex items-start gap-4 hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <Icon className="text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={20} />
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-0.5">{label}</p>
                <p className="text-sm text-foreground/90">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

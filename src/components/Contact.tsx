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
    <section id="contact" className="py-24 px-4 sm:px-6 bg-card/30">
      <div ref={ref} className="max-w-3xl mx-auto opacity-0 transition-all duration-700 translate-y-8 [&.visible]:opacity-100 [&.visible]:translate-y-0">
        <SectionHeading title="Get in Touch" />
        <p className="text-center text-muted-foreground mb-8 -mt-6 text-sm">
          Have a project in mind or want to collaborate? Let's connect.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4 hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                <Icon className="text-primary" size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
                <p className="text-sm text-foreground/90 font-medium">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

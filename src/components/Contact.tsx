import SectionReveal from "./SectionReveal";
import { Mail, FileText, Instagram } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "cgigi426@gmail.com",
    href: "mailto:cgigi426@gmail.com",
  },
  {
    icon: FileText,
    label: "履歷下載",
    value: "Download CV",
    href: "#",
  },
  {
    icon: Instagram,
    label: "社群媒體",
    value: "@gigizxwn",
    href: "https://www.instagram.com/gigizxwn?igsh=Z2I5Ynp2YnB6ZDhx",
target: " _blank",//
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-secondary/30">
      <SectionReveal>
        <p className="text-xs font-sans-tc text-primary tracking-[0.3em] uppercase mb-4">
          Contact
        </p>
        <h2 className="text-3xl md:text-5xl font-serif-tc font-bold text-foreground mb-16">
          聯絡方式
        </h2>
      </SectionReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {contactItems.map((item, i) => (
          <SectionReveal key={item.label} delay={i * 0.15}>
            <a
              href={item.href}
		target={item.target}
		rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 border border-border/40 hover:border-primary/40 transition-all duration-500"
            >
              <item.icon className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-xs font-sans-tc text-muted-foreground tracking-wide mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-sans-tc text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.value}
                </p>
              </div>
            </a>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
};

export default Contact;

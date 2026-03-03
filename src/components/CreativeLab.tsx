import { Link } from "react-router-dom";
import SectionReveal from "./SectionReveal";
import { creativeExperiments } from "@/data/works";

const CreativeLab = () => {
  return (
    <section id="creative" className="py-24 md:py-32 px-6 md:px-12">
      <SectionReveal>
        <p className="text-xs font-sans-tc text-primary tracking-[0.3em] uppercase mb-4">
          Creative Lab
        </p>
        <h2 className="text-3xl md:text-5xl font-serif-display font-bold text-foreground mb-16">
          創意實驗室
        </h2>
      </SectionReveal>

      <div className="space-y-0">
        {creativeExperiments.map((exp, i) => (
          <SectionReveal key={exp.num} delay={i * 0.1}>
            <Link to={`/work/${exp.id}`} className="group flex items-start gap-6 md:gap-10 py-8 border-b border-border/30 hover:border-primary/30 transition-all duration-500">
              <span className="text-xs font-sans-tc text-primary tracking-wider mt-1">
                #{exp.num}
              </span>
              <div className="flex-1">
                <h3 className="text-xl md:text-3xl font-serif-tc font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                  {exp.title}
                </h3>
                <p className="text-sm font-sans-tc text-muted-foreground leading-relaxed max-w-lg">
                  {exp.desc}
                </p>
              </div>
              <span className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 text-lg mt-1">
                →
              </span>
            </Link>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
};

export default CreativeLab;

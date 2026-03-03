import SectionReveal from "./SectionReveal";

const experiences = [
  {
    tag: "創業項目",
    title: "校園宵夜配送平台",
    desc: "從零到一打造校園深夜美食配送服務",
  },
  {
    tag: "活動統籌",
    title: "辯論新生盃",
    desc: "統籌大型新生辯論賽事，涵蓋活動企劃與執行",
  },
];

const Experience = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-secondary/30">
      <SectionReveal>
        <p className="text-xs font-sans-tc text-primary tracking-[0.3em] uppercase mb-4">
          Experience
        </p>
        <h2 className="text-3xl md:text-5xl font-serif-tc font-bold text-foreground mb-16">
          經驗
        </h2>
      </SectionReveal>

      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, i) => (
          <SectionReveal key={exp.title} delay={i * 0.15}>
            <div className="group p-8 md:p-10 border border-border/40 hover:border-primary/30 transition-all duration-500">
              <span className="inline-block text-xs font-sans-tc text-primary tracking-[0.2em] uppercase border border-primary/30 px-3 py-1 mb-6">
                {exp.tag}
              </span>
              <h3 className="text-xl md:text-2xl font-serif-tc font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {exp.title}
              </h3>
              <p className="text-sm font-sans-tc text-muted-foreground leading-relaxed">
                {exp.desc}
              </p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;

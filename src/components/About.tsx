import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const lines = [
  { cn: "我觀察文化", en: "I observe culture" },
  { cn: "我找到洞察", en: "I find insights" },
  { cn: "我把洞察變成創意", en: "I turn insights into ideas" },
  { cn: "我把創意變成故事", en: "I turn ideas into stories" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-12">
      <SectionReveal>
        <p className="text-xs font-sans-tc text-primary tracking-[0.3em] uppercase mb-4">
          About
        </p>
        <h2 className="text-3xl md:text-5xl font-serif-display font-bold text-foreground mb-20">
          關於我
        </h2>
      </SectionReveal>

      <div className="max-w-3xl space-y-10 md:space-y-14">
        {lines.map((line, i) => (
          <SectionReveal key={line.cn} delay={i * 0.12}>
            <div className="group">
              <motion.div
                className="flex items-baseline gap-4 flex-wrap"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-primary font-sans-tc text-xs tracking-wider mt-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl md:text-[2.5rem] font-serif-display font-semibold text-foreground leading-snug tracking-wide">
                  {line.cn}
                </h3>
                <span className="text-sm font-serif-display italic text-muted-foreground/40 hidden md:inline">
                  — {line.en}
                </span>
              </motion.div>
              <motion.div
                className="mt-4 h-px bg-border/20 group-hover:bg-primary/20 transition-colors duration-700"
                whileInView={{ scaleX: 1 }}
                initial={{ scaleX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
                style={{ transformOrigin: "left" }}
              />
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
};

export default About;

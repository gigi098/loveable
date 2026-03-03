import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const heroWords = [
  { cn: "想法", en: "Ideas", align: "left" as const },
  { cn: "改變", en: "Change", align: "right" as const },
  { cn: "文化", en: "Culture", align: "center" as const },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs font-sans-tc text-muted-foreground tracking-[0.4em] uppercase mb-16 md:mb-24"
        >
          Creative Portfolio
        </motion.p>

        <div className="space-y-6 md:space-y-8 mb-20">
          {heroWords.map((word, i) => (
            <div
              key={word.cn}
              className={`flex items-baseline gap-4 md:gap-8 ${
                word.align === "right" ? "justify-end" : word.align === "center" ? "justify-center" : "justify-start"
              }`}
            >
              <motion.span
                initial={{ opacity: 0, x: word.align === "right" ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3.5rem,12vw,10rem)] font-serif-display font-bold text-foreground leading-none tracking-tight"
              >
                {word.cn}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.35 }}
                transition={{ duration: 0.6, delay: 1.0 + i * 0.2 }}
                className="text-sm md:text-base font-serif-display italic text-foreground hidden md:inline-block"
              >
                {word.en}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Decorative line + scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex items-center gap-6"
        >
          <div className="flex-1 h-px bg-border/40" />
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] font-sans-tc text-muted-foreground tracking-[0.3em]">
              SCROLL
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-8 bg-primary/50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

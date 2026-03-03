import { Link } from "react-router-dom";
import SectionReveal from "./SectionReveal";
import { works } from "@/data/works";

const FeaturedWork = () => {
  const featured = works[0];

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12">
      <SectionReveal>
        <p className="text-xs font-sans-tc text-primary tracking-[0.3em] uppercase mb-4">
          Featured Work
        </p>
        <h2 className="text-3xl md:text-5xl font-serif-display font-bold text-foreground mb-16">
          精選作品
        </h2>
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <Link to={`/work/${featured.id}`} className="relative group block cursor-pointer overflow-hidden rounded-sm">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs font-sans-tc text-primary tracking-[0.2em] uppercase mb-2">
                  {featured.tag}
                </p>
                <h3 className="text-2xl md:text-4xl font-serif-display font-bold text-foreground">
                  {featured.title}
                </h3>
                <p className="text-sm md:text-base font-sans-tc text-muted-foreground mt-2">
                  {featured.subtitle}
                </p>
              </div>
              <span className="text-primary text-2xl font-serif-display transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </div>
          </div>
        </Link>
      </SectionReveal>
    </section>
  );
};

export default FeaturedWork;

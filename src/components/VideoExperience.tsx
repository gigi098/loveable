import { Link } from "react-router-dom";
import SectionReveal from "./SectionReveal";
import { works } from "@/data/works";

const roles = ["製片", "美術", "燈光", "演員"];

const videoWorks = works.filter((w) => ["mv-production", "film-remake", "original-short"].includes(w.id));

const VideoExperience = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-secondary/30">
      <SectionReveal>
        <p className="text-xs font-sans-tc text-primary tracking-[0.3em] uppercase mb-4">
          Video Production
        </p>
        <h2 className="text-3xl md:text-5xl font-serif-display font-bold text-foreground mb-16">
          影像經驗
        </h2>
      </SectionReveal>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {videoWorks.map((video, i) => (
          <SectionReveal key={video.id} delay={i * 0.15}>
            <Link to={`/work/${video.id}`} className="group block border border-border/50 p-8 hover:border-primary/30 transition-all duration-500">
              <p className="text-xs font-sans-tc text-muted-foreground tracking-[0.2em] uppercase mb-4">
                {video.tag}
              </p>
              <h3 className="text-xl md:text-2xl font-serif-tc font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {video.title}
              </h3>
            </Link>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal delay={0.3}>
        <div className="flex flex-wrap gap-3">
          <span className="text-xs font-sans-tc text-muted-foreground tracking-wide mr-4">角色：</span>
          {roles.map((role) => (
            <span
              key={role}
              className="text-xs font-sans-tc px-4 py-2 border border-border/50 text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-default"
            >
              {role}
            </span>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
};

export default VideoExperience;

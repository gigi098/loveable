import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { works, creativeExperiments } from "@/data/works";
import VideoPlayer from "@/components/VideoPlayer";
import SectionReveal from "@/components/SectionReveal";

const WorkDetail = () => {
  const { id } = useParams<{ id: string }>();
  // 設定影片切換狀態
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const work = works.find((w) => w.id === id);
  const creative = creativeExperiments.find((c) => c.id === id);

  // 1. 找不到作品的處理
  if (!work && !creative) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif-tc text-foreground mb-4">找不到此作品</h1>
          <Link to="/" className="text-primary font-sans-tc text-sm hover:underline">
            ← 返回首頁
          </Link>
        </div>
      </div>
    );
  }

  // 2. 如果是 Creative 類型的顯示方式
  if (creative) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <SectionReveal>
            <h1 className="text-4xl font-serif-tc text-foreground mb-8">{creative.title}</h1>
            <p className="text-base md:text-lg font-sans-tc text-muted-foreground leading-relaxed mb-12">
              {creative.description}
            </p>
          </SectionReveal>
          <div className="mt-12">
            <Link to="/" className="text-primary hover:underline">← 返回首頁</Link>
          </div>
        </div>
      </div>
    );
  }

  // 3. 一般作品的顯示方式 (包含 Hero Image 和影片切換)
  return (
    <div className="min-h-screen bg-background">
      {/* Hero image */}
      <div className="relative h-[50vh] md:h-[65vh] overflow-hidden">
        <motion.img
          src={work!.image}
          alt={work!.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-sans-tc text-foreground/70 hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> 返回首頁
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="block text-xs font-sans-tc text-primary tracking-[0.3em] uppercase mb-3">
              {work!.tag}
            </span>
            <h1 className="text-3xl md:text-6xl font-serif-display font-bold text-foreground mb-2">
              {work!.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <SectionReveal>
          <p className="text-base md:text-lg font-sans-tc text-muted-foreground leading-relaxed mb-12">
            {work!.description}
          </p>
        </SectionReveal>

        {/* Video player 區塊 */}
        {(work?.videoUrl || (work?.videos && work.videos.length > 0)) && (
          <SectionReveal delay={0.1}>
            <div className="mb-12">
              <p className="text-xs font-sans-tc text-primary tracking-[0.2em] uppercase mb-4">影片</p>
              
              {/* 影片切換按鈕 */}
              {work.videos && work.videos.length > 1 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {work.videos.map((video, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveVideoIndex(index)}
                      className={`px-4 py-2 rounded-full text-xs transition-all ${
                        activeVideoIndex === index
                          ? "bg-primary text-black font-bold"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      {video.title}
                    </button>
                  ))}
                </div>
              )}

              {/* 播放器核心 */}
              <VideoPlayer
                url={work.videos ? work.videos[activeVideoIndex].url : (work.videoUrl || "")}
                title={work.videos ? work.videos[activeVideoIndex].title : (work.title || "")}
              />
            </div>
          </SectionReveal>
        )}

        {/* 專案內容 Details */}
        <SectionReveal delay={0.2}>
          <p className="text-xs font-sans-tc text-primary tracking-[0.2em] uppercase mb-6">
            專案內容
          </p>
          <div className="space-y-0">
            {work!.details.map((detail, i) => (
              <div
                key={i}
                className="flex items-center gap-4 py-4 border-b border-border/30"
              >
                <span className="text-xs font-sans-tc text-muted-foreground w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm md:text-base font-sans-tc text-foreground">
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Back link */}
        <SectionReveal delay={0.3}>
          <div className="mt-16 pt-8 border-t border-border/20">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-sans-tc text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> 返回所有作品
            </Link>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
};

export default WorkDetail;

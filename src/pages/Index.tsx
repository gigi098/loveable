import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import VideoExperience from "@/components/VideoExperience";
import CreativeLab from "@/components/CreativeLab";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedWork />
      <VideoExperience />
      <CreativeLab />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

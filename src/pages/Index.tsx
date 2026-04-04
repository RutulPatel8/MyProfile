import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-drift" />
        <div className="absolute top-[35%] -right-32 h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/15 blur-3xl animate-drift [animation-delay:1.5s]" />
        <div className="absolute -bottom-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl animate-drift [animation-delay:3s]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
};

export default Index;

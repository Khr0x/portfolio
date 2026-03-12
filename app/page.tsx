import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import About from "@/components/ui/about";
import Projects from "@/components/ui/projects";
import Skills from "@/components/ui/skills";
import Contact from "@/components/ui/contact";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
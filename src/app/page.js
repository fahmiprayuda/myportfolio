import SnapScrollProvider from "@/components/providers/SnapScrollProvider";
import Navbar from "@/components/layout/Navbar";
import About from "@/features/about";
import Hero from "@/features/hero";
import Projects from "@/features/projects";
import Contact from "@/features/contact";

export default function Page()  {

  return (
    <SnapScrollProvider>
          <Navbar />
          <Hero />
          <About />
          <Projects/>
          <Contact />
    </SnapScrollProvider>
  );
}
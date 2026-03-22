import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Habilidades";
import Contact from "./components/Contact";
import Habilidades from "./components/Habilidades";
import Education from "./components/Educacional";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Habilidades />
      <Contact />
    </main>
  );
}
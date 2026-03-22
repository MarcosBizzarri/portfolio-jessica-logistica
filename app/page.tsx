import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Habilidades";
import Contact from "./components/Contact";
import Habilidades from "./components/Habilidades";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Habilidades />
      <Contact />
    </main>
  );
}
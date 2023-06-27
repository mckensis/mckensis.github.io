import Hero from "./Hero"
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const Main = ({ open }) => {

  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      {open && <div className="overlay"></div>}
    </main>
  )
}

export default Main;
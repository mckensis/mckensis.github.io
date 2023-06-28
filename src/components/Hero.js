import { useEffect, useRef, useState } from "react";
import Portrait from "../assets/images/portrait.jpg";
import Mail from "../assets/icons/email.png";
import Arrow from "../assets/icons/arrow.png";
import { animated } from "@react-spring/web";
import { useHeroLinkSpring, useHeroSpring } from "../hooks/useHeroSpring";

const Hero = () => {

  const [word, setWord] = useState("passionate");
  const [loading, setLoading] = useState(false);
  const swapRef = useRef();

  const heroRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  const heroSpring = useHeroSpring(heroRef);
  const projectSpring = useHeroLinkSpring(projectRef);
  const contactSpring = useHeroLinkSpring(contactRef);

  // Handles swapping the word in the hero section
  useEffect(() => {    
    let count = 0;

    const words = [
      'creative',
      'patient',
      'personable',
      'positive',
      'reliable',
      'passionate'
    ];

    // Every 1.75 seconds the word changes
    const interval = setInterval(() => {
      setWord(words[count]);
      count < words.length - 1 ? count = count + 1 : count = 0;
      setLoading(true);
      swapRef?.current?.classList.toggle("loading");
    }, 1750);

    return () => clearInterval(interval);
  }, []);

  return (
    <animated.section ref={ heroRef } style={ heroSpring } id="hero">
      <img src={Portrait} className="portrait" alt="" />
      <h1>Hi, I'm Aidan</h1>

      <p id="swapping">
        I'm a&nbsp;
        <span className="arrow">
          <img id="arrow" src={Arrow} alt="" />
          <span ref={swapRef} className={loading ? "swap loading" : "swap"}>
            {word}
          </span>
        </span>
        &nbsp;web developer from Glasgow, Scotland.
      </p>

      <section className="links">
        <animated.a href="#projects" className="big-link internal-link" ref={ projectRef } style={ projectSpring }>View my Projects</animated.a>
        <animated.a href="#contact" className="big-link hero-contact" ref={ contactRef } style={ contactSpring }>Contact Me <img src={Mail} alt="" /></animated.a>
      </section>
    </animated.section>
  )
}

export default Hero;
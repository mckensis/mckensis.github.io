import { useEffect, useRef, useState } from "react";
import Portrait from "../assets/images/portrait.jpg";
import Mail from "../assets/icons/email.png";

const Hero = () => {

  const [word, setWord] = useState("passionate");
  const [loading, setLoading] = useState(false);
  const swapRef = useRef();

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

    const interval = setInterval(() => {
      setWord(words[count]);
      count < words.length - 1 ? count = count + 1 : count = 0;
      setLoading(true);
      swapRef.current.classList.toggle("loading");
    }, 1750);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero">
      <img src={Portrait} className="portrait" alt="" />
      <h1>Hi, I'm Aidan</h1>
      <p id="swapping">I'm a <span ref={swapRef} className={loading ? "swap loading" : "swap"}>{word}</span><span>&#8630;</span> web developer from Glasgow.</p>

      <section className="buttons">
        <a href="#projects" className="big-link internal-link">View my Projects</a>
        <a href="#contact" className="big-link hero-contact">Contact Me <img src={Mail} alt="" /></a>
      </section>
    </section>
  )
}

export default Hero;
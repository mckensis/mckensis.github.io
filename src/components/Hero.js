import { useEffect, useRef, useState } from "react";
import Portrait from "../assets/images/portrait.jpg";
import Mail from "../assets/icons/email.png";
import { animated, useSpring, useInView } from "@react-spring/web";

const Hero = () => {

  const [word, setWord] = useState("passionate");
  const [loading, setLoading] = useState(false);
  const swapRef = useRef();
  const [ref, inView] = useInView();

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
      swapRef?.current?.classList.toggle("loading");
    }, 1750);

    return () => clearInterval(interval);
  }, []);

  const heroProps = useSpring({
    from: {
      marginTop: -50,
      marginBottom: 5,
      opacity: 0,
      gap: "5rem",
    },
    to: { 
      opacity: 1,
      marginTop: 0,
      marginBottom: 0,
      gap: "2rem",
    },
    config: {
      mass: 1,
      tension: 200,
      friction: 15,
    },
  });

  const buttonProps = useSpring({
    from: { columnGap: "0", opacity: 0 },
    opacity: 1,
    delay: 750,
    columnGap: "2rem",
    config: {
      mass: 1,
      tension: 300,
      friction: 10
    }
  });

  return (
    <animated.section ref={ref} style={ heroProps } id="hero">
      {inView && <>

      <img src={Portrait} className="portrait" alt="" />
      <h1>Hi, I'm Aidan</h1>

      <p id="swapping">
        I'm a
        <span ref={swapRef} className={loading ? "swap loading" : "swap"}>
          {word}
        </span>
        <span>
          &#8630;
        </span>
        web developer from Glasgow.
      </p>

      <animated.section style={ buttonProps } className="buttons">
        <a href="#projects" className="big-link internal-link">View my Projects</a>
        <a href="#contact" className="big-link hero-contact">Contact Me <img src={Mail} alt="" /></a>
      </animated.section>

      </>}

    </animated.section>
  )
}

export default Hero;
import { useRef } from "react";
import { useHeadingSpring, useSubtitleSpring } from "../hooks/useSpringHooks";
import { animated } from "@react-spring/web";

const Skills = () => {

  const headingRef = useRef();
  const headingSpring = useHeadingSpring(headingRef);

  const subtitleRef = useRef();
  const subtitleSpring = useSubtitleSpring(subtitleRef);

  return (
    <section id="skills">
      <animated.h2 ref={ headingRef } style={ headingSpring }>Skills & Technologies</animated.h2>
      <animated.p className="subtitle" ref={ subtitleRef } style={ subtitleSpring }>The main libraries, frameworks, and tools that I use regularly. I am also keen to learn and utilise additional technologies besides these.</animated.p>

      <article>
        <ul className="skills-list">
          <li className="skill">HTML</li>
          <li className="skill">React</li>
          <li className="skill">CSS</li>
          <li className="skill">Firebase</li>
          <li className="skill">JavaScript</li>
          <li className="skill">Linux</li>
          <li className="skill">Git / Github</li>
          <li className="skill">Node</li>
        </ul>
      </article>
      
    </section>
  )
}

export default Skills;
import { useRef } from "react";
import { animated } from "@react-spring/web";
import { useSlideUpLargeSpring, useSlideUpSmallSpring } from "../hooks/useSlideUpSpring";
import { useScaleUpSmallSpring, useScaleUpTinySpring } from "../hooks/useScaleUpSpring";

const Skills = () => {

  const headingRef = useRef();
  const subtitleRef = useRef();
  const listRef = useRef();

  const headingSpring = useSlideUpLargeSpring(headingRef);
  const subtitleSpring = useScaleUpSmallSpring(subtitleRef);
  const listSpring = useSlideUpSmallSpring(listRef);
  const skills = [
    "HTML",
    "React",
    "CSS",
    "Firebase",
    "JavaScript",
    "Linux",
    "Git / GitHub",
    "Node"
  ];

  return (
    <section id="skills">
      <animated.h2 ref={ headingRef } style={ headingSpring }>Skills & Technologies</animated.h2>
      <animated.p className="subtitle" ref={ subtitleRef } style={ subtitleSpring }>The main libraries, frameworks, and tools that I use regularly. I am also keen to learn and utilise additional technologies besides these.</animated.p>

      <article>
        <animated.ul className="skills-list" ref={ listRef } style={ listSpring }>
          {skills.map(skill => (
            <SkillItem key={skill} skill={skill} />
          ))}
        </animated.ul>
      </article>
      
    </section>
  )
}

const SkillItem = ({ skill }) => {

  const skillRef = useRef();
  const skillSpring = useScaleUpTinySpring(skillRef, 1);

  return (
    <animated.li key={skill} className="skill" ref={ skillRef } style={ skillSpring }>
      {skill}
    </animated.li>
  )
}

export default Skills;
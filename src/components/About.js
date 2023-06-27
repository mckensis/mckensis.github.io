import { useRef } from "react";
import { animated } from "@react-spring/web";
import { useSectionSpring, useArticleSpring, useSubtitleSpring, useHeadingSpring } from "../hooks/useSpringHooks";

const About = () => {

  const aboutRef = useRef();
  const aboutSpring = useSectionSpring(aboutRef);

  const headingRef = useRef();
  const headingSpring = useHeadingSpring(headingRef);
  
  const articleRef = useRef();
  const articleSpring = useArticleSpring(articleRef);
 
  const subtitleRef = useRef();
  const subtitleSpring = useSubtitleSpring(subtitleRef);

  return (
    <section id="about">
      <animated.h2 ref={ headingRef } style={ headingSpring }>About Me</animated.h2>
      <animated.p className="subtitle" ref={ subtitleRef } style={ subtitleSpring } >A wee bit about me.</animated.p>
        <animated.article className="background-style" ref={ articleRef } style={ articleSpring }>
          <p>I'm a self-taught developer who has been fully focusing my time and energy on learning web development since the beginning of 2022 when I decided to work towards a career change into software development. I've always been passionate about computers and technology, and this passion and interest has continued to grow as time has passed.</p>
          <hr />
          <p>I began my journey into web development via The Odin Project's curriculum. I spent a year creating projects with vanilla JavaScript, Webpack, and Git. I then moved on to learn React, and have been doing so for the past 6 months. I believe that keeping up to date with new technologies is essential in this industry, and learning is not something that should ever be considered complete.</p>
          <hr />
          <p>My current goal is to find a role where I can begin my career and continue developing my skillset within a professional environment while doing a job that I am incredibly passionate about.</p>
        </animated.article>
    </section>
  )
}

export default About;
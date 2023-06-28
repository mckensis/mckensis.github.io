import { useRef } from "react";
import { animated } from "@react-spring/web";
import { useSlideUpLargeSpring, useSlideUpTinySpring } from "../hooks/useSlideUpSpring";
import { useScaleUpSmallSpring } from "../hooks/useScaleUpSpring";

const About = () => {

  const headingRef = useRef();
  const subtitleRef = useRef();
  const articleRef = useRef();
  
  const headingSpring = useSlideUpLargeSpring(headingRef);
  const subtitleSpring = useScaleUpSmallSpring(subtitleRef);
  const articleSpring = useSlideUpTinySpring(articleRef);

  return (
    <section id="about">
      <animated.h2 ref={ headingRef } style={ headingSpring }>About Me</animated.h2>
      <animated.p className="subtitle" ref={ subtitleRef } style={ subtitleSpring } >A wee bit about me.</animated.p>
        <animated.article className="background-style" ref={ articleRef } style={ articleSpring }>
          
          <p>
            <span>I'm a full stack developer who specialises in front-end development.</span> 
            At the beginning of 2022 I decided to chase after my true passion of working with computers, and began pursuing a career change from hospitality into software development. 
            I've always been passionate about computers and technology since I was very young, and this sentiment has continued to grow as time has passed. 
            My dream is to work within a company where I can contribute to their success and grow in an environment surrounded by like-minded people.
          </p>

          <hr />

          <p>
            <span>I self-taught myself with The Odin Project curriculum.</span>
            I spent a year self-teaching HTML, CSS, JavaScript, and Webpack before moving on to React and Firebase.
            I also self-taught C, Python, and SQL while completing Harvard's online CS50 curriculum. 
            I believe that learning is an ongoing process, especially within the software development industry where technology is continuously updating.
            This is something that excites me, as I love both the process of learning new skills and developing current skills.
          </p>

          <hr />
          
          <p>
            <span>I also like to spend my time doing other things.</span>
            When I am not building things for the web, I generally spend my time gaming and cooking. I love trying out new recipes as well as perfecting my existing recipes. I also am a massive fan of eating out, and enjoy finding new places in the city to eat at.
          </p>
        </animated.article>
    </section>
  )
}

export default About;
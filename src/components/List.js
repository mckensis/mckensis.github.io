import { animated } from "@react-spring/web";
import { useNavSpring } from "../hooks/useSpringHooks";

const List = ({ open, closeNav }) => {

  const nav = useNavSpring();

  return (
    <animated.ul style={ nav } className={open ? "nav-list open" : "nav-list"}>
      <li><a href="#about" className="small-link internal-link" onClick={closeNav}>About</a></li>
      <li><a href="#projects" className="small-link internal-link" onClick={closeNav}>Projects</a></li>
      <li><a href="#skills" className="small-link internal-link" onClick={closeNav}>Skills</a></li>
      <li><a href="#contact" className="small-link internal-link" onClick={closeNav}>Contact</a></li>
      <li><a href="https://www.github.com/mckensis" className="small-link external-link" target="_blank" rel="noreferrer" onClick={closeNav}>Github</a></li>
    </animated.ul>
  )
}

export default List;
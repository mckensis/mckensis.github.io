import { animated } from "@react-spring/web";
import { useNavSpring } from "../hooks/useSpringHooks";

const List = ({ open, closeNav }) => {

  const nav = useNavSpring();
  const list = [
    {
      link: "#about",
      text: "About"
    },
    {
      link: "#projects",
      text: "Projects"
    },
    {
      link: "#skills",
      text: "Skills"
    },
    {
      link: "#contact",
      text: "Contact"
    },
    {
      link: "https://www.github.com/mckensis",
      text: "Github"
    },
  ]

  return (
    <animated.ul style={ nav } className={open ? "nav-list open" : "nav-list"}>
      {list.map(item => (
        <ListItem key={item.text} item={item} closeNav={closeNav} />
      ))}
    </animated.ul>
  )
}

const ListItem = ({ item, closeNav }) => {

  return (
    <li key={item.text}>
      <a
        href={item.link} 
        alt="" 
        className="small-link"
        onClick={closeNav}
      >
        {item.text}
      </a>
    </li>

  )
}

export default List;
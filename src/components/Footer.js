import linkedIn from "../assets/icons/linkedin-light.png";
import gitHub from "../assets/icons/github-light.png";

const Footer = () => {
  return (
    <footer className="icons">
      <a href="https://www.linkedin.com/in/aidan-mckenzie-" className="icon" target="_blank" rel="noreferrer"><img src={linkedIn} alt="" /></a>
      <a href="https://www.github.com/mckensis" className="icon" target="_blank" rel="noreferrer"><img src={gitHub} alt="" /></a>
    </footer>
  )
}

export default Footer;
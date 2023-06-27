import { useEffect, useState } from "react";
import Burger from "./Burger";
import List from "./List";

const Header = () => {

  const [open, setOpen] = useState(false);

  const toggleNav = (e) => {
    setOpen(open => !open);

    if (!open) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    }
    if (open) {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "unset";
    }
  }

  const closeNav = () => {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "unset";
    setOpen(false);
    return;
  }

  useEffect(() => {
    if (!open) return;

    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("overlay")) closeNav();
      return;
    })
  }, [open]);

  return (
    <header>
      <nav>
        <a className="home internal-link" href="#hero">am.</a>
        <Burger open={open} toggleNav={toggleNav} />
        <List open={open} closeNav={closeNav} />
      </nav>
      {open && <div className="overlay"></div>}
    </header>
  )
}

export default Header;
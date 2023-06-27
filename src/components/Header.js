import { useEffect, useState } from "react";
import Burger from "./Burger";
import List from "./List";


const Header = () => {

  const [open, setOpen] = useState(false);

  // Toggle nav between open & closed
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

  // Handle closing the nav
  const closeNav = () => {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "unset";
    setOpen(false);
    return;
  }

  // Close the nav when open and user clicks outside nav area
  useEffect(() => {
    if (!open) return;

    // Listen for a click event outside the nav if it's open
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
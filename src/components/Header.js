import { useCallback, useEffect } from "react";
import Burger from "./Burger";
import List from "./List";


const Header = ({ open, setOpen }) => {

  // Toggle nav between open & closed
  const toggleNav = (e) => {
    setOpen(open => !open);

    if (!open) {
      document.body.style.overflow = "hidden";
    }
    if (open) {
      document.body.style.overflow = "auto";
    }
  }

  // Handle closing the nav
  const closeNav = useCallback(() => {
    document.body.style.overflow = "auto";
    setOpen(false);
    return;
  }, [setOpen]);

  // Close the nav when open and user clicks outside nav area
  useEffect(() => {
    if (!open) return;

    document.addEventListener("touchstart", (e) => {
      if (e.target.classList.contains("overlay")) closeNav();
      return;
    });

    // Listen for a click event outside the nav if it's open
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("overlay")) closeNav();
      return;
    });
  }, [open, closeNav]);

  return (
    <header>
      <nav>
        <a className="home internal-link" href="/">am.</a>
        <Burger open={open} toggleNav={toggleNav} />
        <List open={open} closeNav={closeNav} />
      </nav>
    </header>
  )
}

export default Header;
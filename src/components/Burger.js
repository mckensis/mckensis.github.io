const Burger = ({ toggleNav, open }) => {

  return (
    <button className={open ? "burger open" : "burger"} title="Toggle Navigation" onClick={toggleNav}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export default Burger;
function Overmenu({ isOpen, setOpen }) {
  return (
    <div className={`overmenu ${isOpen ? "fadeIn" : ""}`}>
      <nav className={`mobile-menu ${isOpen ? "fadeIn slideIn" : ""}`}>
        <a href="#hero" aria-label="Go to home section" onClick={() => setOpen(false)}>
          Home
        </a>
        <a href="#why-choose-us" aria-label="Go to why-choose-us section" onClick={() => setOpen(false)}>
          About
        </a>
        <a href="#blog" aria-label="Go to why-choose-us section" onClick={() => setOpen(false)}>
          Contact
        </a>
        <a href="#blog" aria-label="Go to Blog section" onClick={() => setOpen(false)}>
          Blog
        </a>
        <a href="#" aria-label="Go to Carrer section" onClick={() => setOpen(false)}>
          Careers
        </a>
      </nav>
    </div>
  );
}

export default Overmenu;

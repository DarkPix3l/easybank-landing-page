import ButtonR from "../Button/ButtonR";

function HeaderDesktop() {
  return (
    <header className="desktop">
      <div className="wrapper">
        <img className="logo" src="./images/logo.svg" alt="Easybank logo" />
        <nav className="desktop-menu">
          <ul>
            <li>
              <a href="#hero" aria-label="Go to home section">
                Home
              </a>
            </li>
            <li>
              <a href="#why-choose-us" aria-label="Go to why-choose-us section">
                About
              </a>
            </li>
            <li>
              <a href="#blog" aria-label="Go to Contact section">
                Contact
              </a>
            </li>
            <li>
              <a href="#blog" aria-label="Go to Blog section">
                Blog
              </a>
            </li>
            <li>
              <a href="#" aria-label="Go to Career section">
                Careers
              </a>
            </li>
          </ul>
        </nav>
        <ButtonR name={"Request Invite"} variant="gradient" type={"button"}></ButtonR>
      </div>
    </header>
  );
}

export default HeaderDesktop;

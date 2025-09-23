function HeaderMobile({ isOpen, setOpen }) {
  function toggleMenu() {
    setOpen(!isOpen);
  }

  return (
    <>
      <header className="">
        <div className="wrapper">
          <img className="logo" src="/images/logo.svg" alt="Easybank logo" />
          <img className="hamburger" src="/icons/icon-hamburger.svg" alt="Hamburger menu" onClick={toggleMenu} />
        </div>
      </header>
    </>
  );
}

export default HeaderMobile;

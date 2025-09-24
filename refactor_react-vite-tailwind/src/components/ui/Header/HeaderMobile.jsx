function HeaderMobile({ isOpen, setOpen }) {
  function toggleMenu() {
    setOpen(!isOpen);
  }

  return (
    <>
      <header className='w-full h-[90px] fixed bg-white z-[3] '>
        <div className='headerWrapper flex flex-row justify-between items-center h-full w-[85%] m-auto'>
          <img
            src='/images/logo.svg'
            alt='Easybank logo'
          />
          <img
            className='w-10'
            src='/icons/icon-hamburger.svg'
            alt='Hamburger menu'
            onClick={toggleMenu}
          />
        </div>
      </header>
    </>
  );
}

export default HeaderMobile;

import ButtonR from "../Button/ButtonR";

function HeaderDesktop() {
  return (
    <header className='w-full h-[100px] fixed bg-white z-[3]'>
      <div className='headerWrapper flex flex-row justify-between items-center h-full w-[85%] m-auto'>
        <img
          src='./images/logo.svg'
          alt='Easybank logo'
        />
        <nav className='desktop-menu'>
          <ul>
            <li>
              <a
                href='#hero'
                aria-label='Go to home section'
                className='text-[#9698a6] p-[18px] xl:p-8 hover:border-b-4 hover:border-b-[#31d35c]'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#why-choose-us'
                aria-label='Go to why-choose-us section'
                className='text-[#9698a6] p-[18px] xl:p-8 hover:border-b-4 hover:border-b-[#31d35c]'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#blog'
                aria-label='Go to Contact section'
                className='text-[#9698a6] p-[18px] xl:p-8 hover:border-b-4 hover:border-b-[#31d35c]'
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href='#blog'
                aria-label='Go to Blog section'
                className='text-[#9698a6] p-[18px] xl:p-8 hover:border-b-4 hover:border-b-[#31d35c]'
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href='#'
                aria-label='Go to Career section'
                className='text-[#9698a6] p-[18px] xl:p-8 hover:border-b-4 hover:border-b-[#31d35c]'
              >
                Careers
              </a>
            </li>
          </ul>
        </nav>
        <ButtonR
          name={"Request Invite"}
          variant='gradient'
          type={"button"}
        ></ButtonR>
      </div>
    </header>
  );
}

export default HeaderDesktop;

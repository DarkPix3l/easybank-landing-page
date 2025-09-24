import ButtonR from "../Button/ButtonR";

function Invite() {
  return (
    <div className='text-center lg:justify-self-end lg:text-left '>
      <ButtonR
        name={"Request Invite"}
        variant='gradient'
        type={"button"}
        className='mb-4'
      ></ButtonR>
      <p className='md:text-[0.8rem] text-gray-500 leading-[29px]'>
        &copy; Easybank. All Rights Reserved
      </p>
      <p className='attribution text-xs text-gray-50 w-auto max-w-[200px] mx-auto mt-2 lg:mx-0 lg:mt:0'>
        Challenge by{" "}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          className='text-[hsl(27,63%,53%)] tracking-[0.5px]'
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href='https://gretamacri.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-[hsl(27,63%,53%)] tracking-[0.5px]'
        >
          Greta Macrì
        </a>
      </p>
    </div>
  );
}

export default Invite;

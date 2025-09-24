import ButtonR from "../ui/Button/ButtonR";

function Hero() {
  return (
    <section
      className='hero p-0 relative flex flex-col items-center justify-end h-[800px] sm:h-[854px] md:h-[914px] lg:h-[655px] lg:flex-row lg:justify-between lg:items-end 
max-w-[1920px] mx-auto xl:overflow-x-clip'
      aria-label='home'
    >
      <div className='call2action text-center mb-[10%] mx-auto max-w-[85%] lg:max-w-[500px] lg:ml-[8%] lg:text-left'>
        <h1 className="text-[2rem] md:text-[2.3rem] lg:text-5xl">Next generation digital banking</h1>
        <p className='py-7 text-md'>
          Take your financial life online. Your Easybank account will be a one-stop-shop for
          spending, saving, budgeting, investing, and much more.
        </p>
        <ButtonR
          name={"Request Invite"}
          variant='gradient'
          type={"button"}
        ></ButtonR>
      </div>
      <img
        className='phones absolute z-2 top-[-90px] md:top-[-350px] lg:top-[-145px] lg:right-[-350px] xl:right-9 xl:top-[-150px]'
        src='./images/image-mockups.png'
        alt='four phones showcasing the app'
      />
      <div className="mockup h-[430px] absolute top-0 w-full bg-cover bg-no-repeat bg-[position:50%] bg-[url('./images/bg-intro-mobile.svg')] md:h-[417px] lg:bg-[url('./images/bg-intro-desktop.svg')] lg:bg-[position:550px_108px] lg:h-full xl:bg-[position:650px_8px]"></div>
    </section>
  );
}

export default Hero;

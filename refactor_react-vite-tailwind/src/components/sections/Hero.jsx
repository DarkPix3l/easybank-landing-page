import ButtonR from "../ui/Button/ButtonR";

function Hero() {
  return (
    <section
      className='hero p-0 mb-15 relative flex flex-col justify-end h-[800px] sm:h-[854px] md:h-[864px] lg:mb-0 lg:h-[655px] lg:flex-row lg:justify-between lg:items-center max-w-[1920px] mx-auto xl:overflow-x-clip'
      aria-label='home'
    >
      <div className='call2action wrapper text-center lg:text-left lg:max-w-[500px] lg:ml-[8%]'>
        <h1 className="text-4xl md:text-5xl lg:text-5xl leading-14">Next generation digital banking</h1>
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
      <div className="mockup z-[-1] h-[430px] absolute top-0 w-full bg-cover bg-no-repeat bg-[position:50%] bg-[url('images/bg-intro-mobile.svg')] md:h-[417px] lg:bg-[url('images/bg-intro-desktop.svg')] lg:bg-[position:550px_108px] lg:h-full xl:bg-[position:650px_8px]"></div>
    </section>
  );
}

export default Hero;

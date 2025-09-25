import ButtonR from "../ui/Button/ButtonR";

function Hero() {
  return (
    <section id="hero" className="mb-[5.5rem] grid place-items-center bg-no-repeat text-center bg-none lg:relative lg:mb-0 lg:h-[41rem] lg:bg-[url('/images/bg-intro-desktop.svg')] lg:bg-[right_-40rem_top_-16.25rem] lg:px-10 xl:bg-[right_-28.5rem_top_-16.25rem] 2xl:bg-[right_0rem_top_-6.25rem] xl:max-w-[1920px] xl:mx-auto">
      <div className='w-full wrapper'>
        <div className='h-[18.75rem] bg-[url("/images/bg-intro-mobile.svg")] bg-cover bg-center bg-no-repeat p-[0.875rem] lg:bg-none lg:absolute lg:right-[-15rem] lg:top-[-3rem] xl:right-[-8.2rem] xl:top-[-7.6rem] 2xl:right-[7rem] 2xl:top-[-7.6rem]'>
          <img
            src='./images/image-mockups.png'
            alt='mockups'
            className='mx-auto w-full max-w-[23.5rem] -translate-y-[5.75rem] lg:max-w-[85%] lg:translate-y-0 xl:max-w-none'
          />
        </div>
        <div className='call2action wrapper text-center mt-[5rem] md:mt-[5rem] lg:text-left lg:max-w-[500px] lg:ml-[4%] xl:mt-[100px] xl:ml-0'>
          <h1 className='text-[2rem] leadin-20 sm:text-4xl md:text-5xl lg:text-5xl lg:leading-14'>
            Next generation digital banking
          </h1>
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
      </div>
    </section>
  );
}

export default Hero;

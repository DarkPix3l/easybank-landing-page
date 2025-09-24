import Reason from "../ui/WhyChooseUs/Reason";

function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-label="why choose us section"
      className="bg-gray-50 w-full py-[6%] scroll-m-[100px] text-center md:text-left shadow-[-20px_13px_20px_7px_#9698a6]">
      <div className="wrapper">
        <h2 className="text-2xl text-dark-blue font-medium lg:text-3xl ">Why choose Easybank?</h2>
        <p className="leading-[29px] mb-[50px] mt-[20px]">
          We leverage Open Banking to turn your bank account into your financial hub. Control your
          finances like never before.
        </p>

        <div className="article-container grid gap-[26px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[30px]">
          <Reason
            image="/icons/icon-online.svg"
            alt="online banking icon"
            title="Online Banking"
            description="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
          />
          <Reason
            image="/icons/icon-budgeting.svg"
            alt="online banking icon"
            title="Simple Budgeting"
            description="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
          />

          <Reason
            image="/icons/icon-onboarding.svg"
            alt="Fast onboarding icon"
            title="Fast Onboarding"
            description="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
          />

          <Reason
            image="/icons/icon-api.svg"
            alt="Open API icon"
            title="Open API"
            description="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
          />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

import Reason from '../ui/Reason';

function WhyChooseUs() {
  return (
    <section id="why-choose-us" aria-label="why choose us section">
      <div class="wrapper">
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never
          before.
        </p>

        <div class="article-container">
          <Reason
            image="/images/icon-online.svg"
            alt="online banking icon"
            title="Online Banking"
            description="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
          />
          <Reason
            image="/images/icon-budgeting.svg"
            alt="online banking icon"
            title="Simple Budgeting"
            description="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
          />

          <Reason
            image="/images/icon-onboarding.svg"
            alt="Fast onboarding icon"
            title="Fast Onboarding"
            description="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
          />

          <Reason
            image="/images/icon-api.svg"
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

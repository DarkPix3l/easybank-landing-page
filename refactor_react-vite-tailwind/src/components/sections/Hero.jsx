import ButtonR from "../ui/Button/ButtonR";

function Hero() {
  return (
    <section id="hero" aria-label="home">
      <div className="call2action">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
        </p>
        <ButtonR name={"Request Invite"} variant="gradient" type={"button"}></ButtonR>
      </div>
      <div className="half"></div>
      <img className="mockup" src="./images/image-mockups.png" alt="four phones showcasing the app" />
      <div className="phones"></div>
    </section>
  );
}

export default Hero;

import FooterNav from "../ui/Footer/FooterNav";
import Invite from "../ui/Footer/Invite";
import Socials from "../ui/Footer/Socials";

function Footer() {
  return (
    <footer
      id="footer"
      aria-label="footer navigation"
      className="bg-[#2d314d] py-[50px]">
      <div className="wrapper grid grid-cols-1 gap-[30px] md:grid-cols-[1fr_1fr_2fr] lg:gap-x-12">
        <div className="icons flex flex-col items-center gap-[20px] lg:items-start lg:gap-0">
          <img
            src="./images/logo.svg"
            alt="Easybank logo"
          />
          <Socials />
        </div>

        <FooterNav />
        <Invite />
      </div>
      {/* wrapper */}
    </footer>
  );
}

export default Footer;

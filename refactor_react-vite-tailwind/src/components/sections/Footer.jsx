import FooterNav from "../ui/FooterNav";
import Invite from "../ui/Invite";
import Socials from "../ui/Socials";

function Footer() {
  return (
    <footer aria-label="footer navigation">
      <div className="wrapper">
        <div className="icons">
          <img src="./images/logo.svg" alt="Easybank logo" />
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

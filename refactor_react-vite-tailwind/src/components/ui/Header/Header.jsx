import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { useState, useEffect } from "react";

function Header({isOpen, setOpen}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();

    window.addEventListener("resize", checkMobile);
    // Clean up on unmount
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return <>{isMobile ? <HeaderMobile isOpen={isOpen} setOpen={setOpen} /> : <HeaderDesktop />}</>;
}

export default Header;

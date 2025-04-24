import { useEffect, useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarLinksSM from "./NavbarLinksSM";

const NavbarMain = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white fixed w-full z-40 py-2 px-6 md:px-12 transition-all duration-500 ${
        scrolled ? "bg-white/70 backdrop-blur-md" : ""
      }`}
    >
      <div className="max-w-[1500px] mx-auto flex justify-between items-center">
        <NavbarLogo />
        <NavbarLinks />
        <div className="lg:hidden md:block">
          <NavbarLinksSM />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;

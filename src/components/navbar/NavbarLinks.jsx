import { Link as RouterLink, useLocation, useNavigate } from "react-router";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "Home", section: "/", type: "page" },
  { name: "About", section: "/about", type: "page" },
  { name: "Service", section: "/service", type: "page" },
  { name: "Portfolio", section: "/portfolio", type: "page" },
  { name: "Contact", section: "contact", type: "scroll-to-home" },
];

const NavbarLink = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToHome = (section) => {
    if (location.pathname === "/") {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${section}`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <ul className="lg:flex hidden gap-8 items-center">
        {links.map((link, index) => (
          <li key={index} className="group">
            {link.type === "page" && (
              <RouterLink
                to={link.section}
                className="cursor-pointer text-md transition-all duration-500"
                onClick={() => scrollToTop()}
              >
                {link.name}
              </RouterLink>
            )}

            {link.type === "scroll" && location.pathname === "/" && (
              <ScrollLink
                to={link.section}
                smooth={true}
                spy={true}
                duration={500}
                offset={-120}
                className="cursor-pointer text-md transition-all duration-500"
                onClick={() => scrollToTop()}
              >
                {link.name}
              </ScrollLink>
            )}

            {link.type === "scroll-to-home" && (
              <span
                onClick={() => handleScrollToHome(link.section)}
                className="cursor-pointer text-md transition-all duration-500"
              >
                {link.name}
              </span>
            )}

            <div className="mx-auto bg-black w-0 group-hover:w-full h-[1.5px] transition-all duration-500"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarLink;

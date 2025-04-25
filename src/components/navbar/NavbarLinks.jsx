import { Link as RouterLink, useLocation, useNavigate } from "react-router";
import { Link as ScrollLink } from "react-scroll";
import useScrollToTop from "../../hooks/useScrollToTop";

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
  const scrollToTop = useScrollToTop();

  const handleScrollToHome = (section) => {
    if (location.pathname === "/") {
      const element = document.getElementById(section);
      if (element) {
        const offsetPosition = element.offsetTop - 120;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      navigate(`/#${section}`);
    }
  };

  const isActive = (link) => {
    if (link.type === "page") {
      return location.pathname === link.section;
    }
    if (link.type === "scroll-to-home") {
      return location.pathname === "/" && location.hash === `#${link.section}`;
    }
    return false;
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
                onClick={scrollToTop}
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
                onClick={scrollToTop}
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

            <div
              className={`mx-auto bg-black h-[1.5px] transition-all duration-500 ${
                isActive(link) ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarLink;

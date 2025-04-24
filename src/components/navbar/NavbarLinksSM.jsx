import { useEffect, useState } from "react";
import { FaHome, FaStar, FaCog, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { Link as RouterLink, useLocation, useNavigate } from "react-router";
import { Link as ScrollLink } from "react-scroll";

const links = [
  {
    name: "Home",
    section: "/",
    type: "page",
    icon: <FaHome className="mr-4 w-6 text-[#E5D9B6] text-center" />,
  },
  {
    name: "About",
    section: "/about",
    type: "page",
    icon: <FaStar className="mr-4 w-6 text-[#A4BE7B] text-center" />,
  },
  {
    name: "Service",
    section: "/service",
    type: "page",
    icon: <FaCog className="mr-4 w-6 text-[#E5D9B6] text-center" />,
  },
  {
    name: "Portfolio",
    section: "/portfolio",
    type: "page",
    icon: <FaBriefcase className="mr-4 w-6 text-[#A4BE7B] text-center" />,
  },
  {
    name: "Contact",
    section: "contact",
    type: "scroll-to-home",
    icon: <FaEnvelope className="mr-4 w-6 text-[#E5D9B6] text-center" />,
  },
];

const NavbarLinksSM = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

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
      <div className="lg:hidden md:block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 w-8 h-8 flex items-center justify-center cursor-pointer"
        >
          <span
            className={`absolute block w-6 h-0.5 bg-black transition-all duration-500 ${
              isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`absolute block w-6 h-0.5 bg-black transition-all duration-500 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute block w-6 h-0.5 bg-black transition-all duration-500 ${
              isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`lg:hidden md:block mobile-menu fixed inset-0 z-30 pt-30 px-10 sm:px-14 h-[100vh] w-[100%] bg-white transition-all duration-500 ${
          isOpen ? "open" : "pointer-events-none"
        }`}
      >
        <ul>
          {links.map((link, index) => (
            <li key={index} className="group">
              {link.type === "page" && (
                <RouterLink
                  to={link.section}
                  className="flex items-center relative py-3 transition-all duration-500 text-lg font-medium hover:animate-pulse"
                  onClick={() => {
                    scrollToTop();
                    setIsOpen(false);
                  }}
                >
                  {link.icon}
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
                  className="flex items-center relative py-3 transition-all duration-500 text-lg font-medium hover:animate-pulse"
                  onClick={() => {
                    scrollToTop();
                    setIsOpen(false);
                  }}
                >
                  {link.icon}
                  {link.name}
                </ScrollLink>
              )}

              {link.type === "scroll-to-home" && (
                <span
                  onClick={() => {
                    handleScrollToHome(link.section);
                    setIsOpen(false);
                  }}
                  className="flex items-center relative py-3 transition-all duration-500 text-lg font-medium cursor-pointer hover:animate-pulse"
                >
                  {link.icon}
                  {link.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarLinksSM;

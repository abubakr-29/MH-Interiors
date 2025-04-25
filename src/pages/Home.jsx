import { useEffect } from "react";
import { useLocation } from "react-router";
import HeroMain from "../components/heroSection/HeroMain";
import ServicesMain from "../components/servicesSection/ServicesMain";
import PortfolioMain from "../components/portfolioSection/PortfolioMain";
import TestimonialsMain from "../components/testimonialsSection/TestimonialsMain";
import ContactUsMain from "../components/contactUsSection/ContactUsMain";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));

      if (element) {
        setTimeout(() => {
          const offset = 120;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
          window.history.replaceState(null, "", location.pathname);
        }, 500);
      }
    }
  }, [location]);

  return (
    <div>
      <HeroMain />
      <ServicesMain />
      <PortfolioMain />
      <TestimonialsMain />
      <ContactUsMain />
    </div>
  );
};

export default Home;

import { useEffect } from "react";
import { useLocation } from "react-router";
import SEO from "../components/SEO";
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

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "InteriorDesignCompany",
    name: "MH Interiors",
    description:
      "Premium interior design services in Kolkata, West Bengal. Residential & commercial interior solutions.",
    url: "https://mh-interiors.in",
    telephone: "+91-7980033244",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      postalCode: "700052",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.5726",
      longitude: "88.3639",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Kolkata",
      },
      {
        "@type": "State",
        name: "West Bengal",
      },
    ],
    image: "https://mh-interiors/MHInteriorsLogo.svg",
    sameAs: ["https://www.instagram.com/mh_interiors.in"],
  };

  return (
    <>
      <SEO
        title="MH Interiors | Interior Designer in Kolkata | Best Home & Office Interior Design Services in West Bengal"
        description="Interior design company in Kolkata offering residential, commercial, modular kitchen, bedroom & living room designs. Get premium interior design services across West Bengal. Free consultation & best prices guaranteed."
        keywords="interior designer in Kolkata, interior design Kolkata, best interior designer in Kolkata, home interior design Kolkata, interior decorator Kolkata, modular kitchen Kolkata, bedroom interior design Kolkata, office interior design Kolkata, commercial interior design Kolkata, residential interior design Kolkata, luxury interior designer Kolkata, interior design services West Bengal, interior designers near me, affordable interior design Kolkata, 3D interior design Kolkata"
        ogImage="/image.jpeg"
        ogType="website"
        schema={businessSchema}
      />

      <main itemScope itemType="https://schema.org/WebPage">
        <h1 style={{ position: "absolute", left: "-9999px" }}>
          Professional Interior Designer in Kolkata - Transform Your Space with
          MH Interiors
        </h1>
        <HeroMain />
        <ServicesMain />
        <PortfolioMain />
        <TestimonialsMain />
        <ContactUsMain />
      </main>
    </>
  );
};

export default Home;

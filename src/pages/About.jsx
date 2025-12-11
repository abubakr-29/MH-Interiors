import SEO from "../components/SEO";
import AboutUsMain from "../components/aboutUsSection/AboutUsMain";

const About = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About MH Interiors",
    description:
      "Learn about MH Interiors - Kolkata's trusted interior design company with years of experience in residential and commercial projects.",
    mainEntity: {
      "@type": "Organization",
      name: "MH Interiors",
      foundingDate: "2021",
      founder: {
        "@type": "Person",
        name: "Md Hafiz",
      },
    },
  };

  return (
    <>
      <SEO
        title="MH Interiors Story | About Us | Leading Interior Design Company in Kolkata"
        description="Discover MH Interiors - Kolkata's premier interior design firm with 10+ years of experience. Meet our expert team of interior designers specializing in modern, contemporary, and luxury home designs across West Bengal."
        keywords="about MH Interiors, interior design company Kolkata, best interior designers Kolkata, experienced interior decorator Kolkata, interior design firm West Bengal, professional interior designers, interior design team Kolkata"
        ogImage="/image.jpeg"
        schema={aboutSchema}
      />

      <main itemScope itemType="https://schema.org/AboutPage">
        <h1 style={{ position: "absolute", left: "-9999px" }}>
          About MH Interiors - Premier Interior Design Company in Kolkata
        </h1>
        <AboutUsMain />
      </main>
    </>
  );
};

export default About;

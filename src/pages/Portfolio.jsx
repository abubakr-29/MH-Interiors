import SEO from "../components/SEO";
import PortfolioMain from "../components/portfolioPage/PortfolioMain";

const Portfolio = () => {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Interior Design Portfolio",
    description:
      "Explore our completed interior design projects in Kolkata - residential homes, luxury apartments, offices, and commercial spaces.",
    creator: {
      "@type": "Organization",
      name: "MH Interiors",
    },
  };

  return (
    <>
      <SEO
        title="MH Interiors Showcase | Interior Design Portfolio | Completed Projects in Kolkata"
        description="Browse our stunning portfolio of completed interior design projects in Kolkata & West Bengal. View before-after photos of modern homes, luxury apartments, modular kitchens, offices & commercial spaces designed by expert interior designers."
        keywords="interior design portfolio Kolkata, completed interior projects Kolkata, interior design photos Kolkata, home interior gallery, modern interior design examples, interior design before after, luxury interior projects Kolkata, residential interior portfolio, commercial interior projects, interior design inspiration Kolkata"
        ogImage="/image.jpeg"
        schema={portfolioSchema}
      />

      <main itemScope itemType="https://schema.org/CollectionPage">
        <h1 style={{ position: "absolute", left: "-9999px" }}>
          Interior Design Portfolio - Stunning Projects Completed in Kolkata
        </h1>
        <PortfolioMain />
      </main>
    </>
  );
};

export default Portfolio;

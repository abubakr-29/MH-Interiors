import SEO from "../components/SEO";
import ServiceMain from "../components/servicePage/ServiceMain";

const Service = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Interior Design Services",
    provider: {
      "@type": "Organization",
      name: "MH Interiors",
    },
    areaServed: {
      "@type": "City",
      name: "Kolkata",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Interior Design Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Interior Design",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Interior Design",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Modular Kitchen Design",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bedroom Interior Design",
          },
        },
      ],
    },
  };

  return (
    <>
      <SEO
        title="MH Interiors | Interior Design Services in Kolkata | Residential, Commercial & Modular Kitchen"
        description="Comprehensive interior design services in Kolkata - Home interiors, office design, modular kitchens, bedroom design, living room, bathroom interiors & complete turnkey solutions. Get free design consultation from expert interior designers."
        keywords="interior design services Kolkata, residential interior design Kolkata, commercial interior design Kolkata, modular kitchen design Kolkata, bedroom interior design Kolkata, living room interior design, office interior design Kolkata, turnkey interior solutions, home renovation Kolkata, interior contractors Kolkata, false ceiling design, furniture design Kolkata, wardrobe design Kolkata"
        ogImage="/image.jpeg"
        schema={serviceSchema}
      />

      <main itemScope itemType="https://schema.org/Service">
        <h1 style={{ position: "absolute", left: "-9999px" }}>
          Complete Interior Design Services in Kolkata - Residential &
          Commercial Solutions
        </h1>
        <ServiceMain />
      </main>
    </>
  );
};

export default Service;

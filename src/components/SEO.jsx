import { useEffect } from "react";
import { useLocation } from "react-router";

const SEO = ({
  title,
  description,
  keywords,
  ogImage,
  ogType = "website",
  twitterCard = "summary_large_image",
  schema,
}) => {
  const location = useLocation();
  const siteUrl = "https://mh-interiors.in";
  const canonical = `${siteUrl}${location.pathname}`;

  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const setMetaTag = (name, content, isProperty = false) => {
      if (!content) return;

      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (element) {
        element.setAttribute("content", content);
      } else {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        element.setAttribute("content", content);
        document.head.appendChild(element);
      }
    };

    const setCanonical = (url) => {
      let link = document.querySelector('link[rel="canonical"]');
      if (link) {
        link.setAttribute("href", url);
      } else {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        link.setAttribute("href", url);
        document.head.appendChild(link);
      }
    };

    // Basic meta tags
    setMetaTag("description", description);
    setMetaTag("keywords", keywords);

    // Open Graph tags
    setMetaTag("og:title", title, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:url", canonical, true);
    setMetaTag("og:type", ogType, true);
    if (ogImage) {
      setMetaTag(
        "og:image",
        ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`,
        true
      );
    }

    // Twitter Card tags
    setMetaTag("twitter:card", twitterCard);
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    if (ogImage) {
      setMetaTag(
        "twitter:image",
        ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`
      );
    }

    // Canonical URL
    setCanonical(canonical);

    // Schema.org structured data
    if (schema) {
      let scriptTag = document.querySelector(
        'script[type="application/ld+json"]'
      );
      if (scriptTag) {
        scriptTag.textContent = JSON.stringify(schema);
      } else {
        scriptTag = document.createElement("script");
        scriptTag.type = "application/ld+json";
        scriptTag.textContent = JSON.stringify(schema);
        document.head.appendChild(scriptTag);
      }
    }
  }, [
    title,
    description,
    keywords,
    ogImage,
    ogType,
    twitterCard,
    canonical,
    schema,
  ]);

  return null;
};

export default SEO;

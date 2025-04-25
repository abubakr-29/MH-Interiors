import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import image1 from "../../assets/portfolio/image1.jpeg";
import image2 from "../../assets/portfolio/image2.jpeg";
import image3 from "../../assets/portfolio/image3.jpeg";
import image4 from "../../assets/portfolio/image4.jpeg";
import image5 from "../../assets/portfolio/image5.jpeg";
import image6 from "../../assets/portfolio/image6.jpeg";
import image7 from "../../assets/portfolio/image7.jpeg";
import image8 from "../../assets/portfolio/image8.jpeg";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    image: image1,
    title: "Modern Kitchen Design",
    description: "Contemporary kitchen with yellow accents",
  },
  {
    id: 2,
    image: image2,
    title: "Custom Wardrobe",
    description: "Wooden finish wardrobe solution",
  },
  {
    id: 3,
    image: image3,
    title: "Built-in Cabinet",
    description: "Space-saving cabinet design",
  },
  {
    id: 4,
    image: image4,
    title: "Red Accent Bedroom",
    description: "Modern Bedroom with red highlights",
  },
  {
    id: 5,
    image: image5,
    title: "Decorative Partition",
    description: "Elegant divider with pattern",
  },
  {
    id: 6,
    image: image6,
    title: "Glass Showcase",
    description: "Modern display unit",
  },
  {
    id: 7,
    image: image7,
    title: "Bathroom Cabinet",
    description: "Elegant bathroom storage solution",
  },
  {
    id: 8,
    image: image8,
    title: "Modern Living Room",
    description: "Contemporary living room design",
  },
];

const PortfolioImages = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  }, []);

  const goToPrevious = useCallback(() => {
    const newIndex =
      (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
    setCurrentIndex(newIndex);
    setSelectedImage(portfolioItems[newIndex].image);
  }, [currentIndex]);

  const goToNext = useCallback(() => {
    const newIndex = (currentIndex + 1) % portfolioItems.length;
    setCurrentIndex(newIndex);
    setSelectedImage(portfolioItems[newIndex].image);
  }, [currentIndex]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    },
    [closeLightbox, goToPrevious, goToNext]
  );

  useEffect(() => {
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedImage, handleKeyDown]);

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => openLightbox(item.image, index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mx-auto mt-2"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <Link
            to="/portfolio"
            className="border-2 border-[#0a646c] bg-[#0a646c] text-white my-5 px-4 py-3 rounded hover:bg-[#095158] transition-colors duration-500 text-sm md:text-md"
          >
            View Portfolio
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>

            <button
              className="absolute left-4 text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft size={32} />
            </button>

            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-4 text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioImages;

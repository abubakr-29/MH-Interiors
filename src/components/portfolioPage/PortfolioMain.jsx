import { useState, useCallback, useEffect } from "react";
import Papa from "papaparse";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import Fallback from "../../assets/fallback.jpg";

const PortfolioMain = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [portfolioItems, setPortfolioItems] = useState([]);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await fetch(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vStMfxorRG2hXjNO50JRJ9nfxfq1GDMAknDLClaVRLoAWvHxjAThX65I8cUpp7hCbRV9V_TBglsARjv/pub?gid=0&single=true&output=csv"
        );
        const csv = await res.text();
        const parsed = Papa.parse(csv, { header: true });

        const items = parsed.data.map((item, i) => ({
          id: i + 1,
          title: item.Title?.trim(),
          category: item.Category?.trim(),
          description: item.Description?.trim(),
          image:
            item.ImageURL?.trim()?.replace(
              "uc?export=view&id=",
              "thumbnail?id="
            ) + "&sz=w1000",
        }));

        setPortfolioItems(items.filter((item) => item.image)); // Only valid entries
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      }
    };

    fetchPortfolio();
  }, []);

  // Preload lightbox images
  useEffect(() => {
    portfolioItems.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, [portfolioItems]);

  return (
    <div className="container mx-auto px-4 py-12 mt-24">
      <div className="text-center mb-12">
        <motion.h1 className="text-center text-4xl font-special2 font-bold text-[#0a646c] mb-8">
          Our Portfolio
        </motion.h1>
        <motion.p className="text-md sm:text-lg w-full sm:max-w-2xl mx-auto">
          Explore our collection of stunning interior design projects that
          showcase our commitment to excellence and creativity.
        </motion.p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0a646c]"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => openLightbox(item.image, index)}
              >
                <div className="relative pb-[75%] w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => (e.target.src = Fallback)}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute bottom-0 p-6 text-white">
                      <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      )}

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
              className="absolute left-4 text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full cursor-pointer"
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
              onError={(e) => (e.target.src = Fallback)}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-4 text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full cursor-pointer"
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
    </div>
  );
};

export default PortfolioMain;

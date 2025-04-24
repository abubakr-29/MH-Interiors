import React, { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../../assets/portfolio/image1.jpeg";
import image2 from "../../assets/portfolio/image2.jpeg";
import image3 from "../../assets/portfolio/image3.jpeg";
import image4 from "../../assets/portfolio/image4.jpeg";
import image5 from "../../assets/portfolio/image5.jpeg";
import image6 from "../../assets/portfolio/image6.jpeg";
import image7 from "../../assets/portfolio/image7.jpeg";
import image8 from "../../assets/portfolio/image8.jpeg";
import image9 from "../../assets/portfolio/image9.jpeg";
import image10 from "../../assets/portfolio/image10.jpeg";
import image11 from "../../assets/portfolio/image11.jpeg";
import image12 from "../../assets/portfolio/image12.jpeg";
import image13 from "../../assets/portfolio/image13.jpeg";
import image14 from "../../assets/portfolio/image14.jpeg";
import image15 from "../../assets/portfolio/image15.jpeg";
import image16 from "../../assets/portfolio/image16.jpeg";
import image17 from "../../assets/portfolio/image17.jpeg";
import image18 from "../../assets/portfolio/image18.jpeg";
import image19 from "../../assets/portfolio/image19.jpeg";
import image20 from "../../assets/portfolio/image20.jpeg";
import image21 from "../../assets/portfolio/image21.jpeg";
import image22 from "../../assets/portfolio/image22.jpeg";
import image23 from "../../assets/portfolio/image23.jpeg";
import image24 from "../../assets/portfolio/image24.jpeg";
import image25 from "../../assets/portfolio/image25.jpeg";
import image26 from "../../assets/portfolio/image26.jpeg";
import image27 from "../../assets/portfolio/image27.jpeg";
import image28 from "../../assets/portfolio/image28.jpeg";
import image29 from "../../assets/portfolio/image29.jpeg";
import image30 from "../../assets/portfolio/image30.jpeg";
import image31 from "../../assets/portfolio/image31.jpeg";
import image32 from "../../assets/portfolio/image32.jpeg";
import image33 from "../../assets/portfolio/image33.jpeg";

const portfolioItems = [
  {
    id: 1,
    image: image1,
    title: "Modern Living Space",
    category: "Living Room",
    description: "Contemporary design with elegant touches",
  },
  {
    id: 2,
    image: image2,
    title: "Custom Wardrobe",
    category: "Storage Solutions",
    description: "Bespoke wardrobe design",
  },
  {
    id: 3,
    image: image3,
    title: "Built-in Cabinet",
    category: "Custom Furniture",
    description: "Space-efficient storage solution",
  },
  {
    id: 4,
    image: image4,
    title: "Accent Bedroom",
    category: "Bedroom",
    description: "Modern bedroom with custom highlights",
  },
  {
    id: 5,
    image: image5,
    title: "Designer Partition",
    category: "Room Dividers",
    description: "Elegant space separation",
  },
  {
    id: 6,
    image: image6,
    title: "Display Unit",
    category: "Storage Solutions",
    description: "Modern showcase design",
  },
  {
    id: 7,
    image: image7,
    title: "Bathroom Storage",
    category: "Bathroom",
    description: "Elegant bathroom cabinet solution",
  },
  {
    id: 8,
    image: image8,
    title: "Contemporary Living",
    category: "Living Room",
    description: "Modern living space design",
  },
  {
    id: 9,
    image: image9,
    title: "Kitchen Renovation",
    category: "Kitchen",
    description: "Modern kitchen with sleek finishes",
  },
  {
    id: 10,
    image: image10,
    title: "Toilet",
    category: "Toilet",
    description: "Professional toilet design",
  },
  {
    id: 11,
    image: image11,
    title: "Master Bedroom Suite",
    category: "Bedroom",
    description: "Luxurious master bedroom design",
  },
  {
    id: 12,
    image: image12,
    title: "Master Bedroom Suite",
    category: "Bedroom",
    description: "Luxurious master bedroom design",
  },
  {
    id: 13,
    image: image13,
    title: "Walk-in Closet",
    category: "Storage Solutions",
    description: "Luxury wardrobe system",
  },
  {
    id: 14,
    image: image14,
    title: "Modern Living Room",
    category: "Living Room",
    description: "Contemporary living room design",
  },
  {
    id: 15,
    image: image15,
    title: "Living Room",
    category: "Living Room",
    description: "Elegant room space",
  },
  {
    id: 16,
    image: image16,
    title: "Bedroom",
    category: "Bedroom",
    description: "Comfortable bedroom",
  },
  {
    id: 17,
    image: image17,
    title: "Electrical",
    category: "Electrical",
    description: "Functional electric work",
  },
  {
    id: 18,
    image: image18,
    title: "Powder Room",
    category: "Bathroom",
    description: "Elegant small bathroom design",
  },
  {
    id: 19,
    image: image19,
    title: "Wall Design",
    category: "Wall",
    description: "Modern wall design",
  },
  {
    id: 20,
    image: image20,
    title: "Kitchen Renovation",
    category: "Kitchen",
    description: "Modern kitchen with sleek finishes",
  },
  {
    id: 21,
    image: image21,
    title: "Wardrobe",
    category: "Wardrobe",
    description: "Modern storage solution",
  },
  {
    id: 22,
    image: image22,
    title: "Tiling",
    category: "Tilin",
    description: "Luxury tiling",
  },
  {
    id: 23,
    image: image23,
    title: "Living Room",
    category: "Living Room",
    description: "Elegant room space",
  },
  {
    id: 24,
    image: image24,
    title: "Wardrobe",
    category: "Wardrobe",
    description: "Elegant storage solution",
  },
  {
    id: 25,
    image: image25,
    title: "Kitchen Renovation",
    category: "Kitchen",
    description: "Modern kitchen design",
  },
  {
    id: 26,
    image: image26,
    title: "Kitchen",
    category: "Kitchen",
    description: "Fun recreational space",
  },
  {
    id: 27,
    image: image27,
    title: "Mudroom",
    category: "Utility",
    description: "Organized entryway storage",
  },
  {
    id: 28,
    image: image28,
    title: "Outdoor Living",
    category: "Outdoor Living",
    description: "Comfortable patio design",
  },
  {
    id: 29,
    image: image29,
    title: "Bedroom",
    category: "Bedroom",
    description: "Comfortable bedroom",
  },
  {
    id: 30,
    image: image30,
    title: "Reading Nook",
    category: "Bedroom",
    description: "Cozy reading corner",
  },
  {
    id: 31,
    image: image31,
    title: "Bedroom",
    category: "Bedroom",
    description: "Elegant storage and prep space",
  },
  {
    id: 32,
    image: image32,
    title: "Living Room",
    category: "Living Room",
    description: "Elegant room space",
  },
  {
    id: 33,
    image: image33,
    title: "Kitchen Renovation",
    category: "Kitchen",
    description: "Modern kitchen design",
  },
];

const PortfolioMain = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="container mx-auto px-4 py-12 mt-24">
      <div className="text-center mb-12">
        <h1 className="text-center text-4xl font-special2 font-bold text-[#0a646c] mb-8">
          Our Portfolio
        </h1>
        <p className="text-md sm:text-lg w-full sm:max-w-2xl mx-auto">
          Explore our collection of stunning interior design projects that
          showcase our commitment to excellence and creativity.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0a646c]"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              onClick={() => openLightbox(item.image, index)}
            >
              <div className="relative pb-[75%] w-full">
                <img
                  src={item.image}
                  alt={item.title}
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
            </div>
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
    </div>
  );
};

export default PortfolioMain;

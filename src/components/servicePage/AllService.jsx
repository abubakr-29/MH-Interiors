import SingleService from "./SingleService";
import furniture1 from "../../assets/service/furniture1.jpeg";
import furniture2 from "../../assets/service/furniture2.jpeg";
import furniture3 from "../../assets/service/furniture3.jpeg";
import furniture4 from "../../assets/service/furniture4.jpeg";
import furniture5 from "../../assets/service/furniture5.jpeg";
import furniture6 from "../../assets/service/furniture6.jpeg";
import tiling1 from "../../assets/service/tiling1.jpeg";
import tiling2 from "../../assets/service/tiling2.jpeg";
import tiling3 from "../../assets/service/tiling3.jpeg";
import tiling4 from "../../assets/service/tiling4.jpeg";
import painting1 from "../../assets/service/painting1.jpeg";
import painting2 from "../../assets/service/painting2.jpeg";
import electrical1 from "../../assets/service/electrical1.jpeg";
import electrical2 from "../../assets/service/electrical2.jpeg";
import electrical3 from "../../assets/service/electrical3.jpeg";

const services = [
  {
    id: 1,
    title: "Furniture and Modular Kitchen",
    subtitle:
      "Custom-built furniture and modular kitchen solutions that balance beauty and efficiency.",
    features: [
      "Space-saving modular designs tailored to your needs",
      "Premium materials for lasting durability",
      "Smart storage solutions with elegant finishes",
      "Personalized layouts to match your lifestyle",
    ],
    images: [
      furniture1,
      furniture2,
      furniture3,
      furniture4,
      furniture5,
      furniture6,
    ],
  },
  {
    id: 2,
    title: "Wall and Floor Tiling",
    subtitle:
      "Enhance your interiors with expert tiling that adds texture, depth, and durability.",
    features: [
      "Wide range of tile styles and materials",
      "Precision-cut installation for a seamless finish",
      "Moisture-resistant and easy-to-clean surfaces",
      "Perfect for kitchens, bathrooms, and hallways",
    ],
    images: [tiling1, tiling2, tiling3, tiling4],
  },
  {
    id: 3,
    title: "Painting",
    subtitle:
      "Refresh and elevate your space with our professional painting services.",
    features: [
      "Vibrant, long-lasting color options",
      "Smooth, clean, and even finishes",
      "Stain-resistant and weather-protective paints",
      "Expert color guidance for perfect combinations",
    ],
    images: [painting1, painting2],
  },
  {
    id: 4,
    title: "Electrical Works",
    subtitle:
      "Reliable electrical services designed with safety and modern living in mind.",
    features: [
      "Safe and efficient wiring and rewiring",
      "Mood lighting and modern fixtures",
      "Smart switch and socket installations",
      "Neat, concealed setups for a clean look",
    ],
    images: [electrical1, electrical2, electrical3],
  },
];

const AllService = () => {
  return (
    <div className="mt-14">
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`${
            index !== services.length - 1 ? "border-b border-gray-200" : ""
          }`}
        >
          <SingleService service={service} />
        </div>
      ))}
    </div>
  );
};

export default AllService;

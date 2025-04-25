import { Link } from "react-router";
import { motion } from "motion/react";
import image1 from "../../assets/service/image1.jpeg";
import image2 from "../../assets/service/image2.jpeg";
import image3 from "../../assets/service/image3.jpeg";
import image4 from "../../assets/service/image4.jpeg";
import useScrollToTop from "../../hooks/useScrollToTop";

const services = [
  {
    text: "Furniture and Modular Kitchen",
    image: image1,
  },
  {
    text: "Wall and Floor Tiling",
    image: image2,
  },
  {
    text: "Painting",
    image: image3,
  },
  {
    text: "Electrical Works",
    image: image4,
  },
];

const ServicesImage = () => {
  const scrollToTop = useScrollToTop();

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-10">
        {services.map((service, index) => (
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: `0.${index + 5}` }}
            key={index}
            className="flex flex-col items-center"
          >
            <div className="group w-[250px] h-[350px] lg:w-[210px] lg:h-[330px] xl:w-[250px] xl:h-[350px] transition-all duration-500 hover:-translate-y-2">
              <img
                src={service.image}
                alt={service.text}
                className="w-full h-full object-cover rounded-xl shadow-md transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h2 className="mt-4 font-special2 font-bold uppercase text-[#0a646c] text-2xl leading-snug w-[250px] lg:w-[210px] xl:w-[250px]">
              {service.text}
            </h2>
          </motion.div>
        ))}
      </div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="mx-auto mt-5"
      >
        <Link
          to="/service"
          onClick={scrollToTop}
          className="border-2 border-[#0a646c] bg-[#0a646c] text-white my-5 px-4 py-3 rounded hover:bg-[#095158] transition-colors duration-500 text-sm md:text-md"
        >
          View Services
        </Link>
      </motion.div>
    </div>
  );
};

export default ServicesImage;

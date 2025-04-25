import { Link } from "react-router";
import useScrollToTop from "../../hooks/useScrollToTop";

const information = [
  {
    title: "01. Discuss",
    description:
      "We begin by understanding your vision, needs, and preferences. Our team listens closely to turn your ideas into actionable goals.",
  },
  {
    title: "02. Research",
    description:
      "We study your space, style, and lifestyle to ensure a tailored design. From materials to trends, every detail is explored with precision.",
  },
  {
    title: "03. Create Concepts",
    description:
      "Our designers craft a unique concept that blends function with beauty. You'll receive mood boards, layouts, and visual previews for clarity.",
  },
  {
    title: "04. Implementation",
    description:
      "Once approved, we bring your vision to life with expert execution. Quality workmanship and timely delivery are our top priorities.",
  },
];

const ServicesText = () => {
  const scrollToTop = useScrollToTop();

  return (
    <div className="flex flex-col lg:flex-row justify-between mt-20 gap-12">
      <div className="flex flex-col gap-6 w-full lg:w-[35%]">
        <h2 className="text-[#0a646c] text-3xl lg:text-4xl font-bold font-special2 tracking-tight uppercase">
          We Love great process and transparency.
        </h2>
        <p className="w-full lg:w-[280px] text-lg">
          Interior designers create spaces that are functional, safe, and
          stylish.
        </p>
        <div className="flex flex-col items-center lg:items-start gap-4 mt-2">
          <Link
            to="/about"
            onClick={scrollToTop}
            className="border-2 border-[#0a646c] bg-[#0a646c] text-white px-4 py-3 rounded hover:bg-[#095158] transition-colors duration-500 text-sm md:text-md cursor-pointer"
          >
            Know more About Us
          </Link>
          <a
            href="https://wa.me/+919007510090?text=Hi%20MH%20Interiors!%20I%27m%20interested%20in%20your%20interior%20design%20services.%20Can%20we%20discuss%20my%20requirements%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#0a646c] text-[#0a646c] px-4 py-3 rounded hover:bg-[#0a646c] hover:text-white transition-colors duration-500 text-sm md:text-md cursor-pointer"
          >
            Book a Free Call
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full lg:w-[65%]">
        {information.map((info, index) => (
          <div key={index} className="flex flex-col gap-4">
            <h3 className="text-[#0a646c] font-special2 font-bold text-2xl uppercase">
              {info.title}
            </h3>
            <p className="text-lg leading-relaxed">{info.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesText;

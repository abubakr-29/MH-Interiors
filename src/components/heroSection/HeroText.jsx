import HeroBottom from "./HeroBottom";

const HeroText = () => {
  return (
    <div className="w-full xl:w-[60%]">
      <div className="flex flex-col items-start mt-4">
        <h2 className="pb-2 text-2xl tracking-tight sm:text-3xl md:text-4xl leading-relaxed md:tracking-tight font-special1 uppercase text-[#0a646c]">
          Stress free interiors From blueprint to beauty— seamless interiors
          across Kolkata.
        </h2>
        <p className="text-md sm:text-lg md:text-xl tracking-tight mt-4">
          Expertise in Painting, Custom Furniture, Tiling, Electrical Work, and
          Modular Kitchens.
        </p>
        <ul className="mt-4 text-md sm:text-lg space-y-1 list-disc list-inside leading-relaxed tracking-tight">
          <li>Tailored interior solutions to match your style.</li>
          <li>Commitment to timely project completion.</li>
          <li>Transparent pricing with no hidden costs.</li>
        </ul>
        <a
          href="#"
          className="bg-[#0a646c] text-white my-5 px-4 py-3 rounded hover:bg-[#095158] transition-colors duration-500 text-sm md:text-md"
        >
          Schedule Your Free Consultation
        </a>
      </div>

      <HeroBottom />
    </div>
  );
};

export default HeroText;

import HeroBottom from "./HeroBottom";
import { motion, stagger } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const HeroText = () => {
  return (
    <div className="w-full xl:w-[60%]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col items-start mt-4"
      >
        <motion.h2
          variants={childVariants}
          className="pb-2 text-2xl tracking-tight sm:text-3xl md:text-4xl leading-relaxed md:tracking-tight font-special1 uppercase text-[#0a646c]"
        >
          Stress free interiors From blueprint to beauty— seamless interiors
          across Kolkata
        </motion.h2>
        <motion.p
          variants={childVariants}
          className="text-md sm:text-lg md:text-xl tracking-tight mt-4"
        >
          Expertise in Painting, Custom Furniture, Tiling, Electrical Work, and
          Modular Kitchens.
        </motion.p>
        <motion.ul className="mt-4 text-md sm:text-lg space-y-1 list-disc list-inside leading-relaxed tracking-tight">
          <motion.li variants={childVariants}>
            Tailored interior solutions to match your style.
          </motion.li>
          <motion.li variants={childVariants}>
            Commitment to timely project completion.
          </motion.li>
          <motion.li variants={childVariants}>
            Transparent pricing with no hidden costs.
          </motion.li>
        </motion.ul>
        <motion.a
          variants={childVariants}
          href="https://wa.me/+919007510090?text=Hi%20MH%20Interiors!%20I%27m%20interested%20in%20your%20interior%20design%20services.%20Can%20we%20discuss%20my%20requirements%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0a646c] text-white my-5 px-4 py-3 rounded hover:bg-[#095158] transition-colors duration-500 text-sm md:text-md"
        >
          Schedule Your Free Consultation
        </motion.a>
      </motion.div>

      <HeroBottom />
    </div>
  );
};

export default HeroText;

import heroImage2 from "../../assets/hero/hero-image2.jpeg";
import { motion } from "motion/react";

const HeroBottom = () => {
  return (
    <div className="pt-2 xl:pt-0 2xl:pt-6">
      <motion.img
        src={heroImage2}
        alt="Image"
        className="rounded-xl w-full h-[350px] xl:w-[700px] xl:h-[310px] object-cover shadow-lg shadow-black/50"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </div>
  );
};

export default HeroBottom;

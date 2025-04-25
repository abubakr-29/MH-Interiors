import image from "../../assets/hero/hero-image1.jpeg";
import { motion } from "motion/react";

const AnimatedText = ({ text }) => {
  const words = text.split(" ");

  return (
    <h2 className="font-special2 text-4xl md:text-5xl lg:text-6xl text-white text-center mb-6 leading-tight tracking-tight">
      <span className="inline-block">&nbsp;</span>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: wordIndex * 0.1 + charIndex * 0.05,
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </h2>
  );
};

const ServiceHero = () => {
  return (
    <div className="relative h-[90vh] w-[100vw] left-[50%] right-[50%] -mx-[50vw] my-0">
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimatedText text="End-to-end interior solutions in Kolkata" />
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="text-md md:text-lg text-white text-center max-w-3xl mx-auto leading-relaxed tracking-tighter"
        >
          At MH Interiors, we offer a full range of interior design and
          execution services tailored to fit your vision, style, and budget.
          Every service is delivered with precision, passion, and a strong focus
          on quality.
        </motion.p>
      </div>
    </div>
  );
};

export default ServiceHero;

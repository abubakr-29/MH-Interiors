import { motion } from "motion/react";

const TestimonialsText = () => {
  return (
    <div>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl leading-relaxed font-special2 font-bold uppercase text-[#0a646c]"
      >
        Testimonials
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="text-lg md:text-xl leading-relaxed mt-2 capitalize"
      >
        See What people Think about us
      </motion.p>
    </div>
  );
};

export default TestimonialsText;

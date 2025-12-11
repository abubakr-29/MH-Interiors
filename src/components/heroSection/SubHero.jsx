import { motion } from "motion/react";
import { useMemo } from "react";

const SubHero = () => {
  const yearsOfExperience = useMemo(() => {
    const startYear = 2021;
    const currentYear = new Date().getFullYear();
    const years = currentYear - startYear;
    return `${years.toString().padStart(2, "0")}+`;
  }, []);

  const information = [
    { value: yearsOfExperience, text: "Years of experience" },
    { value: "40+", text: "Worked with Clients" },
    { value: "4.8", text: "Overall service Ratings" },
  ];

  return (
    <div className="w-full py-8 px-0 md:px-4 flex flex-col lg:flex-row justify-between items:start lg:items-center mt-10">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="flex gap-2 sm:gap-4"
      >
        {information.map((info, index) => (
          <div key={index} className="w-full sm:w-[110px]">
            <p className="text-[#0a646c] text-2xl md:text-4xl font-special2 font-bold mb-2">
              {info.value}
            </p>
            <p className="text-xs sm:text-sm md:text-md leading-snug">
              {info.text}
            </p>
          </div>
        ))}
      </motion.div>
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="mt-6 lg:mt-0 text-[#0a646c] text-2xl md:text-4xl font-special2 font-bold uppercase leading-tight"
      >
        We deliver with <br className="hidden lg:block" />
        beauty and accuracy
      </motion.h2>
    </div>
  );
};

export default SubHero;

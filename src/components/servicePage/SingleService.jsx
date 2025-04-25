import React from "react";
import { motion } from "motion/react";

const SingleService = ({ service }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="text-left max-w-3xl">
          <motion.h2
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="text-[#0a646c] text-3xl md:text-4xl font-special2 font-bold leading-relaxed mb-4 uppercase"
          >
            {service.title}
          </motion.h2>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="text-lg mb-6"
          >
            {service.subtitle}
          </motion.p>
          <motion.ul
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="space-y-2"
          >
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center tracking-tight">
                <span className="mr-3 font-bold text-lg text-[#0a646c]">•</span>
                <span className="text-lg">{feature}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {service.images.map((item, index) => (
            <motion.div
              key={index}
              className="aspect-square rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-shadow bg-white"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <img
                src={item}
                alt={`Service ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleService;

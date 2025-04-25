import aboutImage from "../../assets/about/image.jpeg";
import { motion, stagger } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const AboutUsMain = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full mt:14 sm:mt-20 py-16"
    >
      <div className="px-4">
        <motion.h2
          variants={childVariants}
          className="text-center text-4xl font-special2 font-bold text-[#0a646c] mb-8"
        >
          ABOUT US
        </motion.h2>
        <div className="text-center mb-4 text-md sm:text-lg">
          <motion.p variants={childVariants} className="">
            MH Interiors, where creativity meets craftsmanship.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.img
            src={aboutImage}
            alt="About Image"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-md sm:text-lg mt-10"
          >
            <p>
              As a one of the emerging name in interior designing in Kolkata, we
              have over 3 years of experience and 30+ happy clients who trust us
              to transform everyday spaces into elegant, functional environments
              tailored to their lifestyle.
            </p>

            <p>
              Headquartered in Kolkata, we offerend-to-end interior
              solutions-from planning and design to execution-ensuring a
              hassle-free experience from start to finish.
            </p>

            <p>
              Our services include custom furniture, modular kitchens, painting,
              tiling, and electrical works. Every project reflects our core
              values—beauty, accuracy, transparency, and timely delivery.
            </p>

            <p>
              We believe that great interior design in Kolkata starts with
              listening. From the first conversation to the final installation,
              our process is smooth, clear, and collaborative. Our 4.8-star
              service rating is a testament to our commitment to quality and
              client satisfaction.
            </p>

            <p>
              At MH Interiors, your dream space isn't just a vision—it's a
              promise.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="mt-8"
          >
            <a
              href="https://wa.me/+919007510090?text=Hi%20MH%20Interiors!%20I%27m%20interested%20in%20your%20interior%20design%20services.%20Can%20we%20discuss%20my%20requirements%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a646c] text-white my-5 px-6 py-3 rounded hover:bg-[#095158] transition-colors duration-500 text-sm md:text-md"
            >
              Book a Free Call
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUsMain;

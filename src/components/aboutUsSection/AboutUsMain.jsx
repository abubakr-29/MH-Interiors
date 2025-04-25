import aboutImage from "../../assets/about/image.jpeg";

const AboutUsMain = () => {
  return (
    <div className="w-full mt-20 py-16">
      <div className="px-4">
        <h2 className="text-center text-4xl font-special2 font-bold text-[#0a646c] mb-8">
          ABOUT US
        </h2>
        <div className="text-center mb-4 text-md sm:text-lg">
          <p className="">
            MH Interiors, where creativity meets craftsmanship.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <img
            src={aboutImage}
            alt="About Image"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />

          <div className="space-y-6 text-md sm:text-lg mt-10">
            <p>
              As a one of the emerging name in interior designing in Kolkata, we
              have over 3 years of experience and 20+ happy clients who trust us
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
          </div>

          <div className="mt-8">
            <a
              href="https://wa.me/+919007510090?text=Hi%20MH%20Interiors!%20I%27m%20interested%20in%20your%20interior%20design%20services.%20Can%20we%20discuss%20my%20requirements%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a646c] text-white my-5 px-6 py-3 rounded hover:bg-[#095158] transition-colors duration-500 text-sm md:text-md"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsMain;

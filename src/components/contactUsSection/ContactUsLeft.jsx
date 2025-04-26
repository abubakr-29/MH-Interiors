import { FaWhatsapp, FaPhone } from "react-icons/fa";

const ContactUsLeft = () => {
  return (
    <div className="w-full max-w-md mx-auto h-[500px] flex flex-col justify-center">
      <div className="space-y-8">
        <div>
          <span className="text-xl font-medium text-[#0a646c] tracking-wider">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl font-special2 mt-2">
            Let's Create Your Dream Space
          </h2>
        </div>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-6"
        >
          <input
            type="hidden"
            name="access_key"
            value="3fba3a61-1228-4f30-a4e0-352ad9142c36"
          ></input>
          <input
            type="hidden"
            name="redirect"
            value="https://mh-interiors.vercel.app/thank-you"
          />
          <div>
            <label htmlFor="name" className="text-sm mb-1 block">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#0a646c] transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm mb-1 block">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#0a646c] transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm mb-1 block">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#0a646c] transition-colors resize-none"
              required
            ></textarea>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#0a646c] text-white py-3 rounded-lg hover:bg-[#095158] transition-colors text-sm font-medium cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center gap-6 pt-2">
          <a
            href="tel:+917980033244"
            className="flex items-center gap-2 text-gray-600 hover:text-[#0a646c] transition-colors"
          >
            <FaPhone className="w-4 h-4" />
            <span className="text-sm">Call us</span>
          </a>
          <span className="w-px h-4 bg-gray-500"></span>
          <a
            href="https://wa.me/+919007510090?text=Hi%20MH%20Interiors!%20I%27m%20interested%20in%20your%20interior%20design%20services.%20Can%20we%20discuss%20my%20requirements%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-[#25D366] transition-colors"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span className="text-sm">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUsLeft;

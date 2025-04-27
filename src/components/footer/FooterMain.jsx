import { FaWhatsapp, FaPhone, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const FooterMain = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a646c] text-white py-12 px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-[2px] after:bg-white after:bottom-0 after:left-0">
              Contact Us
            </h3>
            <div className="group">
              <div className="flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
                <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-all duration-500">
                  <FaPhone className="text-sm md:text-lg" />
                </div>
                <a
                  href="tel:+917980033244"
                  className="text-sm md:text-md hover:text-gray-200 transition-all duration-500"
                >
                  +91 79800 33244
                </a>
              </div>
            </div>
            <div className="group">
              <div className="flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
                <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-all duration-500">
                  <MdEmail className="text-sm md:text-lg" />
                </div>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@mh-interiors.in&su=Interior%20Design%20Inquiry&body=Hi%20MH%20Interiors%2C%0A%0AI%20am%20interested%20in%20your%20interior%20design%20services.%20I%20would%20love%20to%20discuss%20my%20requirements%20and%20see%20how%20you%20can%20help%20transform%20my%20space.%0A%0ALooking%20forward%20to%20hearing%20from%20you!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-md hover:text-gray-200 transition-all duration-500"
                >
                  info@mh-interiors.in
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-[2px] after:bg-white after:bottom-0 after:left-0">
              Location
            </h3>
            <div className="text-sm md:text-md bg-white/5 p-6 rounded-lg backdrop-blur-sm transform transition-all duration-500 hover:bg-white/10 hover:scale-105">
              <p className="leading-relaxed">
                Mondal Ganthi (kharmath),
                <br />
                VIP Road,
                <br />
                Kolkata- 700052
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-[2px] after:bg-white after:bottom-0 after:left-0">
              Connect With Us
            </h3>
            <div className="flex gap-6">
              <a
                href="https://wa.me/+919007510090?text=Hi%20MH%20Interiors!%20I%27m%20interested%20in%20your%20interior%20design%20services.%20Can%20we%20discuss%20my%20requirements%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
              >
                <div className="bg-white/10 p-3 rounded-full transform transition-all duration-500 hover:bg-white/20 hover:scale-110 hover:rotate-6">
                  <FaWhatsapp className="text-lg md:text-xl" />
                </div>
              </a>
              <a
                href="https://www.instagram.com/mh_interiors.co.in?utm_source=qr&igsh=MTZoZms1dWg4dm5scQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
              >
                <div className="bg-white/10 p-3 rounded-full transform transition-all duration-500 hover:bg-white/20 hover:scale-110 hover:-rotate-6">
                  <FaInstagram className="text-lg md:text-xl" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-200 text-center sm:text-left">
              © {currentYear} MH Interiors | All rights reserved.
            </p>
            <a
              href="https://famedia.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-200 hover:text-white transition-all duration-500 transform hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500"
            >
              Made by FA Media
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;

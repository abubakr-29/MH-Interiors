import React from "react";

const ServiceBottom = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-special2 text-[#0a646c] mb-4 relative inline-block">
          Why Choose Us?
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#0a646c] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-[#0a646c]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Tailored Designs</h3>
              <p className="text-gray-600">
                Every project is made to match your unique taste and lifestyle
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-[#0a646c]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Transparent Process
              </h3>
              <p className="text-gray-600">
                No hidden costs. No last-minute surprises
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-[#0a646c]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Timely Completion</h3>
              <p className="text-gray-600">
                We respect your time and deliver as promised
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-[#0a646c]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Rated 4.8/5</h3>
              <p className="text-gray-600">
                Our work speaks through client satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-lg sm:text-xl mb-8 font-light">
          Let's bring your dream space to life.
        </p>
        <button className="inline-flex items-center px-6 py-3 border-2 border-[#0a646c] bg-[#0a646c] text-white rounded-lg hover:bg-[#095158] transition-all duration-500 hover:shadow-lg cursor-pointer">
          Book a Free Call
        </button>
      </div>
    </div>
  );
};

export default ServiceBottom;

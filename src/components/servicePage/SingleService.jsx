import React from "react";

const SingleService = ({ service }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="text-left max-w-3xl">
          <h2 className="text-[#0a646c] text-3xl md:text-4xl font-special2 font-bold leading-relaxed mb-4 uppercase">
            {service.title}
          </h2>
          <p className="text-lg mb-6">{service.subtitle}</p>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center tracking-tight">
                <span className="mr-3 font-bold text-lg text-[#0a646c]">•</span>
                <span className="text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {service.images.map((item, index) => (
            <div
              key={index}
              className="aspect-square rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-shadow bg-white"
            >
              <img
                src={item}
                alt={`Service ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleService;

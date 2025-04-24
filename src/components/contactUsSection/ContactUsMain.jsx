import React from "react";
import ContactUsLeft from "./ContactUsLeft";
import ContactUsRight from "./ContactUsRight";

const ContactUsMain = () => {
  return (
    <div className="max-w-7xl mx-auto" id="contact">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full lg:w-3/5 px-4 md:px-8 lg:px-12 py-16">
          <ContactUsLeft />
        </div>
        <div className="w-full lg:w-2/5 h-full hidden lg:flex items-center justify-center px-4">
          <div className="w-full h-[500px]">
            <ContactUsRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsMain;

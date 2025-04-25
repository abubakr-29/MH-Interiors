import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-4 p-8 bg-white rounded-xl shadow-lg text-center">
        <div className="flex justify-center mb-6">
          <FaCheckCircle className="text-6xl text-[#0a646c]" />
        </div>
        <h1 className="text-3xl font-special2 text-gray-800 mb-4">
          Thank You!
        </h1>
        <p className="text-gray-600 mb-8">
          Your message has been successfully sent. We'll get back to you as soon
          as possible.
        </p>
        <div className="space-y-4">
          <Link
            to="/"
            className="block w-full bg-[#0a646c] text-white py-3 rounded-lg hover:bg-[#095158] transition-colors text-sm font-medium"
          >
            Back to Home
          </Link>
          <div className="text-sm text-gray-500">
            Or you can contact us directly at{" "}
            <a
              href="tel:+917980033244"
              className="text-[#0a646c] hover:underline"
            >
              +91 79800 33244
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;

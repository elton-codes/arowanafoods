import React from "react";
import { FiMail, FiPhone, FiMessageCircle } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-6 md:mb-8">
          Get In Touch
        </h2>
        <p className="text-base md:text-lg text-center text-gray-600 mb-8 md:mb-12 max-w-lg mx-auto">
          We value your feedback and inquiries! Feel free to reach out to us through any of the options below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Email */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <div className="bg-green-100 text-green-700 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
              <FiMail className="text-3xl sm:text-4xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-green-800 mb-1 sm:mb-2">
              Email Us
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-2 text-center">
              For general inquiries and support, send us an email.
            </p>
            <a
              href="mailto:arowanaplusfoodprocessing@gmail.com"
              className="text-green-700 text-sm md:text-lg font-medium hover:underline"
            >
              arowanaplusfoodprocessing@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <div className="bg-green-100 text-green-700 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
              <FiPhone className="text-3xl sm:text-4xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-green-800 mb-1 sm:mb-2">
              Call Us
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-2 text-center">
              Speak with a representative for immediate assistance.
            </p>
            <a
              href="tel:+233598466146"
              className="text-green-700 text-sm md:text-lg font-medium hover:underline"
            >
              +233 598 466 146
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <div className="bg-green-100 text-green-700 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
              <FiMessageCircle className="text-3xl sm:text-4xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-green-800 mb-1 sm:mb-2">
              WhatsApp
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-2 text-center">
              Chat with us directly on WhatsApp for quick responses.
            </p>
            <a
              href="https://wa.me/233598466146"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 text-sm md:text-lg font-medium hover:underline"
            >
              Chat with Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

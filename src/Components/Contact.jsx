import React from 'react'
import { FiMail, FiPhone, FiMessageCircle } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-8">
          Get In Touch
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          It is always a pleasure hearing from you! Reach out to us via email, phone, or WhatsApp.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Email */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
            <FiMail className="text-green-700 text-4xl mb-4" />
            <h3 className="text-2xl font-semibold text-green-700 mb-2">
              Email Us
            </h3>
            <a
              href="mailto:arowanaplusfoodprocessing@gmail.com"
              className="text-gray-600 text-lg hover:underline"
            >
              arowanaplusfoodprocessing@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
            <FiPhone className="text-green-700 text-4xl mb-4" />
            <h3 className="text-2xl font-semibold text-green-700 mb-2">
              Call Us
            </h3>
            <a
              href="tel:+233598466146"
              className="text-gray-600 text-lg hover:underline"
            >
              +233 598 466 146
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
            <FiMessageCircle className="text-green-700 text-4xl mb-4" />
            <h3 className="text-2xl font-semibold text-green-700 mb-2">
              WhatsApp
            </h3>
            <a
              href="https://wa.me/233598466146"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 text-lg hover:underline"
            >
              Chat with Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
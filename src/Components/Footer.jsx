import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10">
  <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-12 gap-8">
    {/* About Section */}
    <div className="sm:col-span-4 lg:col-span-5 flex flex-col items-center lg:items-start">
      <h3 className="text-lg font-bold mb-4">About Us</h3>
      <p className="text-gray-300 text-center lg:text-left">
        Arowana Plus Foods specializes in <br /> producing nutritious and sustainable <br /> Heterotis  sausages, promoting local <br /> aquaculture and healthy lifestyles.
      </p>
    </div>

    {/* Quick Links */}
    <div className="sm:col-span-4 lg:col-span-3 flex flex-col items-center lg:items-start">
      <h3 className="text-lg font-bold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-center lg:text-left">
        <li>
          <a href="#about" className="hover:text-green-300 transition">
            About Us
          </a>
        </li>
        <li>
          <a href="#products" className="hover:text-green-300 transition">
            Our Products
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-green-300 transition">
            Contact Us
          </a>
        </li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="sm:col-span-4 lg:col-span-4 flex flex-col items-center lg:items">
      <h3 className="text-lg font-bold mb-4">Our Socials</h3>
      <div className="space-y-4">
        <a
          href="#"
          className="flex items-center space-x-2 hover:text-green-300 transition"
          aria-label="Facebook"
        >
          <FaFacebook size={24} />
          <span>Facebook</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 hover:text-green-300 transition"
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
          <span>Instagram</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 hover:text-green-300 transition"
          aria-label="Twitter"
        >
          <FaTwitter size={24} />
          <span>Twitter</span>
        </a>
  
      </div>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
    © {new Date().getFullYear()} Arowana Plus Foods. All rights reserved.
  </div>
</footer>
  );
};

export default Footer;

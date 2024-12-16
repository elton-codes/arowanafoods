import React, { useState } from "react";
import { logo } from "../assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img className="h-10" src={logo} alt="Logo" />
        </a>

        {/* Hamburger Icon */}
        <button
          className="text-gray-800 md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:space-x-8">
          <a
            href="#about"
            className="text-gray-700 font-medium hover:text-green-700 transition"
          >
            About Us
          </a>
          <a
            href="#products"
            className="text-gray-700 font-medium hover:text-green-700 transition"
          >
            Our Products
          </a>
          <a
            href="#contact"
            className="text-gray-700 font-medium hover:text-green-700 transition"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <div className="flex flex-col items-center space-y-6 py-4">
              <a
                href="#about"
                className="text-gray-700 font-medium hover:text-green-700 transition"
              >
                About Us
              </a>
              <a
                href="#products"
                className="text-gray-700 font-medium hover:text-green-700 transition"
              >
                Our Products
              </a>
              <a
                href="#contact"
                className="text-gray-700 font-medium hover:text-green-700 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

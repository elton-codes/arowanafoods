import React from "react";
import { heroImg } from "../assets";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[600px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Welcome To Arowana  <br /> Plus Foods
        </h1>
        <p className="text-gray-200 mb-6">
          Home of nutritious and affordable Heterotis sausages
        </p>
        <a
          href="https://wa.me/233598466146"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition"
        >
          Order Now
        </a>
      </div>
    </section>
  );
};

export default Hero;

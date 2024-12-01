
import React from 'react';
import { FaTruck, FaUtensils } from "react-icons/fa";

const Hero = () => {

  return (
    <section className="relative bg-white pt-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900">
            Good Food For <br /> Good Health
          </h1>
          <p className="text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>
          <div className="space-x-4">
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition">
              Order Now
            </button>
            {/* <button className="border-2 border-green-700 text-green-700 px-6 py-3 rounded-lg hover:bg-green-100 transition">
              Book Now
            </button> */}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://i0.wp.com/arowanasale.com/wp-content/uploads/2021/02/Golden-Arowana-Fish.jpg?fit=800%2C538&ssl=1"
            alt="Salad Bowl"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center space-x-4 p-4 shadow rounded-lg">
          <FaTruck className="text-green-700 text-4xl" />
          <div>
            <h3 className="text-lg font-semibold text-green-900">Fast Delivery</h3>
            <p className="text-gray-600">Delivery within 30 minutes</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-4 shadow rounded-lg">
          <FaUtensils className="text-green-700 text-4xl" />
          <div>
            <h3 className="text-lg font-semibold text-green-900">Dine In</h3>
            <p className="text-gray-600">Enjoy your food fresh, crispy, and hot</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

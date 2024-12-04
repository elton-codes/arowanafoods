import React, { useState } from "react";
import { sausage, sausage2, sausage3 } from "../assets";

const About = () => {
  const [showMore, setShowMore] = useState(false); // State for toggling visibility

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Left Section: Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <img
              src={sausage}
              alt="Dish 1"
              className="w-full h-full rounded-lg object-cover shadow-md"
            />
          </div>
          <div className="grid gap-4">
            <img
              src={sausage2}
              alt="Dish 2"
              className="rounded-lg object-cover shadow-md"
            />
            <img
              src={sausage3}
              alt="Dish 3"
              className="rounded-lg object-cover shadow-md"
            />
          </div>
        </div>

        {/* Right Section: Text */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h3 className="text-green-700 font-bold text-lg uppercase mb-2">
            About us
          </h3>
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            We Are One Of A Kind
          </h2>
          <h4 className="text-xl font-semibold text-gray-700 mb-4">
            The Arowana Story
          </h4>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Arowana Plus Foods specializes in producing Heterotis sausages, a unique seafood product made from Heterotis niloticus. Our sausages are:
          </p>
          <ul className="list-disc pl-5 text-gray-600 text-lg leading-relaxed mb-6">
            <li>
              <span className="font-semibold">Nutritious:</span> High in protein and omega-3 fatty acids.
            </li>
            <li>
              <span className="font-semibold">Halal-Certified:</span> Suitable for Muslim consumers and those avoiding pork.
            </li>
            <li>
              <span className="font-semibold">Sustainably Sourced:</span> Fish sourced from responsible aquaculture practices.
            </li>
            <li>
              <span className="font-semibold">Convenient:</span> Easy to prepare, making them perfect for busy lifestyles.
            </li>
          </ul>

          {showMore && (
  <div className="mt-6 text-gray-600">
    <h4 className="text-xl font-semibold text-green-700 mb-4">
      Our Goals and Objectives
    </h4>
    <ul className="list-disc text-lg pl-5 leading-relaxed">
      <li className="mb-2">
        <span className="font-semibold">Increase Awareness:</span> Promote the
        benefits of Heterotis sausages as a healthy alternative to traditional
        meat products.
      </li>
      <li className="mb-2">
        <span className="font-semibold">Expand Market Reach:</span> Target
        diverse consumer segments, including health-conscious individuals and
        those with dietary restrictions.
      </li>
      <li className="mb-2">
        <span className="font-semibold">Support Local Farmers:</span> Empower
        local fish farmers through sustainable sourcing and fair trade
        practices.
      </li>
      <li className="mb-2">
        <span className="font-semibold">Enhance Community Impact:</span>
        Contribute to local economies by creating jobs and promoting
        sustainable aquaculture.
      </li>
    </ul>
  </div>
          )}

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-6">
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition">
              Order Now
            </button>
            <button
              onClick={toggleReadMore}
              className="border-2 border-green-700 text-green-700 px-6 py-3 rounded-lg hover:bg-green-100 transition"
            >
              {showMore ? "Show Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

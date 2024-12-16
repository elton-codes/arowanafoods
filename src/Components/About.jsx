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
        <div className="grid grid-cols-2 gap-4 self-start">
  <div className="relative h-64 md:h-80">
    <img
      src={sausage}
      alt="Dish 1"
      className="w-full h-full rounded-lg object-cover shadow-md"
    />
  </div>
  <div className="grid gap-4">
    <div className="relative h-32 md:h-40">
      <img
        src={sausage2}
        alt="Dish 2"
        className="w-full h-full rounded-lg object-cover shadow-md"
      />
    </div>
    <div className="relative h-32 md:h-40">
      <img
        src={sausage3}
        alt="Dish 3"
        className="w-full h-full rounded-lg object-cover shadow-md"
      />
    </div>
  </div>
</div>



       {/* Right Section: Text */}
<div className="flex flex-col justify-center text-center md:text-left px-4 md:px-0">
  {/* Section Heading */}
  <h3 className="text-green-700 font-bold text-sm md:text-base uppercase mb-3">
    About us
  </h3>
  <h2 className="text-2xl md:text-4xl font-bold text-green-900 mb-4">
    We Are One Of A Kind
  </h2>
  <h4 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
    The Arowana Story
  </h4>

  {/* Introductory Paragraph */}
  <p className="text-gray-600 leading-relaxed mb-6">
    Arowana Plus Foods specializes in producing Heterotis sausages, a unique seafood product made from Heterotis niloticus. Our sausages are:
  </p>

  {/* Features Section */}
  <div className="space-y-4">
    <div className="flex items-start gap-4">
      <span className="text-green-700 font-bold text-lg">&#x2713;</span>
      <p className="text-gray-600 leading-relaxed">
        <span className="font-semibold">Nutritious:</span> High in protein and omega-3 fatty acids.
      </p>
    </div>
    <div className="flex items-start gap-4">
      <span className="text-green-700 font-bold text-lg">&#x2713;</span>
      <p className="text-gray-600 leading-relaxed">
        <span className="font-semibold">Halal-Certified:</span> Suitable for Muslim consumers and those avoiding pork.
      </p>
    </div>
    <div className="flex items-start gap-4">
      <span className="text-green-700 font-bold text-lg">&#x2713;</span>
      <p className="text-gray-600 leading-relaxed">
        <span className="font-semibold">Sustainably Sourced:</span> Fish sourced from responsible aquaculture practices.
      </p>
    </div>
    <div className="flex items-start gap-4">
      <span className="text-green-700 font-bold text-lg">&#x2713;</span>
      <p className="text-gray-600 leading-relaxed">
        <span className="font-semibold">Convenient:</span> Easy to prepare, making them perfect for busy lifestyles.
      </p>
    </div>
  </div>

  {/* Show More Section */}
  {showMore && (
    <div className="mt-8 text-gray-600">
      <h4 className="text-lg md:text-xl font-semibold text-green-700 mb-4">
        Our Goals and Objectives
      </h4>
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <span className="text-green-700 font-bold text-lg">&#x2713;</span>
          <p>
            <span className="font-semibold">Increase Awareness:</span> Promote the benefits of Heterotis sausages as a healthy alternative to traditional meat products.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <span className="text-green-700 font-bold text-lg">&#x2713;</span>
          <p>
            <span className="font-semibold">Expand Market Reach:</span> Target diverse consumer segments, including health-conscious individuals and those with dietary restrictions.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <span className="text-green-700 font-bold text-lg">&#x2713;</span>
          <p>
            <span className="font-semibold">Support Local Farmers:</span> Empower local fish farmers through sustainable sourcing and fair trade practices.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <span className="text-green-700 font-bold text-lg">&#x2713;</span>
          <p>
            <span className="font-semibold">Enhance Community Impact:</span> Contribute to local economies by creating jobs and promoting sustainable aquaculture.
          </p>
        </div>
      </div>
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

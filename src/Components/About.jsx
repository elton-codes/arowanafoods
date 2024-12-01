import React from 'react'

const About = () => {

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <img
              src="/path-to-image1.jpg"
              alt="Dish 1"
              className="w-full h-full rounded-lg object-cover shadow-md"
            />
          </div>
          <div className="grid gap-4">
            <img
              src="/path-to-image2.jpg"
              alt="Dish 2"
              className="rounded-lg object-cover shadow-md"
            />
            <img
              src="/path-to-image3.jpg"
              alt="Dish 3"
              className="rounded-lg object-cover shadow-md"
            />
          </div>
          <div>
            <img
              src="/path-to-image4.jpg"
              alt="Dish 4"
              className="rounded-lg object-cover shadow-md"
            />
          </div>
        </div>

        {/* Right Section: Text */}
        <div className="flex flex-col justify-center">
          <h3 className="text-green-700 font-bold text-lg uppercase mb-2">
            About our bistro
          </h3>
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            We Are Foodu
          </h2>
          <h4 className="text-xl font-semibold text-gray-700 mb-4">
            The Delicious Story
          </h4>
          <p className="text-gray-600 leading-relaxed mb-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>
          <div className="flex space-x-4">
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition">
              Read more
            </button>
            <button className="border-2 border-green-700 text-green-700 px-6 py-3 rounded-lg hover:bg-green-100 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
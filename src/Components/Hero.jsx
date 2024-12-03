import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[600px] flex items-center justify-center"
      style={{
        backgroundImage: "url('https://i0.wp.com/arowanasale.com/wp-content/uploads/2021/02/Golden-Arowana-Fish.jpg?fit=800%2C538&ssl=1')",
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
          We are glad to have you on our platform. It is a long established fact that healthy food produces healthy bodies. Feel free to contact us for your nutritious and affordable foods
        </p>
        <button className="bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition">
          Order Now
        </button>
      </div>
    </section>
  );
};

export default Hero;

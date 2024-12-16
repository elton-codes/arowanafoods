import React from "react";
import { product1, product2, product3 } from "../assets";

const Products = () => {
  const products = [
    {
      name: "Sausage",
      description: "Nutritious sausage made from the very best of arowana fish.",
      image: product3,
    },
    {
      name: "Sausage",
      description: "Nutritious sausage made from the very best of arowana fish.",
      image: product2,
    },
  ];

  return (
    <section id="products" className="py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-10 sm:mb-12">
          Our Mouth-Watering Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              {/* Product Image */}
              <div className="w-full md:w-1/3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 sm:h-56 md:h-auto object-cover rounded-t-lg md:rounded-l-lg"
                />
              </div>

              {/* Product Info */}
              <div
                className="w-full md:w-2/3 p-4 sm:p-6 animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-green-700 mb-4">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {product.description}
                </p>
                <a
                  href="https://wa.me/233598466146"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-700 text-white px-4 py-2 rounded shadow hover:bg-green-800 transition"
                >
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

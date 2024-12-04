import React from "react";
import { product1, product2, product3 } from "../assets";

const Products = () => {
  const products = [
    {
      name: "Sausage",
      description: "Nutritious sausage made from the very best of arowana fish.",
      image: product3, // Replace with the correct image paths
    },
    {
      name: "Sausage",
      description: "Nutritious sausage made from the very best of arowana fish.",
      image: product2, // Replace with the correct image paths
    },

  ];

  return (
    <section id="products" className="py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-900 mb-12">
          Our Mouth-Watering Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Product Image */}
              <div className="w-full md:w-1/3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg"
                />
              </div>

              {/* Product Info */}
              <div className="w-full md:w-2/3 p-6">
                <h3 className="text-2xl font-semibold text-green-700 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </p>
                <button className="bg-green-700 text-white px-4 py-2 rounded shadow hover:bg-green-800 transition">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

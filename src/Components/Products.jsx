import React from "react";


const Products = () => {
  const products = [
    {
      name: "Sausage1",
      description: "Nutritious sausage made from the very best of arowana fish.",
      image: "/assets/sausage1.jpg", // Replace with the correct image paths
    },
    {
      name: "Sausage2",
      description: "Nutritious sausage made from the very best of arowana fish.",
      image: "/assets/sausage2.jpg", // Replace with the correct image paths
    },
    {
      name: "Sausage3",
      description: "Nutritious sausage made from the very best of arowana fish.",
      image: "/assets/sausage3.jpg", // Replace with the correct image paths
    },
    {
      name: "Sausage4",
      description: "Nutritious sausage made from the very best of arowana fish.",
      image: "/assets/sausage4.jpg", // Replace with the correct image paths
    },
  ];

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
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
                  Learn More
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

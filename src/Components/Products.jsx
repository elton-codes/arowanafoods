import React, { useState } from 'react'

const Products = () => {
    
  return (
    <section id="products" className="py-10">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Placeholder for dynamic content */}
        <div className="bg-white p-4 shadow rounded">
          <h3 className="font-bold">Product Name</h3>
          <p>Description of the product goes here.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Products
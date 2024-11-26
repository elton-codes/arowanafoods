import React from 'react'

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-cover bg-center h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDI%3D)', // Replace with a relevant food image URL
      }}
    >
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Arowana Foods
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Delicious food for every occasion, made with love and care.
        </p>
        <a
          href="#products"
          className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-lg text-lg font-medium transition"
        >
          Explore Our Products
        </a>
      </div>
    </section>
  )
}

export default Hero
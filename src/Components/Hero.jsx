import React from 'react'

const Hero = () => {
  return (
<section
      id="hero"
      className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDI%3D)', }}
    >
      {/* Overlay for shadow */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Arowana Foods</h1>
        <p className="mt-4 text-lg md:text-xl">Experience the best culinary delights</p>
        <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
          Discover More
        </button>
      </div>
    </section>
  )
}

export default Hero
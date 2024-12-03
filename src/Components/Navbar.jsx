import React, { useState } from 'react'
import { logo } from '../assets';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 text-black text-lg p-2 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* <a href="/" className="text-2xl text-yellow-600 font-bold">Arowana Foods</a> */}
        <img className='h-[80px] ' src={logo} alt="" />
        <button
          className="text-black md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-6`}
        >
          <a href="#about" className="block font-semibold py-2 md:py-0 hover:text-green-700">About Us</a>
          <a href="#products" className="block font-semibold py-2 md:py-0 hover:text-green-700">Our Products</a>
          <a href="#contact" className="block font-semibold py-2 md:py-0 hover:text-green-700">Contact Us</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Arowana Foods. All rights reserved.
        </p>
        <p className="text-lg">Follow us on <a href="#" className="underline">Instagram</a>, <a href="#" className="underline">Facebook</a>, and <a href="#" className="underline">Twitter</a>.</p>
      </div>
    </footer>
  )
}

export default Footer
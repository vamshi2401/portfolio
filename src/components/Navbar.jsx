import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home","About", "Skills","Projects", "Contact"];

  return (
    <nav className="w-full h-16  bg-indigo-600 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center pr-16 pl-16">
        
        <div className="text-2xl font-bold">
          <span className="text-gray-800">Portfolio</span>
        </div>

        
        <ul className="hidden md:flex space-x-6 font-medium text-gray-800">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-white  transition">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden relative bg-white px-6 py-4 space-y-4 shadow-md">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 text-lg font-medium hover:text-indigo-600 transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

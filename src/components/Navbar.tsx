import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900 text-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold">SV</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
            <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-gray-300 transition-colors">Certifications</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="#about" className="block py-2 hover:text-gray-300 transition-colors">About</a>
            <a href="#projects" className="block py-2 hover:text-gray-300 transition-colors">Projects</a>
            <a href="#certifications" className="block py-2 hover:text-gray-300 transition-colors">Certifications</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
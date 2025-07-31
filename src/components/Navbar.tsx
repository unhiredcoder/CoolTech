import React from 'react';
import { BiPhone } from 'react-icons/bi';
import { FaSnowflake } from 'react-icons/fa';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  // Header
  return (
    <>
      <header className="bg-white/25 backdrop-blur-sm shadow-sm border-b rounded-full fixed left-1/2 top-4 transform -translate-x-1/2 w-[96%]  z-50">
        <div className="container px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#e63946] to-[#dc2626] rounded-full flex items-center justify-center shadow-lg">
                <FaSnowflake className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-extrabold text-[#0b1120]">CoolTech</span>
                <div className="text-xs text-gray-600 font-medium">AC REPAIR SERVICES</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              
              <a href="#" className="!text-black hover:!text-gray-500 transition-colors font-bold">
              Home
              </a>
              <a href="#" className="!text-black hover:!text-gray-500 transition-colors font-bold">
              Services
              </a>
              <a href="#" className="!text-black hover:!text-gray-500 transition-colors font-bold">
              About
              </a>
              <a href="#" className="!text-black hover:!text-gray-500 transition-colors font-bold">
              Contact
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-[#0b1120]">
                <BiPhone className="w-4 h-4 text-[#e63946]" />
                <span className="font-semibold text-sm">+1 (555) 123-4567</span>
              </div>
              <Button className="bg-[#e63946] hover:bg-[#dc2626] text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all">
                Book Service
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

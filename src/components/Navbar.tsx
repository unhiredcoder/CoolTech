'use client';

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiPhone } from 'react-icons/bi';
import { FaSnowflake } from 'react-icons/fa';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from 'lucide-react';
import data from '../lib/data.json';

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const location = useLocation();

  const { logo, phone, ctaButton, links, aboutDropdown } = data.navbar;

  useEffect(() => {
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowNavbar(currentScroll <= 0 || currentScroll < lastScrollY);
      setLastScrollY(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = () => {
    setSheetOpen(false);  // Close Sheet when link clicked
  };

  return (
    <header className={`bg-white/25 backdrop-blur-sm shadow-sm border-b rounded-full fixed left-1/2 top-1 transform -translate-x-1/2 w-[96%] transition-transform duration-300 z-50 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-[#e63946] to-[#dc2626] rounded-full flex items-center justify-center shadow-lg">
            <FaSnowflake className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className="text-2xl font-extrabold text-[#0b1120]">{logo.title}</span>
            <div className="text-xs text-gray-600 font-medium">{logo.subtitle}</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link, idx) => (
            <Link key={idx} to={link.href} className="!text-black hover:!text-gray-500 font-bold">{link.label}</Link>
          ))}

          <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
            <DropdownMenuTrigger className="flex items-center !bg-transparent text-sm font-semibold text-gray-800 outline-none ring-0">
              About Us
              <ChevronDown className="w-4 h-4 ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-xl rounded-xl">
              {aboutDropdown.map((item, idx) => (
                <DropdownMenuItem key={idx} className="hover:bg-[#f6f7fb] cursor-pointer py-3 px-4" onSelect={(e) => e.preventDefault()}>
                  <Link to={item.href} className="!text-black w-full capitalize">{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Desktop Contact & CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 text-[#0b1120]">
            <BiPhone className="w-4 h-4 text-[#e63946]" />
            <span className="font-semibold text-sm">{phone}</span>
          </div>
          <Button className="bg-[#e63946] hover:bg-[#dc2626] text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all">
            {ctaButton}
          </Button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="lg" className="!hover:bg-none text-[#0b1120]">
                <Menu className="!w-10 !h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 sm:w-80 bg-white">
              <div className="flex items-center justify-between mb-5 p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#e63946] to-[#dc2626] rounded-full flex items-center justify-center">
                    <FaSnowflake className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-extrabold text-[#0b1120]">{logo.title}</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setSheetOpen(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <nav className="flex flex-col gap-6 p-4">
                {links.map((link, idx) => (
                  <Link key={idx} to={link.href} className="font-semibold text-[#0b1120]" onClick={handleLinkClick}>
                    {link.label}
                  </Link>
                ))}

                <div>
                  <span className="text-sm font-semibold text-[#0b1120] block mb-2">About Us</span>
                  <div className="flex flex-col gap-3 pl-3">
                    {aboutDropdown.map((item, idx) => (
                      <Link key={idx} to={item.href} className="text-gray-600" onClick={handleLinkClick}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-6 text-[#0b1120]">
                  <BiPhone className="w-5 h-5 text-[#e63946]" />
                  <span className="font-semibold text-sm">{phone}</span>
                </div>

                <Button className="mt-6 bg-[#e63946] hover:bg-[#dc2626] text-white font-semibold w-full py-3 rounded-full shadow-lg hover:shadow-xl transition-all" onClick={handleLinkClick}>
                  {ctaButton}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

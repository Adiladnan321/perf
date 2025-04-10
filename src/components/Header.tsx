import React from 'react';
import { MenuIcon } from 'lucide-react';
export const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
            <div className="text-white text-2xl font-bold tracking-wider float-start">
            PERF<span className="text-red-500">AMANA</span>
            </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-red-400 transition">
              Home
            </a>
            <a href="#" className="text-white hover:text-red-400 transition">
              Services
            </a>
            <a href="#" className="text-white hover:text-red-400 transition">
              Projects
            </a>
            <a href="#" className="text-white hover:text-red-400 transition">
              About
            </a>
            <a href="#" className="text-white hover:text-red-400 transition">
              Contact
            </a>
          </nav>
          <button className="md:hidden text-white">
            <MenuIcon size={24} />
          </button>
        </div>
      </div>
    </header>;
};
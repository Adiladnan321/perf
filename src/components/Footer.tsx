import React from 'react';
import { Instagram, MapPin, Phone } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-zinc-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-wider">PERFAMANA</h3>
            <p className="text-gray-400">
              Transforming cars since 2017. From sleek upholstery to
              jaw-dropping paint jobs, body kits, and performance upgrades.
            </p>
          </div>
          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contact</h4>
            <div className="flex items-center space-x-2 text-gray-400">
              <Phone size={20} />
              <a href="tel:8111888790" className="hover:text-white transition">
                +91 811 188 8790
              </a>
            </div>
            <div className="flex items-start space-x-2 text-gray-400">
              <MapPin size={20} className="flex-shrink-0 mt-1" />
              <p>Calicut, Kerala</p>
            </div>
          </div>
          {/* Social Media Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Follow Us</h4>
            <a href="https://www.instagram.com/perfamana" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition">
              <Instagram size={20} />
              <span>@perfamana</span>
            </a>
          </div>
          {/* Hours Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Hours</h4>
            <div className="text-gray-400">
              <p>Monday - Saturday</p>
              <p>9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-zinc-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} PERFAMANA. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
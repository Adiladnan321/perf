import React from 'react';
import { Instagram } from 'lucide-react';

export const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Hashim',
      role: 'Performance Specialist',
      description: 'Specializing in engine modifications and performance tuning, Hashim brings years of racing experience to every build.'
    },
    {
      name: 'Hisham',
      role: 'Design Director',
      description: 'With an eye for detail and aerodynamics, Hisham transforms vehicles into works of art while maintaining peak performance.'
    }
  ];

  return <section className="bg-zinc-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          THE MINDS BEHIND PERFAMANA
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          Meet the racing twins who turned their passion into excellence
        </p>
        
        {/* Single Team Image */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="aspect-[16/9] rounded-lg overflow-hidden">
            <img 
              src="https://res.cloudinary.com/ddmlxwiy1/image/upload/v1744275430/racingtwins_zy1q3j.jpg" 
              alt="Hashim and Hisham" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
        </div>

        {/* Social Media Link */}
        <div className="text-center mt-3">
          <a 
            href="https://www.instagram.com/racing_twins" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center space-x-2 text-white hover:text-gray-300 transition"
          >
            <Instagram size={20} />
            <span>@racingtwins</span>
          </a>
        </div>

        <div className="text-center mt-3">
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            "Our passion for racing and automotive excellence drives us to push
            boundaries and create exceptional custom builds for our clients."
          </p>
          <p className="text-gray-400 mt-4">- Hashim & Hisham</p>
        </div>
      </div>
    </section>;
};

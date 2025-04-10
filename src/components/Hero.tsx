import React from 'react';
export const Hero = () => {
  return <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80" alt="Luxury modified car" className="w-full h-full object-cover opacity-70" />
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className='hover:text-red-700 transition duration-300 ease-linear'>REDEFINING</span> <span className='hover:text-red-700 transition duration-300 ease-linear'>AUTOMOTIVE</span> <span className='hover:text-red-700 transition duration-300 ease-linear'>EXCELLENCE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Exclusive Car Modifications & Custom Projects
          </p>
          <button className="backdrop-blur-sm ring-2 ring-white text-white px-8 py-3 text-lg font-semibold rounded-lg hover:bg-red-800/90 hover:text-white transition duration-300 ease-in-out hover:ring-0">
            Discover Our Work
          </button>
        </div>
      </div>
    </section>;
};
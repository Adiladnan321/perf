import React from 'react';
export const FeaturedProject = () => {
  return <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          FEATURED PROJECT
        </h2>
        <div className="relative aspect-[16/9] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80" alt="Featured luxury car modification" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-8 md:p-16">
              <h3 className="text-3xl md:text-5xl font-bold mb-4">
                <p className='hover:text-yellow-600/90 transition duration-300 ease-linear float-start mr-1'>GT </p> BLACK SERIES
              </h3>
              <p className="text-xl text-gray-300 max-w-2xl mb-6">
                824 HP / 1,100 NM | Carbon Fiber Body Kit | Custom Interior
              </p>
              <button className="backdrop-blur-sm ring-2 ring-white text-white px-8 py-3 text-lg font-semibold rounded-lg hover:bg-yellow-600/90 hover:text-white transition duration-300 ease-in-out hover:ring-0">
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
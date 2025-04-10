import React from 'react';
export const BrandStatement = () => {
  return <section className="bg-zinc-900 text-white py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              THE ART OF AUTOMOTIVE EXCELLENCE
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Since our establishment, PERFAMANA has been synonymous with
              automotive excellence. Our dedication to craftsmanship and
              innovation has made us a leader in high-end vehicle modifications.
            </p>
            <p className="text-lg text-gray-300">
              Every project is a masterpiece, reflecting our commitment to
              pushing the boundaries of automotive engineering and design.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square">
              <img src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80" alt="Luxury car detail" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square mt-8">
              <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80" alt="Custom interior detail" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
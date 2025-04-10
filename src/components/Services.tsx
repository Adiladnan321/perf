import React from 'react';
export const Services = () => {
  return <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          OUR EXPERTISE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
          title: 'Performance Upgrades',
          image: 'https://images.unsplash.com/photo-1636363880033-edb50b09351b?auto=format&fit=crop&q=80',
          description: 'Engine modifications and power enhancements'
        }, {
          title: 'Custom Body Kits',
          image: 'https://images.unsplash.com/photo-1607603750909-408e193868c7?auto=format&fit=crop&q=80',
          description: 'Bespoke aerodynamic solutions and styling'
        }, {
          title: 'Interior Craftsmanship',
          image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80',
          description: 'Luxury interior modifications and upgrades'
        }].map((service, index) => <div key={index} className="group relative overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-[400px] object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
import React from 'react';
export const ProjectsGallery = () => {
  return <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          LATEST PROJECTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
          title: 'AMG GT Coupé',
          image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80',
          specs: '789 HP | Custom Exhaust'
        }, {
          title: 'Rolls-Royce Ghost',
          image: 'https://images.unsplash.com/photo-1635073908681-69701dcc5de3?auto=format&fit=crop&q=80',
          specs: 'Full Body Kit | Interior'
        }, {
          title: 'G 63 AMG',
          image: 'https://images.unsplash.com/photo-1669215420018-098507d14861?auto=format&fit=crop&q=80',
          specs: '850 HP | Widebody'
        }, {
          title: 'Porsche 911',
          image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80',
          specs: 'Carbon Package | Racing'
        }, {
          title: 'Bentley Continental',
          image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&q=80',
          specs: 'Custom Interior | 808 HP'
        }, {
          title: 'Lamborghini Urus',
          image: 'https://images.unsplash.com/photo-1619551734325-81aaf323686c?auto=format&fit=crop&q=80',
          specs: 'Full Conversion | 850 HP'
        }].map((project, index) => <div key={index} className="group relative overflow-hidden">
              <div className="aspect-[4/5]">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.specs}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
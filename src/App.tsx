import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { FeaturedProject } from './components/FeaturedProject';
import { BrandStatement } from './components/BrandStatement';
import { TeamSection } from './components/TeamSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { LoadingScreen } from './components/LoadingScreen';
import { Footer } from './components/Footer';
export function App() {
  return <>
      <LoadingScreen />
      <main className="w-full min-h-screen bg-black">
        <Header />
        <Hero />
        <Services />
        <FeaturedProject />
        <BrandStatement />
        <TeamSection />
        <ProjectsGallery />
        <Footer />
      </main>
    </>;
}
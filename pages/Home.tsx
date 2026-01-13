
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import ContactForm from '../components/ContactForm';
import FacilitySection from '../components/FacilitySection';

const Home: React.FC = () => {
  return (
    <div className="relative animate-fadeIn bg-brand-black overflow-hidden">
      {/* Subtle Background Watermark Images */}
      <div className="absolute top-[20%] left-[-10%] w-[60%] h-[40%] opacity-[0.03] pointer-events-none rotate-[-12deg] z-0">
        <img 
          src="https://images.unsplash.com/photo-1521656693047-9ef81787f1d3?auto=format&fit=crop&q=60&w=1200" 
          className="w-full h-full object-cover grayscale" 
          alt="" 
        />
      </div>
      
      <div className="absolute top-[60%] right-[-10%] w-[50%] h-[35%] opacity-[0.03] pointer-events-none rotate-[8deg] z-0">
        <img 
          src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=60&w=1200" 
          className="w-full h-full object-cover grayscale" 
          alt="" 
        />
      </div>

      {/* Main Content Sections */}
      <div className="relative z-10">
        <Hero />
        <Services />
        <FacilitySection />
        <Portfolio />
        <ContactForm />
      </div>

      {/* Another Subtle Layer for Footer transition */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] opacity-[0.02] pointer-events-none z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888941259-7724f80c445a?auto=format&fit=crop&q=60&w=1200" 
          className="w-full h-full object-cover" 
          alt="" 
        />
      </div>
    </div>
  );
};

export default Home;

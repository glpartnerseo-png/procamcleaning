
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import ContactForm from '../components/ContactForm';
import FacilitySection from '../components/FacilitySection';

const Home: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <Hero />
      <Services />
      <FacilitySection />
      <Portfolio />
      <ContactForm />
    </div>
  );
};

export default Home;

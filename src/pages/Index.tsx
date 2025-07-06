
import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Security from '@/components/Security';
import Pricing from '@/components/Pricing';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import GetStartedForm from '@/components/GetStartedForm';

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleGetStartedClick = () => {
    console.log('Get Started clicked from header');
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    console.log('Closing form from Index');
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header onGetStartedClick={handleGetStartedClick} />
      <Hero />
      <Features />
      <Security />
      <Pricing />
      <Team />
      <Contact />
      <Footer />
      <GetStartedForm 
        isOpen={isFormOpen} 
        onClose={handleCloseForm} 
      />
    </div>
  );
};

export default Index;

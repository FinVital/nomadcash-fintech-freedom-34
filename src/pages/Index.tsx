
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Security from '@/components/Security';
import Pricing from '@/components/Pricing';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Security />
      <Pricing />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

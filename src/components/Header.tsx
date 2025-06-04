

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors font-nunito">Home</a>
            <a href="#features" className="text-gray-700 hover:text-primary transition-colors font-nunito">Features</a>
            <a href="#security" className="text-gray-700 hover:text-primary transition-colors font-nunito">Security</a>
            <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors font-nunito">Pricing</a>
            <a href="#team" className="text-gray-700 hover:text-primary transition-colors font-nunito">Team</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-nunito">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4 ml-auto">
            <Button variant="outline" className="font-nunito">Sign In</Button>
            <Button className="bg-primary hover:bg-primary/90 font-nunito">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors font-nunito">Home</a>
              <a href="#features" className="text-gray-700 hover:text-primary transition-colors font-nunito">Features</a>
              <a href="#security" className="text-gray-700 hover:text-primary transition-colors font-nunito">Security</a>
              <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors font-nunito">Pricing</a>
              <a href="#team" className="text-gray-700 hover:text-primary transition-colors font-nunito">Team</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-nunito">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="font-nunito">Sign In</Button>
                <Button className="bg-primary hover:bg-primary/90 font-nunito">Get Started</Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;


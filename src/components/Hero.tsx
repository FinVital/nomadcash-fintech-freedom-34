
import { Button } from '@/components/ui/button';
import { Smartphone, Globe, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-gray-800 mb-6 leading-tight">
              Welcome to the Future of{' '}
              <span className="text-primary">Borderless Finance</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 font-nunito leading-relaxed">
              NomadCash is the ultimate financial companion for digital nomads, small businesses, and travelers. 
              Built with privacy, speed, and inclusion at its core.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 font-nunito text-lg px-8 py-4 rounded-full shadow-lg"
              >
                Get Started Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="font-nunito text-lg px-8 py-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => window.open('https://www.youtube.com/watch?v=G-pjGpgEdbk&ab_channel=MoazzamWaheed', '_blank')}
              >
                Watch Demo Video
              </Button>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <span className="font-nunito text-gray-700">Mobile First</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-secondary" />
                </div>
                <span className="font-nunito text-gray-700">Global Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <span className="font-nunito text-gray-700">SME Focused</span>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="relative">
              {/* Demo Video Section */}
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-3xl shadow-2xl mb-6">
                <div className="bg-white p-2 rounded-2xl">
                  <iframe
                    src="https://www.youtube.com/embed/G-pjGpgEdbk"
                    width="100%"
                    height="300"
                    className="rounded-xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="NomadCash Demo Video"
                  ></iframe>
                </div>
                <div className="text-center mt-4">
                  <p className="font-nunito text-white text-sm">
                    🎥 Watch our product demo
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl shadow-2xl">
                <div className="bg-white p-6 rounded-2xl mb-6">
                  <h3 className="font-poppins font-bold text-gray-800 mb-4">Multi-Currency Wallet</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-nunito text-gray-600">USD Balance</span>
                      <span className="font-poppins font-bold text-primary">$2,450.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-nunito text-gray-600">EUR Balance</span>
                      <span className="font-poppins font-bold text-secondary">€1,890.50</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/90 p-4 rounded-xl">
                  <p className="font-nunito text-sm text-gray-700 text-center">
                    ✨ AI-Powered Credit • Virtual Cards • Offline Capable
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-poppins font-bold">💳</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">🌐</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

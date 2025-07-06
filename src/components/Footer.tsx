
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/bbd6e54b-06b8-4c79-8b4b-4dacd87432c9.png" 
                alt="NomadCash Logo" 
                className="h-8 w-auto"
              />
              <h3 className="text-2xl font-poppins font-bold">NOMADCASH</h3>
            </div>
            <p className="font-nunito text-gray-300 mb-4 max-w-md">
              Built for financial freedom, everywhere. Secure, innovative financial inclusion for the modern world.
            </p>
            <p className="font-nunito text-sm text-gray-400">
              © 2024 NomadCash. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Product</h4>
            <ul className="space-y-2 font-nunito">
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#security" className="text-gray-300 hover:text-white transition-colors">Security</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Company</h4>
            <ul className="space-y-2 font-nunito">
              <li><a href="#team" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="font-nunito text-gray-400">
            NomadCash — Built for financial freedom, everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

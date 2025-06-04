
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Users, DollarSign } from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      icon: Smartphone,
      title: "Biometric Authentication",
      description: "Face ID and fingerprint login for maximum security"
    },
    {
      icon: Users,
      title: "Data Protection",
      description: "Automatic data wipe on logout with device management"
    },
    {
      icon: DollarSign,
      title: "Alternative Credit Scoring",
      description: "AI-powered assessment using transaction and mobile usage data"
    }
  ];

  return (
    <section id="security" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-800 mb-6">
              <span className="text-primary">Security</span> First Approach
            </h2>
            <p className="text-xl text-gray-600 font-nunito mb-8 leading-relaxed">
              Your financial data deserves the highest level of protection. NomadCash implements 
              military-grade security measures to keep your money and information safe.
            </p>
            
            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="border-l-4 border-l-primary shadow-md">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center space-x-3 font-poppins text-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span>{feature.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-nunito text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-3xl">
              <h3 className="font-poppins font-bold text-2xl text-gray-800 mb-6 text-center">
                AI-Powered Credit Scoring
              </h3>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-nunito text-gray-600">Transaction History</span>
                    <div className="w-20 h-2 bg-secondary rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-nunito text-gray-600">Mobile Usage</span>
                    <div className="w-16 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-nunito text-gray-600">Payment Behavior</span>
                    <div className="w-24 h-2 bg-secondary rounded-full"></div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="font-poppins font-bold text-gray-800">Credit Score</span>
                      <span className="font-poppins font-bold text-2xl text-primary">750</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center font-nunito text-sm text-gray-600 mt-4">
                Aligned with Ruya's Cred-AI-bility Challenge
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;

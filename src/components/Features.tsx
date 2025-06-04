
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Circle-dollar-sign, Smartphone, Bitcoin, Users, File-text } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: "Multi-Currency Wallet",
      description: "Manage USD, EUR, and more with real-time conversions and transparent fees. Add/switch currencies dynamically based on your location.",
      highlights: ["Real-time conversions", "Transparent fees", "Location-based currency"]
    },
    {
      icon: Circle-dollar-sign,
      title: "Smart Debit Cards",
      description: "Virtual cards with limit control, disposable cards for trials, and physical cards with secure delivery.",
      highlights: ["Virtual & Physical cards", "Biometric security", "15-min disposable cards"]
    },
    {
      icon: Smartphone,
      title: "P2P & Merchant Payments",
      description: "Send via username or QR code with notes, emojis, and tags. Merchant mode with QR generator.",
      highlights: ["QR code payments", "Merchant mode", "Rich messaging"]
    },
    {
      icon: Bitcoin,
      title: "Smart Micro-Credit",
      description: "AI-powered credit scoring with borrowing simulation and repayment tracking integrated with your wallet.",
      highlights: ["AI credit scoring", "Repayment tracking", "Wallet integration"]
    },
    {
      icon: Users,
      title: "Offline-Capable History",
      description: "View transaction logs even without internet. Filter by currency, card, type with manual sync capabilities.",
      highlights: ["Offline access", "Smart filtering", "Manual sync"]
    },
    {
      icon: File-text,
      title: "Insights & Analytics",
      description: "Auto-categorized spending by region and type with visual breakdown of fees and usage patterns.",
      highlights: ["Auto-categorization", "Visual analytics", "Fee breakdown"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Powerful Features for{' '}
            <span className="text-primary">Modern Finance</span>
          </h2>
          <p className="text-xl text-gray-600 font-nunito max-w-3xl mx-auto">
            Everything you need to manage your finances globally, whether you're online or offline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-poppins text-xl text-gray-800">
                  {feature.title}
                </CardTitle>
                <CardDescription className="font-nunito text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="font-nunito text-sm text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

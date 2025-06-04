
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Simple <span className="text-primary">SaaS Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 font-nunito max-w-2xl mx-auto">
            Transparent fees with no hidden costs. Pay only for what you use.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="text-center pb-8">
              <CardTitle className="font-poppins text-3xl text-gray-800 mb-4">
                Pay-As-You-Use Model
              </CardTitle>
              <p className="font-nunito text-gray-600">
                All fees are transparently shown in your Wallet & Insights screens
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💱</span>
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-gray-800 mb-2">
                    Currency Conversions
                  </h3>
                  <p className="font-nunito text-gray-600 mb-4">
                    Competitive rates with transparent percentage fees
                  </p>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <span className="font-poppins font-bold text-primary">0.5% - 1.5%</span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💳</span>
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-gray-800 mb-2">
                    Disposable Cards
                  </h3>
                  <p className="font-nunito text-gray-600 mb-4">
                    Small flat fee per disposable card generation
                  </p>
                  <div className="bg-secondary/5 p-3 rounded-lg">
                    <span className="font-poppins font-bold text-secondary">$0.50 per card</span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-gray-800 mb-2">
                    Credit Usage
                  </h3>
                  <p className="font-nunito text-gray-600 mb-4">
                    Fair interest rates on micro-credit features
                  </p>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <span className="font-poppins font-bold text-primary">2.5% - 5% APR</span>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 font-nunito text-lg px-12 py-4 rounded-full"
                >
                  Start Using NomadCash
                </Button>
                <p className="font-nunito text-sm text-gray-500 mt-4">
                  No monthly fees • No setup costs • Cancel anytime
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

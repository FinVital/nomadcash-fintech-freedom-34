
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Ready to Get <span className="text-primary">Started?</span>
          </h2>
          <p className="text-xl text-gray-600 font-nunito max-w-2xl mx-auto">
            Want to collaborate, invest, or get support? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl border-0 bg-white">
            <CardHeader className="text-center">
              <CardTitle className="font-poppins text-2xl text-gray-800">
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-nunito text-gray-600">Email us at:</p>
                    <a 
                      href="mailto:moazzamwaheed@gmail.com" 
                      className="font-poppins font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      moazzamwaheed@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center pt-6 border-t">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 font-nunito text-lg px-12 py-4 rounded-full"
                >
                  Schedule a Demo
                </Button>
                <p className="font-nunito text-sm text-gray-500 mt-4">
                  Get a personalized walkthrough of NomadCash features
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

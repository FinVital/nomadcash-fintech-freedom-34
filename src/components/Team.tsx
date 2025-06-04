
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Team = () => {
  const teamMembers = [
    {
      name: "Moazzam Waheed",
      role: "Founder & CEO",
      description: "Technology leader with 15+ years in software development, AI, and digital transformation across fintech and healthcare sectors.",
      avatar: "MW"
    },
    {
      name: "Anees Ur-Rehman",
      role: "Co-Founder & CTO",
      description: "Experienced software architect and full-stack engineer, specializing in cloud infrastructure, secure app development, and scalable systems.",
      avatar: "AU"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Meet the <span className="text-primary">NomadCash Team</span>
          </h2>
          <p className="text-xl text-gray-600 font-nunito max-w-2xl mx-auto">
            Experienced leaders in fintech, AI, and secure financial technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-poppins font-bold text-white">
                    {member.avatar}
                  </span>
                </div>
                <CardTitle className="font-poppins text-2xl text-gray-800">
                  {member.name}
                </CardTitle>
                <p className="font-nunito text-primary font-semibold text-lg">
                  {member.role}
                </p>
              </CardHeader>
              <CardContent>
                <p className="font-nunito text-gray-600 leading-relaxed text-center">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

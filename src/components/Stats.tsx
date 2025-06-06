
import { Building, Calendar, Users, Award } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Building,
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered projects across Tanzania"
    },
    {
      icon: Calendar,
      number: "20+",
      label: "Years of Experience",
      description: "Two decades of construction excellence"
    },
    {
      icon: Users,
      number: "50+",
      label: "Expert Team Members",
      description: "Skilled professionals dedicated to quality"
    },
    {
      icon: Award,
      number: "100%",
      label: "Client Satisfaction",
      description: "Committed to exceeding expectations"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Track <span className="text-red-500">Record</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence and the trust our clients place in us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-red-500 mb-4 flex justify-center">
                <stat.icon size={48} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-blue-200 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

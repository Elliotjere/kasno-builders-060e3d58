import { CheckCircle, Users, Award, Clock, Building } from "lucide-react";

const stats = [
  { icon: Building, number: "500+", label: "Projects Completed" },
  { icon: Users, number: "20+", label: "Years Experience" },
  { icon: Award, number: "50+", label: "Industry Awards" },
  { icon: Clock, number: "98%", label: "On-Time Delivery" }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              About <span className="text-red-600">Kasno Builders</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over two decades, Kasno Builders Co. Ltd has been at the forefront of 
              construction excellence, delivering innovative solutions and superior craftsmanship 
              to clients across the region.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to quality, safety, and customer satisfaction has earned us 
              a reputation as one of the most trusted construction companies in the industry.
            </p>
            
            <div className="space-y-4">
              {[
                "Licensed and insured professionals",
                "Quality materials and modern techniques",
                "Transparent pricing and communication",
                "Environmental responsibility"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-red-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Construction site"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">20+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-red-600 mb-2 flex justify-center">
                <stat.icon size={40} />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-1">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

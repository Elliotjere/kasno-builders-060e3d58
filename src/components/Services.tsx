
import { Building, Hammer, Wrench, Truck, Construction, Shovel } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Commercial Construction",
    description: "Complete commercial building solutions from planning to completion, including offices, retail spaces, and industrial facilities."
  },
  {
    icon: Construction,
    title: "Residential Construction",
    description: "Custom home building and residential developments with attention to detail and quality craftsmanship."
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description: "Transform existing spaces with our expert renovation services, bringing new life to old structures."
  },
  {
    icon: Wrench,
    title: "Infrastructure Development",
    description: "Roads, bridges, and public infrastructure projects built to last with modern engineering standards."
  },
  {
    icon: Truck,
    title: "Project Management",
    description: "End-to-end project management ensuring timely delivery, quality control, and budget adherence."
  },
  {
    icon: Shovel,
    title: "Site Preparation",
    description: "Professional site clearing, excavation, and foundation work to prepare for construction projects."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From foundation to finish, we provide comprehensive construction services 
            tailored to meet your specific needs and exceed your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={48} />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


import { Building, Hammer, Wrench, Truck, Construction, Shovel } from "lucide-react";
import commercialConstruction from "../assets/commercial-construction.jpg";
import residentialConstruction from "../assets/residential-construction.jpg";
import renovationRemodeling from "../assets/renovation-remodeling.jpg";
import infrastructureDevelopment from "../assets/infrastructure-development.jpg";
import projectManagement from "../assets/project-management.jpg";
import sitePreparation from "../assets/site-preparation.jpg";

const services = [
  {
    icon: Building,
    title: "Commercial Construction",
    description: "Complete commercial building solutions from planning to completion, including offices, retail spaces, and industrial facilities.",
    image: commercialConstruction
  },
  {
    icon: Construction,
    title: "Residential Construction",
    description: "Custom home building and residential developments with attention to detail and quality craftsmanship.",
    image: residentialConstruction
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description: "Transform existing spaces with our expert renovation services, bringing new life to old structures.",
    image: renovationRemodeling
  },
  {
    icon: Wrench,
    title: "Infrastructure Development",
    description: "Roads, bridges, and public infrastructure projects built to last with modern engineering standards.",
    image: infrastructureDevelopment
  },
  {
    icon: Truck,
    title: "Supply of Building Materials",
    description: "High-quality construction materials sourced from trusted suppliers to ensure project success and durability.",
    image: projectManagement
  },
  {
    icon: Shovel,
    title: "Site Preparation",
    description: "Professional site clearing, excavation, and foundation work to prepare for construction projects.",
    image: sitePreparation
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
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <service.icon size={32} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

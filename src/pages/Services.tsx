
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { Building, Hammer, Wrench, Truck, Construction, Shovel } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Commercial Construction",
    description: "Complete commercial building solutions from planning to completion, including offices, retail spaces, and industrial facilities. We specialize in modern office complexes, shopping centers, warehouses, and manufacturing facilities.",
    features: ["Office Buildings", "Retail Spaces", "Warehouses", "Industrial Facilities"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Construction,
    title: "Residential Construction",
    description: "Custom home building and residential developments with attention to detail and quality craftsmanship. From single-family homes to multi-unit developments, we create spaces that families love.",
    features: ["Custom Homes", "Residential Developments", "Apartment Buildings", "Townhouses"],
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description: "Transform existing spaces with our expert renovation services, bringing new life to old structures. We handle everything from minor updates to complete overhauls.",
    features: ["Interior Renovations", "Exterior Upgrades", "Kitchen Remodeling", "Bathroom Renovations"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Wrench,
    title: "Infrastructure Development",
    description: "Roads, bridges, and public infrastructure projects built to last with modern engineering standards. We contribute to Tanzania's development through quality infrastructure.",
    features: ["Road Construction", "Bridge Building", "Public Works", "Utilities Installation"],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Truck,
    title: "Project Management",
    description: "End-to-end project management ensuring timely delivery, quality control, and budget adherence. Our experienced team manages every aspect of your construction project.",
    features: ["Timeline Management", "Quality Control", "Budget Management", "Risk Assessment"],
    image: "/lovable-uploads/6106dbae-4f71-4644-8193-cc0fa4aeb6f2.png"
  },
  {
    icon: Shovel,
    title: "Site Preparation",
    description: "Professional site clearing, excavation, and foundation work to prepare for construction projects. We ensure your project starts on solid ground.",
    features: ["Land Clearing", "Excavation", "Foundation Work", "Site Surveying"],
    image: "/lovable-uploads/93d6d21e-ca99-4f23-8f41-22dfaeb36730.png"
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-red-500">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Comprehensive construction solutions tailored to meet your specific needs and exceed your expectations.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="text-red-600 mb-4">
                        <service.icon size={48} />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can bring your construction vision to life with our expertise and dedication to excellence.
            </p>
            <a 
              href="/#contact"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-300"
            >
              Get Started Today
            </a>
          </div>
        </section>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ServicesPage;

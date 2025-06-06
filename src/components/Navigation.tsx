
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    {
      name: "Commercial Construction",
      description: "Complete commercial building solutions from planning to completion",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Residential Building", 
      description: "Custom home building and residential developments",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Renovation & Remodeling",
      description: "Transform existing spaces with expert renovation services",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Infrastructure Development",
      description: "Roads, bridges, and public infrastructure projects",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Project Management",
      description: "End-to-end project management ensuring timely delivery",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Site Preparation",
      description: "Professional site clearing, excavation, and foundation work",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/569b53d3-0edb-4e79-9261-643222feee26.png" 
                alt="Kasno Builders" 
                className="h-16 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-blue-900 hover:text-red-600 transition-colors font-medium">Home</Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-blue-900 hover:text-red-600 transition-colors font-medium flex items-center gap-1"
              >
                Services
                <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">Our Services</h3>
                    <div className="space-y-3">
                      {services.map((service, index) => (
                        <a
                          key={index}
                          href="#services"
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          onClick={() => setServicesOpen(false)}
                        >
                          <img 
                            src={service.image} 
                            alt={service.name}
                            className="w-12 h-12 rounded object-cover flex-shrink-0"
                          />
                          <div>
                            <h4 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors">
                              {service.name}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <a href="#about" className="text-blue-900 hover:text-red-600 transition-colors font-medium">About</a>
            <Link to="/portfolio" className="text-blue-900 hover:text-red-600 transition-colors font-medium">Portfolio</Link>
            <a href="#contact" className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-900 hover:text-red-600 p-2 rounded-md border border-gray-200 bg-gray-50"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/" className="block px-3 py-2 text-blue-900 hover:text-red-600">Home</Link>
              <a href="#services" className="block px-3 py-2 text-blue-900 hover:text-red-600">Services</a>
              <a href="#about" className="block px-3 py-2 text-blue-900 hover:text-red-600">About</a>
              <Link to="/portfolio" className="block px-3 py-2 text-blue-900 hover:text-red-600">Portfolio</Link>
              <a href="#contact" className="w-full text-left bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors mt-2 block">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

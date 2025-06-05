
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    "Commercial Construction",
    "Residential Building", 
    "Renovation & Remodeling",
    "Infrastructure Development",
    "Project Management",
    "Site Preparation"
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
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-blue-900 hover:text-red-600 transition-colors font-medium">Home</a>
            
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
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href="#services"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      onClick={() => setServicesOpen(false)}
                    >
                      {service}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a href="#about" className="text-blue-900 hover:text-red-600 transition-colors font-medium">About</a>
            <Link to="/portfolio" className="text-blue-900 hover:text-red-600 transition-colors font-medium">Portfolio</Link>
            <a href="#contact" className="text-blue-900 hover:text-red-600 transition-colors font-medium">Contact</a>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium">
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-900 hover:text-red-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-blue-900 hover:text-red-600">Home</a>
              <a href="#services" className="block px-3 py-2 text-blue-900 hover:text-red-600">Services</a>
              <a href="#about" className="block px-3 py-2 text-blue-900 hover:text-red-600">About</a>
              <Link to="/portfolio" className="block px-3 py-2 text-blue-900 hover:text-red-600">Portfolio</Link>
              <a href="#contact" className="block px-3 py-2 text-blue-900 hover:text-red-600">Contact</a>
              <button className="w-full text-left bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors mt-2">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

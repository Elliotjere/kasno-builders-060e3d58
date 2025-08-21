
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const services = [
    {
      name: "Commercial Construction"
    },
    {
      name: "Residential Building"
    },
    {
      name: "Renovation & Remodeling"
    },
    {
      name: "Infrastructure Development"
    },
    {
      name: "Project Management"
    },
    {
      name: "Site Preparation"
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToContact = () => {
    if (location.pathname !== '/') {
      navigate('/');
      // Use setTimeout to ensure the page loads before scrolling
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToAbout = () => {
    if (location.pathname !== '/') {
      navigate('/');
      // Use setTimeout to ensure the page loads before scrolling
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/569b53d3-0edb-4e79-9261-643222feee26.png" 
                alt="Kasno Builders" 
                className="h-26 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-blue-900 hover:text-red-600 transition-colors font-medium">Home</Link>
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-blue-900 hover:text-red-600 transition-colors font-medium flex items-center gap-1"
              >
                Services
                <ChevronDown size={16} className={`transition-transform duration-700 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50 animate-in fade-in duration-700">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">Our Services</h3>
                    <div className="space-y-2">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to="/services"
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          onClick={() => setServicesOpen(false)}
                        >
                          <h4 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors">
                            {service.name}
                          </h4>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <button
              onClick={scrollToAbout}
              className="text-blue-900 hover:text-red-600 transition-colors font-medium"
            >
              About
            </button>
            <Link to="/portfolio" className="text-blue-900 hover:text-red-600 transition-colors font-medium">Portfolio</Link>
            <button
              onClick={scrollToContact}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-900 hover:text-red-600 p-2 rounded-md border border-gray-200 bg-gray-50 transition-all duration-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden animate-in slide-in-from-top duration-1000">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/" className="block px-3 py-2 text-blue-900 hover:text-red-600" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/services" className="block px-3 py-2 text-blue-900 hover:text-red-600" onClick={() => setIsOpen(false)}>Services</Link>
              <button
                onClick={() => {
                  scrollToAbout();
                  setIsOpen(false);
                }}
                className="w-full text-left block px-3 py-2 text-blue-900 hover:text-red-600"
              >
                About
              </button>
              <Link to="/portfolio" className="block px-3 py-2 text-blue-900 hover:text-red-600" onClick={() => setIsOpen(false)}>Portfolio</Link>
              <button
                onClick={() => {
                  scrollToContact();
                  setIsOpen(false);
                }}
                className="w-full text-left bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors mt-2 block"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

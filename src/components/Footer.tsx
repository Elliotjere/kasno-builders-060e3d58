import { Building, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/569b53d3-0edb-4e79-9261-643222feee26.png" 
                alt="Kasno Builders" 
                className="h-26 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Building excellence since 2017. Kasno Builders Company Limited is your trusted partner 
              for building works, civil engineering, and material supply with integrity and innovation.
            </p>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <a 
                  href="https://maps.google.com/?q=Plot+no.+475,+Kisiwani,+Ubungo,+Dar+Es+Salaam,+Tanzania" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Plot no. 475, Kisiwani, Ubungo, Dar Es Salaam
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+255-755151588</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@kasno.co.tz</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-white transition-colors">Building Works</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Civil Engineering Works</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Supplying of Materials</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Kasno Builders Company Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

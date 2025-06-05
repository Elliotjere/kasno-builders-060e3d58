
import { Building } from "lucide-react";

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
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Building excellence since 2003. Kasno Builders Co. Ltd is your trusted partner 
              for all construction needs, delivering quality projects with integrity and innovation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Commercial Construction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Residential Building</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Renovation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Infrastructure</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Kasno Builders Co. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

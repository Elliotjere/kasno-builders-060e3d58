
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/569b53d3-0edb-4e79-9261-643222feee26.png" 
              alt="Kasno Builders" 
              className="h-16 w-auto"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-blue-900 hover:text-red-600 transition-colors font-medium">Home</a>
            <a href="#services" className="text-blue-900 hover:text-red-600 transition-colors font-medium">Services</a>
            <a href="#about" className="text-blue-900 hover:text-red-600 transition-colors font-medium">About</a>
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

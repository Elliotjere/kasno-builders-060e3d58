
import { Building, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const backgroundImages = [
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-800">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 overflow-hidden">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-20' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url('${image}')` }}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <Building size={64} className="text-red-500" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Building Your <span className="text-red-500">Dreams</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in">
            Professional construction services with over 20 years of excellence in delivering quality projects on time and within budget.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2">
              Start Your Project
              <ArrowRight size={20} />
            </button>
            
            <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* CEO Statement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="CEO"
                className="w-64 h-64 rounded-full object-cover mx-auto shadow-xl"
              />
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                A Word from Our <span className="text-red-600">CEO</span>
              </h2>
              <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
                "At Kasno Builders, we don't just construct buildings; we create lasting legacies. Our commitment to excellence, innovation, and client satisfaction has been the cornerstone of our success for over two decades. Every project we undertake is a testament to our dedication to quality and our vision of transforming communities through exceptional construction."
              </blockquote>
              <div className="text-lg font-semibold text-blue-900">
                <p>John Kasno</p>
                <p className="text-red-600">Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

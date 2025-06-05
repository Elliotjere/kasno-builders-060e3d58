
import { Building, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-800">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      ></div>
      
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
  );
};

export default Hero;

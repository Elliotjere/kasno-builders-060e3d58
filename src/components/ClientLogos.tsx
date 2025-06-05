
const clientLogos = [
  {
    name: "TechCorp",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "BuildMax",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Urban Development",
    logo: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "City Council",
    logo: "https://images.unsplash.com/photo-1560472355-b83f0fe1a837?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Metro Group",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Elite Properties",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Trusted by <span className="text-red-600">Leading Organizations</span>
          </h2>
          <p className="text-xl text-gray-600">
            We're proud to work with industry leaders and forward-thinking companies
          </p>
        </div>
        
        <div className="relative">
          <div className="flex animate-marquee space-x-12">
            {/* First set of logos */}
            {clientLogos.map((client, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src={client.logo}
                  alt={client.name}
                  className="max-w-24 max-h-16 object-contain"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {clientLogos.map((client, index) => (
              <div 
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src={client.logo}
                  alt={client.name}
                  className="max-w-24 max-h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;

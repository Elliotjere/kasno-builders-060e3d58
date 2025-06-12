
const clientLogos = [
  {
    name: "Government Procurement Service Agency",
    logo: "/lovable-uploads/6911cd67-eb45-48da-a76e-9118e0991cce.png"
  },
  {
    name: "Tanzania Revenue Authority",
    logo: "/lovable-uploads/d26a738d-b143-45e9-9c7a-30c36ad67048.png"
  },
  {
    name: "TANESCO",
    logo: "/lovable-uploads/aff456bd-91c9-4da6-879d-305ca40c6445.png"
  },
  {
    name: "University of Dar es Salaam",
    logo: "/lovable-uploads/51e4685a-37aa-4462-88be-76c888c44dd4.png"
  },
  {
    name: "Government Procurement Service Agency",
    logo: "/lovable-uploads/6911cd67-eb45-48da-a76e-9118e0991cce.png"
  },
  {
    name: "Tanzania Revenue Authority",
    logo: "/lovable-uploads/d26a738d-b143-45e9-9c7a-30c36ad67048.png"
  },
  {
    name: "TANESCO",
    logo: "/lovable-uploads/aff456bd-91c9-4da6-879d-305ca40c6445.png"
  },
  {
    name: "University of Dar es Salaam",
    logo: "/lovable-uploads/51e4685a-37aa-4462-88be-76c888c44dd4.png"
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
            We're proud to work with Tanzania's government institutions and forward-thinking organizations
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
    </section>
  );
};

export default ClientLogos;

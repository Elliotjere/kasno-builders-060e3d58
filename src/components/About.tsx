
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              About <span className="text-red-600">Kasno Builders</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in April 2017, Kasno Builders Company Limited has established itself as a 
              leading construction company in Tanzania, delivering innovative building solutions, 
              civil engineering works, and quality material supply to clients across the region.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              <strong>Our Vision:</strong> To become the recognized leader for innovation and excellence 
              in the construction industry.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              <strong>Our Mission:</strong> To provide the knowledge and skills nobilities on construction 
              and facilitate partnership to our clients.
            </p>
            
            <div className="space-y-4">
              {[
                "CRB Class 5 Building Contractor",
                "CRB Class 6 Civil Works Contractor", 
                "TRA Registered (TIN: 138-959-719)",
                "Full VAT Registration (40-037231-A)",
                "Quality materials and modern techniques",
                "Transparent pricing and communication"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-red-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Construction site"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">7+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

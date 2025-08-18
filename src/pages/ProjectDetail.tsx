
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const projectDetails = {
  "1": {
    title: "GPSA Regional Office Building and Fuel Filling Station",
    category: "Commercial",
    description: "A comprehensive project featuring regional office building construction and modern fuel filling station infrastructure for GPSA operations in Arusha.",
    phases: [
      {
        title: "Site Development and Infrastructure",
        images: [
          "/lovable-uploads/9377ae2a-8b58-4a6f-91eb-521fcae29bf7.png",
          "/lovable-uploads/43978a16-f054-4db4-95fc-192ead6a4a2e.png"
        ]
      },
      {
        title: "Office Building Construction",
        images: [
          "/lovable-uploads/492dff48-276b-478d-9ef5-975fa7907984.png",
          "/lovable-uploads/eee193a3-85be-40a7-9d0d-9bb2cdf37052.png"
        ]
      },
      {
        title: "Fuel Station Installation",
        images: [
          "/lovable-uploads/ed9aded5-1d0a-4ded-839f-1b5a8d690aea.png",
          "/lovable-uploads/e15a653d-1e1b-4ce1-bd83-6bb17e6c5721.png"
        ]
      },
      {
        title: "Final Completion",
        images: [
          "/lovable-uploads/5127ce08-46c7-4800-9c82-28167532b551.png",
          "/lovable-uploads/8483f39b-b7b9-4512-bec8-608194b24479.png"
        ]
      }
    ]
  }
  // Add more projects as needed
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = id ? projectDetails[id as keyof typeof projectDetails] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20">
        {/* Header */}
        <section className="bg-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </button>
            
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-blue-200 mb-4">{project.description}</p>
              </div>
              <div className="bg-red-600 text-white px-4 py-2 rounded-full">
                {project.category}
              </div>
            </div>
          </div>
        </section>

        {/* Project Phases */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Project Phases</h2>
            
            <div className="space-y-16">
              {project.phases.map((phase, index) => (
                <div key={index} className="border-l-4 border-red-600 pl-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">
                    Phase {index + 1}: {phase.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {phase.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src={image}
                          alt={`${phase.title} - Image ${imgIndex + 1}`}
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;

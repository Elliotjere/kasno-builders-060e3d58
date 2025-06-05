
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const projectDetails = {
  1: {
    title: "Modern Office Complex",
    category: "Commercial",
    description: "A state-of-the-art office complex featuring sustainable design and modern amenities.",
    phases: [
      {
        title: "Site Preparation",
        images: [
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
      },
      {
        title: "Foundation Work",
        images: [
          "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
      },
      {
        title: "Structural Construction",
        images: [
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
      },
      {
        title: "Final Completion",
        images: [
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
      }
    ]
  }
  // Add more projects as needed
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projectDetails[id as keyof typeof projectDetails];

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

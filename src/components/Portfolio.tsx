
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Modern Office Complex",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Commercial"
  },
  {
    id: 2,
    title: "Luxury Residential Villa",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Residential"
  },
  {
    id: 3,
    title: "Shopping Mall Development",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Commercial"
  },
  {
    id: 4,
    title: "Bridge Infrastructure",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Infrastructure"
  },
  {
    id: 5,
    title: "Hospital Renovation",
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Healthcare"
  },
  {
    id: 6,
    title: "Educational Campus",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Educational"
  }
];

const Portfolio = () => {
  const navigate = useNavigate();

  const handleViewProject = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Our <span className="text-red-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of completed projects that showcase our commitment 
            to excellence and innovation in construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">{project.title}</h3>
                <button 
                  onClick={() => handleViewProject(project.id)}
                  className="bg-blue-900 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
                >
                  View Project
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

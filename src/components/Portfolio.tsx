
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "GPSA Regional Office Building and Fuel Filling Station",
    image: "/lovable-uploads/5127ce08-46c7-4800-9c82-28167532b551.png",
    category: "Commercial",
    client: "Government Procurement Services Agency (GPSA)",
    location: "Nduluama, Arusha",
    startDate: "March 2024",
    completionDate: "April 2025",
    status: "100% Completed"
  },
  {
    id: 2,
    title: "Warehouse at GPSA Headquarters Renovation",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Renovation",
    client: "Government Procurement Services Agency (GPSA)",
    location: "Dar es Salaam",
    startDate: "Feb 2024",
    completionDate: "Dec 2024",
    status: "100% Completed"
  },
  {
    id: 3,
    title: "Construction of Two in One 2Bedroom Staff HSE",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Residential",
    client: "Tanzania Revenue Authority",
    location: "Nakawale-Songea",
    startDate: "May 2024",
    completionDate: "Nov 2024",
    status: "100% Completed"
  },
  {
    id: 4,
    title: "Rehabilitation of Fuel Filling Station at GPSA",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Infrastructure",
    client: "Government Procurement Services Agency (GPSA)",
    location: "Kilimanjaro, Singida, Manyara, Geita, Katavi, Morogoro & Shinyanga",
    startDate: "Jan 2023",
    completionDate: "Feb 2025",
    status: "100% Completed"
  },
  {
    id: 5,
    title: "Two Storey Commercial Building at Magore",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Commercial",
    client: "Leah B. M",
    location: "Dar es Salaam",
    startDate: "Sept 2021",
    completionDate: "Oct 2022",
    status: "100% Completed"
  },
  {
    id: 6,
    title: "Concrete Base, Roofing and Fencing for Transformer",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Infrastructure",
    client: "TANESCO HQ",
    location: "Tangeo-Ilala Dar es Salaam",
    startDate: "Feb 2021",
    completionDate: "Nov 2021",
    status: "100% Completed"
  },
  {
    id: 7,
    title: "Extension of Students' Wings at UDSM Health Centre",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Educational",
    client: "University of Dar es Salaam (UDSM)",
    location: "Dar es Salaam",
    startDate: "March 2023",
    completionDate: "Oct 2023",
    status: "100% Completed"
  },
  {
    id: 8,
    title: "Construction and Repair of Waste Collection Areas (VIZIMBA)",
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Infrastructure",
    client: "University of Dar es Salaam (UDSM)",
    location: "University of Dar es Salaam",
    startDate: "April 2023",
    completionDate: "Jan 2024",
    status: "100% Completed"
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
                <div className="absolute top-4 right-4">
                  <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Completed
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2 line-clamp-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Client:</span> {project.client}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Location:</span> {project.location}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-medium">Duration:</span> {project.startDate} - {project.completionDate}
                </p>
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

import { projects } from '../constants';

const ProjectCard = ({ title, description, tech, image, link }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
    <div className="h-48 bg-gray-700 overflow-hidden">
      {image ? (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-700">
          <span className="text-gray-500">{title}</span>
        </div>
      )}
    </div>
    
    <div className="p-4">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
            {item}
          </span>
        ))}
      </div>
      
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        View Project
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="w-full justify-center mx-auto px-8 py-12" id="projects">
      <div>
        <h2 className="text-2xl text-white font-medium mb-1 text-left sm:text-center xs:text-center md:text-left">Projects</h2>
        <div className="w-full h-0.5 bg-white mb-3"></div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
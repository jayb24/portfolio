import { projects } from '../constants';

const ProjectCard = ({ title, description, tech, image, link }) => (
  <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
    <div className="h-48 bg-gray-950 overflow-hidden">
      {image ? (
        <img 
        src={image} 
        alt={title}
        width="800"
        height="450"
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        srcSet={`${image} 800w, ${image.replace('.', '-sm.')} 400w`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-700">
          <span className="text-white">{title}</span>
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
        <h2 className="text-2xl text-gray-200 font-medium mb-3 text-left sm:text-center xs:text-center md:text-left">Projects</h2>
      </div>
      
      <div className="mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
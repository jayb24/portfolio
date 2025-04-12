import { techStack } from '../constants';

const TechStack = () => (
  <div className="w-full justify-center mx-auto px-8" id="tech-stack">
    <h2 className="text-2xl text-gray-200 font-medium mb-3 text-left sm:text-center xs:text-center md:text-left">My Tech Stack</h2>

    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-between">
      {techStack.map((tech, index) => (
        <div 
          key={index} 
          className="flex items-center p-2 hover:bg-blue-500 border-gray-500 border-.5 rounded-lg transition-all duration-300 hover:scale-105 transform-gpu group"
        >
          <img src={tech.icon} alt={tech.name} className="w-6 h-6 mr-2" />
          <span className="text-sm text-gray-200">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default TechStack;
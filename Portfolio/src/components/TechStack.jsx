import { techStack } from '../constants';

const TechStack = () => (
  <div className="w-full justify-center mx-auto px-8" id="tech-stack">
    <h2 className="text-2xl text-white font-medium mb-1 text-left sm:text-center xs:text-center md:text-left">My Tech Stack</h2>
    <div className="w-full h-0.5 bg-white mb-3"></div>
    
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-between">
      {techStack.map((tech, index) => (
        <div 
          key={index} 
          className="flex items-center p-2 hover:bg-blue-500 border-white border-2 rounded-lg transition-all duration-300 hover:scale-105 transform-gpu group"
        >
          <img src={tech.icon} alt={tech.name} className="w-6 h-6 mr-2" />
          <span className="text-sm text-white">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default TechStack;
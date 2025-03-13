import { techStack } from '../constants';

const TechStack = () => (
<div className="w-full justify-center mx-auto px-8" id="tech-stack">
      <h2 className="text-2xl text-white font-medium mb-4 text-left sm:text-center xs:text-center md:text-left">My Tech Stack</h2>
      <div className="w-full h-0.5 bg-white mb-4"></div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-1 hover:bg-gray-50 rounded-lg transition-colors">
            <img src={tech.icon} alt={tech.name} className="w-30 h-30 mb-2" />
            <span className="text-sm text-white text-center">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
);

export default TechStack;
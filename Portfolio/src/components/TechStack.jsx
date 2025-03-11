import { techStack } from '../constants';

const TechStack = () => (
<div className="container mx-auto px-6 sm:px-16 xl:px-0" id="tech-stack">
      <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
            <span className="text-sm text-center">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
);

export default TechStack;
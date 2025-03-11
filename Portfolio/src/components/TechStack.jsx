import { techStack } from '../constants';

const TechStack = () => (
<div className="flex flex-col items-center justify-center p-8">
            <h2 className="text-2xl text-white font-bold mb-6">My Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {techStack.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center rounded-lg shadow-md">
                        <img src={tech.icon} alt={tech.name} />
                        <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
);

export default TechStack

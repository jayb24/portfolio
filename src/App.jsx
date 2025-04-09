import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Hero, TechStack, Projects, Contact } from "./components";
import { gradients } from "./constants";
import { useState, useEffect } from 'react';
import ParticleBackground from './components/Particles';

// Create page components
const Home = () => (
  <>
    <Hero />
    <TechStack />
    <Projects />
    <Contact />
  </>
);

const ProjectsPage = () => <Projects />;
const ContactPage = () => <Contact />;

const App = () => {
  const [gradientIndex, setGradientIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setGradientIndex((prevIndex) => (prevIndex + 1) % gradients.length);
    }, 15000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-custom-dark w-full overflow-hidden relative min-h-screen">
        {/* Particles container */}
        <div 
          className="absolute inset-0"
          style={{ 
            position: "absolute", 
            width: "100%", 
            height: "100vh", 
            zIndex: 1,
            pointerEvents: "none"
          }}
        >
          <ParticleBackground />
        </div>

        <div 
          className={`absolute top-0 left-0 right-0 h-[120px] z-50 ${gradients[gradientIndex]} opacity-15`} 
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 40%, transparent 100%)',
            transition: 'background-color 8s ease',
            pointerEvents: 'none',
          }}
        ></div>
        
        <div className="md:px-40 mx-auto relative z-10">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

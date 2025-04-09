import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Hero, TechStack, Projects, Contact } from "./components";
import { gradients } from "./constants";
import { useState, useEffect } from 'react';

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
    }, 15000); // Change color every 30 seconds (much slower)
    
    return () => clearInterval(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-custom-dark w-full overflow-hidden relative">
        {/* Animated gradient bar with fade to black */}
        <div 
          className={`absolute top-0 left-0 right-0 h-[120px] z-50 ${gradients[gradientIndex]} opacity-15`} 
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 40%, transparent 100%)',
            transition: 'background-color 8s ease', // Increased to 8 seconds for much slower transition
            pointerEvents: 'none',
          }}
        ></div>
        
        <div className="md:px-40 mx-auto">
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

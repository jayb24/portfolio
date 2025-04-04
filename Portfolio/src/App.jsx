import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Hero, TechStack, Projects } from "./components";

// Create page components
const Home = () => (
  <>
    <Hero />
    <TechStack />
    <Projects />
  </>
);

const ProjectsPage = () => <Projects />;

const App = () => (
  <BrowserRouter>
    <div className="bg-black w-full overflow-hidden">
      <div className="md:px-40 mx-auto">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;

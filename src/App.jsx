import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Hero, TechStack, Projects, Contact } from "./components";

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

const App = () => (
  <BrowserRouter>
    <div className="bg-black w-full overflow-hidden">
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

export default App;

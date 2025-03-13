import { Navbar, Hero, TechStack, Projects } from "./components";

const App = () => (
  <div className="bg-black w-full overflow-hidden">
    {/* Main container to control the max width consistently */}
    <div className="md:px-40 mx-auto">
      {/* Navbar Section */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="w-full">
        <Hero />
      </div>

      {/* Content Sections */}
      <div className="w-full">
        <TechStack />
        <Projects />
      </div>
    </div>
  </div>
);

export default App;

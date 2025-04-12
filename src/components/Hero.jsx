import { profile, github, linkedin, location, Eye } from "../assets";

const Hero = () => (
  <section id="home" className="flex flex-col w-full text-gray-200 py-16">
    {/* Use max width and margin auto to center content like navbar */}
    <div className="mx-auto px-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Profile Image - centered on mobile */}
        <div className="flex-shrink-0 flex justify-center w-full md:w-auto md:justify-start">
          <div className="rounded-full border-2 border-blue-500 overflow-hidden w-[100px] h-[100px]">
            <img src={profile} alt="profile" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Text Content - centered on mobile */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <span className="font-mono font-extralight text-xs text-gray-200 mb-2">Front-end Developer</span>
          <h1 className="text-roboto text-gray-200 text-3xl font-medium mb-4">Hi, I'm Jayden Botha 🤝</h1>
          
          {/* Location */}
          <div className="flex text-sm items-center text-gray-200 mb-3">
            <img src={location} alt="location" className="w-4 h-4 mr-2" />
            <span>Orlando, FL</span>
          </div>
          
          {/* Bio */}
          <p className="text-sm mb-4 text-gray-200">
            A junior at the University of Central Florida pursuing a B.S. in Computer Science. I enjoy web development and great UI/UX design.
          </p>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-2">
           
            
            <a 
              href="https://linkedin.com/in/jayden-botha-14274b352" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center border-gray-600 p-[4px] rounded-[4px] hover:bg-blue-500 hover:scale-110 transition-colors group"
            >
              <img src={linkedin} alt="linkedin" className="w-7 h-7" />
            </a>
            
            <a 
              href="https://github.com/jayb24" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center  border-gray-600 p-[4px] rounded-[4px] hover:bg-blue-500 hover:scale-110 transition-colors group"
            >
              <img src={github} alt="github" className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
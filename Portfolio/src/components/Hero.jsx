import { profile, github, linkedin, download, location } from "../assets";

const Hero = () => (
  <section id="home" className="flex flex-col w-full bg-black text-white py-16">
    {/* Use max width and margin auto to center content like navbar */}
    <div className="mx-auto px-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Profile Image - centered on mobile */}
        <div className="flex-shrink-0 flex justify-center w-full md:w-auto md:justify-start">
          <div className="rounded-full border-4 border-blue-500 overflow-hidden w-[100px] h-[100px]">
            <img src={profile} alt="profile" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Text Content - centered on mobile */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <span className="font-mono font-extralight text-xs text-white mb-2">Front-end Developer</span>
          <h1 className="text-roboto text-3xl font-medium mb-4">Hi, I'm Jayden Botha</h1>
          
          {/* Location */}
          <div className="flex text-sm items-center mb-3">
            <img src={location} alt="location" className="w-4 h-4 mr-2" />
            <span>Orlando, FL</span>
          </div>
          
          {/* Bio */}
          <p className="text-sm mb-6">
            A junior at the University of Central Florida pursuing a B.S. in Computer Science. I enjoy web development and great UI/UX design.
          </p>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <a 
              href="/botha_resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 text-xs border-white px-3 py-2 rounded-[8px] hover:bg-white hover:text-black transition-colors group"
            >
              View Resume
              <img src={download} alt="view" className="w-3 h-3 group-hover:invert" /> 
            </a>
            
            <a 
              href="https://linkedin.com/in/jayden-botha-14274b352" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center border-2 border-white text-black p-2 rounded-[8px] hover:bg-white transition-colors group"
            >
              <img src={linkedin} alt="linkedin" className="w-4 h-4 group-hover:invert" />
            </a>
            
            <a 
              href="https://github.com/jayb24" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center border-2 border-white text-black p-2 rounded-[8px] hover:bg-white transition-colors group"
            >
              <img src={github} alt="github" className="w-4 h-4 group-hover:invert" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
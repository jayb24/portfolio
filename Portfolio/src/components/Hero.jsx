import { profile, github, linkedin, download, location } from "../assets";

const Hero = () => (
  <section id="home" className="flex flex-col w-full bg-black text-white py-16">
    {/* Use max width and margin auto to center content like navbar */}
    <div className="max-w-4xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Profile Image - centered on mobile */}
        <div className="flex-shrink-0 flex justify-center w-full md:w-auto md:justify-start">
          <div className="rounded-full border-4 border-blue-500 overflow-hidden w-[130px] h-[130px]">
            <img src={profile} alt="profile" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Text Content - centered on mobile */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <span className="font-mono font-extralight text-sm text-white mb-2">Front-end Developer</span>
          <h1 className="text-roboto text-4xl font-medium mb-4">Hi, I'm Jayden Botha</h1>
          
          {/* Location */}
          <div className="flex items-center mb-6">
            <img src={location} alt="location" className="w-6 h-6 mr-2" />
            <span>Orlando, FL</span>
          </div>
          
          {/* Bio */}
          <p className="text-l mb-6">
            A junior at the University of Central Florida pursuing a B.S. in Computer Science. I enjoy web development and great UI/UX design.
          </p>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <a href="/resume.pdf" className="flex items-center gap-2 border-2 border-white px-3 py-2 rounded-[8px] hover:bg-white hover:text-black transition-colors group">
              Download Resume
              <img src={download} alt="download" className="w-5 h-5 group-hover:invert" /> 
            </a>
            
            <a href="https://linkedin.com/jay" className="flex items-center border-2 border-white text-black p-2 rounded-[8px] hover:bg-white transition-colors group">
              <img src={linkedin} alt="linkedin" className="w-6 h-6 group-hover:invert" />
            </a>
            
            <a href="https://github.com/jayb24" className="flex items-center border-2 border-white text-black p-2 rounded-[8px] hover:bg-white transition-colors group">
              <img src={github} alt="github" className="w-6 h-6 group-hover:invert" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
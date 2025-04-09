import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./particlesjs-config.json";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("Initializing particles...");
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles loaded:", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 pointer-events-none"
      style={{ 
        position: "absolute", 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100%",
        zIndex: 0,
        pointerEvents: "none"
      }}
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig}
    />
  );
};

export default ParticleBackground;
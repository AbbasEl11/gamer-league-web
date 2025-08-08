import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import UpcomingTournaments from "./UpcomingTournaments";
import Features from "./Features";
import LivestreamPreview from "./LivestreamPreview";
import CallToAction from "./CallToAction";
import "../../styles/components/Home/scroll-depth-home.css";

gsap.registerPlugin(ScrollTrigger);

const SECTIONS = [
  HeroSection,
  AboutSection,
  UpcomingTournaments,
  Features,
  LivestreamPreview,
  CallToAction,
];

function ScrollDepthHome() {
  const containerRef = useRef(null);

  useEffect(() => {
    const panels = gsap.utils.toArray(".scroll-layer");
    const count = panels.length;

    panels.forEach((panel, i) => {
      gsap.set(panel, {
        opacity: i === 0 ? 1 : 0,
        scale: i === 0 ? 1 : 1.15,
        pointerEvents: i === 0 ? "auto" : "none",
        zIndex: i === 0 ? 999 : 1,
      });
    });

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${window.innerHeight * (count - 1)}`, 
      pin: true,
      scrub: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const single = 1 / (count - 1); 

        panels.forEach((panel, i) => {
          const rel = (progress - i * single) / single; 

          let opacity = 0;
          let scale = 1.15;
          let pointer = "none";
          let z = 1;

          if (i === count - 1) {
            if (progress >= 1 - single * 0.1) {
              opacity = 1;
              scale = 1;
              pointer = "auto";
              z = 999;
            } else {
              opacity = 0;
              scale = 1.05;
              pointer = "none";
              z = 1;
            }
          } else {
            if (rel >= 0 && rel <= 1) {
              if (rel < 0.2) {
                const t = rel / 0.2;       
                opacity = t;                
                scale = 1.15 - 0.15 * t;    
              } else if (rel <= 0.8) {
                opacity = 1;                 
                scale = 1.0;
              } else {
                const t = (rel - 0.8) / 0.2; 
                opacity = 1 - t;             
                scale = 1.0 - 0.1 * t;       
              }

              if (opacity > 0.5) {
                pointer = "auto";
                z = 999; 
              } else {
                pointer = "none";
                z = 1;
              }
            } else {
              opacity = 0;
              scale = rel < 0 ? 1.15 : 0.9;
              pointer = "none";
              z = 1;
            }


            if (i === 0 && progress <= single * 0.25) {
              opacity = 1;
              scale = 1;
              pointer = "auto";
              z = 999;
            }
          }

          gsap.set(panel, {
            opacity: Math.max(0, Math.min(1, opacity)),
            scale,
            zIndex: z,
            pointerEvents: pointer,
          });
        });
      },
    });

    return () => st && st.kill();
  }, []);

  return (
    <div className="scroll-depth-home-container" ref={containerRef}>
      {SECTIONS.map((Section, i) => (
        <div className="scroll-layer" key={i}>
          <Section />
        </div>
      ))}
    </div>
  );
}

export default ScrollDepthHome;

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
        scale: i === 0 ? 1 : 1.2 ,
        pointerEvents: i === 0 ? "auto" : "none",
      });
    });

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${window.innerHeight * (count - 1)}`,
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;

panels.forEach((panel, i) => {
  const single = 1 / (count - 1);
  const relProgress = (progress - i * single) / single;

  let opacity = 0;
  let scale = 1.5;
  let pointer = "none";
  let z = 1;

  if (i < count - 1) {
    if (relProgress >= 0 && relProgress <= 1) {
      opacity = 1 - Math.abs(relProgress - 0.2) * 2;
      scale = 1.3 - 0.65 * relProgress;
      pointer = opacity > 1 ? "auto" : "none";
    }
    if (i === 0 && progress <= single / 2) {
      opacity = 1;
      scale = 1;
      pointer = "auto";
      z = 999;
    }
  }

  if (i === count - 1) {
    if (progress >= 1 - single * 0.2) {
      opacity = 1;
      scale = 1;
      pointer = "auto";
      z = 999;
    } else {
      opacity = 0;
      scale = 1.1;
      pointer = "none";
    }
  }

  gsap.set(panel, {
    opacity: Math.max(0, Math.min(1, opacity)),
    scale: scale,
    zIndex: count - i,
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

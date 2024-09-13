import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Environment, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import MacContainer from "../components/MacContainer";
import { animateWithGsap } from "../utils/animations";

const Mac = () => {
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 0.4 });
    animateWithGsap("#title", { y: 0, opacity: 1 });
  }, []);

  return (
    <div className="w-full h-screen relative">
      <div className="w-full absolute top-10 flex flex-col items-center justify-center">
        <p id="hero" className="hero-title">
          MacBook Pro
        </p>
        <h1 id="title" className="section-heading">
          Mind-blowing.
        </h1>
        <h1 id="title" className="section-heading">
          Head-turning.
        </h1>
      </div>
      <Canvas camera={{ fov: 10, position: [0, -10, 220] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Mac;

import React from "react";
import { Model } from "../components/Model";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export const Home = () => {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="relative bg-black flex justify-center shadow-[0_0_20px_#fff] h-[90%] w-[95%] rounded-4xl overflow-hidden">
        <div className="h-full w-full">
          <Canvas>
            <Model />
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>
        </div>

        <div className="absolute left-6 my-4">
          <h1 className="text-white orbitron text-sm">.raviswamiii</h1>
        </div>

          <div className="absolute flex mx-5 my-4 text-white orbitron gap-16 text-sm ">
            <p className="underline">Home</p>
            <p className="underline">Skills</p>
            <p className="underline">Projects</p>
            <p className="underline">Contact Me</p>
          </div>

        <div className="text-white pl-35 pt-48 flex flex-col absolute left-0 w-1/2">
          <h1 className="text-4xl orbitron mb-2">Hi, I’m Ravi Swami,</h1>
          <h2 className="text-5xl mb-2 orbitron">A Web Developer</h2>
          <h3>
            A dedicated MERN Stack Developer, specializing in building web
            applications. I deliver high-quality solutions, modern design and
            reliable performance, ensuring the best services tailored to your
            requirements.
          </h3>
        </div>

        
      </div>
    </div>
  );
};

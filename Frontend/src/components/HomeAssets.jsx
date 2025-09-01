import React, { useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Moon } from "../components/Moon";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Menu } from "./Menu";

export const HomeAssets = () => {
  return (
    <div>
      <div className=" text-white absolute top-45 sm:top-40 left-0 sm:left-[10%] w-full sm:w-[80%] text-center px-4 sm:p-0">
        <h1 className="orbitron text-2xl sm:text-3xl lg:text-4xl">
          Hi, I’m Ravi Swami,
        </h1>
        <h2 className="orbitron text-3xl sm:text-4xl lg:text-5xl sm:my-1">
          A Web Developer
        </h2>
        <h3 className="text-sm lg:text-base">
          A dedicated MERN Stack Developer, specializing in building web
          applications. I deliver high-quality solutions, modern design and
          reliable performance, ensuring the best services tailored to your
          requirements.
        </h3>
      </div>

      <div className=" absolute bottom-[-30%] sm:bottom-[-90%] md:bottom-[-120%] left-[-3%] right-0 h-[60%] sm:h-[130%] md:h-[160%] lg:w-[80%] lg:left-[10%]">
        <Canvas>
          <Moon />
          <OrbitControls enableZoom={false} enableRotate={false} />
        </Canvas>
      </div>
      <Menu />
    </div>
  );
};

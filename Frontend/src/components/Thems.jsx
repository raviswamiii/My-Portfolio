import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Link, NavLink } from "react-router-dom";
import { Model } from "./Model";

export const Theme = () => {
  return (
    <div className="h-screen flex justify-center items-center">
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
          <NavLink to={"/"}>
            <p className="underline">Home</p>
          </NavLink>
          <NavLink to={"/skills"}>
            <p className="underline ">Skills</p>
          </NavLink>
          <NavLink to={"/projects"}>
            <p className="underline">Projects</p>
          </NavLink>
          <NavLink to={"/contactMe"}>
            <p className="underline">Contact Me</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

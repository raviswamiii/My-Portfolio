import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Link, NavLink, Route, useLocation } from "react-router-dom";
import { Model } from "./Model";
import { Home } from "../pages/Home";
import { HomeAssets } from "./HomeAssets";

export const Theme = () => {
  const location = useLocation();
  return (
    <div className="bg-black h-screen flex justify-center items-center p-5 xl:p-8">
      <div className="relative bg-black flex justify-center items-center shadow-[0_0_20px_#fff] h-full w-full rounded-2xl xl:rounded-4xl overflow-hidden">
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

        <div className="absolute left-4 top-3 xl:top-4 xl:left-6 ">
          <h1 className="text-white orbitron text-sm">.raviswamiii</h1>
        </div>

        <div className="hidden absolute xl:flex top-4 text-white orbitron gap-16 text-sm ">
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

        <div className="">
          {location.pathname === "/" && <HomeAssets/>}
        </div>
      </div>
    </div>
  );
};

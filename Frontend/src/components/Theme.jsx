import React, { useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { NavLink, useLocation } from "react-router-dom";
import { Model } from "./Model";
import { HomeAssets } from "./HomeAssets";
import { CgMenuRightAlt } from "react-icons/cg";
import { AppContext } from "../context/AppContext";
import { SiTrueup } from "react-icons/si";
import { SkillsAssets } from "./SkillsAssets";
import { ProjectsAssets } from "./ProjectsAssest";

export const Theme = () => {
  const location = useLocation();
  const {menu, setMenu} = useContext(AppContext);
  return (
    <div className="bg-black h-screen flex justify-center items-center p-5 sm:p-8">
      <div onClick={()=>setMenu(!menu)} className="relative bg-black flex justify-center items-center shadow-[0_0_20px_#fff] h-full w-full rounded-2xl sm:rounded-4xl overflow-hidden">
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

        <div className="absolute left-3 sm:left-5 top-2 sm:top-3  ">
          <h1 className="text-white orbitron sm:text-sm md:text-md lg:text-lg ">
            .raviswamiii
          </h1>
        </div>

        <div className="hidden absolute sm:flex sm:top-3 text-white orbitron sm:gap-[3vw] md:gap-[5vw] sm:text-sm md:text-md lg:text-lg ">
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

        <div className="absolute sm:hidden top-2 right-3 text-xl text-white">
          <CgMenuRightAlt onClick={()=>setMenu(!menu)}/>
        </div>

        <div>{location.pathname === "/" && <HomeAssets />}</div>
        <div>{location.pathname === "/skills" && <SkillsAssets />}</div>
        <div>{location.pathname === "/projects" && <ProjectsAssets />}</div>
      </div>
    </div>
  );
};

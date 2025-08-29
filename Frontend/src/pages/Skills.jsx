import React from "react";
import { Theme } from "../components/Thems";
import { LiaHtml5 } from "react-icons/lia";
import { TbBrandCss3 } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

export const Skills = () => {
  return (
    <div className="h-screen relative">
      <Theme />
      <div className="absolute top-60 left-85 text-white text-5xl orbitron flex flex-col gap-18 items-center justify-center ">
        <div className="flex gap-20">
          <div className="flex flex-col gap-1 justify-center items-center">
            <LiaHtml5 />
            <p className="text-sm">HTML</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <TbBrandCss3 />
            <p className="text-sm">CSS</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <RiJavascriptFill />
            <p className="text-sm">JAVASCRIPT</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <SiTailwindcss />
            <p className="text-sm">TAILWIND CSS</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <FaReact />
            <p className="text-sm">REACT</p>
          </div>
        </div>

        <div className="flex gap-20">
          <div className="flex flex-col gap-1 justify-center items-center">
            <DiNodejs />
            <p className="text-sm">NODE.JS</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <SiExpress />
            <p className="text-sm">EXPRESS.JS</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <SiMongodb />
            <p className="text-sm">MONGODB</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <SiPostman />
            <p className="text-sm">POSTMAN</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <FaGitAlt />
            <p className="text-sm">GIT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Theme } from "../components/Theme";
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
import { Menu } from "./menu";

export const SkillsAssets = () => {
  return (
    <div>
      <div className=" p-4 backdrop-blur-xs rounded-2xl text-white absolute top-[20%] left-[5%] lg:left-[20%] w-[90%] lg:w-[60%] h-[65%]  overflow-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-5">
        <div className="flex flex-col gap-1 justify-center items-center border p-4 rounded-2xl shadow-[0_0_10px_#fff] text-center">
          <LiaHtml5 className="text-2xl"/>
          <p className="text-sm">HTML</p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center border p-4 rounded-2xl  shadow-[0_0_10px_#fff] text-center">
          <TbBrandCss3  className="text-2xl"/>
          <p className="text-sm">CSS</p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center border p-4 rounded-2xl  shadow-[0_0_10px_#fff] text-center">
          <RiJavascriptFill  className="text-2xl"/>
          <p className="text-sm">JAVASCRIPT</p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center border p-4 rounded-2xl  shadow-[0_0_10px_#fff] text-center">
          <SiTailwindcss  className="text-2xl"/>
          <p className="text-sm">TAILWIND CSS</p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center border p-4 rounded-2xl  shadow-[0_0_10px_#fff] text-center">
          <FaReact  className="text-2xl"/>
          <p className="text-sm">REACT</p>
        </div>

        <div className="flex flex-col gap-1 justify-center items-center border p-4 rounded-2xl  shadow-[0_0_10px_#fff] text-center">
          <DiNodejs  className="text-2xl"/>
          <p className="text-sm">NODE.JS</p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center border p-4 rounded-2xl  shadow-[0_0_10px_#fff] text-center">
          <SiExpress  className="text-2xl"/>
          <p className="text-sm">EXPRESS.JS</p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center border p-4 rounded-2xl  shadow-[0_0_10px_#fff] text-center">
          <SiMongodb  className="text-2xl"/>
          <p className="text-sm">MONGODB</p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center border p-4 rounded-2xl  shadow-[0_0_10px_#fff] text-center">
          <SiPostman  className="text-2xl"/>
          <p className="text-sm">POSTMAN</p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center border p-4 rounded-2xl  shadow-[0_0_10px_#fff] text-center">
          <FaGitAlt  className="text-2xl"/>
          <p className="text-sm">GIT</p>
        </div>
      </div>
      <Menu />
    </div>
  );
};

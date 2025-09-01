import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  const { menu } = useContext(AppContext);
  return (
    <div
      className={`orbitron backdrop-blur-sm text-xl border rounded-2xl text-white absolute  p-5 left-0 w-full h-[40%] flex flex-col items-center underline justify-between transition-all ${
        menu ? "bottom-0" : "bottom-[-40%]"
      }`}
    >
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"skills"}>Skills</NavLink>
      <NavLink to={"projects"}>Projects</NavLink>
      <NavLink to={"contactMe"}>Contact Me</NavLink>
    </div>
  );
};

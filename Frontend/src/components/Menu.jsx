import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  const { menu, setMenu } = useContext(AppContext);
  return (
    <div
      className={`sm:hidden orbitron backdrop-blur-sm text-lg border rounded-2xl text-white absolute p-5 left-0 w-full h-[40%] flex flex-col items-center underline justify-between transition-all ${
        menu ? "bottom-0" : "bottom-[-40%]"
      }`}
    >
      <NavLink to={"/"}><p onClick={()=>setMenu(!menu)}>Home</p></NavLink>
      <NavLink to={"/skills"}><p onClick={()=>setMenu(!menu)}>Skills</p></NavLink>
      <NavLink to={"/projects"}><p onClick={()=>setMenu(!menu)}>Project</p></NavLink>
      <NavLink to={"/contactMe"}><p onClick={()=>setMenu(!menu)}>Contact Me</p></NavLink>
    </div>
  );
};

import React from "react";
import { Model } from "../components/Model";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Moon } from "../components/Moon";
import { NavLink } from "react-router-dom";
import { Theme } from "../components/Theme";

export const HomeAssets = () => {
  return (
    // <div className="h-screen flex justify-center items-center">
    //   <div className="relative bg-black flex justify-center shadow-[0_0_20px_#fff] h-[90%] w-[95%] rounded-4xl overflow-hidden">
    //     <div className="h-full w-full">
    //       <Canvas>
    //         <Model />
    //         <OrbitControls
    //           enableZoom={false}
    //           autoRotate
    //           autoRotateSpeed={0.5}
    //         />
    //       </Canvas>
    //     </div>

    //     <div className="absolute w-[40%] h-[80%] right-5 top-20 rounded-full">
    //       <Canvas>
    //         <Moon />
    //         <OrbitControls enableZoom={false} enableRotate={false} />
    //       </Canvas>
    //     </div>

    //     <div className="absolute left-6 my-4">
    //       <h1 className="text-white orbitron text-xl">.raviswamiii</h1>
    //     </div>

    //     <div className="absolute flex mx-5 my-4 text-white orbitron gap-16 text-xl ">
    //       <NavLink to={"/"}>
    //         <p className="underline">Home</p>
    //       </NavLink>
    //       <NavLink to={"/skills"}>
    //         <p className="underline ">Skills</p>
    //       </NavLink>
    //       <NavLink to={"/projects"}>
    //         <p className="underline">Projects</p>
    //       </NavLink>
    //       <NavLink to={"/contactMe"}>
    //         <p className="underline">Contact Me</p>
    //       </NavLink>
    //     </div>

    //     <div className="text-white w-[38%] flex flex-col absolute top-45 left-40">
    //       <h1 className="text-4xl orbitron mb-2">Hi, I’m Ravi Swami,</h1>
    //       <h2 className="text-5xl mb-2 orbitron">A Web Developer</h2>
    //       <h3>
    //         A dedicated MERN Stack Developer, specializing in building web
    //         applications. I deliver high-quality solutions, modern design and
    //         reliable performance, ensuring the best services tailored to your
    //         requirements.
    //       </h3>
    //     </div>
    //   </div>
    // </div>

    <div>
      {/* <div className="px-5 text-white sm:w-[40%] flex flex-col justify-center items-center sm:block absolute top-35 left-0 sm:top-48 sm:left-40">
        <h1 className="text-2xl sm:text-4xl orbitron mb-2">Hi, I’m Ravi Swami,</h1>
        <h2 className="text-3xl sm:text-5xl mb-2 orbitron">A Web Developer</h2>
        <h3 className="text-center sm:text-left">
          A dedicated MERN Stack Developer, specializing in building web
          applications. I deliver high-quality solutions, modern design and
          reliable performance, ensuring the best services tailored to your
          requirements.
        </h3>
      </div>

      <div className=" absolute w-[100vw] h-[63%] sm:w-[35%] sm:h-[75%] bottom-[-50vw] right-[-5vw] sm:right-15 sm:top-25 rounded-full ">
        <Canvas>
          <Moon />
          <OrbitControls enableZoom={false} enableRotate={false} />
        </Canvas>
      </div> */}

      <div className=" text-white absolute top-45 sm:top-40 left-0 sm:left-[10%] w-full sm:w-[80%] text-center px-4 sm:p-0">
        <h1 className="orbitron text-2xl sm:text-3xl lg:text-4xl">Hi, I’m Ravi Swami,</h1>
        <h2 className="orbitron text-3xl sm:text-4xl lg:text-5xl sm:my-1">A Web Developer</h2>
        <h3 className="text-sm lg:text-base">
          A dedicated MERN Stack Developer, specializing in building web
          applications. I deliver high-quality solutions, modern design and
          reliable performance, ensuring the best services tailored to your
          requirements.
        </h3>
      </div>

      <div className=" absolute bottom-[-30%] sm:bottom-[-90%] md:bottom-[-120%] left-[-3%] right-0 h-[60%] sm:h-[130%] md:h-[160%]">
        <Canvas>
          <Moon />
          <OrbitControls enableZoom={false} enableRotate={false} />
        </Canvas>
      </div>

    </div>
  );
};

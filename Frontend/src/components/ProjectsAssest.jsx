import React from "react";
import { Theme } from "../components/Theme";
import { Menu } from "./menu";

export const ProjectsAssets = () => {
  return (
    // <div className="relative">
    //   <div className="text-white absolute top-55 left-80 flex flex-col text-xl gap-10">
    //     <div className="flex gap-10">
    //       <a
    //         href="https://forever-frontend-five-tau.vercel.app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className=""
    //       >
    //         <p>E-Commerce</p>
    //       </a>
    //       <a
    //         href="https://uber-xi-cyan.vercel.app/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className=""
    //       >
    //         <p>Uber Clone</p>
    //       </a>
    //       <div className="">
    //         Coming Soon
    //       </div>
    //       <div className="">
    //         Coming Soon
    //       </div>
    //     </div>

    //     <div className="flex gap-10">
    //       <div className="">
    //         Coming Soon
    //       </div>
    //       <div className="">
    //         Coming Soon
    //       </div>
    //       <div className="">
    //         Coming Soon
    //       </div>
    //       <div className="">
    //         Coming Soon
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
        <div className="p-4 backdrop-blur-xs rounded-2xl text-white absolute top-[20%] left-[5%] lg:left-[20%] w-[90%] lg:w-[60%] h-[65%]  overflow-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-5">
        <a
          href="https://forever-frontend-five-tau.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-1 justify-center items-center border p-4 rounded-2xl shadow-[0_0_10px_#fff] text-center"
        >
          <p>E-Commerce</p>
        </a>
        <a
          href="https://uber-xi-cyan.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-1 justify-center items-center border p-4 rounded-2xl shadow-[0_0_10px_#fff] text-center"
        >
          <p>Uber Clone</p>
        </a>
        <div className="flex flex-col gap-1 justify-center items-center border p-4 rounded-2xl shadow-[0_0_10px_#fff] text-center">Coming Soon</div>
        <div className="flex flex-col gap-1 justify-center items-center border p-4 rounded-2xl shadow-[0_0_10px_#fff] text-center">Coming Soon</div>
        <div className="flex flex-col gap-1 justify-center items-center border p-4 rounded-2xl shadow-[0_0_10px_#fff] text-center">Coming Soon</div>
        <div className="flex flex-col gap-1 justify-center items-center border p-4 rounded-2xl shadow-[0_0_10px_#fff] text-center">Coming Soon</div>
        <div className="flex flex-col gap-1 justify-center items-center border p-4 rounded-2xl shadow-[0_0_10px_#fff] text-center">Coming Soon</div>
        <div className="flex flex-col gap-1 justify-center items-center border p-4 rounded-2xl shadow-[0_0_10px_#fff] text-center">Coming Soon</div>
      </div>
      <Menu/>
    </div>
  );
};

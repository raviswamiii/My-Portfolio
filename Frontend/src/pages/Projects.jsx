import React from "react";
import { Theme } from "../components/Thems";

export const Projects = () => {
  return (
    <div className="relative">
      <Theme />
      <div className="text-white absolute top-55 left-80 flex flex-col text-xl gap-10">
        <div className="flex gap-10">
          <a
            href="https://forever-frontend-five-tau.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden shadow-[0_0_20px_#fff] h-[8vw] w-[11vw] rounded-2xl flex text-center justify-center items-center p-4"
          >
            <p>E-Commerce</p>
          </a>
          <a
            href="https://uber-xi-cyan.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden shadow-[0_0_20px_#fff] h-[8vw] w-[11vw] rounded-2xl flex text-center justify-center items-center p-4"
          >
            <p>Uber Clone</p>
          </a>
          <div className="shadow-[0_0_20px_#fff] h-[8vw] w-[11vw] rounded-2xl flex text-center justify-center items-center p-4">
            Coming Soon
          </div>
          <div className="shadow-[0_0_20px_#fff] h-[8vw] w-[11vw] rounded-2xl flex text-center justify-center items-center p-4">
            Coming Soon
          </div>
        </div>

        <div className="flex gap-10">
          <div className="shadow-[0_0_20px_#fff] h-[8vw] w-[11vw] rounded-2xl flex text-center justify-center items-center p-4">
            Coming Soon
          </div>
          <div className="shadow-[0_0_20px_#fff] h-[8vw] w-[11vw] rounded-2xl flex text-center justify-center items-center p-4">
            Coming Soon
          </div>
          <div className="shadow-[0_0_20px_#fff] h-[8vw] w-[11vw] rounded-2xl flex text-center justify-center items-center p-4">
            Coming Soon
          </div>
          <div className="shadow-[0_0_20px_#fff] h-[8vw] w-[11vw] rounded-2xl flex text-center justify-center items-center p-4">
            Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
};

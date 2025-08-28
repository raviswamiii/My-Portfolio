import React from "react";
import { Home } from "./pages/Home";
import { Canvas } from "@react-three/fiber";
import { Model } from "./components/Model";
import { OrbitControls } from "@react-three/drei";

export const App = () => {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="bg-black flex shadow-[0_0_20px_#fff] h-[90%] w-[95%] rounded-4xl overflow-hidden">
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

        <Home/>
      </div>
    </div>
  );
};

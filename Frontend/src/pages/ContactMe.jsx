import React from "react";
import { Theme } from "../components/Thems";
import { FaCopyright, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

export const ContactMe = () => {
  return (
    <div className="relative">
      <Theme />
      <div className=" text-white absolute top-50 w-[35vw] left-112 flex flex-col gap-5 text-center justify-center item-center">
        <h1 className="orbitron text-5xl">Let's Talk</h1>
        <p>
          If you are planning to build a new website, feel free to connect with
          me. I would be happy to discuss your requirements and help you bring
          your ideas to life with a modern and professional design.
        </p>

        <div className=" text-white flex text-4xl justify-center gap-20 mt-10">
          <p className="shadow-[0_0_20px_#fff] rounded-full">
            <FaWhatsapp />
          </p>
          <p className="shadow-[0_0_20px_#fff] rounded-full">
            <SiGmail />
          </p>
          <p className="shadow-[0_0_20px_#fff] rounded-full">
            <FaLinkedin />
          </p>
          <p className="shadow-[0_0_20px_#fff] rounded-full">
            <FaGithub />
          </p>
        </div>
      </div>
      <div className="flex justify-between text-white absolute bottom-10 w-[91vw] left-15">
        <p>Terms & Conditions | Privacy Policy</p>
        <div className="flex items-center gap-1">
          <FaRegCopyright />
          <p>2025 All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

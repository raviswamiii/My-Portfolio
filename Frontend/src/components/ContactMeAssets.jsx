import React from "react";
import { Theme } from "../components/Theme";
import { FaCopyright, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { Menu } from "./Menu";

export const ContactMeAssets = () => {
  return (
    <div>
      <div>
        <div className="absolute left-[5%] md:left-[30%] right-[5%] top-[25%] md:w-[35vw] sm:top-[30%] text-white text-center flex flex-col justify-center items-center gap-1">
          <h1 className="orbitron text-4xl">Let's Talk</h1>
          <p className="text-md">
            If you are planning to build a new website, feel free to connect
            with me. I would be happy to discuss your requirements and help you
            bring your ideas to life with a modern and professional design.
          </p>

          <div className="text-white flex text-4xl justify-center gap-10 mt-5">
            <a
              href="https://wa.me/918076040864"
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-[0_0_20px_#fff] rounded-full"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:webd566@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-[0_0_20px_#fff] rounded-full"
            >
              <SiGmail />
            </a>
            <a
              href="https://www.linkedin.com/in/ravi-swami-630aa7295/"
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-[0_0_20px_#fff] rounded-full"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/raviswamiii"
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-[0_0_20px_#fff] rounded-full"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-[1%] flex flex-col sm:flex-row justify-center sm:justify-between px-6 items-center text-white text-sm">
          <p>Terms & Conditions | Privacy Policy</p>
          <div className="flex items-center gap-1">
            <FaRegCopyright />
            <p>2025 All rights reserved.</p>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
};

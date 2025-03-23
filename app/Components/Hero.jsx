"use client";
import Image from "next/image";
import React from "react";
import profile from "../../public/hero.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto mt-15 flex flex-col items-center justify-center gap-4">
      <div className="rounded-full bg-[#1f1f1f] w-[230px] h-[230px] relative">
        <Image
          src={profile}
          alt="profile Image"
          className="rounded-full w-48 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2  left-1/2  "
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3">
        {" "}
        Hi I'm Areej Sheikh
      </h3>
      <div className="text-3xl sm:text-6xl lg:text-[66px] font-bold">
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            1000,
            "Backend Developer",
            1000,
            "Fullstack Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>
      <div className="text-gray-400 max-w-2xl mx-auto">
        Computer Science graduate with a strong foundation in HTML, CSS,
        JavaScript, and the MERN stack. Experienced in developing responsive
        websites and dynamic full-stack applications. Passionate about
        delivering user-centric and scalable web solutions
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="/contact"
          className="px-10 py-3 rounded-full border-white bg-[#1f1f1f] text-white flex items-center gap-2"
        >
          Contact Me
        </a>
        <a
          href="/resume.pdf"
          download="Areej-Sheikh-Resume.pdf"
          className="px-10 py-3 rounded-full border border-gray-500 flex items-center gap-2"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;

"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import aboutImage from "../../public/about.png";
import { TAB_DATA } from "../data";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const About = () => {
  const [tab, setTab] = useState();
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="mt-10 mx-auto px-12 py-4">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={aboutImage} width={500} height={400} alt="about image" />
        </motion.div>
        <motion.div
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text-base lg:text-lg">
            I specialize in the MERN stack passionate about building scalable
            web solutions and user-friendly websites.  <br />
            With expertise in front-end design and back-end development I develop seamless
            applications that balance functionality and performance. <br />
            I thrive on solving complex problems, staying updated with the latest
            technologies, and continuously refining my skills to deliver
            innovative and efficient digital solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map(({ id, title }) => (
              <button
                key={id}
                onClick={() => {
                  handleTabChange(id);
                }}
              >
                <p
                  className={`mr-3 font-semibold cursor-pointer hover:text-white ${
                    tab === id ? "text-white" : "text-[#adb7be]"
                  }`}
                >
                  {title}
                </p>
                <motion.div
                  animate={tab === id ? "active" : "default"}
                  variants={variants}
                  className="h-1 bg-[#00adb5] mt-2 mr-3"
                />
              </button>
            ))}
          </div>
          <div className="mt-8">
            <ul className="list-disc pl-2">
              {TAB_DATA.find((t) => t.id === tab)?.content.map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import linkedinIcon from "../../public/linkedinIcon.png";
import githubIcon from "../../public/githubIcon.png";
import contactImg from "../../public/contact.png";
import emailIcon from "../../public/email.png";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="container mx-auto px-6 md:px-12 lg:px-24 py-24"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-[#adb7be] text-lg mb-6 leading-relaxed">
            I'm always excited to connect, share ideas, and collaborate on
            innovative projects. Let's work together to create something
            impactful and inspiring!
          </p>
          <Image
            src={contactImg}
            alt="contact image"
            height={320}
            className="mb-10"
          />
          <div className="flex gap-4">
            <Link
              href="https://www.linkedin.com/in/areej-sheikh25/"
              target="_blank"
            >
              <Image
                src={linkedinIcon}
                alt="linkedin icon"
                width={40}
                height={40}
                className="hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </Link>
            <Link href="https://github.com/Areej-Sheikh" target="_blank">
              <Image
                src={githubIcon}
                alt="github icon"
                width={40}
                height={40}
                className="hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </Link>
            <Link href="https://areejfatimasheikh25@gmail.com" target="_blank">
              <Image
                src={emailIcon}
                alt="email icon"
                width={45}
                height={45}
                className="hover:scale-110 transition-transform duration-300 cursor-pointer rounded-full border-3px-black bg-black"
              />
            </Link>
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-8 rounded-xl shadow-lg ">
          <form className="flex flex-col space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-white font-medium mb-2 "
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email..."
                autoComplete="off"
                className="w-full p-3 rounded-lg bg-[#1f1f1f] border border-[#33353f] text-white placeholder-[#9ca2a9] focus:ring-2 focus:ring-[#00adb5] focus:outline-none transition-all duration-200 "
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-white font-medium mb-2 "
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                autoComplete="off"
                className="w-full p-3 rounded-lg bg-[#1f1f1f] border border-[#33353f] text-white placeholder-[#9ca2a9] focus:ring-2 focus:ring-[#00adb5] focus:outline-none transition-all duration-200 "
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-white font-medium mb-2 "
              >
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Enter Your message..."
                className="w-full p-3 rounded-lg bg-[#1f1f1f] border border-[#33353f] h-32 resize-none text-white placeholder-[#9ca2a9] focus:ring-2 focus:ring-[#00adb5] focus:outline-none transition-all duration-200 "
              />
            </div>
            <button type="submit" className="w-full bg-[#00adb5] hover:bg-[#008188] cursor-pointer text-white font-medium py-3 rounded-lg  transition-all duration-300 ">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

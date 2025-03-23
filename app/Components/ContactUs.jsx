"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import linkedinIcon from "../../public/linkedinIcon.png";
import githubIcon from "../../public/githubIcon.png";
import contactImg from "../../public/contact.png";
import emailIcon from "../../public/email.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message);
      if (response.ok) setFormData({ email: "", subject: "", message: "" });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

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
            innovative projects.
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
                className="hover:scale-110 transition-transform"
              />
            </Link>
            <Link href="https://github.com/Areej-Sheikh" target="_blank">
              <Image
                src={githubIcon}
                alt="github icon"
                width={40}
                height={40}
                className="hover:scale-110 transition-transform"
              />
            </Link>
            <Link href="mailto:areejfatimasheikh25@gmail.com" target="_blank">
              <Image
                src={emailIcon}
                alt="email icon"
                width={45}
                height={45}
                className="hover:scale-110 transition-transform"
              />
            </Link>
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-8 rounded-xl shadow-lg">
          <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email..."
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#1f1f1f] border border-[#33353f] text-white"
            />
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#1f1f1f] border border-[#33353f] text-white"
            />
            <textarea
              id="message"
              placeholder="Enter Your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#1f1f1f] border border-[#33353f] h-32"
            />
            <button
              type="submit"
              className="w-full bg-[#00adb5] hover:bg-[#008188] text-white font-medium py-3 rounded-lg"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

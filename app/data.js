import web from "../public/web.png";
import backend from "../public/backend.png";
import ui from "../public/ui.png";

export const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Python",
      "React.js",
      "Next.js",
      "GSAP",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Django",
      "MongoDB",
      "MySQL",
      "Figma",
    ],
  },
  {
    title: "Education",
    id: "education",
    content: [
      "Bachelor of Technology (Computer Science) - Government Engineering College, Ajmer",
    ],
  },
  {
    title: "Certifications",
    id: "certifications",
    content: ["MERN Stack Certification - Fullstack Web Development (Offline)"],
  },
];


export const SERVICES_DATA = [
  {
    id: 1,
    title: "Frontend Development & UI Engineering",
    description:
      "Developing fast, interactive, and user-friendly interfaces using React.js, Next.js, Tailwind CSS, and GSAP. Ensuring seamless experiences across all devices.",
    icon:ui,
  },
  {
    id: 2,
    title: "Backend Development & API Integration",
    description:
      "Building robust and scalable server-side applications with Node.js, Express.js, Django, and Flask. Designing secure APIs and database solutions for seamless data flow.",
    icon:backend,
  },
  {
    id: 3,
    title: "Full-Stack Web Development",
    description:
      "Creating end-to-end web solutions with modern technologies, combining powerful frontend designs with efficient backend architecture for performance-driven applications.",
    icon: web,
  },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Google Drive Clone",
    description:
      "A full-stack cloud storage solution that enables users to upload, manage, and share files securely. It includes authentication, structured folders, and a real-time file update system.",
    image: "/google-drive-clone.png",
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/Areej-Sheikh/Google-Drive-Clone",
    previewUrl: "https://google-drive-clone-zeta.vercel.app/",
  },
  {
    id: 2,
    title: "Uber Clone",
    description:
      "A ride-hailing platform that allows users to book rides, track drivers in real-time, and manage secure payments. Features include authentication, role-based access, and dynamic ride pricing.",
    image: "/uber-clone.png",
    tag: ["All", "Fullstack"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Instagram Clone (Backend)",
    description:
      "A backend system replicating Instagram’s core functionality, including user authentication, post uploads, and session management. Features a secure database for storing user-generated content.",
    image: "/instagram-clone.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/Areej-Sheikh/Instagram-Clone",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Sundown Studio",
    description:
      "A visually dynamic landing page featuring immersive animations, smooth scrolling effects, and interactive elements to create an engaging user experience.",
    image: "/sundown-studio.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Areej-Sheikh/Sundown-Studio",
    previewUrl: "https://areej-sheikh.github.io/Sundown-Studio/",
  },
  {
    id: 5,
    title: "Better Off Studio",
    description:
      "A modern and interactive agency website featuring creative animations, seamless navigation, and a strong emphasis on visual storytelling.",
    image: "/better-off-studio.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Areej-Sheikh/Better-Off-Studio",
    previewUrl: "https://areej-sheikh.github.io/Better-Off-Studio/",
  },
  {
    id: 6,
    title: "Simple Ecommerce Store",
    description:
      "A full-stack eCommerce platform that enables users to browse products, add them to a cart, and make secure purchases. Includes authentication, product management, and order processing.",
    image: "/ecommerce-store.png",
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/Areej-Sheikh/CodeAlpha_Simple_Ecommerce_Store",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing skills, projects, and experiences with a clean and modern UI. Features smooth animations, interactive elements, and a contact form using Nodemailer.",
    image: "/portfolio.png",
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/Areej-Sheikh/Portfolio",
    previewUrl: "/",
  },
];


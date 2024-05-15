import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import handwrittenImg from "@/public/handwritten.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
    {
    title: "Junior Software Engineer",
    location: "Bangalore,India",
    description:
      "Developed a streamlined onboarding application for new associates, leveraging  Spring Boot and ReactJS frameworks. Successfully created RESTful APIs in the controller layer and implemented seamless associate authentication using java and spring framework which reduced manual efforts, resulting in a 75% improvement in overall system efficiency and enabling easy navigation and tracking of associates.Managed the codebase with frequent updates via the GIT version control system.Crafted the components using Reactjs framework ,HTML  and also styling the UI with Material UI and CSS.Performed form validation using Formik and Yup in the frontend using Reactjs.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2021 - Mar 2024",
  },
  {
    title: "Full stack Developer",
    company: "M2R2",
    location: "Bangalore,India",
    description:
      "I am Developing RESTful APIs in the controller layer and architecting complex business logic in the service layer using Java and Spring Boot framework, resulting in a 40% increase in API performance and a 25% reduction in response time.Led the implementation of Next.js for frontend development, utilized Figma for UI/UX design, and integrated React.js for user interaction improvements; achieved a 30% faster page load time and 20% increase in conversion rate.",
    icon: React.createElement(LuGraduationCap),
    date: "March 2024 - present",
  },

  
] as const;

export const projectsData = [
  {
    title: "Handwritten Kannada Detection System",
    description:
      "Designed a Convolutional Neural Network model for Kannada Handwritten Text Recognition, achieving 95% accuracy A user-friendly web application facilitating seamless Kannada character image uploads and recognizing characters, reducing manual intervention by 60%. ",
    tags: ["React", "Python","HTML","CSS","Django"],
    imageUrl: handwrittenImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "PostgreSQL",
  "Python",
  "Django",
] as const;

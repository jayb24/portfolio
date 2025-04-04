import { c, css, figma, git, html, java, javaScript, nodejs, python, react, tailwindcss, typescript } from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
        id: "resume",
        title: "Resume",
    },
];

export const techStack = [
    { name: 'Java', icon: java },
    { name: 'JavaScript', icon: javaScript },
    { name: 'TypeScript', icon: typescript },
    { name: 'C/C++', icon: c },
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'Python', icon: python },
    { name: 'React', icon: react },
    { name: 'TailwindCSS', icon: tailwindcss },
    { name: 'Git', icon: git },
    { name: 'Node.js', icon: nodejs },
    { name: 'Figma', icon: figma },
];

export const projects = [
    {
      title: "CarLogix",
      description: "A full stack application for car enthusiasts to log their car's performance and maintenance history.",
      tech: ["React", "Redux", "Tailwind CSS", "Stripe API"],
      image: "/api/placeholder/400/300",
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application that displays current conditions and 5-day forecasts for any location.",
      tech: ["JavaScript", "OpenWeather API", "Chart.js"],
      image: "/api/placeholder/400/300",
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A Kanban-style task management application with drag-and-drop functionality and user authentication.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      image: "/api/placeholder/400/300",
      link: "#"
    },
];
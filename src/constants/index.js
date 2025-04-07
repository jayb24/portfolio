import { c, css, figma, git, html, Java, javaScript, nodejs, python, react, tailwindcss, typescript, carlogix_mock, logo, scubuddies_mock } from "../assets";

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
    { name: 'Java', icon: Java },
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
      description: "A full stack application and mobile app for users to track their vehicles maintainance needs.",
      tech: ["React", "Flutter", "MongoDB", "Express", "Node.js", "Bootstrap"],
      image: carlogix_mock,
      link: "http://carlogix.xyz"
    },
    {
      title: "ScuBuddies",
      description: "Collaborative web application for scuba divers to find buddies and keep contacts.",
      tech: ["JavaScript", "PHP", "MySQL", "HTML/CSS"],
      image: scubuddies_mock,
      link: "http://scubuddies.xyz"
    },
    {
      title: "Portfolio",
      description: "My personal portfolio website.",
      tech: ["React", "TailwindCSS", "Vite"],
      image: logo,
      link: "#home"
    },
];
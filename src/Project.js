import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projectList = [
    {
      title: "To-Do List App",
      description:
        "A full stack to-do list application that allows users to add, update, and delete tasks. Built with a responsive UI and seamless CRUD operations for better productivity.",
      tech: ["Java", "React", "Spring Boot", "MySQL"],
      github:
        "https://github.com/parthiban-Arumugam/Todo_list_react/tree/master",
    },
    {
  title: "WorkNest",
  description:
"A full stack app with admin login to manage employee records using React and Spring Boot with a responsive UI.",
  tech: ["Java", "React", "Spring Boot", "MySQL"],
  github: "https://github.com/parthiban-Arumugam/work_nest"
},

    {
      title: "Task Manager App",
      description:
        "A full stack Java project to manage daily tasks with login, CRUD operations, and responsive UI.",
      tech: ["Java", "Spring Boot", "Html", "Css", "JavaScript", "MySQL"],
      github:
        "https://github.com/parthiban-Arumugam/Task_Manager/tree/main/personal_task_manager",
    },
    {
      title: "My Portfolio Website",
      description:
        "This responsive website showcases my projects, skills, and contact details using React and Tailwind CSS.",
      tech: ["React", "Tailwind", "AOS"],
      github: "https://github.com/parthiban-Arumugam/portfolio",
    },
    {
      title: "Credit Card Fraud Detection",
      description:
        "A deep learning model using SMOTE and neural networks to identify fraudulent transactions with high accuracy.",
      tech: ["Python", "Tensorflow", "SMOTE", "Jupyter"],
      github:
        "https://github.com/parthiban-Arumugam/Credit_Card_Fraud_Detection",
    },
  ];

  return (
    <section id="projects" className="min-h-screen  text-white px-6 py-12">
      <h1
        className="text-4xl font-bold text-cyan-400 mb-12 text-center"
        data-aos="fade-down"
      >
        Projects
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-cyan-500/30 hover:border hover:border-cyan-500"
            data-aos="zoom-in"
          >
            <h2 className="text-xl font-semibold text-cyan-300 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-cyan-600 text-white text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline flex items-center gap-2"
                >
                  View <FaGithub className="text-lg" />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline flex items-center gap-2"
                >
                  View <FaExternalLinkAlt className="text-sm" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

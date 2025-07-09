import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import {
  SiSpringboot,
  SiJavascript,
  SiMysql,
  SiPostman,
  SiGit,
  SiIntellijidea,
} from "react-icons/si";
import { VscVm } from "react-icons/vsc";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen text-white px-6 py-12 flex flex-col items-center"
    >
      <h1
        className="text-4xl font-bold mb-4 text-cyan-400"
        data-aos="fade-down"
      >
        About Me
      </h1>

      <p
        className="max-w-2xl text-center text-gray-300 mb-10"
        data-aos="fade-up"
      >
        I’m Parthiban, a passionate Java Full Stack Developer who loves building
        responsive and creative web applications. With a strong foundation in
        Java, Spring Boot, React, and modern web technologies, I aim to deliver
        clean and scalable solutions. I believe in continuous learning and enjoy
        transforming complex ideas into real-world solutions.
      </p>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12"
        data-aos="fade-up"
      >
        <SkillIcon icon={<FaJava />} label="Java" />
        <SkillIcon icon={<SiSpringboot />} label="Spring Boot" />
        <SkillIcon icon={<FaReact />} label="React" />
        <SkillIcon icon={<SiJavascript />} label="JavaScript" />
        <SkillIcon icon={<FaHtml5 />} label="HTML5" />
        <SkillIcon icon={<FaCss3Alt />} label="CSS3" />
        <SkillIcon icon={<SiMysql />} label="MySQL" />
        <SkillIcon icon={<SiGit />} label="Git" />
      </div>
      <h2
        className="text-2xl font-semibold text-cyan-300 mb-6"
        data-aos="fade-up"
      >
        Tools I Use
      </h2>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center mb-12"
        data-aos="fade-up"
      >
        <ToolIcon icon={<VscVm />} label="VS Code" />
        <ToolIcon icon={<SiIntellijidea />} label="IntelliJ IDEA" />
        <ToolIcon icon={<SiPostman />} label="Postman" />
        <ToolIcon icon={<FaGithub />} label="GitHub" />{" "}
      </div>
    </section>
  );
}

function SkillIcon({ icon, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl text-cyan-400 mb-1">{icon}</div>
      <span className="text-sm">{label}</span>
    </div>
  );
}
function ToolIcon({ icon, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl text-cyan-400 mb-1">{icon}</div>
      <span className="text-sm text-gray-300">{label}</span>
    </div>
  );
}

export default About;

import React, { useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center px-6 py-12 text-white"
      >
        <h1
          className="text-4xl font-bold text-cyan-400 mb-6"
          data-aos="fade-down"
        >
          Contact Me
        </h1>

        <p
          className="text-gray-400 text-lg mb-8 max-w-xl text-center"
          data-aos="fade-up"
        >
          Let’s connect! Feel free to reach out to me through any of the
          platforms below.
        </p>

        <div
          className="flex gap-8 text-3xl text-cyan-400"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <a
            href="mailto:parthi95664@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-cyan-300 transition-all"
          >
            <FaEnvelope />
            <span className="text-sm mt-2 text-white">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/parthiban-a-719931286/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-cyan-300 transition-all"
          >
            <FaLinkedin />
            <span className="text-sm mt-2 text-white">LinkedIn</span>
          </a>
          <a
            href="https://github.com/parthiban-Arumugam"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-cyan-300 transition-all"
          >
            <FaGithub />
            <span className="text-sm mt-2 text-white">GitHub</span>
          </a>
        </div>
      </section>
      <footer className="text-center text-gray-500 text-sm py-4 border-t border-gray-800">
        © {new Date().getFullYear()} Parthiban. All rights reserved.
      </footer>
    </>
  );
};

export default Contact;

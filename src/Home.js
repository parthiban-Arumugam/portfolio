import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [showName, setShowName] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    setShowGreeting(true); // Show greeting first

    const greetingTimer = setTimeout(() => {
      setShowName(true);
    }, 800);

    const nameTimer = setTimeout(() => {
      setShowTitle(true);
    }, 2000);

    const titleTimer = setTimeout(() => {
      setShowDescription(true);
    }, 3200);

    const buttonTimer = setTimeout(() => {
      setShowButtons(true);
    }, 3600);

    return () => {
      clearTimeout(greetingTimer);
      clearTimeout(nameTimer);
      clearTimeout(titleTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className=" h-screen text-center text-white shadow">
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6  text-white"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          {showGreeting && (
            <span className="text-cyan-400" data-aos="fade-down">
              Hello World!{" "}
            </span>
          )}
          <br />
          {showName && (
            <span className="text-white ml-2">
              <ReactTyped
                strings={["I'm Parthiban"]}
                typeSpeed={40}
                backSpeed={50}
                showCursor={false}
                loop={false}
              />
            </span>
          )}{" "}
        </h1>
        {showTitle && (
          <h2 className="text-lg md:text-2xl mb-4 text-cyan-400  font-semibold">
            <ReactTyped
              strings={["Java Full Stack Developer"]}
              typeSpeed={25}
              backSpeed={50}
              showCursor={false}
              loop={false}
            />
          </h2>
        )}

        {showDescription && (
          <p className="text-gray-300 max-w-xl mb-6" data-aos="fade-up">
            Transforming ideas into powerful web apps using Java, React, Spring
            Boot and a spark of creativity. Always learning. Always building.
          </p>
        )}

        {showButtons && (
          <div className="flex gap-4" data-aos="fade-up">
            <a
              href="/Parthiban_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-cyan-400 text-blue-950 px-6 py-2 rounded hover:bg-cyan-500 transition-all">
                View Resume
              </button>
            </a>
            <a href="#projects">
              <button className="border border-gray-400 text-white px-6 py-2 rounded hover:bg-gray-300 hover:text-black transition-all">
                View Project
              </button>
            </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;

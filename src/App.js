import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Header from "./Header";
import Home from "./Home";
import Project from "./Project";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 scroll-smooth">
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;

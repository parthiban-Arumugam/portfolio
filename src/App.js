import About from './About';
import './App.css';
import Contact from './Contact';
import Header from './Header';
import Home from './Home';
import Project from './Project';
import Skills from './Skills';


function App() {
  return (
    <div className="min-h-screen bg-blue-950 ">
      
     
        <Header />
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Project /></section>
        <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;

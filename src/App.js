import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx"
import Skills from "./pages/Skills.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Internships from "./pages/Internships.jsx";

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

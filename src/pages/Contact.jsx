import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="h-64 flex flex-col bg-gradient-to-br from-slate-900 to-slate-800 py-5 px-6">
      <div className="max-w-6xl mx-auto text-center pr-8 pl-8">
        <h2 className="text-4xl font-bold text-indigo-600 mb-5">Contact Me</h2>
        <div className="flex justify-center gap-5 text-indigo-600 mb-5">
          <a href="https://github.com/vamshi2401" target="_blank" rel="noreferrer"  className="hover:text-white scale-150"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/vamshi-raj-v/" target="_blank" rel="noreferrer"  className="hover:text-white scale-150"><FaLinkedin /></a>
          <a href="mailto:vamshi1718@gmail.com" target="_blank" rel="noreferrer"  className="hover:text-white scale-150"> <FiMail /></a>
          
          
        </div>
        <ul className="m-2 text-gray-500 ">
         <li><a href="#home" className="hover:text-white">Home</a></li> 
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#skills" className="hover:text-white">Skills</a></li>
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          
          
          
        </ul>
      </div>
    </section>
  )
};

export default Contact;

import React from "react";
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiDjango,
  SiMysql,
  SiMongodb,
  SiPandas,
  SiNumpy,

} from "react-icons/si";
import { PiFileSqlFill, } from "react-icons/pi";

const skills = {
  Programming: [
    { name: "Python", icon: <SiPython /> },
    { name: "JavaScript", icon: <SiJavascript /> },
  ],
  Frontend: [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "ReactJS", icon: <SiReact /> },
  ],
  Backend: [{ name: "Django", icon: <SiDjango /> }],
  Databases: [{ name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  ],
  "Data Analytics ": [
    { name: "Pandas", icon: <SiPandas /> },
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "SQL", icon: <PiFileSqlFill /> },
    { name: "Matplotlib" },

  ]

}

const SkillCard = ({ name, icon }) => (
  <div className="flex items-center px-2 py-2 bg-indigo-100 text-indigo-800 font-medium rounded-lg shadow hover:scale-105 transition">
    <span className="text-xl">{icon}</span>
    <span>{name}</span>

  </div>
);

const Skills = () => {
  return (
    <section id="skills" className=" bg-gradient-to-br from-slate-900 to-slate-800 border-b-indigo-600 border-b-4 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center pr-8 pl-8">
        <h2 className="text-4xl font-bold text-indigo-600 mb-4">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skills], index) => (
            <div key={index} className="border border-indigo-300 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition duration-300 text-left">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4" >{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skills, idx) =>
                  <SkillCard key={idx} name={skills.name} icon={skills.icon} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

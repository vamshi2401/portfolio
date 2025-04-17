import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const project = [
  {
    title: 'Recipe Sharing App',
    tech: ['MongoDB', 'Express js', 'React js', 'Node js'],
    //time: 'Jan 2025 - Feb 2025',

    github: <a
      href="https://github.com/vamshi2401/Recipe-sharing-main"
      target="_blank"
      rel="noopener noreferrer"
      className=""
    >
      <FaGithub />
    </a>,
    link: <a
      href="https://github.com/vamshi2401/Recipe-apphttps://recipe-app-vrcv.onrender.com/"
      target="_blank"
      rel="noopener noreferrer"
      className=""
    >
      <FiExternalLink />
    </a>,
    description: <span>A web application for users to share, update and add recipes with authentication. </span>

  },

  {
    title: 'Weather Application',
    tech: ['Django', 'Python', 'HTML', 'CSS'],
    //time: 'Nov 2024 - Dec 2024',
    github: <a
      href="https://github.com/vamshi2401/Weather_application"
      target="_blank"
      rel="noopener noreferrer"
      className=""
    >
      <FaGithub />
    </a>,
    link: <a
      href="https://vamshi24.pythonanywhere.com/"
      target="_blank"
      rel="noopener noreferrer"
      className=""
    >
      <FiExternalLink />
    </a>,


    description: <span>A weather Forecast Application to view weather over the cities around the world. Users can save their favourite cities which will be stored in database.</span>
  },

  {
    title: 'Planit',
    tech: ['JavaScript', 'HTML', 'CSS'],

    github: <a
      href="https://github.com/vamshi2401/Planit"
      target="_blank"
      rel="noopener noreferrer"
      className=""
    >
      <FaGithub />
    </a>,


    description: <span>A task management developed using JavaScript, HTML and CSS</span>
  },
  {
    title: 'Ecommerce Data Analysis ',
    tech: ['Python', 'Excel', 'Numpy', 'Pandas', 'Matplotlib'],

    github: <a
      href="https://github.com/vamshi2401/Ecommerce"
      target="_blank"
      rel="noopener noreferrer"
      className=""
    >
      <FaGithub />
    </a>,


    description: <span>Performed exploratory data analysis (EDA) on an e-commerce dataset, analysing customer, product, and
      transaction data. Analysed revenue trends in countries and sales of high value products.  </span>
  },
  {
    title: 'Store sales Analysis (SQL)  ',
    tech: ['SQL', 'MySQL'],

    github: <a
      href="https://github.com/vamshi2401/SQL-store-orders"
      target="_blank"
      rel="noopener noreferrer"
      className=""
    >
      <FaGithub />
    </a>,


    description: <span>Executed  SQL queries to analyze sales, profit, quantity trends, top-selling products and customer segments by aggregating and ranking sales </span>
  },
  


]

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen w-full text-center items-center border-b-indigo-600 border-b-4 bg-black px-6 ">
      <h2 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-indigo-500 text-4xl font-bold mb-8 p-5">Personal Projects </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6  border-indigo-700 mt-3 mb-8 mx-auto pr-8 pl-8 text-start">

        {project.map((proj, index) => {
          return (
            <div key={index} className="  w-full">

              <div className=" bg-cover bg-transparent bg-center  border-4  border-indigo-500  p-6 rounded-xl shadow-md hover:shadow-indigo-500 hover:scale-105 transition duration-300">


                <h3 className="text-xl font-bold text-indigo-800">{proj.title}</h3>

                <p className="text-sm text-white ">{proj.time}</p>
                <div className="flex flex-wrap gap-2 mt-2 mb-2">

                  {proj.tech && proj.tech.map((item, idx) => {
                    return <span key={idx} className="text-blue-500 bg-blue-500/10 text-sm py-1 px-3 rounded-full">{item}</span>
                  })}


                  {/* <span key={idx} className="text-blue-500 bg-blue-500/10 text-sm py-1 px-3 rounded-full">th</span>
                    <span className="text-blue-500 bg-blue-500/10 text-sm py-1 px-3 rounded-full">React JS</span>
                    <span className="text-blue-500 bg-blue-500/10 text-sm py-1 px-3 rounded-full">Express JS</span>
                    <span className="text-blue-500 bg-blue-500/10 text-sm py-1 px-3 rounded-full">Node JS</span>*/}

                </div>
                <p className="text-sm text-white text-left">{proj.description}</p>
                <div className="flex gap-5 m-2">


                  <p className="text-indigo-500">{proj.github}</p>


                  <p className="text-indigo-500">{proj.link}</p>

                </div>

              </div>
            </div>
          )
        })}
      </div>
      <div>
      </div>
    </section>
  )
};

export default Projects;

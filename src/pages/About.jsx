import React from "react";
import { SlGraduation } from "react-icons/sl";



const About = () => {
  return (
    <section id="about" className="bg-black py-16 px-6 border-b-indigo-600 border-b-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 items-center gap-6 pr-8 pl-8">

        <div className="  text-white">
          <h2 className="text-4xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-indigo-800 to-indigo-500 mb-6">About Me</h2>
          <p className="  mb-4">
            Hello! I'm <span className="font-semibold text-indigo-600">V Vamshi Raj</span>, I love building web applications, proficient in Python and JavaScript. Enthusiastic about developing full stack applications.
          </p>
          <p className="  mb-4">
            I’ve interned at <span className="font-medium text-indigo-600">Cognifyz Technologies</span> and <span className="font-medium text-indigo-600">EY GDS AICTE</span>, and I enjoy working with technologies like <span className="font-semibold">Python, React, SQL, Django</span> and more.
          </p>

        </div>

        

        <div className="border-4 border-indigo-500 rounded-xl p-6 shadow-md hover:shadow-indigo-600 transition duration-300 text-left">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4" ><SlGraduation /></h3>
          <div className="flex flex-wrap gap-3 text-white">
            <span className="text-xl font-semibold text-indigo-600">GITAM University, Hyderabad </span><p>B Tech Electronics and Communication (ECE) with AIML <br /> CGPA-8.75/10.</p>
            <p className="text-white  mb-4">
              Coursework: Data Structures and Algorithms with Python, OOP, DBMS, Communication Networks, Big Data
              Analytics, NoSQL, Machine Learning, Artificial Intelligence.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">



          <div

            className="border-4 border-indigo-500 rounded-xl p-6 shadow-md hover:shadow-indigo-600 transition duration-300 text-left"
          >
            <h3 className="text-xl font-semibold text-indigo-700">
              Cognifyz Technologies
            </h3>
            <p className="text-white italic mb-2">
              <span>Data Analysis intern</span>| <span>Sep 2024 – Oct 2024</span>
            </p>
            <p className=" text-white">
              Derived significant insights using MySQL, Python, and Microsot Excel by refining data by removing null values using Numpy and Pandas. Retrieved data using SQL queries for statistical analysis and Matplotlib and Seaborn for data visualization.
            </p>

          </div>

        </div>


        <div className="flex flex-col justify-center">



          <div

            className="border-4 border-indigo-500 rounded-xl p-6 shadow-md hover:shadow-indigo-600 transition duration-300 text-leftn"
          >
            <h3 className="text-xl font-semibold text-indigo-700">
              EY GDS AICTE
            </h3>
            <p className="text-white italic mb-2">
              <span>MERN intern</span>| <span>Feb 2025 – March 2025</span>
            </p>
            <p className="text-white">
              Built and maintained full-stack web applications using MongoDB, Express.js, React, and Node.js.Developed responsive user interfaces with React and Bootstrap to improve user experience. Express for backend and MongoDB for handling Data.            </p>

          </div>

        </div>


      </div>
    </section>
  )
};

export default About;
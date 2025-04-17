import React from "react";


const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 border-b-indigo-600 border-b-4  px-6">{/*bg-gradient-to-r from-slate-900 to-slate-800*/}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center pr-8 pl-8">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-grey-800 mb-4">
            <span className="text-white">Hi, I'm</span> <br /><span className="text-indigo-600">V Vamshi Raj</span>
          </h1>
          <p className="text-lg md:text-xl text-white mb-6">
            Passionate Web Developer building scalable solutions proficient in Python full stack and MERN.
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="/Resume_Vamshi.pdf"
              download
              className="px-6 py-2 rounded-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
            >
              Download Resume
            </a>
            <a href="#contact" className="px-6 py-2 rounded-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition">
              Contact Me
            </a>
            

          </div>
          

        </div>
        <div className="flex justify-center ">
          <img src="/profile.png" alt="" className="w-64 h-64 rounded-full object-cover border-4 border-indigo-500 shadow-lg
          transition-transform duration-1000 ease-in-out over:scale-105 hover:scale-105 hover:shadow-[0_0_25px_6px_#4338CA]"/>
        </div>

      </div>

    </section>
  )
};


export default Home;
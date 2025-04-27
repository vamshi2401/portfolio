import React from "react";


const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-white py-6 ">
      <div className=" max-w-6xl mx-auto px-4 flex md:flex-row justify-center items-center gap-4">
       
        <div className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">V Vamshi Raj</span>. All rights reserved.
        </div>

       
        
      </div>
    </footer>
  );
};

export default Footer;

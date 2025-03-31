import React from "react";
import ShadiMuharatSVG from "../../assets/images/Shadi Muharath.svg"; 
import ExperienceSVG from "../../assets/images/Experience.svg"; 
import bgVideo from "../../assets/images/video.mp4"; 

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center px-4 sm:px-6">
        
        {/* Responsive Images */}
        <img src={ShadiMuharatSVG} alt="Shadi Muharat" className="w-3/4 max-w-xs sm:max-w-md" />
        <img src={ExperienceSVG} alt="Experience" className="w-2/4 max-w-xs sm:max-w-sm mt-4 mb-6" />

        {/* Search Bar & Login Button */}
        <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-4 w-full max-w-lg">
          
          {/* Search Bar */}
          <div className="flex flex-row items-center bg-white p-4 px-6 rounded-full shadow-lg w-full max-w-[29vw] h-[2.18vw] sm:w-auto">
            <input
              type="text"
              placeholder="Search here..."
              className="px-6  py-8 outline-none rounded-full text-gray-700 bg-transparent flex-center w-full"
            />
          </div>

          {/* Login Button */}
          <button className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-full w-full sm:w-[124px]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import React from "react";
import ShadiMuharatSVG from "../../assets/images/Shadi Muharath.svg"; // Import as an image
import ExperienceSVG from "../../assets/images/Experience.svg"; // Import as an image
import bgVideo from "../../assets/images/video.mp4"; // Import the video correctly

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
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center px-6">
        {/* Display as Images */}
        <img src={ShadiMuharatSVG} alt="Shadi Muharat" className="w-3/4 md:w-1/2" />
        <img src={ExperienceSVG} alt="Experience" className="w-1/2 md:w-1/3 mt-4 mb-6" />

        {/* Search Bar & Login Button */}
        <div className="flex items-center space-x-4">
  {/* Search Bar */}
  <div 
    className="flex items-center bg-white p-2 rounded-full shadow-lg"
    style={{ width: "369px", height: "42px", borderRadius: "500px" }}
  >
    <input
      type="text"
      placeholder="Search here..."
      className="px-4 py-2 outline-none text-gray-700 bg-transparent flex-1"
    />
  </div>

  {/* Login Button - Now Properly Positioned */}
  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 w-[124px] h-[42px] rounded-full">
    Login
  </button>
</div>
</div>
</div>
  );
}

export default HeroSection;

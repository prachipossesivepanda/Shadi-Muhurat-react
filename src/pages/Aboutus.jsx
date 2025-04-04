import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Background from "../assets/images/Background.svg";
import Engagement from "../assets/images/Engagement.svg";
import Cylinder from "../assets/images/cylinder couple.svg";
import Genuine from "../assets/images/Genuine.svg";
import Laks from "../assets/images/laks.svg";
import Most from "../assets/images/Most.svg";
import user from "../assets/images/user.svg";
import men from "../assets/images/mens.svg";
import women from "../assets/images/womens.svg";
import indian from "../assets/images/indian.svg";
import Pair from "../assets/images/Pair couple.svg";
import Goyal from "../assets/images/Goyal.svg";
import Jain from "../assets/images/Jain.svg";
import Kailash from "../assets/images/Kailash.svg";
import Navjot from "../assets/images/Navjot.svg";

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full">
        <img src={Engagement} alt="Engagement" className="w-full h-auto object-cover" />
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white max-w-xs md:max-w-lg">
          <h1 className="text-4xl md:text-6xl font-serif font-Rosarivo lowercase" style={{ fontVariant: "small-caps" }}>
            About Us
          </h1>
          <p className="text-sm md:text-lg mt-2 font-poppins leading-6">
            Now Find your life partner Easy and fast.
          </p>
        </div>
      </div>

      {/* Background Section */}
      <div className="relative flex flex-col items-center min-h-screen p-4 md:p-6">
        <img src={Background} alt="Background" className="absolute inset-0 w-full h-full object-cover z-[-1]" />
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-4 md:p-8 max-w-5xl mx-auto">
          <img src={Genuine} alt="Genuine" className="w-full h-auto rounded-lg shadow-md" />
          <img src={Laks} alt="Laks" className="w-full h-auto rounded-lg shadow-md" />
          <img src={Most} alt="Most" className="w-full h-auto rounded-lg shadow-md" />
        </div>

        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row  bg-transparent justify-center items-center bg-transparent p-4 md:p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
          <div className="w-full md:w-1/2 pr-0 md:pr-8">
            <h1 className="text-2xl md:text-4xl font-serif font-bold text-gray-900">
              Welcome To <span className="text-[#D14662]">Shadimuhurath</span>
            </h1>
            <p className="text-gray-600 mt-4 text-sm md:text-base">
              Join Shadimuhurath today and take the first step toward a beautiful life ahead...
            </p>
            <p className="mt-4 text-[#D14662] font-semibold cursor-pointer text-sm md:text-base">
              ➝ Click Here To Start Your Matrimony Service Now
            </p>
          </div>

          <div className="relative w-full md:w-1/2 mt-4 md:mt-0">
            <img src={Cylinder} alt="Wedding Couple" className="w-full h-auto rounded-full border-4 border-white shadow-md" />
          </div>
        </div>
      

      {/* Image Grid */}
      <div className="grid  bg-white grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 p-6 mt-5 md:p-8 max-w-5xl mx-auto">
        <img src={user} alt="User" className="w-full h-auto rounded-lg shadow-md" />
        <img src={men} alt="Men" className="w-full h-auto rounded-lg shadow-md" />
        <img src={women} alt="Women" className="w-full h-auto rounded-lg shadow-md" />
        <img src={Pair} alt="Pair" className="w-full h-auto rounded-lg shadow-md" />
      </div>

      {/* Testimonials */}
      <div className="flex flex-col items-center bg-transparent py-6 px-4 md:py-10 md:px-6">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-900">What They Say About Us</h2>
        <p className="text-gray-500 text-xs md:text-sm mt-1">Trusted by thousands, creating many.</p>
        <div className="flex flex-col md:flex-row items-center bg-white shadow-md p-4 md:p-6 rounded-lg mt-6 w-full max-w-4xl">
          <div className="flex-1">
            <p className="text-gray-700 mt-2 text-sm md:text-base">
              At Shadi Muhurath, we take pride in helping couples create the wedding of their dreams...
            </p>
          </div>
          <div className="ml-0 md:ml-6 mt-4 md:mt-0">
            <img src={indian} alt="Couple" className="w-24 md:w-40 h-auto rounded-lg shadow-md" />
          </div>
        </div>
      </div>

      {/* Our Team */}
      <section className="bg-transparent py-6 md:py-12 px-4 md:px-6 text-center">
        <h2 className="text-xl md:text-3xl font-Raleway text-gray-800">Our Team</h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-2">
          Personalized matchmaking services designed to connect you with your ideal life partner.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 p-4 md:p-8 max-w-5xl mx-auto">
          <img src={Goyal} alt="Goyal" className="w-full h-auto rounded-lg shadow-md" />
          <img src={Jain} alt="Jain" className="w-full h-auto rounded-lg shadow-md" />
          <img src={Kailash} alt="Kailash" className="w-full h-auto rounded-lg shadow-md" />
          <img src={Navjot} alt="Navjot" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;

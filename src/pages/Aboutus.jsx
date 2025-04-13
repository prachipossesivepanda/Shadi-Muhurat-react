import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
// import AboutUsTestimonial from "../components/AboutUsTestimonial";
import Background from "../assets/images/Background.svg";
import Engagement from "../assets/images/Engagement.svg";
import Cylinder from "../assets/images/cylinder couple.svg";

import user from "../assets/images/user.svg";
import men from "../assets/images/mens.svg";
import women from "../assets/images/womens.svg";
import Pair from "../assets/images/Pair couple.svg";
import Goyal from "../assets/images/Goyal.svg";
import Jain from "../assets/images/Jain.svg";
import Kailash from "../assets/images/Kailash.svg";
import Navjot from "../assets/images/Navjot.svg";
import Icon from '../assets/images/Icon.svg';


const AboutUs = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full">
                    <img
                      src={Engagement}
                      alt="Engagement"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute top-1/2 left-[4vw] md:left-[7.5vw] transform -translate-y-1/2 text-white">
                      <h1
                        className="text-[5vw] md:text-[6vw]"
                        style={{ fontFamily: "Rosarivo, serif" }}
                      >
                        About Us
                      </h1>
                      <p className="text-[3vw] md:text-[1vw] mt-[1vw] font-light leading-snug">
                        Now Find your life partner Easy and fast.
                      </p>
                    </div>
                  </div>

      {/* Background Section */}
      <div className="relative flex flex-col items-center min-h-screen p-4 md:p-6">
        <img src={Background} alt="Background" className="absolute inset-0 w-full h-full object-cover z-[-1]" />

        {/* Features Section */}
        <div className="bg-[#FFF6F4] py-12 flex justify-center font-ramaraja mt-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-6 max-w-6xl px-4">
        
                {/* Card 1 */}
                <div className="flex justify-center">
                  <div className="bg-white rounded-[10px] text-center shadow-sm w-[310px] h-[310px] flex flex-col items-center pt-[50px] pb-[40px]">
                    <img
                      src={Icon}
                      alt="Icon representing genuine profiles"
                      className="w-16 h-16 rounded-full border border-gray-400 mb-6"
                    />
                    <h3 className="bg-gradient-to-r from-[#ED1C24] to-[#F05A8E] bg-clip-text text-transparent font-semibold text-lg mb-4">
                      Genuine Profiles
                    </h3>
                    <p className="text-black font-medium text-sm px-6">
                      Contact Genuine Profiles With 100% Verified Mobile
                    </p>
                  </div>
                </div>
        
                {/* Card 2 */}
                <div className="flex justify-center">
                  <div className="bg-white rounded-[10px] text-center shadow-sm w-[310px] h-[310px] flex flex-col items-center pt-[50px] pb-[40px]">
                    <img
                      src={Icon}
                      alt="Icon representing most trusted"
                      className="w-16 h-16 rounded-full border border-gray-400 mb-6"
                    />
                    <h3 className="bg-gradient-to-r from-[#ED1C24] to-[#F05A8E] bg-clip-text text-transparent font-semibold text-lg mb-4">
                      Most Trusted
                    </h3>
                    <p className="text-black  font-medium  text-sm px-6">
                      The Most Trusted Wedding Matrimony Brand Lorem
                    </p>
                  </div>
                </div>
        
                {/* Card 3 */}
                <div className="flex justify-center">
                  <div className="bg-white rounded-[10px] text-center shadow-sm w-[310px] h-[310px] flex flex-col items-center pt-[50px] pb-[40px]">
                    <img
                      src={Icon}
                      alt="Icon representing 2000+ weddings"
                      className="w-16 h-16 rounded-full border border-gray-400 mb-6"
                    />
                    <h3 className="bg-gradient-to-r from-[#ED1C24] to-[#F05A8E] bg-clip-text text-transparent font-semibold text-lg mb-4">
                      2000+ Weddings
                    </h3>
                    <p className="text-black font-Raleway font-medium text-sm px-6">
                      Lakhs of People Have Found Their Life Partner
                    </p>
                  </div>
                </div>
        
              </div>
            </div>

        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row bg-transparent justify-center items-center p-4 md:p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
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
        <div className="grid bg-white grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 p-6 mt-5 md:p-8 max-w-5xl mx-auto">
          <img src={user} alt="User" className="w-full h-auto rounded-lg shadow-md" />
          <img src={men} alt="Men" className="w-full h-auto rounded-lg shadow-md" />
          <img src={women} alt="Women" className="w-full h-auto rounded-lg shadow-md" />
          <img src={Pair} alt="Pair" className="w-full h-auto rounded-lg shadow-md" />
        </div>

        {/* Testimonial Section */}
        

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

export default AboutUs;

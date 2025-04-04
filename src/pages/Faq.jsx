import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Background from "../assets/images/Background.svg";
import Engagement from "../assets/images/Engagement.svg";
import co1 from "../assets/images/co11.svg";
import co2 from "../assets/images/co8.svg";
import co3 from "../assets/images/co3.svg";
import co4 from "../assets/images/co4.svg";
import co5 from "../assets/images/co-5.svg";
import co6 from "../assets/images/co6.svg";
import image from "../assets/images/park.svg";

const Faq = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="relative w-full">
        <img src={Engagement} alt="Engagement" className="w-full h-auto object-cover" />
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white">
          <h1 className="text-6xl font-serif font-Rosarivo lowercase" style={{ fontVariant: "small-caps" }}>
            Frequently Asked Questions
          </h1>
          <p className="text-lg mt-2 font-poppins leading-6">Now Find your life partner Easy and fast.</p>
        </div>
      </div>

      <div className="relative flex flex-col items-center min-h-screen p-6">
        <img src={Background} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 max-w-5xl w-full flex bg-white rounded-xl shadow-md p-6 flex-row items-center">
          <div className="w-2/3 p-6">
            <h2 className="text-3xl font-bold mb-6">FAQ ?</h2>
            <div className="border-b py-3">
              <button className="w-full text-left font-Raleway">How Does This App Work? +</button>
            </div>
            <div className="border-b py-3">
              <button className="w-full text-left font-Raleway text-[#F05A8E]">How Do I Create A Profile? +</button>
            </div>
            <div className="border-b py-3">
              <button className="w-full text-left font-Raleway">How Does Your Messaging System Work? +</button>
            </div>
            <div className="border-b py-3">
              <button className="w-full text-left font-Raleway">Relationships Can I Find On Your Platform? +</button>
            </div>
          </div>
          <div className="w-1/3 object-cover">
            <img src={image} alt="FAQ Side" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto -mt-10 hidden md:grid grid-cols-3 md:grid-cols-6 gap-4">
        <img src={co1} alt="Gallery 1" className="w-full h-40 object-cover rounded-lg" />
        <img src={co2} alt="Gallery 2" className="w-full h-40 object-cover rounded-lg" />
        <img src={co3} alt="Gallery 3" className="w-full h-40 object-cover rounded-lg" />
        <img src={co4} alt="Gallery 4" className="w-full h-40 object-cover rounded-lg" />
        <img src={co5} alt="Gallery 5" className="w-full h-40 object-cover rounded-lg" />
        <img src={co6} alt="Gallery 6" className="w-full h-40 object-cover rounded-lg" />
      </div>

      <Footer />
    </div>
  );
};

export default Faq;

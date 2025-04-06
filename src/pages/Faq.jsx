import React, { useState } from "react";
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
  const [open, setOpen] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Banner */}
      <div className="relative w-full">
        <img src={Engagement} alt="Engagement" className="w-full h-auto object-cover" />
        <div className="absolute top-1/2 left-[5vw] transform -translate-y-1/2 text-white">
          <h1 className="text-[6vw] md:text-[3.5vw] font-serif font-Rosarivo lowercase" style={{ fontVariant: "small-caps" }}>
            frequently asked questions
          </h1>
          <p className="text-[3.5vw] md:text-lg mt-2 font-poppins leading-snug">Now Find your life partner Easy and fast.</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative flex flex-col items-center px-[5vw] md:px-[3.125vw] py-[10vw] md:py-[5vw]">
        <img src={Background} alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />

        <div className="relative z-10 w-[93.75vw] h-auto md:h-[46.1vw] bg-white rounded-[1.04vw] shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">

            {/* Left: Questions */}
            <div className="p-[5vw] md:p-[2.5vw] overflow-y-auto">
              <h2 className="text-[7vw] md:text-[2vw] font-bold mb-[4vw] md:mb-[2vw]">FAQ ?</h2>

              {/* Q1 */}
              <div className="border-b py-[3vw] md:py-[1.2vw]">
                <button
                  onClick={() => setOpen(open === "q1" ? "" : "q1")}
                  className={`w-full text-left font-Raleway font-medium text-[4vw] md:text-[1vw] flex justify-between items-center ${
                    open === "q1" ? "text-[#ED1C24]" : "text-black"
                  }`}
                >
                  <span>How Does This App Work?</span>
                  <span className="text-[5vw] md:text-[1.5vw]">{open === "q1" ? "−" : "+"}</span>
                </button>
                {open === "q1" && (
                  <p className="text-[3.8vw] md:text-[0.95vw] text-gray-600 mt-[2vw] md:mt-[0.5vw]">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  </p>
                )}
              </div>

              {/* Q2 */}
              <div className="border-b py-[3vw] md:py-[1.2vw]">
                <button
                  onClick={() => setOpen(open === "q2" ? "" : "q2")}
                  className="w-full text-left font-Raleway font-medium text-[4vw] md:text-[1vw] flex justify-between items-center text-transparent bg-clip-text bg-gradient-to-r from-[#F05A8E] to-[#ED1C24]"
                >
                  <span>How Do I Create A Profile?</span>
                  <span className="text-[5vw] md:text-[1.5vw]">{open === "q2" ? "−" : "+"}</span>
                </button>
                {open === "q2" && (
                  <p className="text-[3.8vw] md:text-[0.95vw] text-gray-600 mt-[2vw] md:mt-[0.5vw]">
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                  </p>
                )}
              </div>

              {/* Q3 */}
              <div className="border-b py-[3vw] md:py-[1.2vw]">
                <button
                  onClick={() => setOpen(open === "q3" ? "" : "q3")}
                  className={`w-full text-left font-Raleway font-medium text-[4vw] md:text-[1vw] flex justify-between items-center ${
                    open === "q3" ? "text-[#ED1C24]" : "text-black"
                  }`}
                >
                  <span>How Does Your Messaging System Work?</span>
                  <span className="text-[5vw] md:text-[1.5vw]">{open === "q3" ? "−" : "+"}</span>
                </button>
                {open === "q3" && (
                  <p className="text-[3.8vw] md:text-[0.95vw] text-gray-600 mt-[2vw] md:mt-[0.5vw]">
                    Users can communicate securely through our platform. Chat features ensure safe and seamless interactions.
                  </p>
                )}
              </div>

              {/* Q4 */}
              <div className="border-b py-[3vw] md:py-[1.2vw]">
                <button
                  onClick={() => setOpen(open === "q4" ? "" : "q4")}
                  className={`w-full text-left font-Raleway font-medium text-[4vw] md:text-[1vw] flex justify-between items-center ${
                    open === "q4" ? "text-[#ED1C24]" : "text-black"
                  }`}
                >
                  <span>Relationships Can I Find On Your Platform?</span>
                  <span className="text-[5vw] md:text-[1.5vw]">{open === "q4" ? "−" : "+"}</span>
                </button>
                {open === "q4" && (
                  <p className="text-[3.8vw] md:text-[0.95vw] text-gray-600 mt-[2vw] md:mt-[0.5vw]">
                    Our platform supports a wide range of relationship goals, from friendships to lifelong partnerships.
                  </p>
                )}
              </div>
            </div>

            {/* Right: Image */}
            <div className="w-full h-[60vw] md:h-full hidden md:block">
              <img src={image} alt="FAQ Side" className="w-full h-full object-cover rounded-r-[1.04vw]" />
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-6xl mx-auto mt-10 hidden md:grid grid-cols-3 md:grid-cols-6 gap-4 px-4">
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

import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Engagement from '../assets/images/Engagement.svg';
import Background from '../assets/images/Background.svg';
import Couple1 from '../assets/images/Couple1.svg';
import Couple2 from '../assets/images/Couple 2.svg';
import Couple3 from '../assets/images/Couple3.svg';
import Couple4 from '../assets/images/Couple4.svg';
import Couple5 from '../assets/images/Couple 5.svg';
import Couple6 from '../assets/images/Couple 6.svg';
import Couple7 from '../assets/images/Couple 7.svg';
import Couple8 from '../assets/images/Couple 8.svg';
import Couple9 from '../assets/images/Couple 9.svg';
import Couple10 from '../assets/images/Couple 10.svg';
import Couple11 from '../assets/images/Couple 11.svg';
import Couple12 from '../assets/images/Couple 12.svg';
import Couple13 from '../assets/images/Couple-13.svg';
import Couple14 from '../assets/images/Couple-14.svg';
import Couple15 from '../assets/images/Couple 15.svg';
import Couple16 from '../assets/images/Couple16.svg';

const Gallery = () => {
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
                  Gallery
                </h1>
                <p className="text-[3vw] md:text-[1vw] mt-[1vw] font-light leading-snug">
                  Now Find your life partner Easy and fast.
                </p>
              </div>
            </div>

      {/* Background Section */}
      <div className="bg-[#FCECEC] min-h-screen flex flex-col justify-center items-center p-10 relative">
        <img src={Background} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-30" />

        {/* Featured Couples */}
        <div className="grid grid-cols-3 mt-16 w-full max-w-5xl z-2">
          <div className="flex flex-col justify-end items-center  self-end">
            <img src={Couple11} alt="Couple Left" className="w-32 h-32 md:w-40 md:h-40 rounded-t-full object-cover" />
          </div>
          <div className="flex justify-center relative">
            <div className="w-60 h-50 md:w-72 md:h-96 rounded-t-[50%] overflow-hidden flex justify-center items-center">
              <img src={Couple3} alt="Main Couple" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col justify-end self-end">
            <img src={Couple16} alt="Couple Right" className="w-28 h-28 md:w-36 md:h-36 rounded-t-full object-cover" />
          </div>
        </div>

        {/* Wedding Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-10 w-full max-w-6xl z-10">
          <div className="bg-gray-200 border-white row-span-1">
            <img src={Couple10} className="w-[29.167vw] h-[14.844vw] object-cover " />
          </div>
          <div className="bg-gray-200 border-white row-span-3">
            <img src={Couple9} className="w-[30vw] h-[43vw] object-cover inset-0 " />
          </div>
          <div className="bg-gray-200 border-white row-span-1">
            <img src={Couple8} className="w-[29.167vw] h-[14.844vw] object-cover " />
          </div>
          <div className="bg-gray-200 border-white row-span-3">
            <img src={Couple7} className="w-[30vw] h-[42vw] object-cover " />
          </div>
          <div className="bg-gray-200 border-white row-span-3">
            <img src={Couple5} className="w-[30vw] h-[42vw] object-cover " />
          </div>
          <div className="bg-gray-200 border-white row-span-3">
            <img src={Couple6} className="w-[30vw] h-[42vw] object-cover " />
          </div>
          <div className="bg-gray-200 border-white row-span-3">
            <img src={Couple13} className="w-[30vw] h-[42vw] object-cover " />
          </div>
          <div className="bg-gray-200 border-white row-span-3">
            <img src={Couple4} className="w-[30vw] h-[42vw] object-cover " />
          </div>
          <div className="bg-gray-200 border-white row-span-3">
            <img src={Couple1} className="w-[30vw] h-[42vw] object-cover " />
          </div>
          <div className="bg-gray-200 border-white row-span-3">
            <img src={Couple3} className="w-[30vw] h-[44vw] object-cover " />
          </div>
          <div className="bg-gray-200 border-white row-span-3">
            <img src={Couple2} className="w-[30vw] h-[44vw] object-cover " />
          </div>
          <div className="bg-gray-200 border-white row-span-1">
            <img src={Couple14} className="w-[29.167vw] h-[15.8vw] object-cover " />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;

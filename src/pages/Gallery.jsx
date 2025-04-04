import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Engagement from '../assets/images/Engagement.svg';
import Background from '../assets/images/Background.svg'; // ✅ Import Background
import Couple1 from '../assets/images/Couple1.svg';
import Couple2 from '../assets/images/Couple 2.svg'; // ✅ Remove space in filename
import Couple3 from '../assets/images/Couple3.svg';
import Couple4 from '../assets/images/Couple 4.svg';
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
import Couple16 from '../assets/images/Couple16.svg'; // ✅ Remove space in filename

const Gallery = () => {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full">
        <img src={Engagement} alt="Engagement" className="w-full" />
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white">
          <h1 className="text-6xl font-serif font-Rosarivo lowercase" style={{ fontVariant: 'small-caps' }}>
            Gallery
          </h1>
          <p className="text-lg mt-2 font-poppins leading-6">Now find your life partner easy and fast.</p>
        </div>
      </div>
      
      {/* Background Image */}
      <div className="bg-[#FCECEC] min-h-screen flex flex-col justify-center items-center p-10 relative">
        <img src={Background} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-30" />

        {/* Featured Images */}
        <div className="grid grid-cols-3 gap-4  mt-16 w-full max-w-5xl z-10">
          
          {/* Left Image */}
          <div className="flex flex-col justify-end items-center self-end">
            <img src={Couple11} alt="Couple 1" className="w-32 h-32 md:w-40 md:h-40 rounded-t-full object-cover" />
          </div>

          {/* Center Image */}
          <div className="flex justify-center relative">
            <div className="w-60 h-50 md:w-72 md:h-96 rounded-t-[50%] overflow-hidden flex justify-center items-center">
              <img src={Couple3} alt="Wedding Couple" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Image */}
          <div className="flex flex-col justify-end self-end">
            <img src={Couple16} alt="Couple 2" className="w-28 h-28 md:w-36 md:h-36 rounded-t-full object-cover" />
          </div>

        </div>
        
        {/* Wedding Images Grid */}
        <div className="grid grid-cols-3 gap-6 w-[90vw] mx-auto mt-10 z-10">
          {[Couple10, Couple9, Couple8, Couple7, Couple5, Couple6, Couple13, Couple1, Couple4, Couple3, Couple14, Couple2].map((image, index) => (
            <div key={index} className="bg-white shadow-md w-[30vw] h-[42vw] overflow-hidden">
              <img src={image} alt={`Wedding ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;

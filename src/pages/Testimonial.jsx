import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

import Couple3 from "../assets/images/Couple3.svg";
import Couple2 from "../assets/images/Couple4.svg";
import Couple16 from "../assets/images/Couple16.svg";

const AboutUsTestimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="bg-[#FFF1F1] py-10 px-4 md:px-8 flex flex-col items-center">
      <h2 className="text-2xl md:text-4xl font-semibold text-black mb-1 text-center">
        What They Say About Us
      </h2>
      <p className="text-gray-500 text-sm mb-6 text-center">
        Trusted by thousands, loved by many.
      </p>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 5000 }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="w-full max-w-5xl"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-2xl shadow-md">
            <div className="md:w-3/4 w-full">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 mr-1" />
                ))}
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                At Shadi Muhurath, we take pride in helping couples create the wedding of their dreams...
              </p>
              <div className="mt-6">
                <h4 className="text-base font-semibold text-black">Dipak Hilal Patil,</h4>
                <p className="text-sm text-gray-500">dipakpatil123@gmail.com</p>
              </div>
            </div>
            <div className="md:w-1/4 w-full mt-6 md:mt-0 md:ml-6 flex justify-center">
              <img src={Couple16} alt="Dipak" className="w-36 h-auto rounded-xl shadow-md" />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-2xl shadow-md">
            <div className="md:w-3/4 w-full">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 mr-1" />
                ))}
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                At Shadi Muhurath, we take pride in helping couples create the wedding of their dreams...
              </p>
              <div className="mt-6">
                <h4 className="text-base font-semibold text-black">Anuja</h4>
                <p className="text-sm text-gray-500">anu4@gmail.com</p>
              </div>
            </div>
            <div className="md:w-1/4 w-full mt-6 md:mt-0 md:ml-6 flex justify-center">
              <img src={Couple2} alt="Anuja" className="w-36 h-auto rounded-xl shadow-md" />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-2xl shadow-md">
            <div className="md:w-3/4 w-full">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 mr-1" />
                ))}
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                We believe in making every celebration unique, and it’s our joy to be part of such a special moment.
              </p>
              <div className="mt-6">
                <h4 className="text-base font-semibold text-black">Neha Sharma</h4>
                <p className="text-sm text-gray-500">neha.sharma@gmail.com</p>
              </div>
            </div>
            <div className="md:w-1/4 w-full mt-6 md:mt-0 md:ml-6 flex justify-center">
              <img src={Couple3} alt="Neha" className="w-36 h-auto rounded-xl shadow-md" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Navigation Arrows */}
      <div className="flex gap-4 mt-6">
        <button ref={prevRef} className="bg-white border border-gray-300 text-black p-2 rounded-full shadow-md hover:bg-gray-100 transition">
          <FaArrowLeft />
        </button>
        <button ref={nextRef} className="bg-[#D14662] text-white p-2 rounded-full shadow-md hover:bg-pink-600 transition">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AboutUsTestimonial;

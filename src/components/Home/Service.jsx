import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Patel from "../../assets/images/Patel.svg";
import Nadani from "../../assets/images/Nadani.svg";
import Chaudhary from "../../assets/images/Chaudhary.svg";
import Mouse from "../../assets/images/Mouse.svg";
import JAINN from "../../assets/images/JAINN.svg";
import Goyola from "../../assets/images/GOYOLA.svg";
import Lucknow from "../../assets/images/Lucknow.svg";
import Bhopal from "../../assets/images/Bhopal.svg";

// Couples Data
const couples = [
  { name: "Vishwas Patel", city: "Delhi", img: Patel },
  { name: "Nandan Raikwar", city: "Varanasi", img: Nadani },
  { name: "Rahul Choudhary", city: "Mumbai", img: Chaudhary },
  { name: "Hillery Moses", city: "Hyderabad", img: Mouse },
  { name: "Shalini Jain", city: "Kolkata", img: JAINN },
  { name: "Mohd Hadi", city: "Lucknow", img: Lucknow },
  { name: "Ramesh Gupta", city: "Bhopal", img: Bhopal },
  { name: "Bhavna Goyal", city: "Surat", img: Goyola },
];

const TrustedCouples = () => {
  return (
    <div className="py-10 px-[2vw] max-w-[96vw] mx-auto bg-pink-50 rounded-lg">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1vw] mb-8">
        <div className="flex flex-col justify-center bg-white rounded-3xl p-[5vw] md:p-[2.5vw]">
          <h2 className="text-[32px] leading-[79px] font-[500] font-raleway text-black">
            Trusted By <span className="text-[#ED1C24] text-[78px] font-Raleway">8+</span>Couples
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-2 leading-[24px] font-sans">
            Our platform helps partners build meaningful connections and lasting
            relationships.
          </p>
          <button className="mt-6 bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] text-white w-[159px] h-[52px] rounded-full hover:bg-pink-700 text-sm md:text-base">
            Register Now
          </button>
        </div>

        {/* Featured Couple */}
        <div className="relative rounded-3xl overflow-hidden shadow-md">
          <img
            src={Patel}
            alt="Vishwas Patel"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-3xl text-white">
            <h3 className="text-[20px] md:text-[1.5vw] font-medium">
              Vishwas Patel
            </h3>
            <div className="flex items-center mt-2">
              <div className="flex items-center bg-black px-4 py-2 md:px-3 md:py-1 rounded-full text-white text-sm md:text-[1vw]">
                Delhi
                <span className="w-3 h-3 md:w-[0.6vw] md:h-[0.6vw] bg-[#ED1C24] rounded-full ml-2"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={16}
        slidesPerView={2}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="mt-6 relative"
      >
        {couples.map((couple, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative rounded-2xl overflow-hidden shadow-md">
              <img
                src={couple.img}
                alt={couple.name}
                className="w-full h-auto md:h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="text-[16px] md:text-[1.2vw] font-medium">
                  {couple.name}
                </h3>
                <div className="flex items-center mt-2">
                  <div className="flex items-center bg-black px-4 py-2 md:px-3 md:py-1 rounded-full text-white text-sm md:text-[1vw]">
                    {couple.city}
                    <span className="w-3 h-3 md:w-[0.6vw] md:h-[0.6vw] bg-[#ED1C24] rounded-full ml-2"></span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
          <button className="custom-prev bg-[#FCE2C5] text-[#C1645C] w-12 h-12 md:w-8 md:h-8 rounded-full flex items-center justify-center hover:bg-pink-200">
            &lt;
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
          <button className="custom-next bg-[#FCE2C5] text-[#C1645C] w-12 h-12 md:w-8 md:h-8 rounded-full flex items-center justify-center hover:bg-pink-200">
            &gt;
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default TrustedCouples;

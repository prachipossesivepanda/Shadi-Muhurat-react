import React from "react";
import rectangleBg from "../../assets/images/Rectanglebg.svg";
import peopleBanner from "../../assets/images/peoplebanner.svg";

const PerfectMatch = () => {
  return (
    <section className="relative w-[85.41vw] h-[23.23vw] overflow-hidden mx-auto rounded-[1.25vw] px-[2vw] flex justify-center items-center">
      {/* Background Rectangle */}
      <img
        src={rectangleBg}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover "
      />

      {/* Content on top of background */}
      <div className="relative z-10 text-center text-[#4b1d12] px-[1.5vw] max-w-[50vw]">
        <h2 className="text-[2.5vw] font-Rosarivo mb-[1vw] leading-tight">
          Find your perfect Match now
        </h2>
        <p className="text-[1vw] text-[#6e4c3e] mb-[2vw] leading-snug">
          lacinia viverra lacus. Fusce imperdiet ullamcorper metus eu fringilla.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="flex justify-center gap-[1.2vw]">
          <button className="bg-[#561C1C] text-white px-[3vw] py-[0.8vw] rounded-full text-[1vw] font-medium hover:bg-[#3e1313] transition">
            Register Now
          </button>
          <button className="border border-[#561C1C] text-[#561C1C] px-[3vw] py-[0.8vw] rounded-full text-[1vw] font-medium hover:bg-[#561C1C] hover:text-white transition">
            Help & Support
          </button>
        </div>
      </div>

      {/* Bottom People Image */}
      <img
        src={peopleBanner}
        alt="People Illustration"
        className="absolute bottom-0 left-0 w-full object-cover"
      />
    </section>
  );
};

export default PerfectMatch;

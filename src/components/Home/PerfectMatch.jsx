import React from "react";
import rectangleBg from "../../assets/images/Rectanglebg.svg";
import peopleBanner from "../../assets/images/peoplebanner.svg";

const PerfectMatch = () => {
  return (
    <section className="relative w-full overflow-hidden flex justify-center items-center py-20 px-4">
      {/* Background Rectangle */}
      <img
        src={rectangleBg}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
      />

      {/* Content on top of background */}
      <div className="relative z-10 max-w-3xl text-center text-[#4b1d12]">
        <h2 className="text-3xl md:text-4xl font-Rosarivo  mb-4">
          Find your perfect Match now
        </h2>
        <p className="text-sm md:text-base text-[#6e4c3e] mb-6">
          lacinia viverra lacus. Fusce imperdiet ullamcorper metus eu fringilla.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-[#561C1C] text-white px-6 py-2 rounded-full font-medium hover:bg-[#3e1313] transition">
            Register Now
          </button>
          <button className="border border-[#561C1C] text-[#561C1C] px-6 py-2 rounded-full font-medium hover:bg-[#561C1C] hover:text-white transition">
            Help & Support
          </button>
        </div>
      </div>

      {/* Bottom People Image */}
      <img
        src={peopleBanner}
        alt="People Illustration"
        className="absolute bottom-0 left-0  w-full  object-cover"
      />
    </section>
  );
};

export default PerfectMatch;

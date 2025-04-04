import React from "react";
import Perfect from "../../assets/images/Perfect.svg";

const PerfectMatch = () => {
  return (
    <section className="bg-[#FDEDC8] text-center py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold text-[#5A2A17]">Find your perfect Match now</h1>
        <p className="mt-4 text-gray-700">
          Lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu fringilla. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-[#5A2A17] text-white px-6 py-3 rounded-full hover:bg-[#4A1F12] transition">
            Register Now
          </button>
          <button className="border border-[#5A2A17] text-[#5A2A17] px-6 py-3 rounded-full hover:bg-[#5A2A17] hover:text-white transition">
            Help & Support
          </button>
        </div>
      </div>

      {/* Illustration */}
      <div className="mt-8">
        <img src={Perfect} alt="People celebrating" className="w-full" />
      </div>
    </section>
  );
};

export default PerfectMatch;

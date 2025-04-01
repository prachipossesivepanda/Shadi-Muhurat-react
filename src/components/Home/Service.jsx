import React from "react";
import Fool from "../../assets/images/Fool.svg";
import Nadan from "../../assets/images/Nadan.svg";
import Rahul from "../../assets/images/RAHUL.svg";
import Shalini from "../../assets/images/shalini.svg";
import Hillery from "../../assets/images/Hillery.svg";
import Trusted from "../../assets/images/Trusted.svg";
import Bhavna from "../../assets/images/Bhavna.svg";
import Vikas from "../../assets/images/vikas.svg";
import Mohd from "../../assets/images/Mohd.svg";
import Ramesh from "../../assets/images/ramesh.svg";

const Service= () => {
  return (
    <div className="bg-[#fdf4f2] p-6 md:p-12">
      <div className="max-w-6xl mx-auto gap-4 mt-8">
        {/* Trusted and Fool images side by side */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={Trusted}
              alt="Trusted"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={Fool}
              alt="Couple"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Scrollable section for all images */}
        <div className="mt-8 overflow-x-scroll no-scrollbar flex space-x-4">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={Nadan}
              alt="Couple"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={Rahul}
              alt="Couple"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={Shalini}
              alt="Couple"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={Hillery}
              alt="Couple"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={Bhavna}
              alt="Couple"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={Vikas}
              alt="Couple"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={Mohd}
              alt="Couple"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={Ramesh}
              alt="Couple"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

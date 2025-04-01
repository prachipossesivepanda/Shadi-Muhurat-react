import React from "react";
import bow from "../../assets/images/bow.svg";
import christ from "../../assets/images/christ.svg";
import church from "../../assets/images/church.svg";
import genuine from "../../assets/images/Genuine.svg";
import Group from "../../assets/images/Group.svg";
import Hands from "../../assets/images/Hands.svg";
import Head from "../../assets/images/Header Text .svg";
import heart from "../../assets/images/Heart.svg";
import Korean from "../../assets/images/Korean.svg";
import Laal from "../../assets/images/Laal patti.svg";
import lak from "../../assets/images/laks.svg";
import men from "../../assets/images/mens.svg";
import Most from "../../assets/images/Most.svg";
import Muffler from "../../assets/images/muff.svg";
import pink from "../../assets/images/pink.svg";
import user from "../../assets/images/user.svg";
import women from "../../assets/images/womens.svg";
import title from "../../assets/images/title.svg";
import Profile from "../../assets/images/Prof.svg";

const Together = () => {
  return (
    <div className="w-[95vw] h-[60vw]">
      <div className="bg-red-600 relative">
        <img
          src={Laal}
          alt="Laal Patti"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {/* First Column */}
        <div className="bg-white relative">
            <img 
              src={title}
              alt="shadi"
              className=" mt-6 ml-6" // Adjust image width and height
            />
          <img
            src={Head}
            alt="Header Text"
            className="w-[34vw] ml-6 flex-center h-auto sm:w-[25vw] sm:h-auto sm:top-[25vh] sm:left-[10vw] mt-17 object-cover"
          />
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4">
              <img
                src={user}
                alt="User"
                className="w-[12vw] h-[12vw] object-cover mt-45"
              />
            </div>
            <div className="bg-white p-4">
              <img
                src={men}
                alt="Men"
                className="w-[12vw] h-[12vw] object-cover mt-45"
              />
            </div>
            <div className="bg-white p-4">
              <img
                src={women}
                alt="Women"
                className="w-[12vw] h-[12vw] object-cover mt-45"
              />
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4">
            <img
              src={bow}
              alt="Bow"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white p-4">
            <img
              src={pink}
              alt="Pink"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4">
            <img
              src={heart}
              alt="Heart"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4">
            <img
              src={Muffler}
              alt="Muffler"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4">
            <img
              src={church}
              alt="Group"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4">
            <img
              src={christ}
              alt="Muffler"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4">
            <img
              src={Profile}
              alt="Profile"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4">
            <img
              src={Korean}
              alt="Korean"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4">
            <img
              src={Hands}
              alt="Church"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Together;

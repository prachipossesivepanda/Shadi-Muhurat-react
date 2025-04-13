import React from "react";
import bow from "../../assets/images/bow.svg";
import church from "../../assets/images/church.svg";
import christ from "../../assets/images/christ.svg";
import muff from "../../assets/images/muff.svg";
import pink from "../../assets/images/pink.svg";
import Korean from "../../assets/images/Korean.svg";
import Hands from "../../assets/images/Hands.svg";
import Profile from "../../assets/images/Prof.svg";
import title from "../../assets/images/title.svg";
import men from "../../assets/images/mens.svg";
import women from "../../assets/images/womens.svg";
import heart from "../../assets/images/heart.svg";
import { FaUsers, FaMars, FaVenus, FaHeart } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
// import {FiUsers} from "react-icons/fa";
// import { FaUserShield } from "react-icons/fa";
import { LuUsersRound } from "react-icons/lu";
import { RiUserHeartFill } from "react-icons/ri";
import { MdVerified } from "react-icons/md";

const Together = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Scrolling Banner */}
      <div className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] py-3 relative overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          <div className="text-white font-semibold text-lg flex items-center mx-6">
            <div className="border border-white rounded-full p-1 mr-2">
              <FaUsers size={20} />
            </div>
            4677+ Registered Users
          </div>
          <div className="text-white font-semibold text-lg flex items-center mx-6">
            <div className="border border-white rounded-full p-1 mr-2">
              <FaMars size={20} />
            </div>
            2935+ Mens
          </div>
          <div className="text-white font-semibold text-lg flex items-center mx-6">
            <div className="border border-white rounded-full p-1 mr-2">
              <FaVenus size={20} />
            </div>
            1742+ Womens
          </div>
          <div className="text-white font-semibold text-lg flex items-center mx-6">
            <div className="border border-white rounded-full p-1 mr-2">
              <FaHeart size={20} />
            </div>
            547+ Couples Paired
          </div>
          <div className="text-white font-semibold text-lg flex items-center mx-6">
            <div className="border border-white rounded-full p-1 mr-2">
              <RiUserHeartFill size={20} />
            </div>
            2000+ Weddings
          </div>
          <div className="text-white font-semibold text-lg flex items-center mx-6">
            <div className="border border-white rounded-full p-1 mr-2">
              <MdVerified size={20} />
            </div>
            Genuine Profiles
          </div>

          {/* Duplicate for continuous scroll */}
          <div className="text-white font-semibold text-lg flex items-center mx-6">
            <div className="border border-white rounded-full p-1 mr-2"></div>
            4677+ Registered Users
          </div>
          <div className="text-white font-semibold text-lg flex items-center mx-6">
            <div className="border border-white rounded-full p-1 mr-2">
              <FaMars size={20} />
            </div>
            2935+ Mens
          </div>
          <div className="text-white font-semibold text-lg flex items-center mx-6">
            <div className="border border-white rounded-full p-1 mr-2">
              <FaVenus size={20} />
            </div>
            1742+ Womens
          </div>
          <div className="text-white font-semibold text-lg flex items-center mx-6">
            <div className="border border-white rounded-full p-1 mr-2">
              <FaHeart size={20} />
            </div>
            547+ Couples Paired
          </div>
          <div className="text-white font-semibold text-lg flex items-center mx-6">
            <div className="border border-white rounded-full p-1 mr-2">
              <RiUserHeartFill size={20} />
            </div>
            2000+ Weddings
          </div>
          <div className="text-white font-semibold text-lg flex items-center mx-6">
            <div className="border border-white rounded-full p-1 mr-2">
              <MdVerified size={20} />
            </div>
            Genuine Profiles
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="my-[4.167vw] grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 ">
        {/* Left Column */}
        <div className=" flex flex-col justify-between">
          {/* Left: Text Content */}
          <div>
            <p className="text-sm text-red-500 font-semibold mt-[3.438vw] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              SHADI MUHARATH
            </p>
            <h1 className="mt-[1.25vw] w-3/4 text-3xl md:text-5xl font-bold leading-tight">
              Together We Stand,
              <br />
              Hand In Hand.
            </h1>
            <p className="text-gray-600 mt-4 w-5/6">
              It is a long established fact that a reader will be distracted by
              the <br /> readable content of a page when looking at its layout.
            </p>
            <button className="mt-6 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
              Register Now
            </button>
          </div>

          {/* Stats Grid */}
          <div className="mt-[7.396vw] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 items-end">
            {/* Card 1 */}
            <div className="border border-red-200 rounded-xl text-center p-6">
              {/* <div className="text-[3.333vw] text-red-500 font-semibold"style={{ fontFamily: "Raleway, serif" }}
              >
              <LuUsersRound size={20} />
                4677<span className="text-red-400">+</span>
              </div> */}
              <div
                className="text-[3.333vw] font-bold bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent"
                style={{ fontFamily: "Raleway, serif" }}
              >
                4677<span className="text-transparent">+</span>
              </div>
              <div className="mt-2 text-gray-700">Registered Users</div>
            </div>
            {/* Card 2 */}
            <div className="border border-red-200 rounded-xl text-center p-6">
              <div
                className="text-[3.333vw] text-red-500 font-bold"
                style={{ fontFamily: "Raleway, serif" }}
              >
                2935<span className="text-red-400">+</span>
              </div>
              <div className="mt-2 text-gray-700">Mens</div>
            </div>
            {/* Card 3 */}
            <div className="border border-red-200 rounded-xl text-center p-6">
              <div
                className="text-[3.333vw] text-red-500 font-bold"
                style={{ fontFamily: "Raleway, serif" }}
              >
                1742<span className="text-red-400">+</span>
              </div>
              <div className="mt-2 text-gray-700">Womens</div>
            </div>
            {/* Card 4 */}
            <div className="border border-red-200 rounded-xl text-center p-6">
              <div
                className="text-[3.333vw] text-red-500 font-bold"
                style={{ fontFamily: "Raleway, serif" }}
              >
                547<span className="text-red-400">+</span>
              </div>
              <div className="mt-2 text-gray-700">Couples Paired</div>
            </div>
          </div>
        </div>

        {/* Right Column - Grid without map */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-pink-50 rounded-md overflow-hidden">
            <img src={bow} alt="bow" className="w-full h-full object-cover" />
          </div>
          <div className="bg-pink-50 rounded-md overflow-hidden">
            <img src={pink} alt="pink" className="w-full h-full object-cover" />
          </div>
          <div className="bg-pink-50 rounded-md overflow-hidden">
            <img
              src={heart}
              alt="heart"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-pink-50 rounded-md overflow-hidden">
            <img
              src={muff}
              alt="muffler"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-pink-50 rounded-md overflow-hidden">
            <img
              src={church}
              alt="church"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-pink-50 rounded-md overflow-hidden">
            <img
              src={christ}
              alt="christ"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white rounded-md overflow-hidden">
            <img
              src={Profile}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-pink-50 rounded-md overflow-hidden">
            <img
              src={Korean}
              alt="korean"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-pink-50 rounded-md overflow-hidden">
            <img
              src={Hands}
              alt="hands"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Together;

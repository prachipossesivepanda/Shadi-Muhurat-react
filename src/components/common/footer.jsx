import React from "react";
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Logo from "../../assets/images/Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-6 flex flex-col md:flex-row items-start">
      {/* Left Section - Email & Social Media */}
      <div className="w-full md:w-1/3 flex flex-col items-start text-left space-y-4 ml-[140px]">
        <h2 className="font-[50]  text-[50px]">Are You In For<br></br>
          The Gossips?</h2>
        
        {/* Logo moved below the heading */}
        <img src={Logo} alt="Shadi Muharat Logo" className="w-40 mt-2" />

        <p className="text-gray-600 text-sm max-w-md">
          Mauris mattis iaculis turpis sit amet convallis. Aliquam congue vehicula cursus.
          Aenean eget lacus in metus malesuada iaculis ac vitae velit.
        </p>        
      </div>

      {/* Right Section - Footer Links */}
      <div className="w-full md:w-2/3 flex flex-wrap justify-between mt-10 md:mt-0">
      <div className="w-full gap-9 mt-4">
          
            <form >
              <div className="flex justify-between items-center space-x-4">
                <input
               type="email"
               placeholder="Enter your email address"
               className=" border-gray-300 rounded-md px-3 py-2 w-full md:w-60 focus:outline-none"
                />
            <button className="bg-red-500 text-white px-4 py-2 rounded-full font-medium hover:bg-red-600">
            Register Now
            </button>
              </div>
            </form>
                        
          {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 text-gray-600 text-xl">
          <FaFacebookF className="cursor-pointer hover:text-blue-600" />
          <FaYoutube className="cursor-pointer hover:text-red-500" />
          <FaLinkedinIn className="cursor-pointer hover:text-blue-500" />
          <FaInstagram className="cursor-pointer hover:text-pink-500" />
        </div>
        </div>
        {/* Community */}
        <div className="w-1/3 mt-6">
          <h3 className="font-semibold text-lg">Community</h3>
          <ul className="text-gray-600 text-sm space-y-1">
            <li className="hover:underline cursor-pointer">Guidelines</li>
            <li className="hover:underline cursor-pointer">Success Stories</li>
            <li className="hover:underline cursor-pointer">Plenty of Interests</li>
            <li className="hover:underline cursor-pointer">Plenty of Cities</li>
            <li className="hover:underline cursor-pointer">The Blog</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="w-1/3 mt-6">
          <h3 className="font-semibold text-lg">Contact</h3>
          <ul className="text-gray-600 text-sm space-y-1">
            <li className="hover:underline cursor-pointer">Support</li>
            <li className="hover:underline cursor-pointer">Security</li>
            <li className="hover:underline cursor-pointer">Safety Tips</li>
            <li className="hover:underline cursor-pointer">Impressum</li>
          </ul>
        </div>

        {/* Legal & Privacy */}
        <div className="w-1/3 mt-6">
          <h3 className="font-semibold text-lg">Legal & Privacy</h3>
          <ul className="text-gray-600 text-sm space-y-1">
            <li className="hover:underline cursor-pointer">Terms of Service</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Consumer Health Data Policy</li>
            <li className="hover:underline cursor-pointer">Cookie Policy</li>
            <li className="hover:underline cursor-pointer">Intellectual Property</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

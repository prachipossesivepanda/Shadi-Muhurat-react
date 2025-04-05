import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook , FaLinkedin, FaInstagram, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
//import Logo from "../../assets/images/Shadi.svg";
//import Muharat from "../../assets/images/Muharath.svg";
import Logo from "../../assets/images/Logo.svg";
import Login from "../../assets/images/Frame 29.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full mt-6">
      {/* 🔴 Top Red Bar */}
      <div className="bg-red-600 text-white w-full h-[38px] py-2 px-4 md:px-8 flex flex-wrap justify-between items-center text-xs sm:text-sm">
        
        {/* Left Side - FAQ & Support */}
        <div className="flex space-x-2 sm:space-x-4">
          <a href="#">FAQs</a>
          <span>|</span>
          <a href="#">Help & Support</a>
        </div>

        {/* Middle - Contact Info (Hidden on small screens) */}
        <div className="hidden md:flex space-x-4">
          <span>+91 986-544-3399 |</span>
          <span>Shadimuharath@Gmail.com</span>
        </div>

        {/* Right Side - Social Media Icons */}
        <div className="flex space-x-2 sm:space-x-3">
          <a href="#" className="hover:text-pink-300"><FaFacebook /></a>
          <a href="#" className="hover:text-pink-300"><FaInstagram /></a>
          <a href="#" className="hover:text-pink-300"><FaLinkedin /></a>
          <a href="#" className="hover:text-pink-300"><FaYoutube /></a>
        </div>
      </div>

      {/* 🔵 Main Navigation Bar */}
      <div className="bg-orange-50 w-full h-[70px] flex justify-between items-center px-4 sm:px-10 relative">
        
        {/* Left Side - Logo */}
        <div className="relative flex items-center">
        
          {/* Muharat Positioned Below Shadi */}
          <img src={Logo} alt="ShadiMuhrat Logo" className="h-12 mx-auto md:mx-0" />
                  
          
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-red-500 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Center - Navigation Links */}
        <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-pink-100 md:bg-transparent md:flex 
                        flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-red-400 
                        font-semibold text-center md:text-left transition-all duration-300 
                        ${menuOpen ? "block" : "hidden md:flex"}`}>
          <Link to="/" className="hover:text-red-600">Home</Link>
          <Link to="/about" className="hover:text-red-600">About</Link>
          <Link to="/gallery" className="hover:text-red-600">Gallery</Link>
          <Link to="/blog" className="hover:text-red-600">Blog</Link>
          <Link to="/pricing" className="hover:text-red-600">Pricing</Link>
          <Link to="/contact" className="hover:text-red-600">Contact</Link>
        </div>

        {/* Right Side - Login Button (Hidden on mobile) */}
        <div className="hidden md:block">
          <img src={Login} alt="Login" className="h-[40px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

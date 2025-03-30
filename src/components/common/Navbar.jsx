import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "../../assets/images/Shadi.svg";
import Muharat from "../../assets/images/Muharath.svg";
import Login from "../../assets/images/Frame 29.svg";

export default function Navbar() {
  return (
    <div className="w-full mt-12">
      {/* 🔴 Top Red Bar */}
      <div className="bg-red-600 text-white w-full h-[38px] py-2 px-8 flex justify-between items-center text-sm">
        
        {/* Left Side - FAQ & Support */}
        <div className="flex space-x-4">
          <a href="#" >FAQs</a>
          <span>|</span>
          <a href="#" >Help & Support</a>
        </div>

        {/* Middle - Contact Info */}
        <div className="flex space-x-8">
          <span>+91 986-544-3399 |</span>
          <span>Shadimuharath@Gmail.com</span>
               

        {/* Right Side - Social Media Icons */}
        <div className="flex space-x-3 ">
          <a href="#" className="text-white h-[18px] hover:text-pink-300"><FaFacebookF /></a>
          <a href="#" className="text-white hover:text-pink-300"><FaInstagram /></a>
          <a href="#" className="text-white hover:text-pink-300"><FaLinkedin /></a>
          <a href="#" className="text-white hover:text-pink-300"><FaYoutube /></a>
        </div>
        </div>
      </div>

      {/* 🔵 Main Navigation Bar */}
      <div className="bg-pink-100 w-full h-[77px] flex justify-between items-center px-10 relative">
        
        {/* Left Side - Logo */}
        <div className="relative">
          <img src={Logo} alt="Shadi Muharat Logo" className="h-[40px]" />
          {/* Muharat Positioned Below Shadi */}
          <img src={Muharat} alt="Muharat" className="absolute w-[79px] h-[7px] top-[46.04px] left-[22.83px]" />
        </div>

        {/* Center - Navigation Links */}
        <div className="flex space-x-6 text-red-400 font-semibold">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <Link to="/about" className="hover:text-red-600">About</Link>
          <Link to="/gallery" className="hover:text-red-600">Gallery</Link>
          <Link to="/blog" className="hover:text-red-600">Blog</Link>
          <Link to="/pricing" className="hover:text-red-600">Pricing</Link>
          <Link to="/contact" className="hover:text-red-600">Contact</Link>
        </div>

        {/* Right Side - Login Button */}
        <div>
          <img src={Login} alt="Login" className="h-[40px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

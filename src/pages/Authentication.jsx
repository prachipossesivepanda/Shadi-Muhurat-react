import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Ring from '../assets/images/Ring.svg';
import Background from '../assets/images/Background.svg';
import Sign from '../assets/images/Sign.svg';
import Engagement from '../assets/images/Engagement.svg';
import Google from '../assets/images/Google.svg';
import Facebook from '../assets/images/Facebook.svg';
import Apple from "../assets/images/apple.svg";

const Authentication = () => {
  return (
    <div className="bg-[#FFF4EE] min-h-screen flex flex-col">
      <Navbar />

      {/* Banner Section */}
      
      <div className="relative w-full h-[50vw] md:h-[21.875vw] ">
              <img
                src={Engagement}
                alt="Engagement"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1/2 left-[4vw] md:left-[7.5vw] transform -translate-y-1/2 text-white">
                <h1
                  className="text-[5vw] md:text-[6vw]"
                  style={{ fontFamily: "Rosarivo, serif" }}
                >
                  Login
                </h1>
                <p className="text-[3vw] md:text-[1vw] mt-[1vw] font-light leading-snug">
                  Now Find your life partner Easy and fast.
                </p>
              </div>
            </div>

      {/* Form Section */}
      <div className="relative">
        <img
          src={Background}
          alt="Background"
          className="w-full object-cover max-h-[300px] sm:max-h-none"
        />

        <div className="absolute inset-0 flex justify-center items-center px-4 sm:px-10 py-8">
        {/* <div className="w-full max-w-[95vw] sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[36vw]"> */}

          <div className="bg-white w-full h-auto max-w-[95vw] sm:max-w-[50vw] md:max-w-[50vw] lg:max-w-[36vw] gap-2 shadow-lg rounded-2xl p-6 sm:p-10 pb-10 flex flex-col items-center">

            {/* Title Image */}
            <h3 className=" w-[29.635vw] text-[2.917vw] font-medium text-center text-Black">
            Sign In To Account
          </h3>
          <p className='text-sm px-2 text-grey-500 mt-2 leading-relaxed'>Experience the joy of life and create happiness together with Shadi Muharath.</p>

            {/* Email Field */}
            <input
              type="email"
              placeholder="Your Mail Here"
              autoFocus
              className="w-full px-4 py-3 sm:px-5 sm:py-3 mt-4 border border-[#ED1C2426] rounded-full text-sm text-[#C1645CB2] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
            />

            {/* Password Field */}
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 sm:px-5 sm:py-3 mt-3 border border-[#ED1C2426] rounded-full text-sm text-[#C1645CB2] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
            />

            {/* Remember + Forgot */}
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 text-sm">
              <label className="flex items-center mb-2 sm:mb-0">
                <input type="checkbox" className="h-4 w-4 rounded-lg accent-[#FF6B6B]" />
                <span className="ml-2 text-gray-700">Remember Me</span>
              </label>
              <a href="#" className="text-[#FF6B6B] hover:underline">Forgot Password?</a>
            </div>

            {/* Login Button */}
            <button className="w-full mt-5 py-3 bg-gradient-to-r from-[#FF6B6B] to-[#ED1C24] text-white rounded-full text-base font-semibold hover:opacity-90 transition">
              Login
            </button>

            {/* Or Login With */}
            <div className="text-center mt-5 text-gray-500 text-sm">Or login with</div>

            {/* Social Buttons */}
            <div className="w-full flex flex-col sm:flex-row gap-3 mt-4">
              <button className="flex items-center justify-center gap-2 w-full py-3 border border-[#ED1C2426] rounded-full shadow bg-white hover:shadow-md">
                <img src={Apple} alt="Apple" className="w-5 h-5" />
                <span className="font-bold text-sm">Apple</span>
              </button>
              <button className="flex items-center justify-center gap-2 w-full py-3 border border-[#ED1C2426] rounded-full shadow bg-white hover:shadow-md">
                <img src={Google} alt="Google" className="w-5 h-5" />
                <span className="font-bold text-sm">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 w-full py-3 border border-[#ED1C2426] rounded-full shadow bg-white hover:shadow-md">
                <img src={Facebook} alt="Facebook" className="w-5 h-5" />
                <span className="font-bold text-sm">Facebook</span>
              </button>
            </div>

            {/* Create Account */}
            <div className="text-center mt-6 text-sm">
              <span className="text-gray-600">Don't have an account? </span>
              <a href="#" className="text-[#FF6B6B] font-medium hover:underline">Create An Account</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Authentication;
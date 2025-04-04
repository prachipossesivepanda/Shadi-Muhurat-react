import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Ring from '../assets/images/Ring.svg';
import Background from '../assets/images/Background.svg';
import Sign from '../assets/images/Sign.svg';
import Apple from '../assets/images/Apple.svg';
import Google from '../assets/images/Google.svg';
import Facebook from '../assets/images/Facebook.svg'; // Import Facebook icon

const Authentication = () => {
  return (
    <div className="bg-[#FFF4EE] min-h-screen flex flex-col">
      <Navbar />  

      <div className="relative">
        <img src={Ring} alt="Angoothi" className="w-full" />
      </div>

      <div className="relative">
        <img src={Background} alt="Parda" className="w-full" />

        {/* White Box Centered */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-white w-[36vw] h-[43vw] shadow-lg rounded-lg p-6 flex flex-col items-center">
            <img src={Sign} alt='Sign' className='w-full mt-7' />

            <div className="w-full">
              <input
                type="email"
                
    
                placeholder="Your mail here"
                className="w-full px-4 py-2 mt-12 border text-[#C1645CB2] border-[#ED1C2426] rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
              />
            </div>

            <div className="w-full mt-4">
              {/* <label className="block text-gray-700 text-sm font-medium mb-1">Password</label> */}
              <input
                type="password"
                placeholder=" Password"
                className="w-full px-4 py-2 border  text-[#C1645CB2] rounded-full border-[#ED1C2426] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
              />
            </div>

            <div className="w-full flex items-center justify-between mt-4">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-[#FF6B6B] focus:ring-[#FF6B6B] border-gray-300 rounded" />
                <label className="ml-2 block text-sm text-gray-700">Remember Me</label>
              </div>
              <a href="#" className="text-sm text-[#FF6B6B] hover:underline">Forgot Password?</a>
            </div>

            <button className="w-[30vw] mt-6 p-3 rounded-full bg-[#FF6B6B] focus:ring-2 focus:outline-none hover:bg-[#E05555] text-white font-medium">
              Login
            </button>

            <div className="text-center mt-4">
              <span className="text-gray-500 text-sm">Or login with</span>
            </div>

            <div className="flex justify-center space-x-4 mt-4">
              {/* Apple Button */}
              <div className="w-[10vw] h-[10vw] md:w-[5vw] md:h-[5vw]  -mt-5 rounded-full flex items-center justify-center border border-gray-300 shadow-md bg-white">
                <img src={Apple} alt="Apple" className="w-[60%]" />
              </div>
              {/* Google Button */}
              
      
              <div className="w-[10vw] h-[10vw] md:w-[5vw] md:h-[5vw] rounded-full flex items-center justify-center -mt-5 border border-gray-300 shadow-md bg-white">
                <img src={Facebook} alt="Facebook" className="w-[60%]" />
              </div>
              {/* Facebook Button */}
              <div className="w-[10vw] h-[10vw] md:w-[5vw] md:h-[5vw] rounded-full  -mt-5 flex items-center justify-center border border-gray-300 shadow-md bg-white">
                <img src={Google} alt="Google" className="w-[60%] " />
              </div>
              
              
            </div>

            <div className="text-center mt-4">
              <span className="text-gray-600 text-sm">Don't have an account? </span>
              <a href="#" className="text-[#FF6B6B] hover:underline text-sm font-medium">Create An Account</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Authentication;
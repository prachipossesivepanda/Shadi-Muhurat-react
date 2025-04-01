import Logo from "../../assets/images/Logo.svg"; // Fixed relative path

export default function RegisterSection() {
  return (
    <div className="relative w-full bg-[#f8ebe4] py-10 px-6 md:px-20 flex flex-col md:flex-row items-center">
      {/* Left Section - Intro */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <img src={Logo} alt="ShadiMuhrat Logo" className="h-12 mx-auto md:mx-0" />
        <p className="mt-4 text-[#000000B2 70%] px-4 md:px-0">
          Join ShadiMuhrat today and take the first step toward a beautiful life ahead. 
          With easy-to-use features, advanced search options, and a dedicated support team, 
          we are here to guide you every step of the way. Let's create a timeless bond for a 
          lifetime of love and happiness.
        </p>

        {/* Mother Tongue Button */}
        
      </div>

      {/* Right Section - Register Form */}
      <div className="w-[29vw] h-[50.115vh] md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="bg-[#E3CBBE] p-6 rounded-4xl shadow-2xl mb-[0.058vw] w-[25vw] h-[35vw] -mt-29 z-10 max-w-sm">
          <h3 className="text-2xl font-semibold text-center text-[#C1645C]">Register Now</h3>
          <p className="text-center text-[#C1645C] text-sm mb-4">
            Join ShadiMuhrat today and take the first step toward a beautiful life ahead.
          </p>

          {/* Form */}
          <form className="space-y-4">
            <select className="w-full px-4 py-2 border text-[#C1645C] bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-400">
              <option>I am Looking For</option>
            </select>
            <select className="w-full px-4 py-2 border text-[#C1645C] bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-400">
              <option>Religion</option>
            </select>
            <input 
              type="number" 
              placeholder="Age" 
              className="w-full px-4 py-2 border text-[#C1645C] bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-[#C1645C]"
            />
            <input 
              type="tel" 
              placeholder="+91 123-456-1234" 
              className="w-full px-4 py-2 border text-[#C1645C] bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-[#C1645C]"
            />

            {/* Register Button */}
            <button 
              type="submit" 
              className="w-full mb-[1.25vwc:\Users\PRACHI\Downloads\Frame 134552.png] bg-red-500 text-white py-2 rounded-full text-lg font-semibold hover:bg-red-600"
            >
              Register For Free
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import  Apple from "../../assets/images/apple.svg";
import PlayStore from "../../assets/images/playstore.svg";
import Mobile1 from "../../assets/images/Mobile app.svg"

const Mobile = () => {
  return (
    <section className="bg-[#fff4f1] py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="max-w-md text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          DOWNLOAD APP &<br />GET THE VOUCHER!
        </h2>
        <p className="text-gray-600 mb-6">
          Get 30% off for first transaction using <br />
          Rondovision mobile app for now.
        </p>
        {/* Store Buttons */}
        <div className="flex gap-4 justify-center md:justify-start">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src={Apple}
              alt="Download on the App Store"
              className="h-12"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src={PlayStore}
              alt="Get it on Google Play"
              className="h-12"
            />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0 md:ml-12">
        <img
          src={Mobile1} // <-- Update this path!
          alt="App Promo"
          className="w-[250px] md:w-[300px] rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
};

export default Mobile;

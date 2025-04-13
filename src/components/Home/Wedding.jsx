import React from 'react';
import Icon from '../../assets/images/Icon.svg';

const Wedding = () => {
  return (
    <div className="bg-[#FFF6F4] py-12 flex justify-center font-ramaraja mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-6 max-w-6xl px-4">

        {/* Card 1 */}
        <div className="flex justify-center">
          <div className="bg-white rounded-[10px] text-center shadow-sm w-[310px] h-[310px] flex flex-col items-center pt-[50px] pb-[40px]">
            <img
              src={Icon}
              alt="Icon representing genuine profiles"
              className="w-16 h-16 rounded-full border border-gray-400 mb-6"
            />
            <h3 className="bg-gradient-to-r from-[#ED1C24] to-[#F05A8E] bg-clip-text text-transparent font-semibold text-lg mb-4">
              Genuine Profiles
            </h3>
            <p className="text-black font-medium text-sm px-6">
              Contact Genuine Profiles With 100% Verified Mobile
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex justify-center">
          <div className="bg-white rounded-[10px] text-center shadow-sm w-[310px] h-[310px] flex flex-col items-center pt-[50px] pb-[40px]">
            <img
              src={Icon}
              alt="Icon representing most trusted"
              className="w-16 h-16 rounded-full border border-gray-400 mb-6"
            />
            <h3 className="bg-gradient-to-r from-[#ED1C24] to-[#F05A8E] bg-clip-text text-transparent font-semibold text-lg mb-4">
              Most Trusted
            </h3>
            <p className="text-black  font-medium  text-sm px-6">
              The Most Trusted Wedding Matrimony Brand Lorem
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex justify-center">
          <div className="bg-white rounded-[10px] text-center shadow-sm w-[310px] h-[310px] flex flex-col items-center pt-[50px] pb-[40px]">
            <img
              src={Icon}
              alt="Icon representing 2000+ weddings"
              className="w-16 h-16 rounded-full border border-gray-400 mb-6"
            />
            <h3 className="bg-gradient-to-r from-[#ED1C24] to-[#F05A8E] bg-clip-text text-transparent font-semibold text-lg mb-4">
              2000+ Weddings
            </h3>
            <p className="text-black font-Raleway font-medium text-sm px-6">
              Lakhs of People Have Found Their Life Partner
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Wedding;

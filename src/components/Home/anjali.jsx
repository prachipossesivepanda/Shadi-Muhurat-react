import React from 'react';
import couple22 from "../../assets/images/Couple22.svg";
import couple23 from "../../assets/images/Couple23.svg";
import couple24 from "../../assets/images/Couple24.svg";
import couple25 from "../../assets/images/Couple25.svg";
import couple26 from "../../assets/images/Couple26.svg";
import couple27 from "../../assets/images/Couple27.svg";
import couple28 from "../../assets/images/Couple28.svg";
import couple29 from "../../assets/images/Couple29.svg";
const anjali = () => {
  // Image URLs from imports
  const leftImages = [
    { id: 1, url: couple22 },
    { id: 2, url: couple23 },
    { id: 5, url: couple27 },
    { id: 6, url: couple28 },
  ];
  
  const centerImage = { id: 3, url: couple29 };
  
  const rightImages = [
    { id: 4, url: couple25 },
    { id: 7, url: couple26 },
    { id: 8, url: couple27 },
  ];

  return (
    <div className="py-8 px-4 w-full max-w-4xl mx-auto text-center">
      {/* Header Section */}
      <div className=" text-center mb-6">
        <div>
          <p className="text-pink-400 text-sm font-medium">Share Your Love With</p>
          <h2 className="text-3xl font-bold text-center text-gray-900">Our Gallery</h2>
        </div>
        <div className="flex justify-end">
          {/* Vertical dots */}
          <div className="text-gray-400 cursor-pointer px-2">⋮</div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="flex justify-between gap-2">
        {/* Left Images - 2x2 grid */}
        <div className="grid grid-cols-2 gap-2 w-1/3">
          {leftImages.map((image) => (
            <div key={image.id} className="rounded-lg overflow-hidden">
              <img src={image.url} alt="Wedding photo" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        
        {/* Center Image */}
        <div className="w-1/3 rounded-lg overflow-hidden">
          <div className="relative h-full">
            <img src={couple29} alt="Featured wedding" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-opacity-20 flex flex-col justify-end p-4">
  
            </div>
          </div>
        </div>

        {/* Right Images - 2x2 grid with bottom right being the See All button */}
        <div className="grid grid-cols-2 gap-2 w-1/3">
          {rightImages.map((image) => (
            <div key={image.id} className="rounded-lg overflow-hidden">
              <img src={image.url} alt="Wedding photo" className="w-full h-full object-cover" />
            </div>
          ))}
          {/* See All Button */}
          <div className="rounded-lg bg-pink-500 flex items-center justify-center">
            <div className="text-center">
              <p className="text-white text-sm">See All</p>
              <span className="text-white">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default anjali;
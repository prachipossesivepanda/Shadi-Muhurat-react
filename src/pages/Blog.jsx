import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Engagement from '../assets/images/Engagement.svg'
import Background from '../assets/images/Background.svg'
import twoRing from '../assets/images/two ring.svg'


const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <img src={Engagement} alt="Engagement" className="w-full" />
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white">
          <h1 className="text-6xl font-serif font-Rosarivo lowercase" style={{ fontVariant: "small-caps" }}>
            Blog
          </h1>
          <p className="text-lg mt-2 font-poppins leading-6">Now Find your life partner Easy and fast.</p>
        </div>
        </div>
        <div className='bg-[#FCECEC] min-h-screen flex justify-center items-center p-10'>
            <img src={Background} alt="Background" className="w-full h-auto object-cover" />
            
      {/* Image Section */}
      <div className=""max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg>
        <img
          src={twoRing} // Replace with actual image URL
          alt="Wedding Rings"
          className="w-full h-64 object-cover"
        />
        <span className="absolute top-3 left-3 bg-gray-800 text-white text-xs px-3 py-1 rounded-md">
          Aug 12, 2024
        </span>
      </div>
        </div>
        
      <Footer />
    </div>
    
  );
}

export default Blog;

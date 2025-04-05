import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Engagement from '../assets/images/Engagement.svg'
import Background from '../assets/images/Background.svg'
import twoRing from '../assets/images/two ring.svg'
import ice from '../assets/images/ice.svg'
import Mrs from '../assets/images/Mrs.svg'
import Blog1 from '../assets/images/Blog1.svg'
import garden from '../assets/images/garden.svg'
import shadow from '../assets/images/shadow.svg'

const BlogDetails = () => {
  return (
    <div>
      <Navbar />
   <div className="relative w-full">
        <img src={Engagement} alt="Engagement" className="w-full h-auto object-cover" />
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white">
          <h1 className="text-6xl font-serif font-Rosarivo lowercase" style={{ fontVariant: 'small-caps' }}>
            Blog Details
          </h1>
          <p className="text-lg mt-2 font-poppins leading-6">Now Find your life partner Easy and fast.</p>
        </div>
        </div>
        <div className='relative'>
        <img src={Background} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-30 z-0" />
        <div className="bg-[#fff6f4] py-12 px-4 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        
        {/* Main Blog Content */}
        <div className="lg:col-span-2 space-y-10">
          {/* Blog Image */}
          <img src={ice} alt="Rings" className="rounded-2xl w-full h-auto" />



          <h2 className="text-2xl font-semibold text-gray-800">
            Quisque A Sem Risus Suspendisse Risus Augue, Rhoncus in Gravida Vel, Interdum Ac Elitm
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id magna imperdiet, pulvinar ex non, vulputate nisl. Nulla nec nisi ut ligula...
          </p>

          {/* Subsection with Image and List */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src={garden} alt="Flower" className="rounded-xl" />
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Nullam Dolor Elit Lorem Ipsum A Vehicula</li>
              <li>Nullam Dolor Elit Lorem Ipsum A Vehicula</li>
              <li>Nullam Dolor Elit Lorem Ipsum A Vehicula</li>
              <li>Nullam Dolor Elit Lorem Ipsum A Vehicula</li>
            </ul>
          </div>

          {/* Quote Section */}
          <div className="bg-white rounded-2xl p-6 border-l-4 border-pink-400">
            <div className="text-lg text-gray-700 italic">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate justo purus eget est fermentum, non sollicitudin ligula vehicula..."
              <br />
              <span className="block font-semibold mt-4 text-right">– Easton Farley</span>
            </div>
          </div>

          {/* Video/Photo Placeholder */}
          <div className="bg-gray-200 h-56 rounded-xl flex items-center justify-center text-gray-500 text-xl">
            661 × 227
          </div>

          {/* Additional Paragraphs */}
          <p className="text-gray-600">
            Duis eget velit fermentum, sagittis massa in, vehicula metus. In eu convallis justo. Integer sed luctus lorem...
          </p>
        </div>

        {/* Sidebar */}
        <div className="space-y-10">
          {/* Recent Post */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Recent Post</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <img src={shadow} className="w-16 h-16 rounded-lg" />
                <p className="text-gray-700 text-sm">Post Title Here</p>
              </li>
              <li className="flex items-center gap-3">
                <img src={Mrs} className="w-16 h-16 rounded-lg" />
                <p className="text-gray-700 text-sm">Post Title Here</p>
              </li>
              {/* Add more as needed */}
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">Wedding</span>
              <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">Love</span>
              <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">Bride</span>
              {/* Add more tags */}
            </div>
          </div>

          {/* Instagram */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Instagram</h3>
            <div className="grid grid-cols-3 gap-2">
              <img src={Blog1} className="rounded-lg" />
              <img src={Blog1} className="rounded-lg" />
              <img src={Blog1} className="rounded-lg" />
              {/* More images */}
            </div>
          </div>
        </div>

      
    

        </div>
        </div>
        </div>
        
      <Footer/>
    </div>
  );
};
export default BlogDetails;





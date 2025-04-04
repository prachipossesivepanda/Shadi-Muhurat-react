import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Engagement from '../assets/images/Engagement.svg';
import Map from '../assets/images/Map.svg';
import Mail from '../assets/images/Mail.svg';
import Chat from '../assets/images/chat.svg';

const ContactSection = () => {
  return (
    <div className="bg-[#FFF4EE] flex flex-col">
      <Navbar />
      <div className="relative">
        <img src={Engagement} alt="Engagement" className="w-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-800">Support When You Need It Most</h2>
          <p className="text-gray-600">Integer sodales auctor nibh, ultricies auctor massa rhoncus sed.</p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-white flex items-center justify-center">
                <img src={Map} alt="Locate Us" className="w-8 h-8" />
              </div>
              <p className="text-gray-600 text-sm">2922 Michigan Ave, Santa Monica, CA 90404, United States</p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-white flex items-center justify-center">
                <img src={Mail} alt="Mail Us" className="w-8 h-8" />
              </div>
              <p className="text-gray-600 text-sm">support@nihul.com</p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-white flex items-center justify-center">
                <img src={Chat} alt="Chat With Us" className="w-8 h-8" />
              </div>
              <p className="text-gray-600 text-sm">Nam mollis tortor a quam aliquet condimentum pretium.</p>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col w-full">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Say, Hello!</h3>

          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border-b border-gray-300 focus:outline-none focus:border-[#FF6B6B] py-2" />
            <input type="text" placeholder="Mobile Number" className="w-full border-b border-gray-300 focus:outline-none focus:border-[#FF6B6B] py-2" />
            <input type="text" placeholder="Type of Service Required" className="w-full border-b border-gray-300 focus:outline-none focus:border-[#FF6B6B] py-2" />
            <input type="email" placeholder="Email Address" className="w-full border-b border-gray-300 focus:outline-none focus:border-[#FF6B6B] py-2" />

            <button type="submit" className="bg-[#FF6B6B] text-white py-2 px-6 rounded-full hover:bg-red-500 transition mt-4 w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactSection;

import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Engagement from "../assets/images/Engagement.svg";
import twoRing from "../assets/images/two ring.svg";
import ice from "../assets/images/ice.svg";
import Mrs from "../assets/images/Mrs.svg";
import Blog1 from "../assets/images/Blog1.svg";
import Couple13 from "../assets/images/Couple-13.svg";
import Couple2 from "../assets/images/Couple 2.svg";
import Couple14 from "../assets/images/Couple-14.svg";
import pandal from "../assets/images/Pandal.svg";
import Christian from "../assets/images/Christian.svg";
import Couple9 from "../assets/images/Couple 9.svg";

const Blog = () => {
  return (
    <div className="bg-[#FCECEC]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full">
                    <img
                      src={Engagement}
                      alt="Engagement"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute top-1/2 left-[4vw] md:left-[7.5vw] transform -translate-y-1/2 text-white">
                      <h1
                        className="text-[5vw] md:text-[6vw]"
                        style={{ fontFamily: "Rosarivo, serif" }}
                      >
                        Blog
                      </h1>
                      <p className="text-[3vw] md:text-[1vw] mt-[1vw] font-light leading-snug">
                        Now Find your life partner Easy and fast.
                      </p>
                    </div>
                  </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="relative z-10 flex flex-col-reverse lg:flex-row-reverse gap-10 items-start justify-between">
          
          {/* Sidebar + Image Below It */}
          <div className="w-full lg:w-[22rem] flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border border-gray-300 rounded-md p-2"
              />

              <div>
                <h3 className="text-lg font-bold mb-2">Recent Posts</h3>
                <ul className="space-y-4 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <img src={twoRing} alt="Post 1" className="w-12 h-12 object-cover rounded-md" />
                    <div>
                      <p className="text-xs font-semibold">26th September, 2024</p>
                      <p>Quisque a sem risus.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src={ice} alt="Post 2" className="w-12 h-12 object-cover rounded-md" />
                    <div>
                      <p className="text-xs font-semibold">26th September, 2024</p>
                      <p>Best Wedding Venues</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src={Mrs} alt="Post 3" className="w-12 h-12 object-cover rounded-md" />
                    <div>
                      <p className="text-xs font-semibold">26th September, 2024</p>
                      <p>Top Wedding Dresses</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-Raleway mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-200 px-3 py-1 text-[#EF3B59] rounded-full text-sm">Connection</span>
                  <span className="bg-gray-200 px-3 py-1 text-[#EF3B59] rounded-full text-sm">Match Making</span>
                  <span className="bg-gray-200 px-3 py-1 text-[#EF3B59] rounded-full text-sm">Love</span>
                  <span className="bg-gray-200 px-3 py-1 text-[#EF3B59] rounded-full text-sm">Soulmate search</span>
                  <span className="bg-gray-200 px-3 py-1 text-[#EF3B59] rounded-full text-sm">Perfect Pairing</span>
                  <span className="bg-gray-200 px-3 py-1 text-[#EF3B59] rounded-full text-sm">Romance</span>
                  <span className="bg-gray-200 px-3 py-1 text-[#EF3B59] rounded-full text-sm">Date Your way</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">Instagram</h3>
                <div className="grid grid-cols-3 gap-2">
                  <img src={Couple13} alt="Instagram 1" className="w-full h-16 object-cover rounded-2xl" />
                  <img src={pandal} alt="Instagram 2" className="w-full h-16 object-cover rounded-2xl" />
                  <img src={Couple2} alt="Instagram 3" className="w-full h-16 object-cover rounded-2xl" />
                  <img src={Couple14} alt="Instagram 4" className="w-full h-16 object-cover rounded-2xl" />
                  <img src={Christian} alt="Instagram 5" className="w-full h-16 object-cover rounded-2xl" />
                  <img src={Couple9} alt="Instagram 6" className="w-full h-16 object-cover rounded-2xl" />
                </div>
              </div>
            </div>

            {/* Sidebar Image */}
            <div>
              <img src={Blog1} alt="Blog1" className="w-full h-auto object-cover rounded-xl" />
            </div>
          </div>

          {/* Blog Cards Section */}
          <div className="flex-1  w-[22vw] h-[30vw] space-y-6">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full">
              <img
                src={twoRing}
                alt="Blog1"
                className="w-full h-[240px] object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold font-serif my-2">
                  6 Things You Need To Prepare For Your Wedding Day
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Planning a wedding is never easy. From deciding on a venue to
                  selecting the right photographer...
                </p>
                <a href="#" className="font-medium text-[red] hover:underline text-sm">
                  Read more
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full">
              <div className="bg-gray-200 w-full h-[200px] flex items-center justify-center">
                <img src={ice} alt="Ice" className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold font-serif mt-1">
                  Key Steps To Get Ready For Your Big Day
                </h3>
                <p className="text-gray-700 text-sm mt-2">
                  Your wedding is the most beautiful day of your life, so let’s
                  make it stress-free...
                </p>
                <a href="#" className="font-medium text-[red] hover:underline text-sm">
                  Read more
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full">
              <div className="bg-gray-200 w-full h-[200px] flex items-center justify-center">
                <img src={Mrs} alt="Mrs" className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold font-serif mt-1">
                  How To Choose The Perfect Wedding Dress
                </h3>
                <p className="text-gray-700 text-sm mt-2">
                  Discover the best wedding dress styles that suit your taste...
                </p>
                <a href="#" className="font-medium text-[red] hover:underline text-sm">
                  Read more
                </a>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex w-full justify-center mt-4 gap-2">
              <button className="w-3 h-3 bg-[#EF3B59] rounded-full" aria-label="Page 1"></button>
              <button className="w-3 h-3 bg-gray-300 rounded-full" aria-label="Page 2"></button>
              <button className="w-3 h-3 bg-gray-300 rounded-full" aria-label="Page 3"></button>
              <button className="w-3 h-3 bg-gray-300 rounded-full" aria-label="Page 4"></button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;

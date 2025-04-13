import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Couple3 from "../../assets/images/Couple3.svg";
import Couple22 from "../../assets/images/Couple22.svg";
import Couple25 from "../../assets/images/Couple25.svg";

const testimonials = [
  {
    id: 1,
    text: "At Shadi Muharat, We Take Pride in Helping Couples Create The Wedding Of Their Dreams. But Don't Just Take Our Word For It — Hear What Our Happy Couples Have To Say! We Believe in Making Every Celebration Unique, And It's Our Joy To Be Part Of Such A Special Moment In Your Lives.",
    name: "Dipak Hilal Patil",
    email: "dipak2511@gmail.com",
    image: Couple3,
  },
  {
    id: 2,
    text: "Amazing service! Shadi Muharat made our wedding day unforgettable with their unique planning and attention to detail. Highly recommended!",
    name: "Priya Sharma",
    email: "priya.sharma@gmail.com",
    image: Couple22,
  },
  {
    id: 3,
    text: "The team at Shadi Muharat turned our vision into reality. Every moment was perfect, and we couldn’t be happier!",
    name: "Rohan Mehta",
    email: "rohan.mehta@gmail.com",
    image: Couple25,
  },
];

const TestimonialSection = () => {
  return (
    <div className="py-14 px-4 bg-[#FFF4F4] relative">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">What They Say About Us</h2>
        <p className="text-sm text-gray-500 mt-1">Trusted by thousands, loved by many</p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="max-w-5xl mx-auto"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="relative bg-white rounded-xl shadow-md px-10 py-8 max-w-4xl mx-auto">
              {/* Text Content */}
              <div className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p>{testimonial.text}</p>
              </div>

              {/* Image Absolute Positioned */}
              <div className="absolute right-[-70px] top-[-10px] w-[180px] h-[220px] border-4 border-pink-200 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name & Email */}
            <div className="text-center mt-20">
              <p className="text-lg font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.email}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSection;

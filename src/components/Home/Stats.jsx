import React from "react";
import { ChevronRight } from "lucide-react"; // Icon for navigation
import Strong from "../../assets/images/Strong.svg";
import Traditions from "../../assets/images/Traditions.svg";
import World from "../../assets/images/World.svg";
import Two from "../../assets/images/two hearts.svg";

const StatsData = [
  {
    imgSrc: Strong,
    title: "Bonds Are Built In The Toughest Times",
    description:
      "Every marriage has challenges. But overcoming them strengthens the bond. This blog shares expert tips and inspiring success stories.",
  },
  {
    imgSrc: Traditions,
    title: "Traditions Evolve, But Love Remains Timeless",
    description:
      "As society evolves, so do relationships. This article dives into how modern couples balance love, careers, and traditions while redefining the essence of marriage.",
  },
  {
    imgSrc: World,
    title: "A World Of Love, One Shared Promise",
    description:
      "Marriage is more than a ceremony. It's a lifelong commitment. Explore heartwarming stories of couples who stood by their promises, through thick and thin.",
  },
  {
    imgSrc: Two,
    title: "Two Hearts, One Journey, Infinite Love",
    description:
      "Love is a journey, not a destination. This blog shares insights on how couples navigate through different phases of life, growing together in love.",
  },
];

const Stats = () => {
  return (
    <section className="bg-pink-100 py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-2">
        Personalized matchmaking services designed to connect you with your ideal life partner, based on compatibility, values, and aspirations.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {StatsData.map((service, index) => (
          <div key={index} className="relative group bg-white shadow-lg rounded-2xl overflow-hidden">
            {/* Image - Updated for responsive and wider aspect */}
            <img src={service.imgSrc} alt={service.title} className="w-full h-72 object-cover" />

            {/* Hover Content */}
            <div className="absolute bottom-0 left-0 w-full bg-white p-4 transition-all duration-500 ease-in-out h-20 group-hover:h-48 overflow-hidden">
              {/* Title */}
              <p className="text-pink-600 font-bold text-lg">{service.title}</p>

              {/* Description - Adjusted for responsiveness */}
              <p className="text-gray-700 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                {service.description}
              </p>

              {/* Arrow Icon */}
              <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md group-hover:bg-pink-500 transition duration-300">
                <ChevronRight className="h-5 w-5 text-gray-700 group-hover:text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

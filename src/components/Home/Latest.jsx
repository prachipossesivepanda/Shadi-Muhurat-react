import React from 'react'
import Goa from "../../assets/images/Goa.svg";
import Night from "../../assets/images/Night.svg";
import Black from "../../assets/images/Black.svg";

export default function Latest() {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      image: Goa,
      date: "APRIL 15, 2024",
      title: "Vestibulum Id Dui Consectetur Ultrices.",
      description: "Vestibulum id dui consectetur, elementum nisi posuere lorem ipsum sit amet placet.",
      link: "#"
    },
    {
      id: 2,
      image: Night,
      date: "MAY 10, 2024",
      title: "Vestibulum Id Dui Consectetur Ultrices.",
      description: "Vestibulum id dui consectetur, elementum nisi posuere vestibulum etiam odio amet placet.",
      link: "#"
    },
    {
      id: 3,
      image: Black,
      date: "JUNE 12, 2024",
      title: "Vestibulum Id Dui Consectetur Ultrices.",
      description: "Vestibulum id dui consectetur, elementum nisi posuere vestibulum placet etiam.",
      link: "#"
    }
  ];

  // Render blog cards without map
  const renderBlogPosts = () => {
    const items = [];

    for (let i = 0; i < blogPosts.length; i++) {
      const post = blogPosts[i];
      items.push(
        <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="relative">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="absolute bottom-3 left-3 bg-black rounded-full px-3 py-1 text-xs font-medium text-white">
              {post.date}
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-lg mb-2">{post.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{post.description}</p>
            <a 
              href={post.link} 
              className="text-red-400 text-sm font-medium hover:text- transition-colors duration-200"
            >
              READ MORE
            </a>
          </div>
        </div>
      );
    }

    return items;
  };

  return (
    <div className="bg-amber-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-Raleway font-medium mb-8 text-left">Latest News & Blog</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderBlogPosts()}
        </div>
      </div>
    </div>
  );
}

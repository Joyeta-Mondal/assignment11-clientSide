import React from "react";
import { useNavigate } from "react-router-dom";

const BookCategories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      title: "Arts & Music",
      description: "Explore books about arts, music, drawing, and fashion.",
      image:
        "https://img.freepik.com/free-photo/digital-art-portrait-person-listening-music-headphones_23-2151065133.jpg",
      route: "/all-books",
    },
    {
      id: 2,
      title: "Science & Tech",
      description:
        "Dive into the world of science, technology, and innovation.",
      image:
        "https://img.freepik.com/free-photo/ai-nuclear-energy-industry-innovation-smart-grid-disruptive-technology_53876-143121.jpg",
      route: "/all-books",
    },
    {
      id: 3,
      title: "Novels & Fictions",
      description: "Discover captivating stories and fictional adventures.",
      image:
        "https://img.freepik.com/free-photo/turn-page-collage_23-2149876327.jpg",
      route: "/all-books",
    },
    {
      id: 4,
      title: "History",
      description:
        "Learn about the magical history of humankind, facts, and autobiographies.",
      image:
        "https://img.freepik.com/premium-vector/history-textbook-symbols-icons-school-board_53500-1897.jpg?semt=ais_hybrid",
      route: "/all-books",
    },
  ];

  return (
    <section className="py-8 bg-purple-200 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white animate-fade-in">
          Book Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="card bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-4 text-center cursor-pointer hover:shadow-xl transition-all flex flex-col animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }} // Staggered animation delay
              onClick={() => navigate(category.route)}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-[20rem] object-cover rounded-md mb-4 hover:scale-105 transition-transform"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {category.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {category.description}
              </p>
              <button
                className="bg-purple-500 text-white py-2 px-4 rounded shadow hover:bg-indigo-600 mt-auto transform hover:scale-105 transition-transform"
                onClick={() => navigate(category.route)}
              >
                Explore all the books!
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookCategories;

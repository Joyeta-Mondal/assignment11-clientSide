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
      route: "/categories/arts-and-music",
    },
    {
      id: 2,
      title: "Science & Tech",
      description:
        "Dive into the world of science, technology, and innovation.",
      image:
        "https://img.freepik.com/free-photo/ai-nuclear-energy-industry-innovation-smart-grid-disruptive-technology_53876-143121.jpg",
      route: "/categories/science-and-tech",
    },
    {
      id: 3,
      title: "Novels & Fictions",
      description: "Discover captivating stories and fictional adventures.",
      image:
        "https://img.freepik.com/free-photo/turn-page-collage_23-2149876327.jpg",
      route: "/categories/novels-and-fictions",
    },
    {
      id: 4,
      title: "Religion & Facts",
      description:
        "Learn about different religions, facts, and autobiographies.",
      image:
        "https://img.freepik.com/premium-vector/history-textbook-symbols-icons-school-board_53500-1897.jpg?semt=ais_hybrid",
      route: "/categories/religion-and-facts",
    },
  ];

  return (
    <section className="py-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Book Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="card bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-4 text-center cursor-pointer hover:shadow-xl transition-all flex flex-col"
              onClick={() => navigate(category.route)}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-[20rem] object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {category.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {category.description}
              </p>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600 mt-auto"
                onClick={() => navigate(category.route)}
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookCategories;

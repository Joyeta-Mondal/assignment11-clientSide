import React, { useEffect, useState } from "react";

const NewComingBooks = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode(); // Check initial mode

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const books = [
    {
      id: 1,
      title: "The Great Adventure",
      author: "John Doe",
      image:
        "https://m.media-amazon.com/images/I/61kDar6tP-L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 2,
      title: "Mystery of the Dark Forest",
      author: "Jane Smith",
      image:
        "https://m.media-amazon.com/images/I/71a8b1m5IRL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 3,
      title: "Dan Brown's",
      author: "Dan Brown",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/l/4/m/the-robert-langdon-collection-5-books-box-set-original-imaghmhs4qdggxu2.jpeg?q=90&crop=false",
    },
    {
      id: 4,
      title: "Secrets of the Lost City",
      author: "Sarah Davis",
      image:
        "https://m.media-amazon.com/images/I/61g19Sbo05L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 5,
      title: "The Silent Ocean",
      author: "David White",
      image:
        "https://m.media-amazon.com/images/I/714yuzd9I9L._UF1000,1000_QL80_.jpg",
    },
    {
      id: 6,
      title: "Journey to the Future",
      author: "Emily Turner",
      image:
        "https://dragonfly.eco/wp-content/uploads/2016/06/journey-to-the-future-book.png",
    },
  ];

  return (
    <section
      className={`py-8 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          New Coming Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className={`card w-full shadow-lg rounded-lg p-4 ${
                isDarkMode
                  ? "bg-gray-800 text-white hover:shadow-gray-700"
                  : "bg-white text-gray-800 hover:shadow-2xl"
              } transition duration-300`}
            >
              <img
                className="w-full h-[20rem] object-cover rounded-md mb-4"
                src={book.image}
                alt={book.title}
              />
              <div className="text-center">
                <h3 className="text-2xl font-semibold">{book.title}</h3>
                <p>By : {book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewComingBooks;

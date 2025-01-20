// import { FaArrowRight } from "react-icons/fa";

// const NewComingBooks = () => {
//   const books = [
//     {
//       id: 1,
//       title: "The Great Adventure",
//       author: "John Doe",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       id: 2,
//       title: "Mystery of the Dark Forest",
//       author: "Jane Smith",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       id: 3,
//       title: "Journey to the Unknown",
//       author: "Mark Lee",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       id: 4,
//       title: "Secrets of the Lost City",
//       author: "Sarah Davis",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       id: 5,
//       title: "The Silent Ocean",
//       author: "David White",
//       image: "https://via.placeholder.com/150",
//     },
//   ];

//   return (
//     <section className="py-8 w-10/12 mx-auto">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-6 text-center">
//           New Coming Books
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {books.map((book) => (
//             <div
//               key={book.id}
//               className="card w-full bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition duration-300"
//             >
//               <img
//                 className="w-full h-48 object-cover rounded-md mb-4"
//                 src={book.image}
//                 alt={book.title}
//               />
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   {book.title}
//                 </h3>
//                 <p className="text-gray-600">{book.author}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center mt-6">
//           <button className="btn btn-primary flex items-center gap-2">
//             <span>More</span>
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewComingBooks;

// import React from "react";
// import { FaArrowRight } from "react-icons/fa";

// const NewComingBooks = () => {
//   const books = [
//     {
//       id: 1,
//       title: "The Great Adventure",
//       author: "John Doe",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       id: 2,
//       title: "Mystery of the Dark Forest",
//       author: "Jane Smith",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       id: 3,
//       title: "Journey to the Unknown",
//       author: "Mark Lee",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       id: 4,
//       title: "Secrets of the Lost City",
//       author: "Sarah Davis",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       id: 5,
//       title: "The Silent Ocean",
//       author: "David White",
//       image: "https://via.placeholder.com/150",
//     },
//   ];

//   return (
//     <section className="py-8 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
//           New Coming Books
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {books.map((book) => (
//             <div
//               key={book.id}
//               className="card w-full bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition duration-300"
//             >
//               <img
//                 className="w-full h-48 object-cover rounded-md mb-4"
//                 src={book.image}
//                 alt={book.title}
//               />
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   {book.title}
//                 </h3>
//                 <p className="text-gray-600">{book.author}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center mt-6">
//           <button className="btn btn-primary flex items-center gap-2">
//             <span>More</span>
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewComingBooks;

import React from "react";
import { FaArrowRight } from "react-icons/fa";

const NewComingBooks = () => {
  const books = [
    {
      id: 1,
      title: "The Great Adventure",
      author: "John Doe",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Mystery of the Dark Forest",
      author: "Jane Smith",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Journey to the Unknown",
      author: "Mark Lee",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Secrets of the Lost City",
      author: "Sarah Davis",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "The Silent Ocean",
      author: "David White",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Exploring the Future",
      author: "Emily Turner",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="py-8  bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          New Coming Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="card w-full bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition duration-300"
            >
              <img
                className="w-full h-48 object-cover rounded-md mb-4"
                src={book.image}
                alt={book.title}
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {book.title}
                </h3>
                <p className="text-gray-600">{book.author}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="btn btn-primary flex items-center gap-2">
            <span>More</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewComingBooks;

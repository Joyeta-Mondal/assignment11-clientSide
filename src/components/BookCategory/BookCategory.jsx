// import { FaStar } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import Rating from "react-rating-stars-component";

// const BookCategory = () => {
//   const navigate = useNavigate();

//   const bookCategories = [
//     { id: 1, name: "Fiction", image: "https://via.placeholder.com/150" },
//     { id: 2, name: "Science", image: "https://via.placeholder.com/150" },
//     { id: 3, name: "History", image: "https://via.placeholder.com/150" },
//     { id: 4, name: "Mystery", image: "https://via.placeholder.com/150" },
//     { id: 5, name: "Biography", image: "https://via.placeholder.com/150" },
//     { id: 6, name: "Fantasy", image: "https://via.placeholder.com/150" },
//   ];

//   const handleCategoryClick = (category) => {
//     navigate(`/category/${category}`);
//   };

//   return (
//     <div className="w-full px-4 py-10 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white">
//       {/* Book Categories Section */}
//       <div className="max-w-6xl mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-3xl font-bold">Book Categories</h2>
//           <button
//             onClick={() => navigate("/categories")}
//             className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
//           >
//             BOOK CATEGORIES
//           </button>
//         </div>

//         {/* Book Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {bookCategories.map((book) => (
//             <div
//               key={book.id}
//               className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
//             >
//               <img
//                 src={book.image}
//                 alt={book.name}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold">{book.name}</h3>
//                 <p className="text-gray-500 dark:text-gray-400 mb-4">
//                   By Author Name
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <Rating
//                     value={4}
//                     edit={false}
//                     size={20}
//                     activeColor="#ffd700"
//                     emptyIcon={<FaStar />}
//                     fullIcon={<FaStar />}
//                   />
//                   <button
//                     onClick={() => handleCategoryClick(book.name)}
//                     className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
//                   >
//                     Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookCategory;

import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Rating from "react-rating-stars-component";

const BookCategory = () => {
  const navigate = useNavigate();

  const bookCategories = [
    { id: 1, name: "Fiction", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Science", image: "https://via.placeholder.com/150" },
    { id: 3, name: "History", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Mystery", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Biography", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Fantasy", image: "https://via.placeholder.com/150" },
  ];

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="w-full px-4 py-16 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white">
      {/* Book Categories Section */}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Book Categories</h2>
          <button
            onClick={() => navigate("/categories")}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
          >
            BOOK CATEGORIES
          </button>
        </div>

        {/* Book Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bookCategories.map((book) => (
            <div
              key={book.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={book.image}
                alt={book.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{book.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  By Author Name
                </p>
                <div className="flex items-center justify-between">
                  <Rating
                    value={4}
                    edit={false}
                    size={20}
                    activeColor="#ffd700"
                    emptyIcon={<FaStar />}
                    fullIcon={<FaStar />}
                  />
                  <button
                    onClick={() => handleCategoryClick(book.name)}
                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCategory;

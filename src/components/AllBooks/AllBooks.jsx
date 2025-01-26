// import { useEffect, useState } from "react";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
// import BookCard from "../BookCard/BookCard";

// const AllBooks = () => {
//   const [books, setBooks] = useState([]);
//   const axiosPublic = useAxiosPublic();

//   useEffect(() => {
//     axiosPublic.get(`/api/books`).then((res) => setBooks(res.data));
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-4xl font-bold text-center mb-6">
//         All Books ({books.length})
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {books.map((book) => (
//           <BookCard key={book._id} book={book} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllBooks;

import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import BookCard from "../BookCard/BookCard";
import { Link } from "react-router-dom";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get(`/api/books`).then((res) => setBooks(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold text-center mb-6">
        All Books ({books.length})
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book._id} className="p-4 border rounded-lg shadow-lg bg-white w-full">
            <BookCard book={book} />
            <Link to={`/book/update/${book._id}`}>
              <button className="btn btn-primary mt-2 w-full">Update</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;


import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import BookCard from "../BookCard/BookCard";
import { Link } from "react-router-dom";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [viewMode, setViewMode] = useState("card"); // Track view mode
  const [showAvailable, setShowAvailable] = useState(false); // Filter to show available books only
  const axiosPublic = useAxiosPublic();

  // Fetch all books (only once when the component mounts)
  useEffect(() => {
    axiosPublic.get(`/api/books`).then((res) => {
      setBooks(res.data);
      setFilteredBooks(res.data); // Initially show all books
    });
  }, []); // Empty dependency array ensures this runs once on mount

  // Handle the filter for available books (quantity > 0)
  const handleFilterAvailable = () => {
    setShowAvailable((prev) => !prev); // Toggle availability filter
  };

  // Update filteredBooks based on availability filter
  useEffect(() => {
    if (showAvailable) {
      setFilteredBooks(books.filter((book) => book.quantity > 0));
    } else {
      setFilteredBooks(books);
    }
  }, [showAvailable, books]); // Only update filteredBooks when showAvailable or books change

  // Handle View Mode change (Card/Table view)
  const handleViewModeChange = (e) => {
    setViewMode(e.target.value);
  };

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold text-center mb-6">
        All Books ({filteredBooks.length})
      </h2>

      {/* Filter Button */}
      <button
        onClick={handleFilterAvailable}
        className="btn btn-secondary mb-4"
      >
        {showAvailable ? "Show All Books" : "Show Available Books"}
      </button>

      {/* View Mode Dropdown */}
      <select
        value={viewMode}
        onChange={handleViewModeChange}
        className="mb-4 p-2 border rounded-md"
      >
        <option value="card">Card View</option>
        <option value="table">Table View</option>
      </select>

      {/* Render books based on selected view mode */}
      {viewMode === "card" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book._id}
              className="p-4 border rounded-lg shadow-lg bg-white w-full"
            >
              <BookCard book={book} />
              <Link to={`/book/update/${book._id}`}>
                <button className="btn btn-primary mt-2 w-full">Update</button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        // Table View
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Image</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Author</th>
                <th className="border px-4 py-2">Category</th>
                <th className="border px-4 py-2">Quantity</th>
                <th className="border px-4 py-2">Rating</th>
                <th className="border px-4 py-2">Details</th>

                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book) => (
                <tr key={book._id}>
                  <td className="border px-4 py-2">
                    <img
                      src={book.image || "https://via.placeholder.com/150"}
                      alt={book.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="border px-4 py-2">{book.name}</td>
                  <td className="border px-4 py-2">{book.author}</td>
                  <td className="border px-4 py-2">{book.category}</td>
                  <td className="border px-4 py-2">{book.quantity}</td>
                  <td className="border px-4 py-2">{book.rating} ⭐</td>
                  <td className="border px-4 py-2">
                    <Link to={`/book/details/${book._id}`} className="w-full">
                      <button className="btn btn-primary mt-2 w-full">
                        View Details
                      </button>
                    </Link>
                  </td>

                  <td className="border px-4 py-2">
                    <Link to={`/book/update/${book._id}`}>
                      <button className="btn btn-primary">Update</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllBooks;

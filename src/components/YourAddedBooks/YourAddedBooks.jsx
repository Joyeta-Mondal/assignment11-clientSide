import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import BookCard from "../BookCard/BookCard";

const YourAddedBooks = () => {
  const [books, setBooks] = useState([]);
  const [viewMode, setViewMode] = useState("card"); // Track view mode
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  // Fetch books added by the user
  useEffect(() => {
    if (user?.email) {
      axiosPublic
        .get(`/api/books?userEmail=${user.email}`)
        .then((res) => {
          setBooks(res.data);
        })
        .catch((error) => {
          console.error("Error fetching books:", error);
          toast.error("Failed to fetch books. Please try again.");
        });
    }
  }, [user?.email, axiosPublic]);

  // Handle book deletion
  const handleDeleteBook = async (bookId) => {
    try {
      const response = await axiosPublic.delete(`/api/books/${bookId}`);
      if (response.data.deletedCount > 0) {
        toast.success("Book deleted successfully!");
        setBooks((prevBooks) =>
          prevBooks.filter((book) => book._id !== bookId)
        );
      }
    } catch (error) {
      console.error("Error deleting book:", error);
      toast.error("Failed to delete book. Please try again.");
    }
  };

  // Handle View Mode change (Card/Table view)
  const handleViewModeChange = (e) => {
    setViewMode(e.target.value);
  };

  return (
    <div className="p-4 animate-fade-in">
      <h2 className="text-4xl font-bold text-center mb-6">
        Your Added Books ({books.length})
      </h2>

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
          {books.map((book) => (
            <div
              key={book._id}
              className="p-4 border rounded-lg shadow-lg bg-white w-full animate-slide-in"
            >
              <BookCard book={book} />
              <div className="flex gap-2 mt-2">
                <Link to={`/book/update/${book._id}`}>
                  <button className="btn btn-primary w-full">Update</button>
                </Link>
              </div>
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
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book._id} className="animate-slide-in">
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
                    <div className="flex gap-2">
                      <Link to={`/book/update/${book._id}`}>
                        <button className="btn btn-primary">Update</button>
                      </Link>
                    </div>
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

export default YourAddedBooks;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const BorrowedBooks = ({ user }) => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      toast.warning("Please log in to view your borrowed books.");
      navigate("/login");
      return;
    }

    // Fetch borrowed books for the logged-in user
    const fetchBorrowedBooks = async () => {
      try {
        const { data } = await axios.get(
          `/api/borrowed-books?email=${user.email}`
        );
        setBorrowedBooks(data);
      } catch (error) {
        toast.error("Failed to fetch borrowed books.");
        console.error(error);
      }
    };

    fetchBorrowedBooks();
  }, [user, navigate]);

  const handleReturn = async (bookId) => {
    try {
      // Increment book quantity by 1
      await axios.patch(`/api/books/${bookId}`, {
        $inc: { quantity: 1 },
      });

      // Remove book from borrowed books list
      await axios.delete(`/api/borrowed-books/${bookId}`, {
        data: { email: user.email },
      });

      // Update UI
      setBorrowedBooks((prevBooks) =>
        prevBooks.filter((book) => book.bookId !== bookId)
      );

      toast.success("Book returned successfully!");
    } catch (error) {
      toast.error("Failed to return the book.");
      console.error(error);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <section className="py-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Borrowed Books
        </h2>
        {borrowedBooks.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">
            You haven't borrowed any books yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {borrowedBooks.map((book) => (
              <div
                key={book.bookId}
                className="card bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {book.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Category: {book.category}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Borrowed Date:{" "}
                  {new Date(book.borrowedDate).toLocaleDateString()}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Return Date: {new Date(book.returnDate).toLocaleDateString()}
                </p>
                <button
                  onClick={() => handleReturn(book.bookId)}
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded shadow hover:bg-red-600"
                >
                  Return
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BorrowedBooks;

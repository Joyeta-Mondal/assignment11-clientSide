import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import BorrowImg from "../../assets/borrowBook.jpg";
const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      axiosPublic
        .get(`/api/borrowed-books?email=${user.email}`)
        .then((res) => {
          setBorrowedBooks(res.data);
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [user]);

  const handleReturn = (borrowId) => {
    axiosPublic
      .post(`/api/return-book/${borrowId}`)
      .then(() => {
        setBorrowedBooks((prev) =>
          prev.filter((book) => book._id !== borrowId)
        );
      })
      .catch((err) => console.error(err));
  };

  if (loading) {
    return (
      <p className="text-center text-white text-xl">
        Loading borrowed books...
      </p>
    );
  }

  return (
    <div
      className="relative min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${BorrowImg})` }} // Set background image
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 max-w-6xl w-full bg-white/35 bg-opacity-90 p-8 rounded-lg shadow-2xl">
        <h2 className="text-4xl font-bold text-center text-gray-100 mb-6">
          Borrowed Books ({borrowedBooks.length})
        </h2>

        {borrowedBooks.length === 0 ? (
          <p className="text-center text-gray-700">No borrowed books found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {borrowedBooks.map((borrowed) => (
              <div
                key={borrowed._id}
                className="border border-gray-200 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg transition transform hover:scale-105"
              >
                <img
                  src={borrowed.bookDetails?.image || "/placeholder-image.jpg"}
                  alt={borrowed.bookDetails?.name || "No Name"}
                  className="w-full h-40 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-semibold text-indigo-900">
                  {borrowed.bookDetails?.name || "No Name"}
                </h3>
                <p className="text-gray-600">
                  {borrowed.bookDetails?.category || "No Category"}
                </p>
                <p className="text-sm">
                  <strong>Borrowed Date:</strong>{" "}
                  {new Date(borrowed.borrowedAt).toLocaleDateString()}
                </p>
                <p className="text-sm">
                  <strong>Return Date:</strong>{" "}
                  {new Date(borrowed.returnDate).toLocaleDateString()}
                </p>
                <button
                  onClick={() => handleReturn(borrowed._id)}
                  className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 w-full transition"
                >
                  Return
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BorrowedBooks;

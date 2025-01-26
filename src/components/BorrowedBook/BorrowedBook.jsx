import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (user?.email) {
      // console.log("Fetching borrowed books for:", user.email);
      setLoading(true);
      axiosPublic
        .get(`/api/borrowed-books?email=${user.email}`)
        .then((res) => {
          // console.log("API Response:", res.data);
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
    return <p>Loading borrowed books...</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Borrowed Books ({borrowedBooks.length})
      </h2>
      {borrowedBooks.length === 0 ? (
        <p className="text-center text-gray-600">No borrowed books found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {borrowedBooks.map((borrowed) => (
            <div
              key={borrowed._id}
              className="border p-4 rounded-lg shadow-md bg-white"
            >
              <img
                src={borrowed.bookDetails?.image || "placeholder-image.jpg"}
                alt={borrowed.bookDetails?.name || "No Name"}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-bold">
                {borrowed.bookDetails?.name || "No Name"}
              </h3>
              <p className="text-sm text-gray-600">
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
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
              >
                Return
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BorrowedBooks;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import BorrowModal from "../BorrowModal/BorrowModal";
import useAuth from "../../hooks/useAuth";

const BookDetails = () => {
  const {user}=useAuth()
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const [book, setBook] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axiosPublic.get(`/api/books/${id}`).then((res) => setBook(res.data));
  }, [id]);

  const handleBorrow = async (returnDate) => {
    try {
      const { data } = await axiosPublic.post(`/api/borrow/${id}`, {
        userId: user?.email, // Replace with actual user ID from authentication
        returnDate,
      });
      console.log(data);
      setBook((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
      setShowModal(false);
    } catch (error) {
      console.error("Failed to borrow book:", error);
    }
  };

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto border rounded-lg shadow-md">
      <img
        src={book.image}
        alt={book.name}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <h1 className="text-2xl font-bold">{book.name}</h1>
      <p className="text-sm text-gray-500">{book.author}</p>
      <p className="text-sm">
        <span className="font-semibold">Category:</span> {book.category}
      </p>
      <p className="text-sm">
        <span className="font-semibold">Description:</span> {book.description}
      </p>
      <p className="text-sm">
        <span className="font-semibold">Quantity:</span> {book.quantity}
      </p>
      <p className="text-sm text-gray-500">
        <span className="font-semibold">Added:</span>{" "}
        {new Date(book.createdAt).toLocaleDateString()}
      </p>
      <button
        className="mt-4 bg-blue-500 text-white p-2 rounded w-full disabled:bg-gray-400"
        disabled={book.quantity === 0}
        onClick={() => setShowModal(true)}
      >
        {book.quantity === 0 ? "Out of Stock" : "Borrow"}
      </button>

      {showModal && (
        <BorrowModal
          book={book}
          onClose={() => setShowModal(false)}
          onBorrow={handleBorrow}
        />
      )}
    </div>
  );
};

export default BookDetails;

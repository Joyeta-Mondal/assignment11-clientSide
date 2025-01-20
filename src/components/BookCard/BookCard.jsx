import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "react-modal";
import axios from "axios";

Modal.setAppElement("#root");

const BookCard = ({ book, user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [returnDate, setReturnDate] = useState("");
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    if (!user) {
      toast.warning("Please log in to view book details.");
      navigate("/login");
    } else {
      navigate(`/book/${book.id}`);
    }
  };

  const handleBorrow = async () => {
    if (!user) {
      toast.warning("Please log in to borrow books.");
      navigate("/login");
      return;
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!returnDate) {
      toast.error("Please select a return date.");
      return;
    }

    try {
      const updatedBook = await axios.patch(`/api/books/${book.id}`, {
        $inc: { quantity: -1 },
      });

      if (updatedBook.data.quantity < 0) {
        toast.error("Book is out of stock.");
        return;
      }

      await axios.post("/api/borrowed-books", {
        bookId: book.id,
        userId: user.id,
        returnDate,
      });

      toast.success("Book borrowed successfully!");
      setIsModalOpen(false);
    } catch (error) {
      toast.error("An error occurred while borrowing the book.");
      console.error(error);
    }
  };

  return (
    <div className="card bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {book.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          Author: {book.author}
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          Quantity: {book.quantity}
        </p>
        <button
          onClick={handleDetailsClick}
          className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 mr-2"
        >
          Details
        </button>
        <button
          onClick={handleBorrow}
          disabled={book.quantity === 0}
          className={`py-2 px-4 rounded shadow ${
            book.quantity === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          Borrow
        </button>
      </div>

      {/* Borrow Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="modal bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-md mx-auto"
        overlayClassName="modal-overlay"
      >
        <h2 className="text-2xl font-semibold mb-4">Borrow Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="w-full px-4 py-2 border rounded-md bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="w-full px-4 py-2 border rounded-md bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Return Date
            </label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-white"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="bg-gray-400 text-white py-2 px-4 rounded shadow hover:bg-gray-500 mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600"
            >
              Confirm
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default BookCard;

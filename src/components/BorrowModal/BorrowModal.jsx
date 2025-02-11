import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const BorrowModal = ({ book, onClose, onBorrow, borrowedBooks = [] }) => {
  const { user } = useAuth();
  const [returnDate, setReturnDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasBorrowedBook, setHasBorrowedBook] = useState(false);

  useEffect(() => {
    // Check if the user has already borrowed this book
    const alreadyBorrowed = borrowedBooks.some(
      (borrowedBook) =>
        borrowedBook.id === book.id && borrowedBook.userId === user.uid
    );
    setHasBorrowedBook(alreadyBorrowed);
  }, [borrowedBooks, book.id, user.uid]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (hasBorrowedBook) {
      toast.error("You have already borrowed this book.");
      return;
    }

    try {
      setIsSubmitting(true); // Disable the button during submission

      await onBorrow(returnDate); // Wait for the onBorrow action to complete

      toast.success("Book borrowed successfully!");
      onClose(); // Close the modal after successful borrowing
    } catch (error) {
      console.error("Error borrowing book:", error);
      toast.error(
        "An error occurred while borrowing the book. Please try again."
      );
    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
        <h2 className="text-lg font-bold mb-4">Borrow {book.name}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              value={user.displayName}
              readOnly
              className="border p-2 w-full bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              value={user.email}
              readOnly
              className="border p-2 w-full bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Return Date</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-500 text-white rounded"
              disabled={isSubmitting} // Disable cancel during submission
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-500 text-white rounded"
              disabled={hasBorrowedBook || isSubmitting} // Disable the button if the user already borrowed the book or during submission
            >
              {isSubmitting ? "Processing..." : "Borrow"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BorrowModal;


import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const BorrowModal = ({ book, onClose, onBorrow }) => {
  const { user } = useAuth();
  const [returnDate, setReturnDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onBorrow(returnDate);
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
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Borrow
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BorrowModal;

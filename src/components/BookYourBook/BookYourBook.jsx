import { useState } from "react";
import { toast } from "react-toastify"; // Import toast from react-toastify
import { ToastContainer } from "react-toastify"; // Import ToastContainer

const BookYourBook = () => {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = true; // Mocking success response

    if (success) {
      // Show success toast
      toast.success("Book request sent!");
      // Generate probable date of delivery (2-3 days from now)
      const deliveryDate = new Date();
      deliveryDate.setDate(
        deliveryDate.getDate() + (Math.random() < 0.5 ? 2 : 3)
      );
      // Random 2 or 3 days

      const formattedDate = deliveryDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      toast.info(`Probable date of the book delivery: ${formattedDate}`);
    } else {
      // Show error toast if something goes wrong
      toast.error("Oops! Please book again.");
    }
  };

  return (
    <div className=" my-10 max-w-xl mx-auto p-4 shadow-xl rounded-lg dark:bg-gray-800 dark:text-white">
      <h2 className="text-3xl text-center font-bold my-8">
        Book Your Next Wished Book!
      </h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Book Name</label>
            <input
              type="text"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter book name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Author Name
            </label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter author name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Genre</label>
            <input
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter genre"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 mb-4 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            Book
          </button>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default BookYourBook;

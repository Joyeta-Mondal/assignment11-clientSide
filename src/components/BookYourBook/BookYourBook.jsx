import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import BookYourBookImage from "../../assets/BookYourBook.jpg";

const BookYourBook = () => {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [genre, setGenre] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if the dark mode is applied to the document
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = true; // Mocking success response

    if (success) {
      toast.success("Book request sent!");
      const deliveryDate = new Date();
      deliveryDate.setDate(
        deliveryDate.getDate() + (Math.random() < 0.5 ? 2 : 3)
      );

      const formattedDate = deliveryDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      toast.info(`Probable date of the book delivery: ${formattedDate}`);
    } else {
      toast.error("Oops! Please book again.");
    }
  };

  return (
    <div
      className={`py-10 mx-auto p-4 shadow-xl transition-colors ${
        isDarkMode ? "bg-gray-800 text-white" : ""
      }`}
      style={
        isDarkMode
          ? {}
          : {
              backgroundImage: `url(${BookYourBookImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              minHeight: "100vh",
            }
      }
    >
      <h2 className="text-3xl text-center font-bold my-8">
        Book Your Next Wished Book!
      </h2>
      <div>
        <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
          <div className="">
            <label className="block text-sm font-medium mb-1">Book Name</label>
            <input
              type="text"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded transition-colors 
                dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter book name"
              required
            />
          </div>
          <div className="">
            <label className="block text-sm font-medium mb-1">
              Author Name
            </label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded transition-colors 
                dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
              className="w-full p-2 border border-gray-300 rounded transition-colors 
                dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter genre"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-indigo-500 text-white py-2 mb-4 rounded 
              hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
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

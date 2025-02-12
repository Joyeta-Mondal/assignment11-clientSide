import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardImg from "../../assets/library-card.jpg";

const LibraryCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    className: "",
    email: "",
    books: ["", "", ""],
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleBookChange = (index, value) => {
    const updatedBooks = [...formData.books];
    updatedBooks[index] = value;
    setFormData({ ...formData, books: updatedBooks });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.className ||
      !formData.email ||
      !formData.termsAccepted
    ) {
      toast.error("Please fill all fields and accept the terms.", {
        position: "top-center",
        autoClose: 3000, // Auto close after 3 seconds
      });
      return;
    }
    toast.success("Library card registered successfully!", {
      position: "top-center",
      autoClose: 3000,
    });

    // Reset form after successful submission
    setFormData({
      name: "",
      className: "",
      email: "",
      books: ["", "", "", "", ""],
      termsAccepted: false,
    });
  };

  return (
    <div className="flex flex-col md:flex-row bg-purple-200 items-center justify-center p-8 gap-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-lg">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 flex justify-center animate-fade-in">
        <img
          src={CardImg}
          alt="Library Card"
          className="rounded-lg shadow-md w-full max-w-sm"
        />
      </div>

      {/* Right Form Section */}
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md animate-slide-in-right"
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          Register for a Library Card
        </h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-600 rounded p-2 w-full focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="className"
            placeholder="Class"
            value={formData.className}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-600 rounded p-2 w-full focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-600 rounded p-2 w-full focus:ring-2 focus:ring-blue-500"
          />
          <div>
            <label className="block text-sm font-medium mb-2">
              Books Interested (Max 3):
            </label>
            {formData.books.map((book, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Book ${index + 1}`}
                value={book}
                onChange={(e) => handleBookChange(index, e.target.value)}
                className="border border-gray-300 dark:border-gray-600 rounded p-2 w-full focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2"
            />
            <label>I accept the terms and policy</label>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
          >
            Get Library Card
          </button>
        </div>
      </form>

      {/* Toast Container for notifications */}
      <ToastContainer />
    </div>
  );
};

export default LibraryCard;

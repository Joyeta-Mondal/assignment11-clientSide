import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import AddBookImg from "../../assets/addBook.jpg";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const AddBook = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    quantity: 1,
    author: "",
    category: "Novel",
    description: "",
    rating: 1,
  });

  const categories = [
    "Novel",
    "Art History",
    "Religion",
    "Music",
    "Science",
    "Thriller",
    "History",
    "Drama",
    "Sci-Fi",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${apiBaseUrl}/api/books`,
        { ...formData, userEmail: user?.email },
        { withCredentials: true }
      );

      if (response.data.insertedId) {
        toast.success("Book added successfully!");
        setFormData({
          image: "",
          name: "",
          quantity: 1,
          author: "",
          category: "Novel",
          description: "",
          rating: 1,
        });
        navigate("/all-books");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Failed to add book. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${AddBookImg})` }}
    >
      {/* Blurred Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      {/* Content Box */}
      <div className="relative p-6 max-w-md w-full bg-white/40 dark:bg-gray-900/80 shadow-lg rounded-lg backdrop-blur-md">
        <h2 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Add Book
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-gray-800 dark:text-gray-200">
              Book Cover Image
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              className="border p-2 w-full rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-800 dark:text-gray-200">
              Book Title
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="border p-2 w-full rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-800 dark:text-gray-200">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              className="border p-2 w-full rounded-md"
              min="1"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-800 dark:text-gray-200">
              Author Name
            </label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              className="border p-2 w-full rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-800 dark:text-gray-200">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="border p-2 w-full rounded-md"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-800 dark:text-gray-200">
              Short Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="border p-2 w-full rounded-md"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-800 dark:text-gray-200">
              Rating
            </label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              className="border p-2 w-full rounded-md"
              min="1"
              max="5"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-md w-full"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;

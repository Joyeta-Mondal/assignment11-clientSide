import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const AddBook = () => {

  const {user}=useAuth();
  console.log(user);
  const [formData, setFormData] = useState({
    image: null,
    name: "",
    quantity: 1,
    author: "",
    category: "Novel",
    description: "",
    rating: 1,
  });

  const categories = ["Novel", "Thriller", "History", "Drama", "Sci-Fi"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${apiBaseUrl}/api/books`,
        {...formData, userEmail:user?.email},
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
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Failed to add book. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Book Cover Image</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Book Title</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            className="border p-2 w-full"
            min="1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Author Name</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="border p-2 w-full"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Short Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="border p-2 w-full"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Rating</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            className="border p-2 w-full"
            min="1"
            max="5"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Add Book
        </button>
      </form>

    </div>
  );
};

export default AddBook;

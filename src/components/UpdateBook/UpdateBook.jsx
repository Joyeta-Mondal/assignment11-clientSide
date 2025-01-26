import { useState, useEffect } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams, useNavigate, Link } from "react-router-dom";

const UpdateBook = () => {
  const { bookId } = useParams();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate(); // Replacing useHistory with useNavigate
  const [book, setBook] = useState({
    name: "",
    author: "",
    image: "",
    category: "",
    rating: "",
  });

  useEffect(() => {
    axiosPublic.get(`/api/books/${bookId}`).then((res) => {
      setBook(res.data);
    });
  }, [bookId]);

  // console.log(book);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Updated book:", book);
    axiosPublic
      .put(`/api/books/${bookId}`, book) // Send the updated book data to the backend
      .then(() => {
        navigate(`/book/details/${bookId}`);
      })
      .catch((err) => {
        console.error("Error updating book:", err);
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold text-center mb-6">Update Book</h2>
      <form onSubmit={handleSubmit}>
        {" "}
        {/* Corrected onSubmit handler */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-bold mb-2">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={book.image}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold mb-2">
            Book Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={book.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-sm font-bold mb-2">
            Author Name
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={book.author}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-bold mb-2">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={book.category}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="Fiction">Novel</option>
            <option value="Non-Fiction">Art History</option>
            <option value="Science">Religion</option>
            <option value="Music">Music</option>
            <option value="Science">Science</option>
            <option value="Thriller">Thriller</option>
            <option value="History">History</option>
            <option value="Drama">Drama</option>
            <option value="Sci-fi">Sci-fi</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-bold mb-2">
            Rating (1-5)
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={book.rating}
            onChange={handleChange}
            min="1"
            max="5"
            className="w-full p-2 border rounded-md"
          />
        </div>
        <Link to="/all-books">
          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
};

export default UpdateBook;

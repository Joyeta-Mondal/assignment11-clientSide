import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white w-full">
      <div className="mb-4">
        <img
          src={book.image || "https://via.placeholder.com/150"}
          alt={book.name}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>
      <div>
        <h2 className="text-lg font-bold mb-2">{book.name}</h2>
        <p className="text-sm text-gray-700 mb-2">By: {book.author}</p>
        <p className="text-sm text-gray-700 mb-2">Category: {book.category}</p>
        <p className="text-sm text-gray-700 mb-2">Quantity: {book.quantity}</p>
        <p className="text-sm text-gray-700 mb-4">Rating: {book.rating} ⭐</p>
        <p className="text-xs text-gray-500">Added on: {new Date(book.createdAt).toLocaleDateString()}</p>
      </div>
      <Link to={`/book/details/${book._id}`} className="w-full"><button className="btn btn-primary mt-2 w-full"
      
      >View Details</button></Link>
    </div>
  );
};

export default BookCard;

import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-indigo-50 flex flex-col justify-center items-center p-6">
      {/* Container for the error content */}
      <div className="text-center max-w-2xl animate-fade-in">
        {/* Error Icon */}
        <div className="mb-8 animate-bounce">
          <svg
            className="w-24 h-24 mx-auto text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>

        {/* Error Heading */}
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          Oops! Page Not Found 🚫
        </h2>

        {/* Error Description */}
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved. Don't
          worry, you can always go back to the homepage.
        </p>

        {/* Back to Home Button */}
        <Link
          to="/" // Replace with your homepage route
          className="inline-block px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300"
        >
          Go Back Home
        </Link>
      </div>

      {/* Optional: Footer */}
      <footer className="mt-12 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} 𝙱𝚘𝚘𝚔𝚆𝚊𝚛𝚝𝚜. All rights reserved.</p>
        <p>All rights reserved. © Joyeta Mondal Kotha</p>
      </footer>
    </div>
  );
};

export default ErrorPage;

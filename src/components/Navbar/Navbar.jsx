import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // contact us section

  const location = useLocation();

  const handleScrollToContact = () => {
    if (location.pathname !== "/") {
      // Navigate to home first
      navigate("/");

      // Wait for React Router to complete navigation before scrolling
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Adjust delay if needed
    } else {
      // If already on home page, just scroll
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");
  };

  const handleLogout = async () => {
    await logoutUser();
    navigate("/");
    toast.success("Logged Out");
  };

  return (
    <nav
      className={`${
        isDarkMode
          ? "bg-gradient-to-r from-gray-500 to-gray-800 text-white"
          : "bg-gradient-to-r from-purple-300 to-indigo-500 text-gray-800"
      } sticky top-0 z-50 backdrop-blur-lg bg-opacity-30 shadow-md transition-all duration-100`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          {/* logo */}
          <img
            className="size-9 "
            src="https://img.icons8.com/?size=100&id=81348&format=png&color=000000"
            alt="books_logo"
          />
          <span className="text-2xl md:block hidden font-bold">𝙱𝚘𝚘𝚔𝚆𝚊𝚛𝚝𝚜</span>
        </div>

        {/* Mobile menu toggle button */}
        <button
          className="lg:hidden text-2xl text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Navbar links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:gap-6 absolute lg:static left-0 right-0 bg-purple-600 dark:bg-slate-600 lg:bg-transparent top-16 lg:top-0 p-6 lg:p-0`}
        >
          <li>
            <Link
              to="/"
              onClick={() => {
                if (window.location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="hover:text-blue-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className="hover:text-blue-300 transition duration-300"
            >
              About Us
            </Link>
          </li>

          <li>
            <button
              onClick={handleScrollToContact}
              className="hover:text-blue-300 transition duration-300"
            >
              Contact Us
            </button>
          </li>

          {user && (
            <>
              <li>
                <Link
                  to="/all-books"
                  className="hover:text-blue-300 transition duration-300"
                >
                  All Books
                </Link>
              </li>
              <li>
                <Link
                  to="/add-book"
                  className="hover:text-blue-300 transition duration-300"
                >
                  Add Book
                </Link>
              </li>
              <li>
                <Link
                  to="/your-added-books"
                  className="hover:text-blue-300 transition duration-300"
                >
                  Your Added Books
                </Link>
              </li>
              <li>
                <Link
                  to="/borrowed-books"
                  className="hover:text-blue-300 transition duration-300"
                >
                  Borrowed Books
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* User and dark mode buttons */}
        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="btn btn-sm btn-outline text-white border-white hover:bg-blue-700"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="btn btn-sm btn-outline text-white border-white hover:bg-blue-700"
              >
                Register
              </button>
            </>
          ) : (
            <>
              <div className="relative group">
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="User"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-gray-800 text-white text-sm rounded shadow-md opacity-0 group-hover:opacity-100 transition duration-300">
                  {user.displayName || "User"}
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-outline text-white border-white hover:bg-blue-700 flex items-center gap-2"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </>
          )}
          <button
            onClick={toggleDarkMode}
            className="btn btn-sm btn-circle text-white border-none bg-transparent hover:bg-gray-700 transition duration-300"
          >
            {isDarkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

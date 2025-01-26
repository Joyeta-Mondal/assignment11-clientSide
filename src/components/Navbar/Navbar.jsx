import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user,logoutUser } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

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


  const handleLogout=async()=>{
    await logoutUser()
    navigate('/')
    toast.success("Logged Out")
  }

  return (
    <nav
      className={`${
        isDarkMode ? "bg-gray-800 text-white" : "bg-purple-600 text-gray-800"
      } sticky top-0 z-50 backdrop-blur-lg bg-opacity-30 shadow-md transition-all duration-100`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          {/* logo */}
          <img
            className="size-9"
            src="https://img.icons8.com/?size=100&id=81348&format=png&color=000000"
            alt="books_logo"
          />
          <span className="text-2xl font-bold">𝙱𝚘𝚘𝚔𝚆𝚊𝚛𝚝𝚜</span>
        </div>
        <ul className="flex items-center gap-6">
          <li>
            <Link
              to="/"
              className="hover:text-blue-300 transition duration-300"
            >
              Home
            </Link>
          </li>
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
              to="/borrowed-books"
              className="hover:text-blue-300 transition duration-300"
            >
              Borrowed Books
            </Link>
          </li>
        </ul>
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

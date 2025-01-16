import { NavLink, useNavigate } from "react-router-dom";
import { FaBook, FaSignInAlt, FaUserPlus, FaSignOutAlt } from "react-icons/fa";

const Navbar = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-8">
      <div className="flex-1">
        <NavLink to="/" className="text-2xl font-bold flex items-center">
          <FaBook className="mr-2 text-primary" /> Library Management
        </NavLink>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Home
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink
                  to="/all-books"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  All Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add-book"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  Add Book
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/borrowed-books"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  Borrowed Books
                </NavLink>
              </li>
            </>
          )}
          {!user ? (
            <>
              <li>
                <NavLink to="/login" className="flex items-center">
                  <FaSignInAlt className="mr-1" /> Log in
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" className="flex items-center">
                  <FaUserPlus className="mr-1" /> Register
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="dropdown dropdown-hover">
                <div tabIndex={0} className="avatar cursor-pointer">
                  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user.photoURL} alt={user.displayName} />
                  </div>
                </div>
                <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li className="font-bold text-center">{user.displayName}</li>
                </ul>
              </li>
              <li>
                <button onClick={handleLogout} className="flex items-center">
                  <FaSignOutAlt className="mr-1" /> Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

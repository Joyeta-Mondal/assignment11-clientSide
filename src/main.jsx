import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import AllBooks from "./components/AllBooks/AllBooks.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import AddBook from "./components/AddBook/AddBook.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import BorrowedBooks from "./components/BorrowedBook/BorrowedBook.jsx";
import UpdateBook from "./components/UpdateBook/UpdateBook.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/all-books",
        element: (
          <PrivateRoute>
            <AllBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-book",
        element: (
          <PrivateRoute>
            <AddBook/>
          </PrivateRoute>
        ),
      },
      {
        path: "/book/details/:id",
        element: (
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        ),
      },
      {
        path:'/book/update/:bookId',
        element:<PrivateRoute>
          <UpdateBook/>
        </PrivateRoute>

      },
      {
        path: "/borrowed-books",
        element: (
          <PrivateRoute>
            <BorrowedBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

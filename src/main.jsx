import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
// import AllBooks from "./components/AllBooks/AllBooks.jsx";
// import AddBook from "./components/AddBook/AddBook.jsx";
// import BorrowABook from "./components/BorrowABook/BorrowABook.jsx";
// import BorrowedBook from "./components/BorrowedBook/BorrowedBook.jsx";
// import PrivateRoute from "./routes/PrivateRoute.jsx";

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

      // {
      //   path: "/allBooks",
      //   element: (
      //     <PrivateRoute>
      //       <AllBooks />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/addBook",
      //   element: (
      //     <PrivateRoute>
      //       <AddBook />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/borrowABook",
      //   element: (
      //     <PrivateRoute>
      //       <BorrowABook />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/borrowedBook",
      //   element: (
      //     <PrivateRoute>
      //       <BorrowedBook />
      //     </PrivateRoute>
      //   ),
      // },
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
    <RouterProvider router={router} />
  </StrictMode>
);

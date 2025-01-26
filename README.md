# _assignment_category_08_ : Library Management System

# Project Name : BookWarts ->

BookWarts is the digital solution for managing the library of a prestigious school, providing a seamless and efficient way to access and manage a vast collection of books. Our Library Management System (LMS) is designed to simplify the library's operations, ensuring that users and staff can easily interact with the resources.

# Features ->

Banner/Slider: A carousel showcasing important information and announcements with at least 3 slides.
Book Categories: Display categories like Fiction, Non-Fiction, Sci-Fi, etc. Each category will be a clickable card leading to a filtered book collection.
Book Details Page: Detailed book information: Author, name, category, quantity, rating, and more.
Borrow Button: Enables users to borrow a book, with a form for return date input. The book’s quantity is automatically decremented, and the book is added to the Borrowed Books list.
Protected Route: If not logged in, redirects to the login page.
Authentication:
Login and Register Pages: Email/password authentication with options for Google or GitHub login.
Validation for password strength on the Register page.
Toast Notifications: For successful login or registration.
Private Routes:
All Books: View and update book details (Image, Name, Author, Category, Rating).
Add Book: Allows authorized users to add new books to the library’s collection.
Borrowed Books: Displays borrowed books and allows users to return them. Book quantities are updated in MongoDB using the $inc operator.
Responsive Design:
Fully responsive layout that works across mobile, tablet, and desktop.
Dynamic Title: The website title changes based on the route (e.g., Home, All Books, Book Details).
404 Page: Custom page for handling unrecognized routes.
Search and Filter: Filter available books based on quantity.
Option to toggle between card view and table view for listing books.
Book Borrowing Rules: Users can borrow up to 3 books at a time, with a toast notification if they try to borrow more.
Prevents multiple borrowing of the same book simultaneously.

# JWT Authentication: Secure login with JWT token storage for protected routes.

# Techs Used : React: For building the user interface with reusable components and state management.

# Client Side

React Router: For handling routing between different pages like Home, All Books, Borrowed Books, etc.
Tailwind CSS: For fast and responsive styling, allowing for easy customizations.
React Hook Form: For handling forms such as the borrow book and add book forms efficiently.
react-rating-stars-component: To render book ratings with star icons.

# Server side

Node.js: JavaScript runtime for server-side logic.
Express.js: For building RESTful APIs to handle book CRUD operations, user authentication, and more.
MongoDB: NoSQL database to store book details, transactions, and user information.
JWT (JSON Web Token): For user authentication and protecting private routes.

# Authentication:

Firebase Authentication: For email/password and social logins (Google or GitHub).
Environment Variables: For securely storing Firebase configuration keys and MongoDB credentials.

# Deployment:

Firebase and Netlify For deploying the frontend application.
Vercel For deploying the backend API server.
MongoDB Atlas: For managed database hosting.

# Miscellaneous Tools:

Axios: For making HTTP requests to the backend API.
Toastify: For displaying user-friendly alerts (e.g., success or error messages after login, registration, borrow, etc.).

# Live Link :

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

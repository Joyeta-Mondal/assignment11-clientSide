const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 animate-fade-in">
          About BookWarts
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Image with Animation */}
          <div className="animate-slide-in-left">
            <img
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Library"
              className="rounded-lg shadow-2xl"
            />
          </div>

          {/* Right Side: Description */}
          <div className="animate-slide-in-right">
            <p className="text-lg text-gray-700 mb-6">
              Welcome to{" "}
              <span className="font-semibold text-purple-600">BookWarts</span>,
              your ultimate library management system designed to simplify the
              way you manage and explore books. Whether you're a librarian,
              student, or book enthusiast, BookWarts provides a seamless
              experience for organizing, discovering, and borrowing books.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Built with modern technologies like{" "}
              <span className="font-semibold text-blue-600">React</span>,{" "}
              <span className="font-semibold text-green-600">Express</span>,{" "}
              <span className="font-semibold text-yellow-600">MongoDB</span>,
              and{" "}
              <span className="font-semibold text-teal-600">Tailwind CSS</span>,
              BookWarts ensures a fast, responsive, and user-friendly interface.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is to make libraries more accessible and efficient,
              empowering users to focus on what truly matters: the joy of
              reading.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 animate-fade-in">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-pop-in">
              <img
                src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Search Books"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Search & Discover
              </h3>
              <p className="text-gray-700">
                Easily search and discover books from a vast collection using
                advanced filters.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-pop-in">
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Borrow Books"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Borrow & Return
              </h3>
              <p className="text-gray-700">
                Effortlessly borrow and return books with a streamlined process.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-pop-in">
              <img
                src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Manage Library"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Manage Library
              </h3>
              <p className="text-gray-700">
                Librarians can manage books, users, and transactions with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

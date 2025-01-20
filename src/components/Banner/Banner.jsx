import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import library_1 from "../../assets/library_1.jpeg";
import library_2 from "../../assets/library_2.jpeg";
import library_3 from "../../assets/library_3.jpg";
import library_4 from "../../assets/library_4.jpg";

const Banner = () => {
  return (
    <div className="w-full h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white">
      {/* Banner Carousel */}
      <div className="w-full max-w-4xl mx-auto ">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
          stopOnHover
          showArrows
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                onClick={onClickHandler}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-300 text-white dark:text-black rounded-full p-2 z-10 hover:scale-105"
                aria-label={label}
              >
                &#9664;
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                onClick={onClickHandler}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-300 text-white dark:text-black rounded-full p-2 z-10 hover:scale-105"
                aria-label={label}
              >
                &#9654;
              </button>
            )
          }
        >
          {/* Slide 1 */}
          <div className="flex flex-col items-center gap-4 p-8">
            <img
              src={library_1}
              alt="Explore Our Library"
              className="w-full rounded-lg"
            />
            <h2 className="text-2xl font-semibold">Explore Our Library</h2>
            <p className="text-center">
              Discover thousands of books across various genres and categories.
              Bookwarts is your ultimate hub for knowledge and entertainment.
            </p>
          </div>

          {/* Slide 2 */}
          <div className="flex flex-col items-center gap-4 p-8">
            <img
              src={library_2}
              alt="Join Our Community"
              className="w-full rounded-lg"
            />
            <h2 className="text-2xl font-semibold">Study in a smarter way</h2>
            <p className="text-center">
              Be part of an ever-growing community of book lovers. Share,
              discuss, and collaborate with other readers. Open for all the
              students and teachers of the school. If you're not one of these,
              still you can enrich your knowledge here!
            </p>
          </div>

          {/* Slide 3 */}
          <div className="flex flex-col items-center gap-4 p-8">
            <img
              src={library_3}
              alt="Upcoming Events"
              className="w-full rounded-lg"
            />
            <h2 className="text-2xl font-semibold">Upcoming Events</h2>
            <p className="text-center">
              Don't miss out on exciting book fairs, author meetups, and library
              events.
            </p>
          </div>

          {/* Slide 4 */}
          <div className="flex flex-col items-center gap-4 p-8">
            <img
              src={library_4}
              alt="Advanced Search"
              className="w-full rounded-lg"
            />
            <h2 className="text-2xl font-semibold">Advanced Search</h2>
            <p className="text-center">
              Use our smart search feature to find books and resources in
              seconds.
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;

import Banner from "../Banner/Banner";
import BookCategory from "../BookCategory/BookCategory";
import BookYourBook from "../BookYourBook/BookYourBook";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import NewComingBooks from "../NewComingBooks/NewComingBooks";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <BookCategory></BookCategory>
      <NewComingBooks></NewComingBooks>
      <BookYourBook></BookYourBook>
      <Footer></Footer>
    </div>
  );
};

export default Home;

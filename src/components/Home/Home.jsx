import Banner from "../Banner/Banner";
import BookCategory from "../BookCategory/BookCategory";
import BookYourBook from "../BookYourBook/BookYourBook";
import ContactUs from "../Contact-Us/ContactUs";

import NewComingBooks from "../NewComingBooks/NewComingBooks";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <BookCategory></BookCategory>
      <NewComingBooks></NewComingBooks>
      <BookYourBook></BookYourBook>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;

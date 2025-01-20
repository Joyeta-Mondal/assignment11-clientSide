import ArtAndMusic from "../EachBookType/ArtAndMusic";
import History from "../EachBookType/History";
import NovelsAndFiction from "../EachBookType/NovelsAndFiction";
import ScienceAndTech from "../EachBookType/ScienceAndTech";

const AllBooks = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center">All Books</h2>
      <ArtAndMusic />
      <ScienceAndTech />
      <NovelsAndFiction />
      <History />
    </div>
  );
};

export default AllBooks;

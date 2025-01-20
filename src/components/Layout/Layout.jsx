import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";

const Layout = () => {
  return (
    <div>
      <Home></Home>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;

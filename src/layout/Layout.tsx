import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import SideNavbar from "../components/sideNavbar/SideNavbar";
import "./layout.scss";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="body-container">
        <SideNavbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;

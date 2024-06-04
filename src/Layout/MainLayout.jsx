import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Search from "../pages/Home/Search";

const MainLayout = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar setSearchText={setSearchText} searchText={searchText} />
      {!searchText ? null : <Search searchText={searchText} />}
      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;

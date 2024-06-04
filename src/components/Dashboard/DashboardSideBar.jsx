import { BiChart } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import { IoAddCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { GrOrderedList } from "react-icons/gr";
import { MdAllInbox } from "react-icons/md";
import { FaPeopleLine } from "react-icons/fa6";
function DashboardSideBar() {
  return (
   
      <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content flex flex-col gap-2 border-r-4 border-gray-500">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="logo"
          className="w-20 h-20 rounded-full mx-auto"
        />
        {/* Sidebar content here */}
        <hr className="bg-blue-100 h-1" />
        <li className="btn text-lg p-0 flex  w-full h-full  hover:border hover:border-l-8 hover:border-l-blue-300 transform transition-all duration-300">
          <Link className="w-full h-full" to="/dashboard">
            {" "}
            <BiChart /> Dashboard
          </Link>
        </li>
        <hr className="bg-blue-100 h-1" />

        <li className="btn text-lg p-0 flex  w-full h-full hover:border hover:border-l-8 hover:border-l-blue-300 transform transition-all duration-300">
          <Link className="w-full h-full " to="/dashboard/add-products">
            {" "}
            <IoAddCircle /> Add Products
          </Link>
        </li>
        <hr className="bg-blue-100 h-1" />

        <li className="btn text-lg p-0 flex  w-full h-full hover:border hover:border-l-8 hover:border-l-blue-300 transform transition-all duration-300">
          <Link className="w-full h-full" to="/dashboard/products">
            {" "}
            <MdAllInbox />
            All Products
          </Link>
        </li>

        <hr className="bg-blue-100 h-1" />
        <li className="btn text-lg p-0 flex  w-full h-full hover:border hover:border-l-8 hover:border-l-blue-300 transform transition-all duration-300">
          <Link className="w-full h-full" to="/dashboard/orders">
            {" "}
            <GrOrderedList /> Orders
          </Link>
        </li>

        <hr className="bg-blue-100 h-1" />

        <li className="btn text-lg p-0 flex  w-full h-full hover:border hover:border-l-8 hover:border-l-blue-300 transform transition-all duration-300">
          <Link className="w-full h-full" to="/dashboard/customers">
            {" "}
            <FaPeopleLine /> Customers
          </Link>
        </li>
        <hr className="bg-blue-100 h-1" />

        <li className="btn text-lg p-0 flex  w-full h-full hover:border hover:border-l-8 hover:border-l-blue-300 transform transition-all duration-300">
          <Link className="w-full h-full" to="/">
            {" "}
            <BsShop /> Home
          </Link>
        </li>
        <hr className="bg-blue-100 h-1" />

        <img src={logo} alt="logo" className="w-full rounded-full mx-auto" />
      </ul>

  );
}

export default DashboardSideBar;

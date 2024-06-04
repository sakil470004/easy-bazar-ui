import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import logo from "../assets/logo.png";
import { BiExit } from "react-icons/bi";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [userData2,setUserData2] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData2(data);
      });
  }, [user?.email]);


  const handleLogout = async () => {
    await logout();
  };
const handleProfile = () => { 
    navigate("/dashboard/profile");
  }
  return (
    <div className="navbar bg-base-100 pr-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/register"}>Register</Link>
                </li>
              </>
            )}
            {user && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
            {user && (
              <li>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm flex items-center justify-center bg-red-500 text-white"
                >
                  <BiExit />
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
        <Link to={"/"} className="cursor-pointer w-36 h-auto font-bold">
          <img className="w-full h-full" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          {!user && (
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
          )}
          {user && (
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        {user ? (
          <>
            <button
              onClick={handleLogout}
              className="btn btn-sm bg-red-500 text-white  lg:flex hidden  items-center justify-center"
            >
              <BiExit /> Logout
            </button>

            <div className="avatar group" title={userData2?.name ||""}>
              <div onClick={handleProfile} className="w-12 rounded-full border-2 border-black group-hover:border-yellow-300">
                <img src={userData2?.img|| user?.photoURL || "/public/placeholder.jpg"} />
              </div>
            </div>
          </>
        ) : (
          <button className="btn btn-sm btn-outline btn-warning  lg:block">
            <Link to={"/login"}>Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import logo from "../assets/Logo.png";

const NavBarItem = ({ title, classprops, to }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>
    <Link to={to}>{title}</Link>
  </li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className="w-full">
      <nav className="w-full flex md:justify-center justify-between items-center p-4">
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <img src={logo} alt="logo" className="w-16 cursor-pointer" />
        </div>
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
          {["Home", "OnlineComplier", "HTMLRunner", "Community"].map((item, index) => (
            <NavBarItem key={item + index} title={item} to={item.toLowerCase()} />
          ))}
          <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <div className="flex relative">
          {!toggleMenu && (
            <HiMenuAlt4
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <AiOutlineClose
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          )}
          {toggleMenu && (
            <ul
              className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              <li className="my-2 text-lg w-full mx-4 cursor-pointer">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              {["Home", "OnlineComplier", "HTMLRunner", "Community"].map(
                (item, index) => (
                  <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" to={item.toLowerCase()} />
                )
              )}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

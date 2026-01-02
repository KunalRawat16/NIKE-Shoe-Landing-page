import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/brand_logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-3 md:px-6">

      {/* Logo */}
      <img src={logo} alt="logo" className="h-8" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-semibold">
        <li className="cursor-pointer hover:text-blue-600">MENU</li>
        <li className="cursor-pointer hover:text-blue-600">LOCATION</li>
        <li className="cursor-pointer hover:text-blue-600">ABOUT</li>
        <li className="cursor-pointer hover:text-blue-600">CONTACT</li>
      </ul>

      {/* Desktop Button */}
      <button className="hidden md:block bg-red-500 hover:bg-red-600 w-20 h-8 text-white font-semibold">
        Login
      </button>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4 font-semibold">
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <button className="bg-red-500 w-24 h-9 text-white font-semibold">
              Login
            </button>
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;

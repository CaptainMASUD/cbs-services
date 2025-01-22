import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaClipboardList, FaUserShield, FaSignInAlt, FaBuilding } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { SiApacheopenoffice } from "react-icons/si";

const NavItem = ({ icon, text, to }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center px-3 py-2 text-sm font-medium rounded-md transition duration-150 ease-in-out ${
        isActive ? "bg-green-600 text-white" : "text-gray-300 hover:bg-green-500 hover:text-white"
      }`
    }
  >
    {icon}
    <span className="ml-2">{text}</span>
  </NavLink>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center">
              <SiApacheopenoffice className="h-8 w-auto text-green-400" />
              <span className="ml-2 text-white text-lg font-bold">Salebird Limited</span>
            </NavLink>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-4">
              <NavItem icon={<FaClipboardList className="w-5 h-5" />} text="Form" to="/form" />
              <NavItem icon={<FaUserShield className="w-5 h-5" />} text="Admin Dashboard" to="/admin" />
              <NavItem icon={<FaUserTie className="w-5 h-5" />} text="Manager Dashboard" to="/manager" />
              <NavItem icon={<FaSignInAlt className="w-5 h-5" />} text="Login" to="/login" />
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavItem icon={<FaClipboardList className="w-5 h-5" />} text="Form" to="/form" />
          <NavItem icon={<FaUserShield className="w-5 h-5" />} text="Admin Dashboard" to="/admin" />
          <NavItem icon={<FaUserTie className="w-5 h-5" />} text="Manager Dashboard" to="/manager" />
          <NavItem icon={<FaSignInAlt className="w-5 h-5" />} text="Login" to="/login" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

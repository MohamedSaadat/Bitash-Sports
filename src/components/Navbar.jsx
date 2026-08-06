import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const listItems = [
  { name: "Dashboard", path: "/" },
  { name: "Overview", path: "/overview" },
  { name: "Cashier", path: "/cashier" },
  { name: "Expenses", path: "/expenses" },
  { name: "Reports", path: "/reports" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-[90%] bg-[rgba(20,20,20,0.6)] backdrop-blur-md flex justify-between items-center gap-16 py-3 px-10 left-1/2 translate-x-[-50%] top-5 rounded-full text-white shadow-lg z-50">
      {/* Logo */}
      <Link to="/" className="logo w-25">
        <img src={logo} className="w-full" alt="logo" />
      </Link>

      {/* Pages */}
      <ul className="hidden min-[1054px]:flex gap-8">
        {listItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `relative group cursor-pointer py-2 transition-colors duration-300 ${
                  isActive ? "text-[#a3d706] font-semibold" : "text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 rounded-xl bg-[#a3d706] transition-all ease-in-out duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* User Name */}
      <div className="user hidden min-[1054px]:block">User</div>

      {/* Menu BTN */}
      <div
        className="block min-[1054px]:hidden cursor-pointer text-[#a3d706] p-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i
          className={`fa-solid ${
            isOpen ? "fa-xmark" : "fa-bars"
          } text-2xl transition-all duration-300`}
        ></i>
      </div>

      {/* Mobile Menu List */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[rgba(20,20,20,0.95)] backdrop-blur-md rounded-2xl p-6 border border-[#1f2937] shadow-2xl flex flex-col items-center gap-6 min-[1054px]:hidden">
          <ul className="flex flex-col items-center gap-4 w-full">
            {listItems.map((item) => (
              <li key={item.name} className="w-full text-center">
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `relative group cursor-pointer py-1 text-lg font-medium inline-block ${
                      isActive ? "text-[#a3d706]" : "text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      <span
                        className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 rounded-xl bg-[#a3d706] transition-all ease-in-out duration-300 ${
                          isActive ? "w-1/2" : "w-0 group-hover:w-1/2"
                        }`}
                      ></span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="w-full h-0.5 bg-[#1f2937]"></div>
          <div className="user">User</div>
        </div>
      )}
    </div>
  );
}
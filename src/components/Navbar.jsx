import React, { useState } from "react";
import logo from "../assets/logo.png";

const listItems = ["Dashboard", "Overview", "Cashier", "Expenses", "Reports"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-[90%] bg-[rgba(20,20,20,0.6)] backdrop-blur-md flex justify-between items-center gap-16 py-3 px-10 left-1/2 translate-x-[-50%] top-5 rounded-full text-white shadow-lg z-50">
      {/* Logo */}
      <div className="logo w-25">
        <img src={logo} className="w-full" alt="logo" />
      </div>

      {/* Pages (الشاشات الكبيرة) */}
      <ul className="hidden min-[1054px]:flex gap-8">
        {listItems.map((item) => (
          <li className="relative group cursor-pointer py-2" key={item}>
            {item}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 rounded-xl bg-[#a3d706] transition-all ease-in-out duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* User Name */}
      <div className="user hidden min-[1054px]:block">User</div>

      {/* Menu BTN (أيقونة FontAwesome مع OnClick) */}
      <div
        className="block min-[1054px]:hidden cursor-pointer text-[#a3d706] p-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* تغيير شكل الأيقونة تلقائياً بين القائمة fa-bars والإغلاق fa-xmark */}
        <i
          className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-2xl transition-all duration-300`}
        ></i>
      </div>

      {/* Mobile Menu List (تظهر عند فتح المنيو) */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[rgba(20,20,20,0.95)] backdrop-blur-md rounded-2xl p-6 border border-[#1f2937] shadow-2xl flex flex-col items-center gap-6 min-[1054px]:hidden">
          <ul className="flex flex-col items-center gap-4 w-full">
            {listItems.map((item) => (
              <li
                className="relative group cursor-pointer py-1 text-lg font-medium text-center w-full"
                key={item}
                onClick={() => setIsOpen(false)} // يقفل القائمة بعد اختيار العنصر
              >
                {item}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0.5 rounded-xl bg-[#a3d706] transition-all ease-in-out duration-300 group-hover:w-1/2"></span>
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

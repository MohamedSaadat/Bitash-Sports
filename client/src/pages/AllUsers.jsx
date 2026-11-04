import React from "react";
import { useEffect, useState } from "react";
import { searchUsers, allUsersHandleKeyDown } from "../fun.js";

export default function AllUsers() {
  const [users, setReceipts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/users/getAllUsers")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }

        return res.json();
      })
      .then((data) => {
        const usersData = Array.isArray(data)
          ? data
          : Array.isArray(data.users)
            ? data.users
            : [];

        setReceipts(usersData);
      })
      .catch((err) => {
        console.error(err);
        setFetchError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div
      dir="rtl"
      className="w-[90%] p-4 bg-[rgba(20,20,20,0.6)] border-2 border-[#a3d706] rounded-2xl text-white backdrop-blur-sm shadow-xl"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-around gap-3 pb-3 mb-4 border-b border-[#a3d706]/30">
        {/* Search input & BTN */}
        <div className="search w-full sm:max-w-170 flex items-center gap-2">
          <button
            onClick={searchUsers}
            className="shiny px-6 py-2 border-2 border-[#a3d706] text-[#a3d706] rounded-lg font-medium cursor-pointer hover:bg-[#a3d706] hover:border-[#a3d706] hover:text-[#27272a] whitespace-nowrap shrink-0"
          >
            Search
          </button>
          <input
            id="overviewSearch"
            type="text"
            placeholder="Search"
            onKeyDown={allUsersHandleKeyDown}
            className="w-full px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
          />
        </div>
      </div>

      {/* All Users */}
      <div className="max-h-110 overflow-y-auto rounded-xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#141414] [&::-webkit-scrollbar-thumb]:bg-[#a3d706]/30 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-[#a3d706]">
        <table className="w-full text-center border-collapse">
          <thead className="sticky top-0 z-10 bg-[#0a0a0a]">
            <tr className="text-[#a3d706] text-sm border-b border-[#a3d706]/40 grid grid-cols-7">
              <th className="py-3 px-4 font-bold col-span-2">الاسم</th>
              <th className="py-3 px-4 font-bold col-span-1">ID</th>
              <th className="py-3 px-4 font-bold col-span-1">تاريخ الميلاد</th>
              <th className="py-3 px-4 font-bold col-span-1">رقم التليفون الاب</th>
              <th className="py-3 px-4 font-bold col-span-1">رقم التليفون الام</th>
              <th className="py-3 px-4 font-bold col-span-1">فرع</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800 text-sm">
            {loading ? (
              <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                <p className="text-[#a3d706] text-lg font-semibold">
                  جاري تحميل المشتركين...
                </p>
              </div>
            ) : fetchError ? (
              <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                <p className="text-red-400 text-lg font-semibold">
                  تعذّر تحميل المشتركين
                </p>
                <p className="text-gray-400 mt-2">
                  تأكد من اتصال السيرفر وحاول مرة أخرى.
                </p>
              </div>
            ) : users.length === 0 ? (
              <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                <div className="text-5xl mb-4">📄</div>
                <p className="text-[#a3d706] text-xl font-bold">
                  لا توجد مشتركين حتى الآن
                </p>
                <p className="text-gray-400 mt-2">
                  ستظهر المشتركين هنا بمجرد تسجيل أول مشترك.
                </p>
              </div>
            ) : (
              users.map((user) => (
                <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150 grid grid-cols-7">
                  <td className="py-3 px-4 font-bold col-span-2">{user.name}</td>
                  <td className="py-3 px-4 font-bold col-span-1">{user.id}</td>
                  <td className="py-3 px-4 font-bold col-span-1">{user.yearOfBirth}</td>
                  <td className="py-3 px-4 font-bold col-span-1">{user.fatherPhone}</td>
                  <td className="py-3 px-4 font-bold col-span-1">{user.motherPhone}</td>
                  <td className="py-3 px-4 font-bold col-span-1">{user.branch}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

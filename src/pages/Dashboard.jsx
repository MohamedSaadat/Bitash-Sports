import React from "react";
import Clock from "../components/Clock";

export default function Dashboard() {
  return (
    <div className="w-[85%] p-2.5 bg-[rgba(20,20,20,0.6)] border-3 border-[#a3d706] rounded-2xl flex flex-col gap-2 items-center">
      {/* Time */}
      <Clock />

      {/* Search & Add New Member div 1 */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
        {/* Add New Member */}
        <button className="w-full sm:w-auto px-6 py-2 border-2 border-[#a3d706] bg-[#27272a] text-[#a3d706] rounded-lg font-medium cursor-pointer hover:bg-[#a3d706] hover:border-[#a3d706] hover:text-[#27272a] transition-all duration-300 whitespace-nowrap">
          Add New Member
        </button>

        {/* Branch */}
        <select
          defaultValue=""
          className="w-full sm:w-auto px-4 py-2 bg-[#1f2937] text-[#a3d706] border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 cursor-pointer"
        >
          <option value="" disabled hidden>
            الفرع
          </option>
          <option className="text-white" value="الرئيسي">
            الرئيسي
          </option>
          <option className="text-white" value="الدخيلة">
            الدخيلة
          </option>
          <option className="text-white" value="بيانكي">
            بيانكي
          </option>
        </select>

        {/* Search input */}
        <div className="search w-full sm:max-w-170 flex items-center gap-2">
          <input
            type="text"
            placeholder="Search by name, ID, phone number"
            className="w-full px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
          />
          <button className="px-6 py-2 border-2 border-[#a3d706] bg-[#27272a] text-[#a3d706] rounded-lg font-medium cursor-pointer hover:bg-[#a3d706] hover:border-[#a3d706] hover:text-[#27272a] transition-all duration-300 whitespace-nowrap shrink-0">
            Search
          </button>
        </div>
      </div>

      {/* Member Profile Data div 2 */}
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full sm:flex-2 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
        />

        {/* ID Number */}
        <input
          type="text"
          placeholder="ID Number"
          className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
        />

        {/* Birth Year */}
        <input
          type="text"
          placeholder="Birth Year"
          className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
        />

        {/* Phone Number */}
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
        />
        {/* Team */}
        <select
          defaultValue=""
          className="w-full sm:w-auto px-4 py-2 bg-[#1f2937] text-[#a3d706] border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 cursor-pointer"
        >
          <option value="" disabled hidden>
            الفريق
          </option>
          <option value="مدارس رئيسى" className="text-white">
            مدارس رئيسى
          </option>
          <option value="تجهيز رئيسى" className="text-white">
            تجهيز رئيسى
          </option>
          <option value="مدارس دخيلة" className="text-white">
            مدارس دخيلة
          </option>
          <option value="تجهيز دخيلة" className="text-white">
            تجهيز دخيلة
          </option>
        </select>
      </div>
    </div>
  );
}

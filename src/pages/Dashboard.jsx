import React, { useState } from "react";
import Clock from "../components/Clock";

export default function Dashboard() {
  return (
    <div className="w-full max-w-[99%] mx-auto gap-1 flex flex-col lg:flex-row">
      {/* Part 1 BTNs */}
      <div className="w-full lg:w-100 p-2 bg-[rgba(20,20,20,0.6)] border-3 border-[#a3d706] rounded-2xl flex flex-col gap-2 items-center text-white">
        <button className="w-full sm:w-auto px-6 py-2 border-2 border-[#a3d706] bg-[#27272a] text-[#a3d706] rounded-lg font-medium cursor-pointer hover:bg-[#a3d706] hover:border-[#a3d706] hover:text-[#27272a] transition-all duration-300 whitespace-nowrap">
          Add New Member
        </button>
      </div>

      {/* Part 2 Payment */}
      <div className="p-2 bg-[rgba(20,20,20,0.6)] border-3 border-[#a3d706] rounded-2xl flex flex-col gap-2 items-center text-white">
        {/* Time & Month Title & Serial Number div 1 */}
        <div className="w-full block min-[1054px]:flex min-[1054px]:items-center min-[1054px]:justify-between gap-4">
          {/* Time */}
          <Clock />

          {/* Serial Number */}
          <div className="flex items-center justify-center gap-1">
            <input
              type="text"
              defaultValue="99999"
              // readOnly
              className="w-15 p-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 text-center"
            />
            <p>Serial Number</p>
          </div>

          {/* Month Title */}
          <div className="flex items-center justify-center gap-1">
            <input
              type="text"
              defaultValue="8"
              className="w-15 p-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 text-center"
            />
            <p>قيمة الاشتراك فى الانشطة الرياضية حتى نهاية شهر</p>
          </div>
        </div>

        {/* Search & Branch div 2 */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
          {/* Branch */}
          <select
            defaultValue=""
            className="w-full lg:w-50 px-4 py-2 bg-[#1f2937] text-[#a3d706] border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 cursor-pointer"
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

        {/* Member Profile Data div 3 */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full sm:flex-2 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
          />
          <input
            type="text"
            placeholder="ID Number"
            className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
          />
          <input
            type="text"
            placeholder="Birth Year"
            className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
          />
        </div>

        {/* row 1 */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          {/* سباحة */}
          <div className="flex flex-col gap-1.5 w-full max-w-sm">
            <label
              htmlFor="سباحة"
              className="text-sm font-medium text-gray-200"
            >
              سباحة
            </label>
            <input
              id="سباحة"
              type="text"
              name="name"
              className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
            />
          </div>
          {/* اضافى سباحة */}
          <div className="flex flex-col gap-1.5 w-full max-w-sm">
            <label
              htmlFor="اضافى سباحة"
              className="text-sm font-medium text-gray-200"
            >
              اضافى سباحة
            </label>
            <input
              id="اضافى سباحة"
              type="text"
              name="name"
              className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
            />
          </div>
          {/* جمباز */}
          <div className="flex flex-col gap-1.5 w-full max-w-sm">
            <label
              htmlFor="جمباز"
              className="text-sm font-medium text-gray-200"
            >
              جمباز
            </label>
            <input
              id="جمباز"
              type="text"
              name="name"
              className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
            />
          </div>
          {/* فتنس جمباز */}
          <div className="flex flex-col gap-1.5 w-full max-w-sm">
            <label
              htmlFor="فتنس جمباز"
              className="text-sm font-medium text-gray-200"
            >
              فتنس جمباز
            </label>
            <input
              id="فتنس جمباز"
              type="text"
              name="name"
              className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
            />
          </div>
          {/* كارتيه */}
          <div className="flex flex-col gap-1.5 w-full max-w-sm">
            <label
              htmlFor="كارتيه"
              className="text-sm font-medium text-gray-200"
            >
              كارتيه
            </label>
            <input
              id="كارتيه"
              type="text"
              name="name"
              className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
            />
          </div>
          {/* كونج فو */}
          <div className="flex flex-col gap-1.5 w-full max-w-sm">
            <label
              htmlFor="كونج فو"
              className="text-sm font-medium text-gray-200"
            >
              كونج فو
            </label>
            <input
              id="كونج فو"
              type="text"
              name="name"
              className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
            />
          </div>
          {/* تايكوندو */}
          <div className="flex flex-col gap-1.5 w-full max-w-sm">
            <label
              htmlFor="تايكوندو"
              className="text-sm font-medium text-gray-200"
            >
              تايكوندو
            </label>
            <input
              id="تايكوندو"
              type="text"
              name="name"
              className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
            />
          </div>
          {/* كرة قدم */}
          <div className="flex flex-col gap-1.5 w-full max-w-sm">
            <label
              htmlFor="كرة قدم"
              className="text-sm font-medium text-gray-200"
            >
              كرة قدم
            </label>
            <input
              id="كرة قدم"
              type="text"
              name="name"
              className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
            />
          </div>
          {/* كيك بوكس */}
          <div className="flex flex-col gap-1.5 w-full max-w-sm">
            <label
              htmlFor="كيك بوكس"
              className="text-sm font-medium text-gray-200"
            >
              كيك بوكس
            </label>
            <input
              id="كيك بوكس"
              type="text"
              name="name"
              className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
            />
          </div>
        </div>

        {/* row 2 */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          {/* نجمة اولى */}
          <div className="flex flex-col gap-1.5 w-full max-w-sm">
            <label
              htmlFor="نجمة اولى"
              className="text-sm font-medium text-gray-200"
            >
              نجمة اولى
            </label>
            <input
              id="نجمة اولى"
              type="text"
              name="name"
              className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
            />
          </div>
          {/* نجمة تانية */}
          <div className="flex flex-col gap-1.5 w-full max-w-sm">
            <label
              htmlFor="نجمة تانية"
              className="text-sm font-medium text-gray-200"
            >
              نجمة تانية
            </label>
            <input
              id="نجمة تانية"
              type="text"
              name="name"
              className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
            />
          </div>
          {/* نجمة تالتة */}
          <div className="flex flex-col gap-1.5 w-full max-w-sm">
            <label
              htmlFor="نجمة تالتة"
              className="text-sm font-medium text-gray-200"
            >
              نجمة تالتة
            </label>
            <input
              id="نجمة تالتة"
              type="text"
              name="name"
              className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
            />
          </div>
          {/* نجمة رابعة */}
          <div className="flex flex-col gap-1.5 w-full max-w-sm">
            <label
              htmlFor="نجمة رابعة"
              className="text-sm font-medium text-gray-200"
            >
              نجمة رابعة
            </label>
            <input
              id="نجمة رابعة"
              type="text"
              name="name"
              className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
            />
          </div>
          {/* اتحاد قصيرة */}
          <div className="flex flex-col gap-1.5 w-full max-w-sm">
            <label
              htmlFor="اتحاد قصيرة"
              className="text-sm font-medium text-gray-200"
            >
              اتحاد قصيرة
            </label>
            <input
              id="اتحاد قصيرة"
              type="text"
              name="name"
              className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
            />
          </div>
          {/* اتحاد زعانف */}
          <div className="flex flex-col gap-1.5 w-full max-w-sm">
            <label
              htmlFor="اتحاد زعانف"
              className="text-sm font-medium text-gray-200"
            >
              اتحاد زعانف
            </label>
            <input
              id="اتحاد زعانف"
              type="text"
              name="name"
              className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
            />
          </div>
        </div>

        {/* row 3 */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          {/* رسوم */}
          <div className="flex flex-col gap-1.5 w-full max-w-sm">
            <label htmlFor="رسوم" className="text-sm font-medium text-gray-200">
              رسوم
            </label>
            <input
              id="رسوم"
              type="text"
              name="name"
              className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
            />
          </div>
          {/* كشف طبى */}
          <div className="flex flex-col gap-1.5 w-full max-w-sm">
            <label
              htmlFor="كشف طبى"
              className="text-sm font-medium text-gray-200"
            >
              كشف طبى
            </label>
            <input
              id="كشف طبى"
              type="text"
              name="name"
              className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
            />
          </div>
          {/* مصاريف بطولة سباحة */}
          <div className="flex flex-col gap-1.5 w-full max-w-sm">
            <label
              htmlFor="مصاريف بطولة سباحة"
              className="text-sm font-medium text-gray-200"
            >
              مصاريف بطولة سباحة
            </label>
            <input
              id="مصاريف بطولة سباحة"
              type="text"
              name="name"
              className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
            />
          </div>
        </div>
        <hr className="w-full border-t border-gray-600 my-4" />
        <h3 className="text-xl font-bold">Payment Summary</h3>
        {/* row 4 */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          {/* رسوم */}
          <div className="flex flex-col gap-1.5 w-full max-w-sm">
            <label htmlFor="رسوم" className="text-sm font-medium text-gray-200">
              رسوم
            </label>
            <input
              id="رسوم"
              type="text"
              name="name"
              className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
            />
          </div>
          {/* كشف طبى */}
          <div className="flex flex-col gap-1.5 w-full max-w-sm">
            <label
              htmlFor="كشف طبى"
              className="text-sm font-medium text-gray-200"
            >
              كشف طبى
            </label>
            <input
              id="كشف طبى"
              type="text"
              name="name"
              className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
            />
          </div>
          {/* مصاريف بطولة سباحة */}
          <div className="flex flex-col gap-1.5 w-full max-w-sm">
            <label
              htmlFor="مصاريف بطولة سباحة"
              className="text-sm font-medium text-gray-200"
            >
              مصاريف بطولة سباحة
            </label>
            <input
              id="مصاريف بطولة سباحة"
              type="text"
              name="name"
              className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
            />
          </div>
        </div>
      </div>

      {/* Part 3 User Info */}
      <div className="w-full lg:w-125 flex gap-1.5 p-2 bg-[rgba(20,20,20,0.6)] border-3 border-[#a3d706] rounded-2xl text-white">
        <div className="الشهر">
          <table>
            <thead>الشهر</thead>
            <tbody>
              <tr>
                <td>1</td>
              </tr>
              <tr>
                <td>2</td>
              </tr>
              <tr>
                <td>3</td>
              </tr>
              <tr>
                <td>4</td>
              </tr>
              <tr>
                <td>5</td>
              </tr>
              <tr>
                <td>6</td>
              </tr>
              <tr>
                <td>7</td>
              </tr>
              <tr>
                <td>8</td>
              </tr>
              <tr>
                <td>9</td>
              </tr>
              <tr>
                <td>10</td>
              </tr>
              <tr>
                <td>11</td>
              </tr>
              <tr>
                <td>12</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="سباحة">
          <table>
            <thead>سباحة</thead>
            <tbody>
              <tr>
                <td>1000</td>
              </tr>
              <tr>
                <td>1000</td>
              </tr>
              <tr>
                <td>1000</td>
              </tr>
              <tr>
                <td>1000</td>
              </tr>
              <tr>
                <td>1000</td>
              </tr>
              <tr>
                <td>1000</td>
              </tr>
              <tr>
                <td>1000</td>
              </tr>
              <tr>
                <td>1000</td>
              </tr>
              <tr>
                <td>1000</td>
              </tr>
              <tr>
                <td>1000</td>
              </tr>
              <tr>
                <td>1000</td>
              </tr>
              <tr>
                <td>1000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

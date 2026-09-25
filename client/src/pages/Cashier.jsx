import React from "react";

export default function Cashier() {
  return (
    <div className="w-full max-w-[99%] mx-auto gap-1 flex flex-col lg:flex-row">
      {/* Part 1 الرئيسى */}
      <div className="w-full lg:w-125 flex flex-col gap-6 p-2 bg-[rgba(20,20,20,0.6)] border-3 border-[#a3d706] rounded-2xl text-white">
        <p className="w-full text-center text-2xl">الرئيسى</p>
        <input
          type="number"
          defaultValue="99999"
          readOnly
          className="w-full p-2 me-1 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
        />
        <p className="w-full text-center">المصروفات</p>

        <div className="max-h-72 overflow-y-auto rounded-xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#141414] [&::-webkit-scrollbar-thumb]:bg-[#a3d706]/30 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-[#a3d706]">
          <table className="w-full text-center border-collapse">
            <thead className="sticky top-0 z-10 bg-[#0a0a0a]">
              <tr className="text-[#a3d706] text-sm border-b border-[#a3d706]/40">
                <th className="py-3 px-4 font-bold">مبلغ</th>
                <th className="py-3 px-4 font-bold">مصروف</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800 text-sm">
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Part 2 الدخيلة */}
      <div className="w-full lg:w-125 flex flex-col gap-6 p-2 bg-[rgba(20,20,20,0.6)] border-3 border-[#a3d706] rounded-2xl text-white">
        <p className="w-full text-center text-2xl">الدخيلة</p>
        <input
          type="number"
          defaultValue="99999"
          readOnly
          className="w-full p-2 me-1 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
        />
        <p className="w-full text-center">المصروفات</p>

        <div className="max-h-72 overflow-y-auto rounded-xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#141414] [&::-webkit-scrollbar-thumb]:bg-[#a3d706]/30 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-[#a3d706]">
          <table className="w-full text-center border-collapse">
            <thead className="sticky top-0 z-10 bg-[#0a0a0a]">
              <tr className="text-[#a3d706] text-sm border-b border-[#a3d706]/40">
                <th className="py-3 px-4 font-bold">مبلغ</th>
                <th className="py-3 px-4 font-bold">مصروف</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800 text-sm">
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Part 3 بيانكى */}
      <div className="w-full lg:w-125 flex flex-col gap-6 p-2 bg-[rgba(20,20,20,0.6)] border-3 border-[#a3d706] rounded-2xl text-white">
        <p className="w-full text-center text-2xl">بيانكى</p>
        <input
          type="number"
          defaultValue="99999"
          readOnly
          className="w-full p-2 me-1 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
        />
        <p className="w-full text-center">المصروفات</p>

        <div className="max-h-72 overflow-y-auto rounded-xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#141414] [&::-webkit-scrollbar-thumb]:bg-[#a3d706]/30 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-[#a3d706]">
          <table className="w-full text-center border-collapse">
            <thead className="sticky top-0 z-10 bg-[#0a0a0a]">
              <tr className="text-[#a3d706] text-sm border-b border-[#a3d706]/40">
                <th className="py-3 px-4 font-bold">مبلغ</th>
                <th className="py-3 px-4 font-bold">مصروف</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800 text-sm">
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                <td className="py-3 px-4 text-neutral-300">100</td>
                <td className="py-3 px-4 text-neutral-300">صيانة</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

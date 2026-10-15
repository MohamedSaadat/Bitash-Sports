import { OverviewHandleKeyDown, searchUserOverview } from "../fun";
import { useEffect, useState } from "react";

export default function Overview() {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/receipts/getAllReceipts")
      .then((res) => res.json())
      .then((data) => {
        setReceipts(data.receipts || data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div
      dir="rtl"
      className="w-[90%] p-4 bg-[rgba(20,20,20,0.6)] border-2 border-[#a3d706] rounded-2xl text-white backdrop-blur-sm shadow-xl"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-4 border-b border-[#a3d706]/30">
        <h2 className="text-xl font-bold text-[#a3d706]">جدول البيانات</h2>
        {/* Search input & BTN */}
        <div className="search w-full sm:max-w-170 flex items-center gap-2">
          <button
            onClick={searchUserOverview}
            className="shiny px-6 py-2 border-2 border-[#a3d706] text-[#a3d706] rounded-lg font-medium cursor-pointer hover:bg-[#a3d706] hover:border-[#a3d706] hover:text-[#27272a] whitespace-nowrap shrink-0"
          >
            Search
          </button>
          <input
            id="overviewSearch"
            type="text"
            placeholder="Search"
            onKeyDown={OverviewHandleKeyDown}
            className="w-full px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
          />
        </div>
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#a3d706]/10 border border-[#a3d706] text-[#a3d706]">
          العدد الإجمالي: {receipts.length}
        </span>
      </div>

      {/* 1. Mobile Screen */}
      <div className="flex flex-col gap-3 md:hidden max-h-125 overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#141414] [&::-webkit-scrollbar-thumb]:bg-[#a3d706]/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#a3d706]">
        {receipts.map((receipt) => (
          // receipts dev
          <div className="p-3.5 bg-[rgba(10,10,10,0.8)] border border-[#a3d706]/60 rounded-xl flex flex-col gap-2">
            <div className="flex flex-col justify-between items- gap-0.5">
              <span>
                مسلسل : {receipt.serialNumber}
              </span>
            </div>
            {/* <div className="flex flex-col justify-between items-center pb-2 border-b border-neutral-800">
              <div>
                
              </div>
              <div>
                <span className="font-semibold text-base mb-2">
                  {new Date(receipt.date).toLocaleString("en-AE")}
                </span>
              </div>
              <span className="font-semibold text-[#a3d706] text-base mb-2">
                {receipt.name}
              </span>
              <div className="col-span-2">
                <span className="font-semibold text-base mb-2">الفرع : {receipt.branch}</span>
              </div>
              <span className="px-2 py-0.5 text-xs font-mono font-semibold rounded bg-[#a3d706]/15 text-[#a3d706] border border-[#a3d706]/30">
                {receipt.userId}
              </span>
            </div> */}

            {/* <div className="grid grid-cols-2 gap-2 text-xs text-neutral-300">
              
              <div className="col-span-2">
                <span className="text-neutral-500">ملاحظات:</span>
                <span>{receipt.notes}</span>
              </div>
              
              {receipt.sports.map((sport) => (
                <div className="col-span-2">
                  <span className="text-neutral-500">النشاط:</span>
                  <span className="font-mono m-2">{sport.sportName}</span>
                  <span className="text-neutral-500">الاشتراك:</span>
                  <span className="font-mono m-2">{sport.amountPaid}</span>
                  <span className="text-neutral-500">الشهر:</span>
                  <span className="font-mono m-2">{sport.forMonth}</span>
                  <span className="text-neutral-500">العملية:</span>
                  <span className="font-mono m-2">
                    {sport.paymentMethodType}
                  </span>
                </div>
              ))}
            </div> */}
          </div>
        ))}
      </div>

      {/* 2. All Screens */}
      <div className="hidden md:block max-h-125 overflow-y-auto overflow-x-auto rounded-xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#141414] [&::-webkit-scrollbar-thumb]:bg-[#a3d706]/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#a3d706]">
        <table className="w-full text-right border-collapse">
          <thead className="sticky top-0 z-10 bg-[#0a0a0a]">
            <tr className="text-[#a3d706] text-sm border-b border-[#a3d706]/40">
              <th className="py-3 px-4 font-bold">مسلسل</th>
              <th className="py-3 px-4 font-bold">اليوم</th>
              <th className="py-3 px-4 font-bold">الاسم</th>
              <th className="py-3 px-4 font-bold">الفرع</th>
              <th className="py-3 px-4 font-bold">كود</th>
              <th className="py-3 px-4 font-bold">النشاط</th>
              <th className="py-3 px-4 font-bold">الاشتراك</th>
              <th className="py-3 px-4 font-bold">الشهر</th>
              <th className="py-3 px-4 font-bold">ملاحظات</th>
              <th className="py-3 px-4 font-bold">المدفوع</th>
              <th className="py-3 px-4 font-bold">العملية</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800 text-sm">
            {receipts.map((receipt) => (
              <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
                {/* مسلسل */}
                <td className="py-3 px-4">
                  <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold rounded-lg bg-[#a3d706]/15 text-[#a3d706] border border-[#a3d706]/30">
                    {receipt.userId}
                  </span>
                </td>
                <td className="py-3 px-4 font-medium text-white">
                  {receipt.name}
                </td>
                <td className="py-3 px-4 text-neutral-300">
                  {receipt.yearOfBirth}
                </td>
                <td className="py-3 px-4 font-mono text-neutral-300">
                  {receipt.phone}
                </td>
                <td className="w-50 py-3 px-4 font-mono text-neutral-300">
                  {receipt.notes}
                </td>
                <td className="w-50 py-3 px-4 font-mono text-neutral-300">
                  {receipt.sports[0].team}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import { OverviewHandleKeyDown, searchUserOverview } from "../fun";

export default function Overview() {
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
          العدد الإجمالي: 0
        </span>
      </div>

      {/* 1. Mobile Screen */}
      <div className="flex flex-col gap-3 md:hidden max-h-125 overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#141414] [&::-webkit-scrollbar-thumb]:bg-[#a3d706]/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#a3d706]">
        <div className="p-3.5 bg-[rgba(10,10,10,0.8)] border border-[#a3d706]/30 rounded-xl flex flex-col gap-2">
          <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
            <span className="font-bold text-[#a3d706] text-base">mohamed</span>
            <span className="px-2 py-0.5 text-xs font-mono font-bold rounded bg-[#a3d706]/15 text-[#a3d706] border border-[#a3d706]/30">
              007
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs text-neutral-300">
            <div>
              <span className="text-neutral-500">الفرع:</span> bitash
            </div>
            <div>
              <span className="text-neutral-500">المواليد:</span>
              1993
            </div>
            <div>
              <span className="text-neutral-500">التليفون:</span>{" "}
              <span className="font-mono">012</span>
            </div>
            <div>
              <span className="text-neutral-500">الفريق: </span>
              <span className="inline-block px-2 py-0.5 text-[10px] rounded-full bg-[#a3d706]/20 text-[#a3d706]">
                ادارة
              </span>
            </div>
            <div className="col-span-2">
              <span className="text-neutral-500">ملاحظات:</span>{" "}
              <span className="font-mono">555</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. All Screens */}
      <div className="hidden md:block max-h-125 overflow-y-auto overflow-x-auto rounded-xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#141414] [&::-webkit-scrollbar-thumb]:bg-[#a3d706]/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#a3d706]">
        <table className="w-full text-right border-collapse">
          <thead className="sticky top-0 z-10 bg-[#0a0a0a]">
            <tr className="text-[#a3d706] text-sm border-b border-[#a3d706]/40">
              <th className="py-3 px-4 font-bold">الكود</th>
              <th className="py-3 px-4 font-bold">الاسم</th>
              <th className="py-3 px-4 font-bold">الفرع</th>
              <th className="py-3 px-4 font-bold">المواليد</th>
              <th className="py-3 px-4 font-bold">الفريق</th>
              <th className="py-3 px-4 font-bold">التليفون</th>
              <th className="py-3 px-4 font-bold">ملاحظات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800 text-sm">
            <tr className="hover:bg-[#a3d706]/10 transition-colors duration-150">
              <td className="py-3 px-4">
                <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold rounded-lg bg-[#a3d706]/15 text-[#a3d706] border border-[#a3d706]/30">
                  007
                </span>
              </td>
              <td className="py-3 px-4 font-medium text-white">mohamed</td>
              <td className="py-3 px-4 text-neutral-300">bitash</td>
              <td className="py-3 px-4 text-neutral-300">1993</td>
              <td className="py-3 px-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#a3d706]/20 text-[#a3d706] border border-[#a3d706]/40">
                  ادارة
                </span>
              </td>
              <td className="py-3 px-4 font-mono text-neutral-300">012</td>
              <td className="w-50 py-3 px-4 font-mono text-neutral-300">555</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

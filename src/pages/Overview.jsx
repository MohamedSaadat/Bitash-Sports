import { useEffect, useState } from "react";

export default function Overview() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // جلب البيانات من سيرفر Express
    fetch("http://localhost:3000/api/overview")
      .then((res) => res.json())
      .then((userData) => {
        setData(userData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("خطأ في جلب البيانات:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p style={{ textAlign: "center", padding: "20px" }}>
        جاري تحميل البيانات...
      </p>
    );
  }

  return (
    <div
      dir="rtl"
      className="w-[90%] p-4 bg-[rgba(20,20,20,0.6)] border-2 border-[#a3d706] rounded-2xl text-white backdrop-blur-sm shadow-xl"
    >
      {/* الهيدر */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#a3d706]/30">
        <h2 className="text-xl font-bold text-[#a3d706]">جدول البيانات</h2>
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#a3d706]/10 border border-[#a3d706] text-[#a3d706]">
          العدد الإجمالي: {data.length}
        </span>
      </div>

      {/* 1. تصميم الموبايل (بطاقات صغيرة بدلاً من جدول) */}
      <div className="flex flex-col gap-3 md:hidden">
        {data.map((item) => (
          <div
            key={item.id}
            className="p-3.5 bg-[rgba(10,10,10,0.8)] border border-[#a3d706]/30 rounded-xl flex flex-col gap-2"
          >
            <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
              <span className="font-bold text-[#a3d706] text-base">
                {item.name}
              </span>
              <span className="px-2 py-0.5 text-xs font-mono font-bold rounded bg-[#a3d706]/15 text-[#a3d706] border border-[#a3d706]/30">
                {item.id}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-neutral-300">
              <div>
                <span className="text-neutral-500">الفرع:</span> {item.branch}
              </div>
              <div>
                <span className="text-neutral-500">المواليد:</span>{" "}
                {item.birthYear}
              </div>
              <div>
                <span className="text-neutral-500">التليفون:</span>{" "}
                <span className="font-mono">{item.phone}</span>
              </div>
              <div>
                <span className="text-neutral-500">الفريق: </span>
                {item.team ? (
                  <span className="inline-block px-2 py-0.5 text-[10px] rounded-full bg-[#a3d706]/20 text-[#a3d706]">
                    {item.team}
                  </span>
                ) : (
                  "-"
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2. تصميم الشاشات الكبيرة (الجدول التقليدي) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-[rgba(10,10,10,0.8)] text-[#a3d706] text-sm border-b border-[#a3d706]/40">
              <th className="py-3 px-4 font-bold">الكود</th>
              <th className="py-3 px-4 font-bold">الاسم</th>
              <th className="py-3 px-4 font-bold">الفرع</th>
              <th className="py-3 px-4 font-bold">المواليد</th>
              <th className="py-3 px-4 font-bold">الفريق</th>
              <th className="py-3 px-4 font-bold">التليفون</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800 text-sm">
            {data.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#a3d706]/10 transition-colors duration-150"
              >
                <td className="py-3 px-4">
                  <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold rounded-lg bg-[#a3d706]/15 text-[#a3d706] border border-[#a3d706]/30">
                    {item.id}
                  </span>
                </td>
                <td className="py-3 px-4 font-medium text-white">
                  {item.name}
                </td>
                <td className="py-3 px-4 text-neutral-300">{item.branch}</td>
                <td className="py-3 px-4 text-neutral-300">{item.birthYear}</td>
                <td className="py-3 px-4">
                  {item.team ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#a3d706]/20 text-[#a3d706] border border-[#a3d706]/40">
                      {item.team}
                    </span>
                  ) : (
                    <span className="text-neutral-500 text-xs">-</span>
                  )}
                </td>
                <td className="py-3 px-4 font-mono text-neutral-300">
                  {item.phone}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

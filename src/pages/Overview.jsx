import { useEffect, useState } from "react";

export default function Overview() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/overview")
      .then((res) => res.json())
      .then((userData) => {
        setData(userData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to update data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p style={{ textAlign: "center", padding: "20px" }}>Loading data...</p>
    );
  }

  // User Count
  let x = 0;
  for (let i = 0; i < data.DATA.length; i++) {
    if (data.DATA[i].الاسم === "0") {
      x++;
    }
  }
  let userCount = data.DATA.length - x;

  return (
    <div
      dir="rtl"
      className="w-[90%] p-4 bg-[rgba(20,20,20,0.6)] border-2 border-[#a3d706] rounded-2xl text-white backdrop-blur-sm shadow-xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#a3d706]/30">
        <h2 className="text-xl font-bold text-[#a3d706]">جدول البيانات</h2>
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#a3d706]/10 border border-[#a3d706] text-[#a3d706]">
          العدد الإجمالي: {userCount}
        </span>
      </div>

      {/* 1. Mobile Screen */}
      <div className="flex flex-col gap-3 md:hidden">
        {data.DATA.map((item) => (
          <div
            key={item.كود}
            className="p-3.5 bg-[rgba(10,10,10,0.8)] border border-[#a3d706]/30 rounded-xl flex flex-col gap-2"
          >
            <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
              <span className="font-bold text-[#a3d706] text-base">
                {item.الاسم}
              </span>
              <span className="px-2 py-0.5 text-xs font-mono font-bold rounded bg-[#a3d706]/15 text-[#a3d706] border border-[#a3d706]/30">
                {item.كود}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-neutral-300">
              <div>
                <span className="text-neutral-500">الفرع:</span> {item.فرع}
              </div>
              <div>
                <span className="text-neutral-500">المواليد:</span>{" "}
                {item.مواليد}
              </div>
              <div>
                <span className="text-neutral-500">التليفون:</span>{" "}
                <span className="font-mono">{item.تليفون}</span>
              </div>
              <div>
                <span className="text-neutral-500">الفريق: </span>
                {item.فريق ? (
                  <span className="inline-block px-2 py-0.5 text-[10px] rounded-full bg-[#a3d706]/20 text-[#a3d706]">
                    {item.فريق}
                  </span>
                ) : (
                  "-"
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2. All Screens */}
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
            {data.DATA.map((item) => (
              <tr
                key={item.كود}
                className="hover:bg-[#a3d706]/10 transition-colors duration-150"
              >
                <td className="py-3 px-4">
                  <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold rounded-lg bg-[#a3d706]/15 text-[#a3d706] border border-[#a3d706]/30">
                    {item.كود}
                  </span>
                </td>
                <td className="py-3 px-4 font-medium text-white">
                  {item.الاسم}
                </td>
                <td className="py-3 px-4 text-neutral-300">{item.فرع}</td>
                <td className="py-3 px-4 text-neutral-300">{item.مواليد}</td>
                <td className="py-3 px-4">
                  {item.فريق ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#a3d706]/20 text-[#a3d706] border border-[#a3d706]/40">
                      {item.فريق}
                    </span>
                  ) : (
                    <span className="text-neutral-500 text-xs">-</span>
                  )}
                </td>
                <td className="py-3 px-4 font-mono text-neutral-300">
                  {item.تليفون}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

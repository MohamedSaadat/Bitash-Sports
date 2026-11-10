import { OverviewHandleKeyDown, searchUserOverview } from "../fun";
import { useEffect, useState } from "react";

export default function Overview() {
  const [receipts, setReceipts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/receipts/getAllReceipts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch receipts");
        }

        return res.json();
      })
      .then((data) => {
        const receiptsData = Array.isArray(data)
          ? data
          : Array.isArray(data.receipts)
            ? data.receipts
            : [];

        setReceipts(receiptsData);
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
      className="w-[90%] p-4 bg-[rgba(20,20,20,0.6)] border-2 border-[#a3d706] rounded-2xl text-white backdrop-blur-sm shadow-xl flex flex-col h-[85vh] md:h-[calc(100vh-100px)] overflow-hidden"
    >
      {/* Header */}
      <div className="flex justify-center pb-3 mb-4 border-b border-[#a3d706]/30 shrink-0">
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
      </div>

      {/* Receipts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-h-[85vh] md:max-h-[90vh] overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#141414] [&::-webkit-scrollbar-thumb]:bg-[#a3d706]/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#a3d706]">
        {loading ? (
          <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
            <p className="text-[#a3d706] text-lg font-semibold">
              جاري تحميل الإيصالات...
            </p>
          </div>
        ) : fetchError ? (
          <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
            <p className="text-red-400 text-lg font-semibold">
              تعذّر تحميل الإيصالات
            </p>
            <p className="text-gray-400 mt-2">
              تأكد من اتصال السيرفر وحاول مرة أخرى.
            </p>
          </div>
        ) : receipts.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
            <div className="text-5xl mb-4">📄</div>
            <p className="text-[#a3d706] text-xl font-bold">
              لا توجد إيصالات حتى الآن
            </p>
            <p className="text-gray-400 mt-2">
              ستظهر الإيصالات هنا بمجرد تسجيل أول إيصال.
            </p>
          </div>
        ) : (
          receipts.map((receipt) => (
            <div className="p-3.5 bg-[rgba(10,10,10,0.8)] border border-[#a3d706]/60 rounded-xl flex flex-col">
              {/* مسلسل  */}
              <div className="grid grid-cols-3 items-center">
                <span className="col-span-1">مسلسل :</span>
                <span className="col-span-2">{receipt.serialNumber}</span>
              </div>

              {/* اليوم  */}
              <div className="grid grid-cols-3 items-center">
                <span className="col-span-1">اليوم :</span>
                <span className="col-span-2">
                  {new Date(receipt.date).toLocaleString("en-EG", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </span>
              </div>

              {/* الاسم */}
              <div className="grid grid-cols-3 items-center">
                <span className="col-span-1">الاسم :</span>
                <span className="col-span-2 text-[#a3d706] text-xs">
                  {receipt.user.name}
                </span>
              </div>

              {/* الفرع */}
              <div className="grid grid-cols-3 items-center">
                <span className="col-span-1">الفرع :</span>
                <span className="col-span-2">{receipt.branch}</span>
              </div>

              {/* رقم العضوية */}
              <div className="grid grid-cols-3 items-center">
                <span className="col-span-1">رقم العضوية :</span>
                <span className="col-span-2 text-[#a3d706]">
                  {receipt.user.id}
                </span>
              </div>

              {/* النشاط المدفوع الشهر */}
              <div className="grid grid-cols-3 items-center border-t border-b border-neutral-800 mt-1">
                <span className="col-span-1">النشاط</span>
                <span className="col-span-1">المدفوع</span>
                <span className="col-span-1">الشهر</span>
              </div>

              {/* السباحة */}
              <div>
                {/* اشتراك السباحة */}
                {receipt.sports.swimming.amountPaid ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>اشتراك سباحة</span>
                    <span>{receipt.sports.swimming.amountPaid}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* اضافى السباحة */}
                {receipt.sports.swimming.additional ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>اضافى سباحة</span>
                    <span>{receipt.sports.swimming.additional}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* فتنس سباحة */}
                {receipt.sports.swimming.fitness ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>فتنس سباحة</span>
                    <span>{receipt.sports.swimming.fitness}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* مصاريف بطولة سباحة */}
                {receipt.sports.swimming.championship ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>مصاريف بطولة سباحة</span>
                    <span>{receipt.sports.swimming.championship}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* مصاريف اتحاد سباحة */}
                {receipt.sports.swimming.federation ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>مصاريف اتحاد سباحة</span>
                    <span>{receipt.sports.swimming.federation}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* نجمة اولى */}
                {receipt.sports.swimming.firstStar ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>نجمة اولى</span>
                    <span>{receipt.sports.swimming.firstStar}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* نجمة تانية */}
                {receipt.sports.swimming.secondStar ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>نجمة تانية</span>
                    <span>{receipt.sports.swimming.secondStar}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* نجمة تالتة */}
                {receipt.sports.swimming.thirdStar ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>نجمة تالتة</span>
                    <span>{receipt.sports.swimming.thirdStar}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* نجمة رابعة */}
                {receipt.sports.swimming.fourthStar ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>نجمة رابعة</span>
                    <span>{receipt.sports.swimming.fourthStar}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}
              </div>

              {/* الجمباز */}
              <div>
                {/* اشتراك جمباز */}
                {receipt.sports.gymnastics.amountPaid ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>اشتراك جمباز</span>
                    <span>{receipt.sports.gymnastics.amountPaid}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* فتنس جمباز */}
                {receipt.sports.gymnastics.fitness ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>فتنس جمباز</span>
                    <span>{receipt.sports.gymnastics.fitness}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* مصاريف بطولة جمباز */}
                {receipt.sports.gymnastics.championship ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>مصاريف بطولة جمباز</span>
                    <span>{receipt.sports.gymnastics.championship}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* مصاريف اتحاد جمباز */}
                {receipt.sports.gymnastics.federation ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>مصاريف اتحاد جمباز</span>
                    <span>{receipt.sports.gymnastics.federation}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}
              </div>

              {/* كاراتيه */}
              <div>
                {/* اشتراك كاراتيه */}
                {receipt.sports.karate.amountPaid ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>اشتراك كاراتيه</span>
                    <span>{receipt.sports.karate.amountPaid}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* حزام كاراتيه */}
                {receipt.sports.karate.belt ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>حزام كاراتيه</span>
                    <span>{receipt.sports.karate.belt}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* مصاريف بطولة كاراتيه */}
                {receipt.sports.karate.championship ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>مصاريف بطولة كاراتيه</span>
                    <span>{receipt.sports.karate.championship}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* مصاريف اتحاد كاراتيه */}
                {receipt.sports.karate.federation ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>مصاريف اتحاد كاراتيه</span>
                    <span>{receipt.sports.karate.federation}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}
              </div>

              {/* كونغ فو */}
              <div>
                {/* اشتراك كونغ فو */}
                {receipt.sports.kungFu.amountPaid ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>اشتراك كونغ فو</span>
                    <span>{receipt.sports.kungFu.amountPaid}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* حزام كونغ فو */}
                {receipt.sports.kungFu.belt ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>حزام كونغ فو</span>
                    <span>{receipt.sports.kungFu.belt}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* مصاريف بطولة كونغ فو */}
                {receipt.sports.kungFu.championship ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>مصاريف بطولة كونغ فو</span>
                    <span>{receipt.sports.kungFu.championship}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* مصاريف اتحاد كونغ فو */}
                {receipt.sports.kungFu.federation ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>مصاريف اتحاد كونغ فو</span>
                    <span>{receipt.sports.kungFu.federation}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}
              </div>

              {/* تايكوندو */}
              <div>
                {/* اشتراك تايكوندو */}
                {receipt.sports.taekwondo.amountPaid ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>اشتراك تايكوندو</span>
                    <span>{receipt.sports.taekwondo.amountPaid}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* حزام تايكوندو */}
                {receipt.sports.taekwondo.belt ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>حزام تايكوندو</span>
                    <span>{receipt.sports.taekwondo.belt}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* مصاريف بطولة تايكوندو */}
                {receipt.sports.taekwondo.championship ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>مصاريف بطولة تايكوندو</span>
                    <span>{receipt.sports.taekwondo.championship}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* مصاريف اتحاد تايكوندو */}
                {receipt.sports.taekwondo.federation ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>مصاريف اتحاد تايكوندو</span>
                    <span>{receipt.sports.taekwondo.federation}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}
              </div>

              {/* كيك بوكس */}
              <div>
                {/* اشتراك كيك بوكس */}
                {receipt.sports.kickboxing.amountPaid ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>اشتراك كيك بوكس</span>
                    <span>{receipt.sports.kickboxing.amountPaid}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* حزام كيك بوكس */}
                {receipt.sports.kickboxing.belt ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>حزام كيك بوكس</span>
                    <span>{receipt.sports.kickboxing.belt}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* مصاريف بطولة كيك بوكس */}
                {receipt.sports.kickboxing.championship ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>مصاريف بطولة كيك بوكس</span>
                    <span>{receipt.sports.kickboxing.championship}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* مصاريف اتحاد كيك بوكس */}
                {receipt.sports.kickboxing.federation ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>مصاريف اتحاد كيك بوكس</span>
                    <span>{receipt.sports.kickboxing.federation}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}
              </div>

              {/* كرة قدم */}
              <div>
                {/* اشتراك كرة قدم */}
                {receipt.sports.football.amountPaid ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>اشتراك كرة قدم</span>
                    <span>{receipt.sports.football.amountPaid}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* مصاريف بطولة كرة قدم */}
                {receipt.sports.football.championship ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>مصاريف بطولة كرة قدم</span>
                    <span>{receipt.sports.football.championship}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}

                {/* مصاريف اتحاد كرة قدم */}
                {receipt.sports.football.federation ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>مصاريف اتحاد كرة قدم</span>
                    <span>{receipt.sports.football.federation}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}
              </div>

              {/* كشف طبى */}
              <div>
                {/* اشتراك كشف طبى */}
                {receipt.sports.medical.amountPaid ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>كشف طبى</span>
                    <span>{receipt.sports.medical.amountPaid}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}
              </div>

              {/* رسوم ادارية */}
              <div>
                {/* اشتراك رسوم ادارية */}
                {receipt.sports.administrative.amountPaid ? (
                  <div className="grid grid-cols-3 items-center pt-1 pb-1">
                    <span>رسوم ادارية لا تسترد وتنتهى فى 31/5/2027</span>
                    <span>{receipt.sports.administrative.amountPaid}</span>
                    <span>{receipt.forMonth}</span>
                  </div>
                ) : (
                  ""
                )}
              </div>

              {/* ملاحظات */}
              {receipt.notes ? (
                <div className="grid grid-cols-3 items-center pt-1 pb-1">
                  <span className="col-span-3 border-t border-b border-neutral-800">
                    ملاحظات
                  </span>
                  <span className="col-span-3 pt-1 pb-1">{receipt.notes}</span>
                </div>
              ) : (
                ""
              )}

              {/* الإجمالي */}
              <div className="grid grid-cols-3 items-center pt-2 border-t border-neutral-800 font-bold">
                <span className="col-span-1 text-[#a3d706]">الإجمالي :</span>
                <span className="col-span-2 text-[#a3d706]">
                  {Object.values(receipt.sports).reduce(
                    (total, sport) =>
                      total +
                      Object.values(sport)
                        .filter((value) => typeof value === "number")
                        .reduce((sum, value) => sum + value, 0),
                    0,
                  )}{" "}
                  EGP
                </span>
              </div>

              {/* طريقة الدفع */}
              <div className="grid grid-cols-3 items-center font-bold">
                <span className="col-span-1 text-[#a3d706]">طريقة الدفع :</span>
                <span className="col-span-2 text-[#a3d706]">
                  {receipt.paymentMethodType}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

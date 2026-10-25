import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Pay, Clear, searchUserDashboard } from "../fun";

export default function Dashboard() {
  const [formData, setFormData] = useState({
    serialNumber: "",
    branch: "",
    user: {
      name: "",
      id: "",
      phone: "",
      yearOfBirth: "",
    },
    notes: "",
    sports: {
      swimming: {
        amountPaid: "",
        additional: "",
        firstStar: "",
        secondStar: "",
        thirdStar: "",
        fourthStar: "",
        championship: "",
        federation: "",
        fitness: "",
      },
      gymnastics: {
        amountPaid: "",
        championship: "",
        federation: "",
        fitness: "",
      },
      karate: {
        amountPaid: "",
        championship: "",
        federation: "",
        belt: "",
      },
      kungFu: {
        amountPaid: "",
        championship: "",
        federation: "",
        belt: "",
      },
      taekwondo: {
        amountPaid: "",
        championship: "",
        federation: "",
        belt: "",
      },
      kickboxing: {
        amountPaid: "",
        championship: "",
        federation: "",
        belt: "",
      },
      football: {
        amountPaid: "",
        championship: "",
        federation: "",
      },
      medical: {
        amountPaid: "",
      },
      administrative: {
        amountPaid: "",
      },
    },
    forMonth: new Date().getMonth() + 1,
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showyearOfBirthError, setShowyearOfBirthError] = useState(false);
  const [showPhoneError, setShowPhoneError] = useState(false);
  const [showTotalAmountError, setShowTotalAmountError] = useState(false);
  const navigate = useNavigate();

  const totalAmount = Object.values(formData.sports).reduce((total, sport) => {
    return (
      total +
      Object.values(sport).reduce((sum, value) => sum + (Number(value) || 0), 0)
    );
  }, 0);

  return (
    <>
      <div className="w-full max-w-[99%] mx-auto gap-1 flex flex-col lg:flex-row">
        {/* showSuccess */}
        {showSuccess && (
          <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm rounded-xl border border-[#a3d706] bg-[#1f2937] p-4 text-white shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#a3d706] text-[#1f2937]">
                ✓
              </div>

              <span className="font-medium">تم إرسال الإيصال بنجاح</span>
            </div>
          </div>
        )}

        {/* showError */}
        {showError && (
          <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm rounded-xl border border-red-500 bg-[#1f2937] p-4 text-white shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                !
              </div>

              <span className="font-medium">
                من فضلك أكمل جميع البيانات المطلوبة
              </span>
            </div>
          </div>
        )}

        {/* showyearOfBirthError */}
        {showyearOfBirthError && (
          <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm rounded-xl border border-red-500 bg-[#1f2937] p-4 text-white shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                !
              </div>

              <span className="font-medium">تاريخ الميلاد غير صحيح</span>
            </div>
          </div>
        )}

        {/* showPhoneError */}
        {showPhoneError && (
          <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm rounded-xl border border-red-500 bg-[#1f2937] p-4 text-white shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                !
              </div>

              <span className="font-medium">
                رقم التليفون غير صحيح، أدخل رقم موبايل مصري مكوّن من 11 رقمًا
              </span>
            </div>
          </div>
        )}

        {/* showTotalAmountError */}
        {showTotalAmountError && (
          <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm rounded-xl border border-red-500 bg-[#1f2937] p-4 text-white shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                !
              </div>

              <span className="font-medium">لا يمكن ارسال ايصال قيمته صفر</span>
            </div>
          </div>
        )}

        {/* Part 1 & 2 */}
        <div className="min-[760px]:max-[1023px]:flex">
          {/* Part 1 BTNs */}
          <div className="w-full lg:w-100 p-2 bg-[rgba(20,20,20,0.6)] border-3 border-[#a3d706] rounded-2xl flex flex-col gap-2 items-center">
            {/* Search */}
            <button
              onClick={searchUserDashboard}
              className="shiny w-full px-6 py-2 border-2 border-[#a3d706] text-[#a3d706] rounded-lg font-medium cursor-pointer hover:bg-[#a3d706] hover:text-[#27272a] whitespace-nowrap"
            >
              Search
            </button>

            {/* Cash */}
            <button
              onClick={async () => {
                // Send
                const result = await Pay(
                  formData,
                  "Cash",
                  totalAmount,
                  setShowError,
                  setShowPhoneError,
                  setShowyearOfBirthError,
                  setShowTotalAmountError,
                );

                // Print & Clear
                if (result?.message === "receipt added") {
                  setShowSuccess(true);

                  setTimeout(() => {
                    setShowSuccess(false);
                    Clear(setFormData);
                    navigate("/PrintableReceipt");
                  }, 500);
                } else {
                  setShowError(true);

                  setTimeout(() => {
                    setShowError(false);
                  }, 1500);
                }
              }}
              className="shiny w-full px-6 py-2 border-2 border-[#a3d706] text-[#a3d706] rounded-lg font-medium cursor-pointer hover:bg-[#a3d706] hover:text-[#27272a] whitespace-nowrap"
            >
              Cash
            </button>

            {/* Instapay M.Ahmed */}
            <button
              onClick={async () => {
                // Send
                const result = await Pay(
                  formData,
                  "instapay M.Ahmed",
                  totalAmount,
                  setShowError,
                  setShowPhoneError,
                  setShowyearOfBirthError,
                  setShowTotalAmountError,
                );

                // Print & Clear
                if (result?.message === "receipt added") {
                  setShowSuccess(true);

                  setTimeout(() => {
                    setShowSuccess(false);
                    Clear(setFormData);
                    navigate("/PrintableReceipt");
                  }, 1500);
                } else {
                  setShowError(true);

                  setTimeout(() => {
                    setShowError(false);
                  }, 1500);
                }
              }}
              className="shiny w-full px-6 py-2 border-2 border-[#a3d706] text-[#a3d706] rounded-lg font-medium cursor-pointer hover:bg-[#a3d706] hover:text-[#27272a] whitespace-nowrap"
            >
              Instapay M.Ahmed
            </button>

            {/* Instapay M.Mohamed */}
            <button
              onClick={async () => {
                // Send
                const result = await Pay(
                  formData,
                  "instapay M.Mohamed",
                  totalAmount,
                  setShowError,
                  setShowPhoneError,
                  setShowyearOfBirthError,
                  setShowTotalAmountError,
                );

                // Print & Clear
                if (result?.message === "receipt added") {
                  setShowSuccess(true);

                  setTimeout(() => {
                    setShowSuccess(false);
                    Clear(setFormData);
                    navigate("/PrintableReceipt");
                  }, 1500);
                } else {
                  setShowError(true);

                  setTimeout(() => {
                    setShowError(false);
                  }, 1500);
                }
              }}
              className="shiny w-full px-6 py-2 border-2 border-[#a3d706] text-[#a3d706] rounded-lg font-medium cursor-pointer hover:bg-[#a3d706] hover:text-[#27272a] whitespace-nowrap"
            >
              Instapay M.Mohamed
            </button>

            {/* Clear */}
            <button
              onClick={() => Clear(setFormData)}
              className="shiny w-full px-6 py-2 border-2 border-[#a3d706] text-[#a3d706] rounded-lg font-medium cursor-pointer hover:bg-[#a3d706] hover:text-[#27272a] whitespace-nowrap"
            >
              Clear
            </button>
          </div>

          {/* Part 2 User Info */}
          <div
            id="info"
            className="w-full lg:w-100 p-2 bg-[rgba(20,20,20,0.6)] border-3 border-[#a3d706] rounded-2xl flex flex-col gap-2 items-center"
          >
            {/* Branch */}
            <select
              id="Branch"
              value={formData.branch}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  branch: e.target.value,
                })
              }
              className="w-full px-4 py-2 bg-[#1f2937] text-[#a3d706] border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 cursor-pointer"
            >
              <option value="" disabled hidden>
                Branch
              </option>
              <option className="text-white" value="الرئيسي">
                الرئيسي
              </option>
              <option className="text-white" value="الدخيلة">
                الدخيلة
              </option>
              <option className="text-white" value="بيانكى">
                بيانكي
              </option>
            </select>

            {/* name */}
            <input
              id="fullName"
              type="text"
              placeholder="Full Name"
              value={formData.user.name}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[a-zA-Z\u0621-\u064A\u066E-\u06D3\s]*$/.test(value)) {
                  setFormData({
                    ...formData,
                    user: {
                      ...formData.user,
                      name: value,
                    },
                  });
                }
              }}
              className="w-full py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200"
            />

            {/* id */}
            <input
              id="IDNumber"
              type="number"
              placeholder="ID Number"
              value={formData.user.id}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  user: {
                    ...formData.user,
                    id: e.target.value,
                  },
                })
              }
              className="w-full py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            {/* yearOfBirth */}
            <input
              id="BirthYear"
              type="text"
              inputMode="numeric"
              maxLength={4}
              placeholder="Birth Year"
              value={formData.user.yearOfBirth}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  user: {
                    ...formData.user,
                    yearOfBirth: e.target.value,
                  },
                })
              }
              className="w-full py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            {/* phone */}
            <input
              id="PhoneNumber"
              type="tel"
              maxLength={11}
              placeholder="Phone Number"
              value={formData.user.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  user: {
                    ...formData.user,
                    phone: e.target.value,
                  },
                })
              }
              className="w-full py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
        </div>

        {/* Part 3 Payment */}
        <div className="p-2 bg-[rgba(20,20,20,0.6)] border-3 border-[#a3d706] rounded-2xl flex flex-col gap-2 items-center text-white">
          {/* Month Title */}
          <div className="flex items-center justify-center gap-1">
            <input
              type="number"
              min={1}
              max={12}
              value={formData.forMonth}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  forMonth: e.target.value,
                })
              }
              className="w-12 p-2 me-1 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
            />
            <p>قيمة الاشتراك فى الانشطة الرياضية حتى نهاية شهر</p>
          </div>

          {/* Sports */}
          <div className="w-full flex flex-col gap-1">
            {/* Swimming */}
            <div className="grid grid-cols-10 items-center gap-1">
              <h3 className="col-span-10 sm:col-span-1">Swimming</h3>
              <div className="col-span-10 flex items-center gap-1 sm:col-span-3">
                {/* اشتراك */}
                <input
                  type="number"
                  placeholder="الاشتراك"
                  value={formData.sports.swimming.amountPaid}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        swimming: {
                          ...formData.sports.swimming,
                          amountPaid: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
                {/* اضافى */}
                <input
                  type="number"
                  placeholder="اضافى"
                  value={formData.sports.swimming.additional}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        swimming: {
                          ...formData.sports.swimming,
                          additional: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
                {/* فتنس */}
                <input
                  type="number"
                  placeholder="فتنس"
                  value={formData.sports.swimming.fitness}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        swimming: {
                          ...formData.sports.swimming,
                          fitness: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
              </div>
              <div className="col-span-10 flex items-center gap-1 sm:col-span-3">
                {/* بطولة */}
                <input
                  type="number"
                  placeholder="بطولة"
                  value={formData.sports.swimming.championship}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        swimming: {
                          ...formData.sports.swimming,
                          championship: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
                {/* اتحاد */}
                <input
                  type="number"
                  placeholder="اتحاد"
                  value={formData.sports.swimming.federation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        swimming: {
                          ...formData.sports.swimming,
                          federation: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
                {/* نجمة اولى */}
                <input
                  type="number"
                  placeholder="نجمة اولى"
                  value={formData.sports.swimming.firstStar}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        swimming: {
                          ...formData.sports.swimming,
                          firstStar: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
              </div>
              <div className="col-span-10 flex items-center gap-1 sm:col-span-3">
                {/* نجمة تانية */}
                <input
                  type="number"
                  placeholder="نجمة تانية"
                  value={formData.sports.swimming.secondStar}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        swimming: {
                          ...formData.sports.swimming,
                          secondStar: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
                {/* نجمة تالتة */}
                <input
                  type="number"
                  placeholder="نجمة تالتة"
                  value={formData.sports.swimming.thirdStar}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        swimming: {
                          ...formData.sports.swimming,
                          thirdStar: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
                {/* نجمة رابعة */}
                <input
                  type="number"
                  placeholder="نجمة رابعة"
                  value={formData.sports.swimming.fourthStar}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        swimming: {
                          ...formData.sports.swimming,
                          fourthStar: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
              </div>
            </div>

            {/* Gymnastics */}
            <div className="grid grid-cols-10 items-center gap-1">
              <h3 className="col-span-10 sm:col-span-1">Gymnastics</h3>
              <div className="col-span-10 flex items-center gap-1 sm:col-span-4">
                {/* اشتراك */}
                <input
                  type="number"
                  placeholder="الاشتراك"
                  value={formData.sports.gymnastics.amountPaid}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        gymnastics: {
                          ...formData.sports.gymnastics,
                          amountPaid: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
                {/* فتنس */}
                <input
                  type="number"
                  placeholder="فتنس"
                  value={formData.sports.gymnastics.fitness}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        gymnastics: {
                          ...formData.sports.gymnastics,
                          fitness: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
              </div>
              <div className="col-span-10 flex items-center gap-1 sm:col-span-4">
                {/* بطولة */}
                <input
                  type="number"
                  placeholder="بطولة"
                  value={formData.sports.gymnastics.championship}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        gymnastics: {
                          ...formData.sports.gymnastics,
                          championship: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
                {/* اتحاد */}
                <input
                  type="number"
                  placeholder="اتحاد"
                  value={formData.sports.gymnastics.federation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        gymnastics: {
                          ...formData.sports.gymnastics,
                          federation: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
              </div>
            </div>

            {/* Karate */}
            <div className="grid grid-cols-10 items-center gap-1">
              <h3 className="col-span-10 sm:col-span-1">Karate</h3>
              <div className="col-span-10 flex items-center gap-1 sm:col-span-4">
                {/* اشتراك */}
                <input
                  type="number"
                  placeholder="الاشتراك"
                  value={formData.sports.karate.amountPaid}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        karate: {
                          ...formData.sports.karate,
                          amountPaid: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
                {/* حزام */}
                <input
                  type="number"
                  placeholder="حزام"
                  value={formData.sports.karate.belt}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        karate: {
                          ...formData.sports.karate,
                          belt: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
              </div>
              <div className="col-span-10 flex items-center gap-1 sm:col-span-4">
                {/* بطولة */}
                <input
                  type="number"
                  placeholder="بطولة"
                  value={formData.sports.karate.championship}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        karate: {
                          ...formData.sports.karate,
                          championship: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
                {/* اتحاد */}
                <input
                  type="number"
                  placeholder="اتحاد"
                  value={formData.sports.karate.federation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        karate: {
                          ...formData.sports.karate,
                          federation: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
              </div>
            </div>

            {/* KungFu */}
            <div className="grid grid-cols-10 items-center gap-1">
              <h3 className="col-span-10 sm:col-span-1">KungFu</h3>
              <div className="col-span-10 flex items-center gap-1 sm:col-span-4">
                {/* اشتراك */}
                <input
                  type="number"
                  placeholder="الاشتراك"
                  value={formData.sports.kungFu.amountPaid}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        kungFu: {
                          ...formData.sports.kungFu,
                          amountPaid: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
                {/* حزام */}
                <input
                  type="number"
                  placeholder="حزام"
                  value={formData.sports.kungFu.belt}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        kungFu: {
                          ...formData.sports.kungFu,
                          belt: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
              </div>
              <div className="col-span-10 flex items-center gap-1 sm:col-span-4">
                {/* بطولة */}
                <input
                  type="number"
                  placeholder="بطولة"
                  value={formData.sports.kungFu.championship}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        kungFu: {
                          ...formData.sports.kungFu,
                          championship: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
                {/* اتحاد */}
                <input
                  type="number"
                  placeholder="اتحاد"
                  value={formData.sports.kungFu.federation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        kungFu: {
                          ...formData.sports.kungFu,
                          federation: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
              </div>
            </div>

            {/* Taekwondo */}
            <div className="grid grid-cols-10 items-center gap-1">
              <h3 className="col-span-10 sm:col-span-1">Taekwondo</h3>
              <div className="col-span-10 flex items-center gap-1 sm:col-span-4">
                {/* اشتراك */}
                <input
                  type="number"
                  placeholder="الاشتراك"
                  value={formData.sports.taekwondo.amountPaid}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        taekwondo: {
                          ...formData.sports.taekwondo,
                          amountPaid: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
                {/* حزام */}
                <input
                  type="number"
                  placeholder="حزام"
                  value={formData.sports.taekwondo.belt}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        taekwondo: {
                          ...formData.sports.taekwondo,
                          belt: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
              </div>
              <div className="col-span-10 flex items-center gap-1 sm:col-span-4">
                {/* بطولة */}
                <input
                  type="number"
                  placeholder="بطولة"
                  value={formData.sports.taekwondo.championship}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        taekwondo: {
                          ...formData.sports.taekwondo,
                          championship: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
                {/* اتحاد */}
                <input
                  type="number"
                  placeholder="اتحاد"
                  value={formData.sports.taekwondo.federation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        taekwondo: {
                          ...formData.sports.taekwondo,
                          federation: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
              </div>
            </div>

            {/* Kickboxing */}
            <div className="grid grid-cols-10 items-center gap-1">
              <h3 className="col-span-10 sm:col-span-1">Kickboxing</h3>
              <div className="col-span-10 flex items-center gap-1 sm:col-span-4">
                {/* اشتراك */}
                <input
                  type="number"
                  placeholder="الاشتراك"
                  value={formData.sports.kickboxing.amountPaid}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        kickboxing: {
                          ...formData.sports.kickboxing,
                          amountPaid: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
                {/* حزام */}
                <input
                  type="number"
                  placeholder="حزام"
                  value={formData.sports.kickboxing.belt}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        kickboxing: {
                          ...formData.sports.kickboxing,
                          belt: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
              </div>
              <div className="col-span-10 flex items-center gap-1 sm:col-span-4">
                {/* بطولة */}
                <input
                  type="number"
                  placeholder="بطولة"
                  value={formData.sports.kickboxing.championship}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        kickboxing: {
                          ...formData.sports.kickboxing,
                          championship: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
                {/* اتحاد */}
                <input
                  type="number"
                  placeholder="اتحاد"
                  value={formData.sports.kickboxing.federation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        kickboxing: {
                          ...formData.sports.kickboxing,
                          federation: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
              </div>
            </div>

            {/* Football */}
            <div className="grid grid-cols-10 items-center gap-1">
              <h3 className="col-span-10 sm:col-span-1">Football</h3>
              <div className="col-span-10 flex items-center gap-1 sm:col-span-9">
                {/* اشتراك */}
                <input
                  type="number"
                  placeholder="الاشتراك"
                  value={formData.sports.football.amountPaid}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        football: {
                          ...formData.sports.football,
                          amountPaid: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
                {/* بطولة */}
                <input
                  type="number"
                  placeholder="بطولة"
                  value={formData.sports.football.championship}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        football: {
                          ...formData.sports.football,
                          championship: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
                {/* اتحاد */}
                <input
                  type="number"
                  placeholder="اتحاد"
                  value={formData.sports.football.federation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        football: {
                          ...formData.sports.football,
                          federation: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
              </div>
            </div>

            {/* Services */}
            <div className="grid grid-cols-10 items-center gap-1">
              <h3 className="col-span-10 sm:col-span-1">Services</h3>
              <div className="col-span-10 flex items-center gap-1 sm:col-span-9">
                {/* كشف طبى */}
                <input
                  type="number"
                  placeholder="الكشف طبى"
                  value={formData.sports.medical.amountPaid}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        medical: {
                          ...formData.sports.medical,
                          amountPaid: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
                {/* رسوم ادارية */}
                <input
                  type="number"
                  placeholder="رسوم ادارية"
                  value={formData.sports.administrative.amountPaid}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sports: {
                        ...formData.sports,
                        administrative: {
                          ...formData.sports.administrative,
                          amountPaid: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
              </div>
            </div>

            {/* Notes */}
            <div className="grid grid-cols-10 items-center gap-1">
              <h3 className="col-span-10 sm:col-span-1">Notes</h3>
              <div className="col-span-10 flex items-center gap-1 sm:col-span-9">
                <input
                  type="text"
                  placeholder="ملاحظات"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      notes: e.target.value,
                    })
                  }
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
              </div>
            </div>
            {/* Total Amount */}
            <div className="grid grid-cols-10 items-center gap-1">
              <h3 className="col-span-10 sm:col-span-1">Total Amount</h3>
              <div className="col-span-10 flex items-center gap-1 sm:col-span-2">
                <input
                  type="number"
                  value={totalAmount}
                  readOnly
                  className="w-full sm:flex-1 px-4 py-2 bg-[#1f2937] text-[#a3d706] placeholder:text-gray-400 border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] focus:ring-1 focus:ring-[#a3d706] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

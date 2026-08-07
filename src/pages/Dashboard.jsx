import React, { useState } from "react";
import Clock from "../components/Clock";

const sportsData = {
  سباحة: {
    مدارس: ["رئيسى", "دخيلة"],
    تجهيز: ["رئيسى", "دخيلة"],
    صيفى: ["رئيسى", "دخيلة"],
    فرق: [
      "قصيرة 2019",
      "قصيرة 2018",
      "قصيرة 2017",
      "قصيرة 2016",
      "قصيرة 2015",
      "مونو 2015",
      "قصيرة 2014",
      "قصيرة 2013",
      "13+14ز",
      "Senior",
      "عمومى مونو",
    ],
  },
  جمباز: {
    تمهيدي: ["جمباز عام"],
    تجهيزي: ["فني", "أيروبك"],
    ممارسة: ["ممارسة عامة"],
    فرق: ["فريق فني", "فريق أيروبك"],
  },
  كاراتيه: {
    "مدارس رئيسي": ["حزام أبيض/أصفر"],
    "مدارس دخيلة": ["حزام أبيض/أصفر"],
    فرق: ["كومتيه", "كاتا"],
  },
  "كرة قدم": {
    "أكاديمية رئيسي": ["براعم"],
    "أكاديمية دخيلة": ["براعم"],
    فرق: ["فريق الناشئين", "فريق الأول"],
  },
};

export default function Dashboard() {

  const [selectedSport, setSelectedSport] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  const handleSportChange = (e) => {
    setSelectedSport(e.target.value);
    setSelectedCategory("");
    setSelectedSubCategory("");
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubCategory("");
  };

  return (
    <div className="w-[85%] p-4 bg-[rgba(20,20,20,0.6)] border-3 border-[#a3d706] rounded-2xl flex flex-col gap-4 items-center text-white">
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

      {/* Chose Team div 3 */}

      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <select
          value={selectedSport}
          onChange={handleSportChange}
          className="w-full px-3 py-2 bg-[#1f2937] text-[#a3d706] border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] cursor-pointer"
        >
          <option value="" disabled>
            اختر اللعبة...
          </option>
          {Object.keys(sportsData).map((sport) => (
            <option key={sport} value={sport} className="text-white">
              {sport}
            </option>
          ))}
        </select>

        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          disabled={!selectedSport}
          className="w-full px-3 py-2 bg-[#1f2937] text-[#a3d706] border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] disabled:opacity-40 cursor-pointer"
        >
          <option value="" disabled>
            اختر المرحلة / القطاع...
          </option>
          {selectedSport &&
            Object.keys(sportsData[selectedSport]).map((cat) => (
              <option key={cat} value={cat} className="text-white">
                {cat}
              </option>
            ))}
        </select>

        <select
          value={selectedSubCategory}
          onChange={(e) => setSelectedSubCategory(e.target.value)}
          disabled={!selectedCategory}
          className="w-full px-3 py-2 bg-[#1f2937] text-[#a3d706] border border-gray-600 rounded-lg outline-none focus:border-[#a3d706] disabled:opacity-40 cursor-pointer"
        >
          <option value="" disabled>
            اختر التخصص / الفريق...
          </option>
          {selectedSport &&
            selectedCategory &&
            sportsData[selectedSport][selectedCategory]?.map((sub) => (
              <option key={sub} value={sub} className="text-white">
                {sub}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

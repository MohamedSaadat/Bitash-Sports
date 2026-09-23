import React, { useState, useEffect } from "react";

export default function Clock() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const weekday = now.toLocaleDateString("en-US", { weekday: "long" });
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();

      const time = now
        .toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
        .toLowerCase();

      setCurrentDateTime(`${weekday}, ${day}/${month}/${year} ${time}`);
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <input
      type="text"
      value={currentDateTime}
      readOnly
      dir="ltr"
      className="w-full max-w-sm px-4 py-2 bg-[#1f2937] text-[#a3d706] border border-gray-600 rounded-lg outline-none cursor-default font-mono text-center"
    />
  );
}
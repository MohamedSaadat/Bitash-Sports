import React from "react";
import { useState, useEffect } from "react";

export default function Clock() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("en-EG", {
        year: "numeric",
        weekday: "long",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentDateTime(formatted);
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      {/* Time */}
      <input
        type="text"
        value={currentDateTime}
        readOnly
        className="w-full max-w-sm px-4 py-2 bg-[#1f2937] text-[#a3d706] border border-gray-600 rounded-lg outline-none cursor-default font-mono text-center"
      />
    </>
  );
}

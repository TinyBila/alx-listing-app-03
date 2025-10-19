// components/common/Pill.tsx
import React from "react";
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ label, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
        active
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;

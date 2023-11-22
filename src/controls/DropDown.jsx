// CustomDropdown.jsx

import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Dropdown({ options, selectedOption, onSelect }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionSelect = (option) => {
    onSelect(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative rounded-3xl bg-white mt-2">
      <div
        className=" py-4 px-4 cursor-pointerrounded-md text-start flex justify-between font-gibsonsemibold"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedOption || "Select an option"}
        <ArrowDropDownIcon />
      </div>
      {isDropdownOpen && (
        <ul className="options-list absolute w-full mt-2 bg-white border border-gray-300 rounded-md shadow z-10">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionSelect(option)}
              className={`py-2 px-4 cursor-pointer transition duration-300 ${
                option === selectedOption
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-200"
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

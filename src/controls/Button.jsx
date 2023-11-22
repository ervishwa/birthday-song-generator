import React from "react";

const getThemeClasses = (theme) => {
  let themeClasses = "";

  if (theme === "primary") {
    themeClasses =
      "bg-pale-yellow text-indigo-900 rounded-3xl disabled:text-gray-400 font-gibsonsemibold";
  } else if (theme === "secondary") {
    themeClasses = "bg-pale-yellow text-indigo-900 rounded-lg disabled:bg-gray-400";
  } else if (theme === "tertiary") {
    themeClasses =
      "bg-violet-400 text-white rounded-3xl font-gibsonsemibold disabled:text-gray-400 disabled:bg-gray-50";
  } else if (theme === "primary-purple") {
    themeClasses = "border border-pink bg-pink text-white text-xs font-normal";
  }

  return themeClasses;
};

const getSizeClasses = (size) => {
  let sizeClasses = "";
  if (size === "xs") {
    sizeClasses = "px-8 py-3 text-lg";
  }
  if (size === "sm") {
    sizeClasses = "px-12 py-4 text-3xl";
  } else if (size === "md") {
    sizeClasses = "px-4 py-2.5 font-semibold text-sm";
  } else if (size === "lg") {
    sizeClasses = "px-[1.125rem] py-2.5 font-semibold text-base";
  } else if (size === "xl") {
    sizeClasses = "px-5 py-3 font-semibold text-base";
  } else if (size === "2xl") {
    sizeClasses = "px-7 py-4 font-semibold text-lg";
  }

  return sizeClasses;
};

export default function Button({
  name,
  theme,
  size,
  disabled = false,
  onClick,
  buttonType = "button",
}) {
  return (
    <button
      type={buttonType === "submit" ? "submit" : "button"}
      className={`${getThemeClasses(theme)} ${getSizeClasses(
        size
      )}  shadow-xs cursor-pointer`}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

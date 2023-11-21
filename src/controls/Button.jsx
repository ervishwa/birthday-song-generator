import React from "react";

const getThemeClasses = (theme) => {
  let themeClasses = "";

  if (theme === "primary") {
    themeClasses =
      "bg-pale-yellow text-indigo-900 rounded-3xl border border-primary-500 hover:bg-primary-700 hover:border-primary-700 focus:ring-4 focus:ring-primary-100 disabled:bg-primary-200 disabled:border-primary-200";
  } else if (theme === "secondary") {
    themeClasses = "bg-pale-yellow text-indigo-900 rounded-lg";
  } else if (theme === "secondary-color") {
    themeClasses =
      "border border-primary-200 text-primary-200 hover:bg-primary-100 hover:text-primary-500 focus:text-primary-500 focus:ring-4 focus:ring-primary-50 focus:bg-primary-50 focus:hover:bg-primary-100 disabled:bg-primary-25 disabled:border-primary-25";
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

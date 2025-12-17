import React from "react";

const variantClasses = {
  primary: "bg-primaryColor-600 text-white hover:bg-primaryColor-700",
  danger: "bg-red-600 text-white hover:bg-red-700",
  action:"bg-purple-600 text-white hover:bg-purple-700",
};

export const Button = ({
  label,
  type = "button",
  className = "",
  onClick,
  disabled = false,
  variant = "primary",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md font-semibold disabled:opacity-50 ${variantClasses[variant]} ${className}`}
    >
      {label}
    </button>
  );
};

import React from "react";

interface TagProps {
  className?: string;
  children: React.ReactNode;
  variant?: "outlined" | "contained";
  theme?: "light" | "dark";
}

const Tag: React.FC<TagProps> = ({
  className = "",
  children,
  variant = "contained",
  theme = "light",
}) => {
  const themeVariantClasses =
    theme === "dark"
      ? variant === "outlined"
        ? "bg-transparent text-white border-gray-600"
        : "bg-gray-800 text-white border-gray-800"
      : variant === "outlined"
      ? "bg-transparent text-black border-gray-300"
      : "bg-white text-black border-white";

  return (
    <span
      className={`cursor-pointer rounded-full border p-2 px-4 ${className} ${themeVariantClasses}`}
    >
      {children}
    </span>
  );
};

export default Tag;

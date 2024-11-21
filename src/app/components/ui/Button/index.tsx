import React, { ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

type ButtonVariant = "contained" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  className = "",
  children,
  ...rest
}) => {
  const baseStyle =
    "rounded-full font-semibold text-sm px-6 py-2 transition-all focus:outline-none";
  const variants = {
    contained: "bg-black text-white hover:bg-blue-600",
    outline: "border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyle} ${variants[variant]} ${className} w-fit`}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default Button;

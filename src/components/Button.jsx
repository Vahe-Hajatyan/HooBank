import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient rounded-[10px] font-poppins font-medium text-[18px] text-primary outline-none ${styles} hover:scale-110 transition ease-in-out duration-200`}
    >
      Get Started
    </button>
  );
};

export default Button;

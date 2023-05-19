
import React from "react";


const Button = ({
 label,
 onClick,
 disabled,
 outline,
 small,
 icon: Icon,
 platform
}) => {
 return (
  <button
   className={`relative disabled:opacity-50 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${
    platform === 'fb'
     ? "bg-[#4267b2] border-[#4267b2] text-white"
     : platform === 'tw' ? "bg-[#3ba9ee] border-[#3ba9ee] text-white" : ''
   } ${
    small
     ? "py-1 font-medium border-[1px] text-sm"
     : "py-3 text-md font-semibold border-[2px]"
   }`}
   onClick={onClick}
   disabled={disabled}
  >
   {Icon && (
    <Icon size={24} className="absolute left-4 top-3 text-white" />
   )}
   {label}
  </button>
 );
};

export default Button;

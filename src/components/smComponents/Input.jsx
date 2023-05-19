

import React from "react";
import { BiDollar } from "react-icons/bi";


const Input = ({
 id,
 label,
 type = "text",
 disabled,
 formatPrice,
 required,
 register,
 errors,
}) => {
 return (
  <div className="w-full relative">

    {/* input */}
   <input
    id={id}
    disabled={disabled}
    {...register(id, { required })}
    placeholder=" "
    type={type}
    name={id}
    className={`peer w-full p-4 py-3 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${
     errors[id]
      ? "border-rose-400 focus:border-rose-500"
      : "border-neutral-300 focus:border-black"
    }`}
   />

   {/* label */}
   <label
    htmlFor={id}
    className={`absolute transition duration-150 -translate-y-2 top-5 left-5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 ${
     errors[id] ? "text-rose-500" : "text-zinc-500"
    }`}
   >
    {label}

   </label>
  </div>
 );
};

export default Input;

import React from 'react'
import {BsCurrencyDollar } from "react-icons/bs";


const CardInput = ({id, value,handleChange, inputType, label, amount}) => {
  return (
    <div className='flex flex-col items-start w-full relative'>
       {amount && <BsCurrencyDollar className='absolute top-16 text-gray-500 left-2 z-20'/>}
        <label htmlFor={id} className='text-[#212529] mt-4 text-[1.2rem] mb-1 font-[500] card-label'>{label}</label>
          <input type={ inputType } name={id} id={ id } value={ value} onChange={handleChange}  className={`card-input w-[405px] text-[1.2rem] font-[500] text-[#212529] px-4 ${amount && 'pl-7'}`}/>
    </div>
  )
}

export default CardInput
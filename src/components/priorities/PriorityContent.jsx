import React from 'react'
import Title from '../title';

export default function PriorityContent({smallTitle, bigTitle, text}) {
  return (
    <div className='flex flex-col justify-start w-full'>
        <div className='flex flex-col justify-start text-left'>
              <p className='leading-4 text-[#e83b48] text-[1.1rem]  md:text-[1.2rem] uppercase -mb-2 md:mb-0'>{smallTitle }</p>
              <Title text={ bigTitle } sm/>
              
              <p className='md:font-[600] text-[#212529] text-[.9rem]  md:text-[1rem] font-[600] con-p' >{ text }</p>
        </div>
        <button className='text-white border-none outline-none bg-[#2b4d85] px-4 py-[10px] uppercase text-sm font-bold  mt-4 self-center rounded-md tracking-tight'>Learn More</button>
    </div>
  )
}

import { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";

const SingleNavlinks = ({drop, text, lists}) => {

    const [isHover, setIsHover] = useState(false)
  return (
      <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={`relative text-[#2b4d85] transition-all duration-150 font-bold text-[.85rem] items-center justify-center cursor-pointer p-3 flex gap-1 ${isHover && 'bg-[#2b4d85] text-white'} uppercase tracking-tight`}
      >
          {text}
        {drop &&  <AiFillCaretRight className={`transition-all duration-300 text-[#2b4d85] ${isHover && 'rotate-90 text-white'} text-[.65rem]`}/>}



          { drop && isHover && (
              <div className="absolute top-11 left-0 hidden lg:block bg-[#2b4d85] text-white w-[230px] pt-2 py-3">
                  <ul className="flex flex-col text-[.85rem] items-start uppercase font-light nav-ul w-full">
                      { lists && lists.map( list => (
                         <li key={list}>{list}</li>
                    ))}
                  </ul>
              </div>
          )}
      </div>
  )
}

export default SingleNavlinks
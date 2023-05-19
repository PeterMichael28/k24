import { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";


const MobileSingleNav = ({text, isSelected, setIsSelected, drop, lists}) => {
    
    return (
      <div className={`${isSelected === text && 'bg-[#E83B48]  w-full items-start p-2'}`}>
        <div className={`flex space-x-1 items-center text-white uppercase text-[1rem] font-semibold cursor-pointer tracking-wide relative `} onClick={() => setIsSelected(text) } >
              {text}
        {drop &&  <AiFillCaretRight className={`transition-all duration-300 text-white ${isSelected === text && 'rotate-90'} text-[.95rem]`}/>}

        
        </div>

        { drop && isSelected === text && (
              <div className=" lg:hidden text-white w-full pt-3 py-1 pl-5">
                  <ul className="flex flex-col text-[.9rem] items-start uppercase font-[100] space-y-2 w-full">
                      { lists && lists.map( list => (
                         <li key={list}>{list}</li>
                    ))}
                  </ul>
              </div>
          )}

      </div>
    )
}

const MobileNav = ({isOpen, isSelected, setIsSelected}) => {
    const priorities = ['HONEST GOVERNMENT', 'Reconciliation', 'Environment', 'Peace', 'Civil Liberties']
  const action = ['Volunteer', 'Get Updates', 'Spread the Word', 'Events']
  const news = ['Interviews', 'News Coverage', 'Articles', 'Press']
  const about = ['About Robert F.Kennedy, Jr.', 'Contact Us']


  return (
    <div className={` transition-all duration-500 ${ isOpen ? isSelected ? 'h-[400px]' : 'h-[300px]' : 'h-0 overflow-hidden' }`}>
      <div className={ `flex w-full h-full px-5 flex-col space-y-5 py-4 bg-[#2b4d85] lg:hidden items-start  relative -z-2  mobile-nav` }>
          <MobileSingleNav isSelected={ isSelected } setIsSelected={ setIsSelected } text='Priorities' drop lists={priorities } />
          <MobileSingleNav isSelected={ isSelected } setIsSelected={ setIsSelected } text='Take Action' drop lists={action }/>
          <MobileSingleNav isSelected={ isSelected } setIsSelected={ setIsSelected } text='News' drop lists={news } />
          <MobileSingleNav isSelected={ isSelected } setIsSelected={ setIsSelected } text='MERCH' />
          <MobileSingleNav isSelected={ isSelected } setIsSelected={ setIsSelected } text='Videos'/>
          <MobileSingleNav isSelected={ isSelected } setIsSelected={ setIsSelected } text='About' drop lists={about }/>
    </div> 
  
  </div>
  )
}

export default MobileNav
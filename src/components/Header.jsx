import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import Navlinks from "./Navlinks/Navlinks";
import MobileNav from "./Navlinks/MobileNav";
import Img from '../assets/th.jpeg'
import Img1 from '../assets/close.png'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scroll, setScroll] = useState(false)
    const [isSelected, setIsSelected] = useState('')

  useEffect( () => {
    let s_p = window.scrollY;
    console.log(s_p)
    if (s_p > 100){
       setScroll(true)
       console.log('first')
    } else {
      setScroll(false)
    }
    }, [])
  return (
      <div className={`w-full fixed top-0 left-0 z-30 ${scroll && 'sticky top-0 left-0 z-30'}`}>
      
      <div className={`navbar relative z-50`}>
          
      <div className="navbar-container">
        <a href="/" className="py-1 mr-4">
            <img src="https://assets.nationbuilder.com/joinkennedy/sites/5/meta_images/original/logo.png?1681716385" alt="logo" className={`navbar-brand-img transition-all duration-200 ${scroll & 'max-h-[38px]'}`}/>
            
        </a>

        <div>

        </div>
      {/* desktop navlinks */}
          <Navlinks />

      

          <button className=" bg-[#E83B48] border-[#E83B48] text-white lg:text-sm text-[1rem] tracking-tight font-semibold lg:tracking-tighter  py-2 px-4 lg:px-6 uppercase rounded-md ml-auto lg:ml-0">Donate</button>
          <div className="lg:hidden">
          
            {
              isOpen ?
                <GrClose className={ `text-[2rem] font-light ml-4 mr-3 transition-all duration-500 cursor-pointer ${ !isOpen && 'opacity-0' }` } onClick={ () => setIsOpen( !isOpen ) } />
                :
                // <SlMenu className={`text-[2rem] cursor-pointer font-light ml-4 transition-all duration-500 ${isOpen && 'opacity-0'}`} onClick={() => setIsOpen(!isOpen)}/>
                <img src={Img } alt="logo" className={`w-16 cursor-pointer font-light ml-4 transition-all duration-500 ${isOpen && 'opacity-0'}`} onClick={() => setIsOpen(!isOpen)}/>
          }
          </div>

          
    </div>

     
      </div>

       {/*  mobile navlinks*/ }
      <MobileNav isOpen={ isOpen } isSelected={ isSelected } setIsSelected={ setIsSelected } />
      </div>
  )
}

export default Header

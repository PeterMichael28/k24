import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import Navlinks from "./Navlinks/Navlinks";
import MobileNav from "./Navlinks/MobileNav";
import Img from '../assets/th2.jpeg'
import Img1 from '../assets/close.png'
const Header = ( {isModalOpen, setIsModalOpen}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [scroll, setScroll] = useState(false)
    const [isSelected, setIsSelected] = useState('')

  useEffect( () => {
    if ( typeof window !== 'undefined' ) {
      window.addEventListener( 'scroll', () => {
        setScroll(window.pageYOffset > 50)
      })
    }
    }, [])

  return (
      <div className={`w-full fixed left-0 z-[50] `}>
      
      <div className={`navbar relative z-[70]`}>
          
      <div className={`navbar-container transition-all duration-500 px-4 ${scroll ? 'py-3' : 'py-4'}`}>
        <a href="/" className="py-1 mr-4">
            <img src="https://assets.nationbuilder.com/joinkennedy/sites/5/meta_images/original/logo.png?1681716385" alt="logo" className={`navbar-brand-img transition-all duration-200 ${scroll && 'h-[25px]'}`}/>
            
        </a>

        <div>

        </div>
      {/* desktop navlinks */}
          <Navlinks />

      

          <button
            className={ `bg-[#E83B48] border-[#E83B48] text-white lg:text-sm text-[.9rem] sm:text-[1rem] tracking-tight font-semibold lg:tracking-tighter  py-2 px-4 lg:px-6 uppercase rounded-md -mr-4 sm:mr-0 ml-auto lg:ml-0 donate-btn ${ scroll ? 'scale-90' : '' }` }
            onClick={() => setIsModalOpen(true)}
          >
            Donate
          </button>
          <div className="lg:hidden">
          
            {
              isOpen ?
                <GrClose className={ `text-[2rem] font-light ml-7 mr-3 transition-all duration-500 cursor-pointer ${ !isOpen && 'opacity-0' }` } onClick={ () => setIsOpen( !isOpen ) } />
                :
                // <SlMenu className={`text-[2rem] cursor-pointer font-light ml-4 transition-all duration-500 ${isOpen && 'opacity-0'}`} onClick={() => setIsOpen(!isOpen)}/>
                <img src={Img } alt="logo" className={`w-12 cursor-pointer font-light ml-7 transition-all duration-500 ${isOpen && 'opacity-0'} ${scroll && 'scale-75'}`} onClick={() => setIsOpen(!isOpen)}/>
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

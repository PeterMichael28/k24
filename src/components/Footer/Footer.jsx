import React from 'react'
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='py-[2rem] pt-[3rem] bg-white text-black'>
          <div className="container">
              <div className='flex justify-between md:items-center'>
                  <div className='w-3/12 relative px-4'>
                      <img src="https://assets.nationbuilder.com/themes/646179a40d959c3caa16bd1a/attachments/original/1682472089/footer-logo-min.png?1682472089" alt="Footer-image" className='w-[107px]'/>
                  </div>

                  <div className='w-9/12 relative px-4 '>
                      <div className='flex items-center justify-end font-semibold gap-2 sm:gap-x-3 md:space-x-4 '>
                      <a
                          href="https://www.facebook.com/rfkjr"
                          target="_blank"
                          rel="noreferrer"
                          className='w-12 h-12 rounded-full flex items-center justify-center bg-[#2b4d85]'>
                          <FaFacebookF className='text-white text-[1.4rem]' />
                      </a>
                        <a href="https://www.facebook.com/rfkjr"
                          target="_blank"
                          rel="noreferrer"
                          className='w-12 h-12 rounded-full flex items-center justify-center bg-[#02AAF1] '><AiOutlineTwitter className='text-white text-[1.4rem]' /></a>
                      </div>
                      
                      <div className='my-8 flex justify-end text-right text-[#343a40]'>
                          <div className='flex justify-end py-2 flex-wrap lg:py-4 uppercase font-semibold md:border-y-[1px] border-[#343a40] footer-menu flex-col lg:flex-row lg:gap-y-4'>
                              <p className='px-2 my-0 text-[#2b4d85] transition-all duration-500 hover:text-[#E83B48]'>Press</p>
                              <p className='px-2 my-0 text-[#2b4d85] transition-all duration-500 hover:text-[#E83B48]'>Donate</p>
                              <p className='px-2 my-0 text-[#2b4d85] transition-all duration-500 hover:text-[#E83B48]'>Contact us</p>
                              <p className='px-2 my-0 text-[#2b4d85] transition-all duration-500 hover:text-[#E83B48]'>Privacy Policy</p>
                              <p className='px-2 my-0 text-[#2b4d85] transition-all duration-500 hover:text-[#E83B48]'>Terms of service</p>
                              <p>&nbsp;</p>
                              <p>&nbsp;</p>
                              <p className='px-2 my-0 text-[#2b4d85] transition-all duration-500 hover:text-[#E83B48]'>Login</p>
                          </div>
                      </div>

                      <p className="w-full md:block hidden font-normal mb-4 text-right">Copyright © 2023. All Rights Reserved</p>
                  </div>
                </div>

            <div className='w-full relative px-4 text-center'>
            <h5 className="font-normal text-sm md:text-base">PAID FOR BY TEAM KENNEDY</h5>

            <p className="w-full md:hidden block text-center font-normal mt-2 text-sm">Copyright © 2023. All Rights Reserved</p>
            </div>
        </div>
       
    </footer>
  )
}

export default Footer
import React, { useState, useCallback, useEffect } from 'react'
import { IoMdClose } from "react-icons/io";
import { MdArrowBack } from "react-icons/md";
import Button from '../smComponents/Button';


const Modal = ( {
    isOpen,
    disabled,
    onClose,
    title,
    body,
  onSubmit,
  footer,
  actionLabel,
  platform,
  backFunc,
  step
}) => {

    const [showModal, setShowModal] = useState(isOpen)

     // set isOpen
 useEffect(() => {
  setShowModal(isOpen);
 }, [isOpen]);


    const handleClose = useCallback(() => {
        if (disabled) return;
      
        setShowModal(false);
      
        setTimeout(() => {
         onClose();
        }, 300);
       }, [disabled, onClose ]);

        // handle submit

 const handleSubmit = useCallback(() => {
  if (disabled) return;

  onSubmit();
 }, [disabled, onSubmit]);

 if (!isOpen) {
  return null;
 }
      
  return (
    <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
     <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-ful md:h-auto">
      {/* content */}
      <div
       className={`transition duration-300 h-full 
         ${
          showModal
           ? "translate-y-0 opacity-100"
           : "translate-y-[200%] opacity-0"
         }
         `}
      >
       <div className="transition h-full lg:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        {/* header */}
        <div className=" flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
         {/* close button */}
         <button
          className="p-1 border-0 hover:opacity-70 transition absolute right-9"
          onClick={handleClose}
         >
          <IoMdClose size={24} />
         </button> 
         
        { step > 1 && (<button
          className="p-1 border-0 hover:opacity-70 transition absolute left-9"
          onClick={backFunc}
         >
          <MdArrowBack size={24} />
         </button>)}
 
         {/* title */}
         <div className="text-lg font-semibold">{title}</div>
        </div>
 
        {/* body */}
        <div className="relative p-6 flex-auto">{body}</div>

          {/* footer */}
       <div className="flex flex-col gap-2 px-6 pb-3">
       <div className="flex items-center gap-4 w-full">
         {actionLabel && <Button
          disabled={disabled}
          label={actionLabel}
          onClick={handleSubmit}
          platform={platform}
         />}
        </div>
       {footer}
       </div>
       </div>
      </div>
     </div>
    </div>
   </>
  )
}

export default Modal
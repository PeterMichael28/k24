import Btc from "../assets/btc.jpeg";
import Eth from "../assets/eth.jpeg";
import Footer from "../components/Footer/Footer";

const Donate = () => {
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

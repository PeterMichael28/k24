import Join from "./Join";


const Hero = () => {
  return (
    <div className='md:h-screen w-full hero flex flex-col md:flex-row items-center relative pt-[6rem]'>
        <div className="block md:hidden relative mobile-img w-[75%] mx-auto ">
            <img src="https://kennedy24.b-cdn.net/mobile-hero-webp/mobile-profile.png" alt="" className="w-full"/>
        </div>
       <Join />
    </div>
  )
}

export default Hero
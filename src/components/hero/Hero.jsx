import Join from "./Join";


const Hero = () => {
  return (
    <div className='h-screen w-full hero flex items-center relative '>
        <div className="block md:hidden mobile-img w-[75%] mx-auto">
            <img src="https://kennedy24.b-cdn.net/mobile-hero-webp/mobile-profile.png" alt="" className="w-full"/>
        </div>
       <Join />
    </div>
  )
}

export default Hero
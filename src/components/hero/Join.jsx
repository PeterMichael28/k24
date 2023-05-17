

const Join = () => {
  return (
    <div className="ml-20 -mt-4 md:max-w-[420px] flex flex-col join"> 
      <h1 className="-mt-3 md:mt-9">
        <span className="text-[2.8rem] md:text-[5.7rem] text-[#2b4d85] font-[900] capitalize transition-all duration-500 hover:text-[#E83B48]">Join Us</span>
        {/* <span>JOIN US</span> */}
      </h1>
      <p className="text-[#2b4d85] px-3 text-[1.1rem]  md:text-[1.3rem] md:px-6">Get email updates: news, issues, and events.</p>

      <form action="" className="flex flex-col w-full gap-3 form mt-4">
        <input type="text" placeholder="Email" />
        <div className="w-full flex gap-2">

        <input type="text" placeholder="Name" className="w-1/2"/>
        <input type="tel" placeholder="Zip" className="w-1/2" />
        </div>

        <button className="bg-[#E83B48] border-[#E83B48] outline-none uppercase cursor-pointer w-full font-[600] py-[6px] px-4 text-white rounded mt-5">Stay Informed</button>
      </form>
    </div>
  )
}

export default Join
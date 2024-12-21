import React from 'react'


export default function CalltoAction() {
  return (
    <section className=' relative overflow-hidden bg-[#232526]'>
      <div className='  flex flex-col gap-6 text-white bg-[#232526] my-36 lg:my-24 '>
        <h1 className='z-30 max-w-5xl mx-auto py-2 bg-gradient-to-r from-[#6ACE57] to-[#07C8E6] inline-block text-transparent bg-clip-text md:text-[4.625rem] md:font-semibold md:leading-[4.625rem] text-center text-[2.75rem] font-semibold leading-[2.75rem]'>Ready to make saving money enjoyable?</h1>
        <p className=' px-4 md:max-w-sm z-30 mx-auto text-[1.5rem] font-semibold leading-[1.82875rem] text-center'>Find out how Cove fits your lifestyle in just 5 minutes.</p>
        <div className='flex z-30 sm:justify-center mt-8 px-6 sm:px-0 font-medium flex-col gap-3 sm:text-center'>
          <div className=' z-30 flex gap-1 items-center sm:justify-center'><span>✅</span> Quick, guided onboarding</div>
          <div className=' z-30 flex gap-1 items-center sm:justify-center'><span>✅</span> No confusing jargon or hidden fees</div>
          <div className=' z-30 flex gap-1 items-center sm:justify-center'><span>✅</span> Personalized tools to match your financial goals</div>
        </div>
        <div className=' flex flex-col px-6 sm:px-0  sm:flex-row z-30 justify-center items-center text-black gap-4 mt-[3.2rem]'>
          <button className='z-30 text-base text-center w-full sm:w-auto font-semibold px-10 py-3  p-3 rounded-full border border-black bg-gradient-to-r from-[#6ACE57] to-[#07C8E6]'>Sign Up Now</button>
          <button className=' z-30 text-base text-center w-full sm:w-auto font-semibold px-10 py-3  p-3 rounded-full border  border-black bg-white'>Learn More </button>
        </div>
      </div>

      <img src={'/bananatree.png'} alt='bananatree'  className=' hidden lg:absolute lg:block w-[40rem] h-[40rem]  -bottom-1 -right-60 ' ></img>
      <img src={'/tree.png'} alt='tree' className='w-[43rem] h-[43rem] object-cover -bottom-1 -left-[4rem] hidden lg:absolute lg:block '  ></img>
      <img src={'/orginal.png'} alt='bananatree'  className=' absolute md:-top-8 -top-16 -left-24 scale-150 sm:scale-100 md:-left-16 xl:left-36 w-[15.1875rem] h-[15.1875rem]  -bottom-1 -right-60 ' ></img>
      <img src={'/orginal.png'} alt='bananatree'  className=' absolute top-0 xl:-top-10 blur-sm -right-6 md:right-0 w-[8.25rem] h-[8.25rem] scale-150 sm:scale-100' ></img>

    </section>
  )
}

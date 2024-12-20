import Image from 'next/image'
import React from 'react'
import bananatree from '@/../public/bananatree.png'
import tree from '@/../public/tree.png'
import orginal from '@/../public/orginal.png'

export default function CalltoAction() {
  return (
    <section className=' relative overflow-hidden bg-[#232526]'>
      <div className='  flex flex-col gap-6 text-white bg-[#232526] my-24'>
        <h1 className='max-w-5xl mx-auto py-2 bg-gradient-to-r from-[#6ACE57] to-[#07C8E6] inline-block text-transparent bg-clip-text text-[4.625rem] font-semibold leading-[4.625rem] text-center'>Ready to make saving money enjoyable?</h1>
        <p className='max-w-sm mx-auto text-[1.5rem] font-semibold leading-[1.82875rem] text-center'>Find out how Cove fits your lifestyle in just 5 minutes.</p>
        <div className='flex justify-center mt-8 font-medium flex-col gap-3 text-center'>
          <p>✅ Quick, guided onboarding</p>
          <p>✅ No confusing jargon or hidden fees</p>
          <p>✅ Personalized tools to match your financial goals</p>
        </div>
        <div className=' flex z-30 justify-center items-center text-black gap-4 mt-[3.2rem]'>
          <button className='z-30 text-base text-center font-semibold px-10 py-3  p-3 rounded-full border border-black bg-gradient-to-r from-[#6ACE57] to-[#07C8E6]'>Sign Up Now</button>
          <button className=' z-30 text-base text-center font-semibold px-10 py-3  p-3 rounded-full border  border-black bg-white'>Learn More </button>
        </div>
      </div>

      <Image src={bananatree} alt='bananatree'  className=' absolute w-[40rem] h-[40rem]  -bottom-1 -right-60 ' ></Image>
      <Image src={tree} alt='tree' className='w-[43rem] h-[43rem] object-cover -bottom-1 -left-[4rem] absolute '  ></Image>
      <Image src={orginal} alt='bananatree'  className=' absolute -top-8 left-36 w-[15.1875rem] h-[15.1875rem]  -bottom-1 -right-60 ' ></Image>
      <Image src={orginal} alt='bananatree'  className=' absolute -top-10 blur-sm right-0 w-[8.25rem] h-[8.25rem]' ></Image>

    </section>
  )
}

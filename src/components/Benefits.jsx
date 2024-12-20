import Image from 'next/image'
import React from 'react'
import BonsaiTree from '@/../public/BonsaiTree_2.png'
import image1 from '@/../public/IMG_2491.png'
import image2 from '@/../public/IMG_2509.png'
import image3 from '@/../public/IMG_2512.png'
import image4 from '@/../public/coveLogoGradient.png'
import framericon from '@/../public/logos/framericon.png'
import stripeicon from '@/../public/logos/stripeicon.png'
import vectior from '@/../public/logos/vectioricon.png'
import paypalicon from '@/../public/logos/paypalicon.png'

export default function Benefits() {
  return (
    <section className=' py-24 '>
      <div className=' flex flex-col items-center gap-1'>
        <div className=' h-16 w-[17rem] overflow-hidden '>
          <Image src={BonsaiTree} className='w-[17rem] h-[17rem] -mt-36 object-cover'></Image>
        </div>
        <h1 className='text-[46px] font-bold leading-[55.2px] tracking-[-0.02em] text-center decoration-skip-ink-none text-[#171717]'>Benefits</h1>
        <p className='font-montserrat text-[18px] font-medium leading-[21.6px] tracking-[-0.02em] text-center decoration-skip-ink-none'>Our Offerings</p>
      </div>
      <div className=' grid  grid-cols-2 max-w-7xl mx-auto gap-6  mt-16'>
        <div className='w-[39.25rem]  h-[40.625rem] flex flex-col items-center relative overflow-hidden rounded-[1.5rem] border border-solid border-black/20 bg-[#F6F6E9]'>
          <div className=' px-7 pt-6 flex flex-col gap-3'>
            <h1 className='text-2xl font-semibold leading-[1.83rem] tracking-[-0.02em] text-left text-custom'>Turn financial goals into a fun, visual experience</h1>
            <p className=' text-lg font-medium opacity-70'>With Cove, saving is more than just numbers. Customize your virtual island with rare decorations that represent your progress. Every dollar saved brings you closer to a unique, personalized world that grows as you do.</p>
          </div>
          <Image className=' w-[22rem] h-[46.875rem] border-8 border-black/20 mt-14 rounded-[1.9rem] ' src={image1} ></Image>
        </div>
        <div className='w-[39.25rem]  h-[40.625rem] flex flex-col items-center relative overflow-hidden rounded-[1.5rem] border border-solid border-black/20 bg-[#F6F6E9]'>
          <div className=' px-7 pt-6 flex flex-col gap-3'>
            <h1 className='text-2xl font-semibold leading-[1.83rem] tracking-[-0.02em] text-left text-custom'>Turn financial goals into a fun, visual experience</h1>
            <p className=' text-lg font-medium opacity-70'>With Cove, saving is more than just numbers. Customize your virtual island with rare decorations that represent your progress. Every dollar saved brings you closer to a unique, personalized world that grows as you do.</p>
          </div>
          <Image className=' w-[22rem] h-[46.875rem] border-8 border-black/20 mt-14 rounded-[1.9rem] ' src={image2} ></Image>
        </div>
        <div className='w-[39.25rem]  h-[40.625rem] flex flex-col items-center relative overflow-hidden rounded-[1.5rem] border border-solid border-black/20 bg-[#F6F6E9]'>
          <div className=' px-7 pt-6 flex flex-col gap-3'>
            <h1 className='text-2xl font-semibold leading-[1.83rem] tracking-[-0.02em] text-left text-custom'>Turn financial goals into a fun, visual experience</h1>
            <p className=' text-lg font-medium opacity-70'>With Cove, saving is more than just numbers. Customize your virtual island with rare decorations that represent your progress. Every dollar saved brings you closer to a unique, personalized world that grows as you do.</p>
          </div>
          <Image className=' w-[22rem] h-[46.875rem] border-8 border-black/20 mt-14 rounded-[1.9rem] ' src={image3} ></Image>
        </div>
        <div className='w-[39.25rem]  h-[40.625rem] flex flex-col items-center relative overflow-hidden rounded-[1.5rem] border border-solid border-black/20 bg-[#F6F6E9]'>
          <div className=' px-7 pt-6 flex flex-col gap-3'>
            <h1 className='text-2xl font-semibold leading-[1.83rem] tracking-[-0.02em] text-left text-custom'>Turn financial goals into a fun, visual experience</h1>
            <p className=' text-lg font-medium opacity-70'>With Cove, saving is more than just numbers. Customize your virtual island with rare decorations that represent your progress. Every dollar saved brings you closer to a unique, personalized world that grows as you do.</p>
          </div>
          <div className=' relative flex flex-col items-center justify-center w-[22rem] h-[46.875rem] bg-[#232526] border-8 border-black/20 mt-14 rounded-t-[1.9rem] '  >
            <div className=' flex gap-6 absolute  left-[-30%] top-10 '>
              <Image className='w-[7.125rem] h-[7.125rem] ' src={stripeicon}></Image>
              <Image className='w-[7.125rem] h-[7.125rem] ' src={paypalicon}></Image>
              <Image className='w-[7.125rem] h-[7.125rem] ' src={framericon}></Image>
              <Image className='w-[7.125rem] h-[7.125rem] ' src={vectior}></Image>
            </div>
            <Image src={image4} className='w-[17.125rem] mt-5 h-[4.5rem]'></Image>
          </div>
        </div>
      </div>
    </section>
  )
}

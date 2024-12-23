import Image from 'next/image'
import React from 'react'
import BonsaiTree from '@/../public/orginal.png'
import CoveDarkLogo from '@/../public/logo.png'
import { data } from '@/data'
import Smoothup from './smoothup'

export default function GettoKnowsection() {
  return (
    <section>
      <Smoothup className=' flex flex-col items-center gap-1'>
        <div className=' h-16 w-[6.2rem] overflow-hidden '>
          <Image alt='BonsaiTree' src={BonsaiTree} className='w-[6.2rem] -mt-3 h-[6.2rem]'></Image>
        </div>
        <h1 className=' text-[2.5rem] font-bold leading-[3rem] lg:text-[46px] lg:leading-[55.2px] tracking-[-0.02em] text-center decoration-skip-ink-none text-[#171717] dark:text-white'>{data.gettoknowussection.heading}</h1>
        <p className='font-montserrat text-[18px] font-medium leading-[21.6px] tracking-[-0.02em] text-center decoration-skip-ink-none text-black dark:text-white'>{data.gettoknowussection.subheading}</p>
      </Smoothup>
      <Smoothup className='flex flex-col lg:flex-row px-4 gap-10 max-w-[77rem] mx-auto mt-14'>
        <div className=' w-full lg:w-[65%]  p-[1.5rem] flex flex-col gap-[1.5rem] bg-[#F6F6E9] dark:bg-white/20 dark:text-white text-black rounded-3xl'>
          <h1 className=' text-[1rem] md:text-[1.25rem] font-semibold leading-[1.875rem] tracking-[-0.02em] text-left'>{data.gettoknowussection.title}</h1>
          {data.gettoknowussection.list.map((text, index) => (
            <p key={index} className="text-[1rem] md:text-[1.25rem] font-medium leading-[1.875rem] tracking-[-0.02em] text-left text-black dark:text-white">
              {text}
            </p>
          ))}
        </div>
        <div className=' flex w-full lg:w-[35%] h-[20rem] lg:h-[25.5625rem] justify-center items-center bg-gradient-to-tr from-[#7ACF3F] to-[#00C8F0] rounded-3xl '>
          <Image alt='CoveDarkLogo' src={CoveDarkLogo} className=' w-[280px] h-[73px]'></Image>
        </div>
      </Smoothup>
    </section >
  )
}

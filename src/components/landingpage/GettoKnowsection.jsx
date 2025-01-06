import Image from 'next/image'
import React from 'react'
import BonsaiTree from '@/../public/orginal.png'
import CoveDarkLogo from '@/../public/logo.png'
import { data } from '@/data'
import Smoothup from './smoothup'
import { icons } from '@/icons'

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
      <Smoothup className='flex  flex-col px-4 lg:flex-row max-w-6xl xl:max-w-7xl mx-auto gap-6 mt-16 '>
        <div className=' w-full lg:w-[33%] h-[37.875rem] p-6 border border-black/25 dark:border-white/20 rounded-3xl flex flex-col gap-6'>
          <div className=' border dark:border-white/20 rounded-2xl pb-4 bg-[#232526] dark:bg-[#FFFFF0] flex flex-col gap-1 h-[20.25rem] overflow-hidden '>
            <div className=' h-[14rem] relative flex justify-center items-center  mb-4 w-full rounded-xl overflow-hidden bg-gradient-to-tr from-[#7ACF3F] to-[#00C8F0]'>
              <Image alt='profile' src={'/26bf5cc897b6afd75047839f469cf94d.png'} width={339} height={512} className=' mt-[6.7rem] ml-2 filter grayscale '></Image>
            </div>
            <p className=' text-2xl font-semibold text-center text-white dark:text-[#232526]'>David Wolfenden</p>
            <p className=' text-center font-medium text-white dark:text-[#232526] text-lg opacity-75'>Chief Executive Officer</p>
          </div>
          <div className=' flex flex-col gap-6'>
            <div className=' flex gap-6 ml-1 items-center justify-start '> 
             <icons.aboutinstagramicon></icons.aboutinstagramicon>
              <icons.aboutlinkeninicon></icons.aboutlinkeninicon>
              <icons.aboutxicon></icons.aboutxicon>
            </div>
            <p className=' text-start font-medium text-lg dark:text-white text-black'>
            Nullam duis convallis sem cras scelerisque aliquam. Sodales volutpat pulvinar amet curabitur pellentesque vestibulum turpis a at. Suspendisse lorem nisi lobortis donec ornare feugiat penatibus 
            </p>
          </div>
        </div>
        <div className=' w-full lg:w-[33%] h-[37.875rem] p-6 border border-black/25 dark:border-white/20 rounded-3xl flex flex-col gap-6'>
          <div className=' border dark:border-white/20 rounded-2xl pb-4 bg-[#232526] dark:bg-[#FFFFF0] flex flex-col gap-1 h-[20.25rem] overflow-hidden '>
            <div className=' h-[14rem] relative flex justify-center items-center  mb-4 w-full rounded-xl overflow-hidden bg-gradient-to-tr from-[#7ACF3F] to-[#00C8F0]'>
              <Image alt='profile' src={'/bc2a4de54b820d272e954dcc2cc6c9ff.png'} width={370} height={370} className='  filter grayscale '></Image>
            </div>
            <p className=' text-2xl font-semibold text-center text-white dark:text-[#232526]'>David Wolfenden</p>
            <p className=' text-center font-medium text-white dark:text-[#232526] text-lg opacity-75'>Chief Executive Officer</p>
          </div>
          <div className=' flex flex-col gap-6'>
            <div className=' flex gap-6 ml-1 items-center justify-start '> 
             <icons.aboutinstagramicon></icons.aboutinstagramicon>
              <icons.aboutlinkeninicon></icons.aboutlinkeninicon>
              <icons.aboutxicon></icons.aboutxicon>
            </div>
            <p className=' text-start font-medium text-lg dark:text-white text-black'>
            Nullam duis convallis sem cras scelerisque aliquam. Sodales volutpat pulvinar amet curabitur pellentesque vestibulum turpis a at. Suspendisse lorem nisi lobortis donec ornare feugiat penatibus 
            </p>
          </div>
        </div>
        <div className=' w-full lg:w-[33%] h-[37.875rem] p-6 border border-black/25 dark:border-white/20 rounded-3xl flex flex-col gap-6'>
          <div className=' border dark:border-white/20 rounded-2xl pb-4 bg-[#232526] dark:bg-[#FFFFF0] flex flex-col gap-1 h-[20.25rem] overflow-hidden '>
            <div className=' h-[14rem] relative flex justify-center items-center  mb-4 w-full rounded-xl overflow-hidden bg-gradient-to-tr from-[#7ACF3F] to-[#00C8F0]'>
              <Image alt='profile' src={'/f9955633519c8702601b67ce0b1f4d00.png'} width={215} height={322} className='mt-6  filter grayscale '></Image>
            </div>
            <p className=' text-2xl font-semibold text-center text-white dark:text-[#232526]'>David Wolfenden</p>
            <p className=' text-center font-medium text-white dark:text-[#232526] text-lg opacity-75'>Chief Executive Officer</p>
          </div>
          <div className=' flex flex-col gap-6'>
            <div className=' flex gap-6 ml-1 items-center justify-start '> 
             <icons.aboutinstagramicon></icons.aboutinstagramicon>
              <icons.aboutlinkeninicon></icons.aboutlinkeninicon>
              <icons.aboutxicon></icons.aboutxicon>
            </div>
            <p className=' text-start font-medium text-lg dark:text-white text-black'>
            Nullam duis convallis sem cras scelerisque aliquam. Sodales volutpat pulvinar amet curabitur pellentesque vestibulum turpis a at. Suspendisse lorem nisi lobortis donec ornare feugiat penatibus 
            </p>
          </div>
        </div>
      </Smoothup>
    </section >
  )
}

import Image from 'next/image'
import React from 'react'
import BonsaiTree from '@/../public/orginal.png'

export default function GettoKnowsection() {
  return (
    <section>
      <div className=' flex flex-col items-center gap-1'>
        <div className=' h-16 w-[6.2rem] overflow-hidden '>
          <Image src={BonsaiTree} className='w-[6.2rem] -mt-3 h-[6.2rem]'></Image>
        </div>
        <h1 className='text-[46px] font-bold leading-[55.2px] tracking-[-0.02em] text-center decoration-skip-ink-none text-[#171717]'>Who we are</h1>
        <p className='font-montserrat text-[18px] font-medium leading-[21.6px] tracking-[-0.02em] text-center decoration-skip-ink-none'>Get to know us</p>
      </div>
      <div className=' grid grid-cols-3 gap-10 max-w-6xl mx-auto'>
        <div className=' col-span-2  p-[1.5rem] gap-[1.5rem] bg-[#F6F6E9] rounded-3xl'>
          <h1 className=' text-[1.25rem] font-semibold leading-[1.875rem] tracking-[-0.02em] text-left'>Lorem ipsum dolor sit amet consectetur. Congue elementum id arcu consectetur tortor erat tortor egestas sit.</h1>
          <p className=' text-[1.25rem] font-medium leading-[1.875rem] tracking-[-0.02em] text-left'>
            Nullam duis convallis sem cras scelerisque aliquam. Sodales volutpat pulvinar amet curabitur pellentesque vestibulum turpis a at. Suspendisse lorem nisi lobortis donec ornare feugiat penatibus egestas amet. Amet sit scelerisque enim volutpat adipiscing.
          </p>
          <p className=' text-[1.25rem] font-medium leading-[1.875rem] tracking-[-0.02em] text-left'>
            Nullam duis convallis sem cras scelerisque aliquam. Sodales volutpat pulvinar amet curabitur pellentesque vestibulum turpis a at. Suspendisse lorem nisi lobortis donec ornare feugiat penatibus egestas amet. Amet sit scelerisque enim volutpat adipiscing.
          </p>
        </div>
      </div>
    </section >
  )
}

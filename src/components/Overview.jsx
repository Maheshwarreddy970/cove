import Image from 'next/image'
import React from 'react'
import BonsaiTree from '@/../public/CampChair.png'

export default function Overview() {
  return (
    <section>
      <div className=' flex flex-col items-center gap-1'>
        <div className=' h-16 w-[17rem] overflow-hidden '>
          <Image src={BonsaiTree} className='w-[17rem] h-[17rem] -mt-36 object-cover'></Image>
        </div>
        <h1 className='text-[46px] font-bold leading-[55.2px] tracking-[-0.02em] text-center decoration-skip-ink-none text-[#171717]'>Benefits</h1>
        <p className='font-montserrat text-[18px] font-medium leading-[21.6px] tracking-[-0.02em] text-center decoration-skip-ink-none'>Our Offerings</p>
      </div>
    </section>
  )
}

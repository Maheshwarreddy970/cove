import Image from 'next/image'
import React from 'react'
import Coral4kDigitalAsset from '@/../public/Coral4kDigitalAsset.png'
import Vault4kWithoutPlatform from '@/../public/Vault4kWithoutPlatform.png'
import vault from '@/../public/Vault_2.png'
import { icons } from '@/icons'

export default function OldNew() {
  return (
    <section className=' max-w-7xl mx-auto mt-36'>
      <div className=' flex flex-col items-center gap-3'>
        <Image src={Coral4kDigitalAsset} className='w-[7.5rem] h-[7.5rem]'></Image>
        <h1 className='text-[46px] font-bold leading-[55.2px] tracking-[-0.02em] text-center decoration-skip-ink-none text-[#171717]'>Old Way Vs. New Way</h1>
        <p className='font-montserrat text-[18px] font-medium leading-[21.6px] tracking-[-0.02em] text-center decoration-skip-ink-none'>Imagine what you could do if managing money felt like a game</p>
      </div>
      <div className=' grid grid-cols-2 gap-8 mt-14'>
        <div className='rounded-[0.75rem] overflow-hidden relative border pt-6 pr-10 pb-6 pl-10 gap-6 bg-[#F6F6E9] border-[#D0D0BB] w-[616px] h-[520px] border-t'>
          <h1 className='text-2xl font-bold leading-[2.6rem] tracking-[-0.04em] text-left  decoration-skip-ink-none'>Before</h1>
          <div className=' text-[18px] font-medium leading-[28px] text-left flex flex-col gap-4  decoration-skip-ink-none'>
            <div className=' flex gap-3 '>
              <icons.vectior></icons.vectior>
              <p>Tracking savings felt boring and tedious</p>
            </div>
            <div className=' flex gap-3 '>
              <icons.vectior></icons.vectior>
              <p>Investing seemed too complex to start</p>
            </div>
            <div className=' flex gap-3 '>
              <icons.vectior></icons.vectior>
              <p>Financial apps left you feeling unmotivated</p>
            </div>
          </div>
          <Image className=' absolute w-[60rem] h-[45.59rem] -bottom-32 -right-48' src={Vault4kWithoutPlatform} ></Image>
        </div>
        <div className='rounded-[0.75rem] overflow-hidden relative border pt-6 pr-10 pb-6 pl-10 gap-6 bg-gradient-to-br from-[#C8FFBE] to-[#5CBCCB] border-[#79B487] w-[616px] h-[520px] border-t'>
          <h1 className='text-2xl font-bold leading-[2.6rem] tracking-[-0.04em] text-left  decoration-skip-ink-none'>After</h1>
          <div className=' text-[18px] font-bold gap-4 flex flex-col leading-[28px] text-left text-[#274B3F]'>
            <div className=' flex gap-3 '>
              <icons.vectiorfilled></icons.vectiorfilled>
              <p>Watch your savings grow while customizing your own island</p>
            </div>
            <div className=' flex gap-3 '>
              <icons.vectiorfilled></icons.vectiorfilled>
              <p>Invest effortlessly with a system designed for instant gratification</p>
            </div>
            <div className=' flex gap-3 '>
              <icons.vectiorfilled></icons.vectiorfilled>
              <p>Feel excited about reaching your financial goals</p>
            </div>
          </div>
          <Image className=' absolute w-[35.87rem] h-[37.05rem] -bottom-36 -right-44' alt='vault' src={vault} ></Image>
        </div>
        <div>

        </div>
      </div>
    </section>
  )
}

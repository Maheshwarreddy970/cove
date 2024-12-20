import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
import bananatree from '@/../public/BananaTreeCrystal.png'
import newsboard from '@/../public/NewsBoard.png'
import vault from '@/../public/Vault_2.png'
import phones from '@/../public/herophone.png'

const montserrat = Montserrat({ weight: '700', subsets: ["latin"] });
const montserrat2 = Montserrat({ weight: '600', subsets: ["latin"] });

export default function Herosection() {
    return (
        <section className='  bg-gradient-to-t from-[#AFE0FF] to-[#82DCFF] pt-32'>
            <div className=' flex justify-center mb-7'>
                <p className={` ${montserrat2.className} rounded-[144px] bg-white/30 border border-[#95D0DF] pt-[6px] pr-4 pb-[6px] pl-4 gap-2 font-semibold text-[18px] leading-[21px] text-[#004248] uppercase`}>Finance for next generation</p>
            </div>
            <div className='flex flex-col items-center gap-4'>
                <h1 className={` max-w-6xl px-8 tracking-[-0.04em] font-bold text-6xl text-black leading-[72px]  text-center ${montserrat.className}`}>How to grow your savings without the hassle of spreadsheets</h1>
                <p className=' max-w-[40rem] font-medium text-lg text-center'>The only gamified finance app for young adults that makes saving and investing simple, rewarding, and fun.</p>
            </div>
            <div className=' mt-14 z-0'>
                <div className='max-w-6xl p-6 mx-auto border rounded-full bg-black/20 border-white/50 flex backdrop-blur-[19.5px]  '>
                    <div className=' flex gap-3'>
                        <div className=' size-[42px]'>
                            <Image src={bananatree} alt='bananatree' width={42} height={42} className=' '></Image>
                        </div>
                        <p className={` text-white text-base leading-5  ${montserrat2.className}`}>Visualize your savings as a customizable virtual island</p>
                    </div>
                    <div className=' flex gap-3'>
                        <div className=' size-[42px] relative n  '>
                            <Image src={newsboard} alt='newsboard' width={42} height={42} className='size-[42px] '></Image>
                        </div>
                        <p className={` text-white text-base leading-5  ${montserrat2.className}`}>Visualize your savings as a customizable virtual island</p>
                    </div>
                    <div className=' flex gap-3'>
                        <div className=' size-[42px]  '>
                            <Image src={vault} alt='vault' width={42} height={42} className=' size-[42px]'></Image>
                        </div>
                        <p className={` text-white text-base leading-5  ${montserrat2.className}`}>Visualize your savings as a customizable virtual island</p>
                    </div>
                </div>
            </div>
            <div className=' flex justify-center items-center gap-4 mt-[3.2rem]'>
                <button className=' text-base text-center font-semibold px-10 py-3  p-3 rounded-full border border-black bg-gradient-to-r from-[#6ACE57] to-[#07C8E6]'>Sign Up Now</button>
                <button className=' text-base text-center font-semibold px-10 py-3  p-3 rounded-full border border-black bg-white'>Learn More </button>
            </div>
            <div className=' mt-5 flex flex-col items-center gap-4  h-[25rem]'>
                <p className='font-semibold text-sm text-white text-center'>Protected by FDIC and SIPC insurance for peace of mind.</p>
                <Image src={phones} alt='phones' className=' mt-10 w-[45rem] h-[43rem]'></Image>
            </div>
        </section>
    )
}

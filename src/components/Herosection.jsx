import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
import bananatree from '@/../public/BananaTreeCrystal 3.png'
import newsboard from '@/../public/NewsBoard.png'
import vault from '@/../public/Vault_2.png'
import phones from '@/../public/herophone.png'
import ocean from '@/../public/ocean.png'
import leftsideislandherosection from '@/../public/leftsideislandherosection.png'
import rightsideislandherosection from '@/../public/rightsideislandherosection.png'
import mainIslandLayer2 from '@/../public/mainIslandLayer 2.png'
import airbelloon from '@/../public/orginal.png'
import lights from '@/../public/lights.png'

const montserrat = Montserrat({ weight: '700', subsets: ["latin"] });
const montserrat2 = Montserrat({ weight: '600', subsets: ["latin"] });

export default function Herosection() {
    return (
        <section className=' top-0 bg-gradient-to-t  relative from-[#AFE0FF] to-[#82DCFF] pt-32'>
            <Image src={lights} alt='lights' className=' absolute  w-full h-[59.98875rem] -top-[27rem] opacity-100 rotate-180 '></Image>
            <div className=' relative overflow-hidden'>
                <div className=' z-30 flex justify-center mb-7'>
                    <p className={` ${montserrat2.className} rounded-[144px] bg-white/30 border border-[#95D0DF] pt-[6px] pr-4 pb-[6px] pl-4 gap-2 font-semibold sm:text-[18px] sm:leading-[21px] text-[0.875rem] leading-[1.067rem] text-[#004248] uppercase`}>Finance for next generation</p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <h1 className={` max-w-6xl z-30 px-8 tracking-[-0.04em] md:font-bold md:text-6xl text-black md:leading-[72px]  text-center text-5xl font-semibold leading-[45px]  ${montserrat.className}  `}>How to grow your savings without the hassle of spreadsheets</h1>
                    <p className=' max-w-sm md:max-w-[40rem] z-30 font-medium text-lg text-center '>The only gamified finance app for young adults that makes saving and investing simple, rewarding, and fun.</p>
                </div>
                <div className=' mt-28 md:mt-14 relative z-30 px-5 xl:px-0 '>
                    <div className='max-w-[67rem] z-30   mx-auto border rounded-xl md:rounded-full bg-black/20 border-white/50 md:flex backdrop-blur-[1px]  '>
                        <div className=' flex py-4  px-6 lg:py-6 z-30 gap-2'>
                            <div className=' w-[70px] h-[42px]'>
                                <Image src={bananatree} alt='bananatree' width={42} height={42} className=' w-[70px] h-[42px]'></Image>
                            </div>
                            <p className={` text-white text-base leading-5 font-medium`}>Visualize your savings as a customizable virtual island</p>
                        </div>
                        <div className=' flex py-4  px-6 lg:py-6 z-30 gap-2'>
                            <div className='w-[60px] h-[42px] relative mx-2.5  '>
                                <Image src={newsboard} alt='newsboard' width={42} height={42} className=' w-[70px] h-[42px] '></Image>
                            </div>
                            <p className={` text-white text-base leading-5 font-medium`}>Get started in minutes with an intuitive, user-friendly design</p>
                        </div>
                        <div className=' flex py-4  px-6 lg:py-6 z-30 gap-2'>
                            <div className=' w-[90px] h-[42px]  '>
                                <Image src={vault} alt='vault' width={42} height={42} className=' w-[90px] h-[52px] -mt-2'></Image>
                            </div>
                            <p className={` text-white z-30 text-base leading-5 font-medium`}>Earn competitive APY while enjoying a stress-free experience</p>
                        </div>
                    </div>
                </div>
                <div className='px-5 xl:px-0  flex flex-col sm:flex-row z-30 justify-center items-center gap-4 mt-[3.2rem]'>
                    <button className='z-30 w-full sm:w-auto text-base text-center font-semibold px-10 py-3  p-3 rounded-full border border-black bg-gradient-to-r from-[#6ACE57] to-[#07C8E6]'>Sign Up Now</button>
                    <button className=' z-30 w-full sm:w-auto text-base text-center font-semibold px-10 py-3  p-3 rounded-full border border-black bg-white'>Learn More </button>
                </div>
                <div className=' mt-5 flex flex-col items-center gap-4 h-[18rem] md:h-[28rem] '>
                    <p className='font-semibold text-sm px-6 xl:px-0  z-30 text-white text-center'>Protected by FDIC and SIPC insurance for peace of mind.</p>
                </div>
                <Image
                    className=' absolute bottom-0 w-full  h-[49rem] md:h-[42rem] '
                    style={{
                        maskImage: `linear-gradient(to bottom, transparent, black 12%)`,
                    }}
                    src={ocean} alt='ocean'></Image>
                <Image src={leftsideislandherosection} alt='leftsideislandherosection' className=' absolute   w-[75rem] h-[56.03rem] -bottom-[14rem] md:-left-[35rem] sm:-left-[30rem] -left-[19rem] '></Image>
                <Image src={rightsideislandherosection} alt='rightsideislandherosection' className=' absolute w-[87rem] h-[52rem]  -bottom-[15rem]   md:-right-[50rem] -right-[30rem] '></Image>
                <Image src={mainIslandLayer2} alt='mainIslandLayer2' className=' absolute   w-[26.9375rem] h-[13.0625rem] top-[29%] md:top-[32%] -left-60  md:-left-36 '></Image>
                <Image src={mainIslandLayer2} alt='mainIslandLayer2' className='hidden md:block absolute  w-[26.9375rem] h-[13.0625rem] top-[32%] -right-40'></Image>
                <Image src={airbelloon} alt='airbelloon' className=' absolute w-[13.25rem] h-[13.25rem] top-24 -left-24 sm:top-40 lg:top-0 sm:left-0 2xl:left-[3rem]'></Image>
                <Image src={airbelloon} alt='airbelloon' className='hidden sm:block sm:absolute w-[8.25rem] h-[8.25rem] blur-sm top-40 right-0'></Image>
            </div>
            <Image src={phones} alt='phones' className=' left-1/2 translate-x-[-50%] absolute -bottom-[12rem] sm:-bottom-[26rem] md:-bottom-[21rem] z-30 w-[26rem] h-[24rem] p-5 sm:w-[48rem] sm:h-[43rem]'></Image>
        </section>
    )
}

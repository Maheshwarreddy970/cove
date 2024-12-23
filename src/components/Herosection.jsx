'use client'

import { Montserrat } from 'next/font/google';
import React from 'react'
import { icons } from '@/icons'
import { data } from '@/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import Smoothup from './smoothup';

const montserrat = Montserrat({ weight: '700', subsets: ["latin"] });
const montserrat2 = Montserrat({ weight: '600', subsets: ["latin"] });

export default function Herosection() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);

    return (
        <section id='herosection' className=' top-0 bg-custom-gradient  relative  pt-32'>
            <icons.lightarrays className='w-full absolute mt-[-20rem] md:mt-[-15rem] xl:mt-[-9rem] '></icons.lightarrays>
            <div className=' relative overflow-hidden'>
                <Smoothup className=' z-30 flex justify-center mb-7'>
                    <p className={` ${montserrat2.className} rounded-[144px] bg-white/30 border border-[#95D0DF] pt-[6px] pr-4 pb-[6px] pl-4 gap-2 font-semibold sm:text-[18px] sm:leading-[21px] text-[0.875rem] leading-[1.067rem] text-[#004248] uppercase`}>{data.herosection.herotagline}</p>
                </Smoothup>
                <Smoothup delay={0.2} className='flex flex-col items-center gap-4'>
                    <h1 className={` max-w-6xl z-30 px-8 tracking-[-0.04em] md:font-bold md:text-6xl md:leading-[72px]  text-center text-5xl font-semibold leading-[45px]  ${montserrat.className}  `}>{data.herosection.heading}</h1>
                    <p className=' max-w-sm md:max-w-[40rem] z-30 font-medium text-lg text-center '>{data.herosection.subheading}</p>
                </Smoothup>
                <div className=' mt-28 md:mt-14 relative z-30 px-5 xl:px-0 '>
                    <Smoothup delay={0.4} className='max-w-[67rem] z-30   mx-auto border rounded-xl md:rounded-full bg-black/20 border-white/50 md:flex backdrop-blur-[1px]  '>
                        <div className=' flex py-4  px-6 lg:py-6 z-30 '>
                            <div className=' w-[70px] h-[38px] mr-3'>
                                <img src={'/BananaTreeCrystal 3.png'} alt='bananatree' width={42} height={42} className=' w-[70px] h-[38px]'></img>
                            </div>
                            <p className={` text-white text-base leading-5 font-medium`}>Visualize your savings as a customizable virtual island</p>
                        </div>
                        <div className=' flex py-4  px-6 lg:py-6 z-30 gap-2'>
                            <div className='w-[70px] h-[38px] relative  '>
                                <img src={'/NewsBoard.png'} alt='newsboard' width={42} height={42} className=' w-[70px] h-[38px] '></img>
                            </div>
                            <p className={` text-white text-base leading-5 font-medium`}>Get started in minutes with an intuitive, user-friendly design</p>
                        </div>
                        <div className=' flex py-4  px-6 lg:py-6 z-30 gap-2'>
                            <div className=' w-[90px] h-[38px]  '>
                                <img src={'/Vault_2.png'} alt='vault' width={42} height={42} className=' w-[90px] h-[52px] -mt-2'></img>
                            </div>
                            <p className={` text-white z-30 text-base leading-5 font-medium`}>Earn competitive APY while enjoying a stress-free experience</p>
                        </div>
                    </Smoothup>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut", type: 'spring', stiffness: 150 }}
                    className='px-5 xl:px-0  flex flex-col sm:flex-row z-30 justify-center items-center gap-4 mt-[3.2rem]'>
                    <a href={data.herosection.buttonslinks.appstore} className='z-30 w-full sm:w-auto text-base text-center font-semibold px-10 py-3  p-3 rounded-full border border-black bg-gradient-to-r from-[#6ACE57] to-[#07C8E6]  hover:from-[#07C8E6] hover:to-[#6ACE57] active:from-[#6ACE57] active:to-[#07C8E6] transition-all text-black ease-out duration-300   flex gap-3 items-center'><icons.appleicon></icons.appleicon> Get it on App Store</a>
                    <a href={data.herosection.buttonslinks.playstore} className=' z-30 w-full sm:w-auto text-base text-center font-semibold px-10 py-3  p-3 rounded-full border border-black bg-white  flex gap-3 items-center hover:bg-white/90  transition-all ease-out duration-300'>
                        <icons.playstoreicon></icons.playstoreicon> Get it on Play Store
                    </a>
                </motion.div>
                <div className=' mt-5 flex flex-col items-center gap-4 h-[18rem] md:h-[28rem] '>
                    <p className='font-semibold text-sm px-6 xl:px-0  z-30 text-white  text-center dark'>{data.herosection.insurance}</p>
                </div>
                <div
                    className=" absolute bg-white/5 top-[33%] blur-[74px] backdrop-blur-[44px] w-[110%] h-[8.875rem] left-[-1.875rem]"
                >
                </div>
                <img
                    className=' absolute bottom-0 w-full  h-[53rem] md:h-[43rem] brightness-105'
                    style={{
                        maskImage: `linear-gradient(to bottom, transparent, black 19%)`,
                    }}
                    src={'/ocean.png'} alt='ocean'></img>
                <motion.img
                    style={{ y }}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    src={'/leftsideislandherosection.png'} alt='leftsideislandherosection' className=' absolute   w-[75rem] h-[56.03rem] -bottom-[14rem] md:-left-[35rem] sm:-left-[30rem] -left-[19rem] '></motion.img>
                <motion.img
                    style={{ y }}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    src={'/rightsideislandherosection.png'} alt='rightsideislandherosection' className=' absolute w-[87rem] h-[52rem]  -bottom-[15rem]   md:-right-[50rem] -right-[30rem] '></motion.img>
                <motion.img
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    src={'/mainIslandLayer 2.png'} alt='mainIslandLayer2' className=' absolute   w-[26.9375rem] h-[13.0625rem] top-[29%] md:top-[32%] -left-60  md:-left-36 '></motion.img>
                <motion.img
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    src={'/mainIslandLayer 2.png'} alt='mainIslandLayer2' className='hidden md:block absolute  w-[26.9375rem] h-[13.0625rem] top-[32%] -right-40'></motion.img>
                <motion.img
                    initial={{ y: 80 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut", type: 'spring', stiffness: 50 }}
                    src={'/orginal.png'} alt='airbelloon' className=' absolute w-[13.25rem] h-[13.25rem] top-24 -left-24 sm:top-40 lg:top-0 sm:left-0 2xl:left-[3rem]'></motion.img>
                <motion.img
                    initial={{  y: 80 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut", type: 'spring', stiffness: 50 }}
                    src={'/orginal.png'} alt='airbelloon' className='hidden sm:block sm:absolute w-[8.25rem] h-[8.25rem] blur-sm top-40 right-0'></motion.img>
            </div>

            <img

                src={'/herophone.png'} alt='phones' className=' left-1/2 translate-x-[-50%] absolute -bottom-[12rem] sm:-bottom-[26rem] md:-bottom-[21rem] z-30 w-[26rem] h-[24rem] p-5 sm:w-[48rem] sm:h-[43rem]'></img>
        </section>
    )
}

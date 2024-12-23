'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import BonsaiTree from '@/../public/BeachTowel.png'
import Bush from '@/../public/Bush 4k Asset 1.png'
import { Advent_Pro } from 'next/font/google';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { data } from '@/data'

const adventpro = Advent_Pro({ weight: '700', subsets: ["latin"] });

export default function Howitworkssection() {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImage((prevActiveImage) => {
        return (prevActiveImage + 1) % 3;
      });
    }, 9000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <section id='howitworkssection' className={` bg-[#232526] text-white py-24 lg:px-5 overflow-hidden`}>
      <div className=' flex flex-col items-center gap-2.5'>
        <div className=' h-16 w-[11.375rem] overflow-hidden '>
          <Image alt='bonsaitree' src={BonsaiTree} className='w-[11.375rem] h-[11.375rem] -mt-[5.5rem]  object-cover'></Image>
        </div>
        <h1 className='text-[46px] font-bold leading-[55.2px] tracking-[-0.02em] text-center decoration-skip-ink-none '>{data.howitworkssection.heading}</h1>
        <p className='font-montserrat text-[18px] font-medium leading-[21.6px] tracking-[-0.02em] text-center decoration-skip-ink-none'>{data.howitworkssection.subheading}</p>
      </div>
      <div className=' max-w-7xl mx-auto mt-16 flex lg:flex-row flex-col gap-[3rem] lg:px-3'>
        <div className=' w-full lg:w-[47%] '>
          <>
            <button onClick={() => setActiveImage(0)} className={cn(' relative overflow-hidden w-full py-8 flex flex-col gap-2 pl-10 pr-10  ', activeImage === 0 && " bg-[#FFFFF0] text-black pl-8 pr-14 py-10 gap-4 lg:gap-16  lg:rounded-3xl")}>
              <p className={cn(`text-[32px] font-bold leading-[38.27px] lg:text-[26px] text-white/50 lg:font-extrabold lg:leading-[28px] text-left ${adventpro.className}`, activeImage === 0 && `lg:text-[42px] text-black lg:font-bold lg:leading-[50.23px]  text-left`)}>{data.howitworkssection.signup.heading}</p>
              <p style={{ fontFamily: `${adventpro.style.fontFamily} !important` }} className={cn(`text-[16px] font-medium leading-[24px] tracking-[-0.02em] lg:text-[24px]  lg:leading-[32px] lg:tracking-[-0.02em] `, "font-montserrat lg:text-[24px] lg:font-medium lg:leading-[32px] lg:tracking-[-0.02em] text-left")}>{data.howitworkssection.signup.subheading}</p>
              {
                activeImage === 0 &&
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 9, ease: 'linear' }}
                  className={`absolute bottom-0 z-50 rounded-xl bg-gradient-to-r from-[#6ACE57] to-[#07C8E6] h-[0.375rem] -left-3 `}
                ></motion.span>
              }
            </button>
            {activeImage === 0 && <div className='h-[35.25rem] overflow-hidden lg:hidden'>
              <AnimatePresence>
                {
                  activeImage === 0 && (
                    <motion.span
                      initial={{ height: 0 }}
                      animate={{ height: "100%" }}
                      exit={{ height: 0 }}
                      transition={{ ease: "linear", duration: 0.5 }}
                      className=" h-full w-full overflow-hidden  flex justify-center"
                    >
                      <motion.div
                        initial={{ y: 150 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: 'easeIn', type: 'spring', stiffness: 100 }}
                      >
                        <img src={'/howitworksighupimage.png'} alt='howitworksighupimage' className=' w-[25.38rem] h-[55.02rem] mt-16 ' />
                      </motion.div>
                    </motion.span>
                  )}
              </AnimatePresence>
            </div>}
          </>
          <>
            <button onClick={() => setActiveImage(1)} className={cn(' relative overflow-hidden w-full py-8 flex flex-col gap-2 pl-10 pr-10  ', activeImage === 1 && " bg-[#FFFFF0] text-black pl-8 pr-14 py-10 gap-4 lg:gap-16  lg:rounded-3xl")}>
              <p className={cn(`text-[32px] font-bold leading-[38.27px] lg:text-[26px] text-white/50 lg:font-extrabold lg:leading-[28px] text-left ${adventpro.className}`, activeImage === 1 && "lg:text-[42px] lg:font-bold lg:leading-[50.23px] text-black text-left")}>{data.howitworkssection.stashandearn.heading}</p>
              <p style={{ fontFamily: `${adventpro.style.fontFamily} !important` }} className={cn(`text-[16px] font-medium leading-[24px] tracking-[-0.02em] lg:text-[24px]  lg:leading-[32px] lg:tracking-[-0.02em] `, "font-montserrat lg:text-[24px] lg:font-medium lg:leading-[32px] lg:tracking-[-0.02em] text-left")}>{data.howitworkssection.stashandearn.subheading}</p>
              {activeImage === 1 &&
                <motion.span
                  initial={{ width: "-4%" }}
                  animate={{ width: "104%" }}
                  transition={{ duration: 9, ease: 'linear' }}
                  className={`absolute bottom-0 z-50 rounded-xl bg-gradient-to-r from-[#6ACE57] to-[#07C8E6] h-[0.375rem] -left-3 `}
                ></motion.span>
              }
            </button>
            {activeImage === 1 && <div className='h-[35.25rem] overflow-hidden lg:hidden'>
              <AnimatePresence>
                {
                  activeImage === 1 && (
                    <motion.span
                      initial={{ height: 0 }}
                      animate={{ height: "100%" }}
                      exit={{ height: 0 }}
                      transition={{ ease: "linear", duration: 0.5, type: 'spring', stiffness: 100 }}
                      className=" h-full w-full overflow-hidden  flex justify-center"
                    >
                      <motion.div
                        initial={{ x: 50 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 2, ease: 'easeIn', type: 'spring', stiffness: 100 }}
                      >
                        <img src={'/howitworktreadingcard.png'} alt='howitworktreadingcard' className=' h-full ' />
                      </motion.div>
                    </motion.span>
                  )}
              </AnimatePresence>
            </div>}
          </>
          <>
            <button onClick={() => setActiveImage(2)} className={cn(' relative overflow-hidden w-full py-8 flex flex-col gap-2 pl-10 pr-10  ', activeImage === 2 && " bg-[#FFFFF0] text-black pl-8 pr-14 py-10 gap-4 lg:gap-16  lg:rounded-3xl")}>
              <p className={cn(`text-[32px] font-bold leading-[38.27px] lg:text-[26px] text-white/50 lg:font-extrabold lg:leading-[28px] text-left ${adventpro.className}`, activeImage === 2 && "lg:text-[42px] lg:font-bold lg:leading-[50.23px] text-black text-left")}>{data.howitworkssection.setgoals.heading}</p>
              <p style={{ fontFamily: `${adventpro.style.fontFamily} !important` }} className={cn(`text-[16px] font-medium leading-[24px] tracking-[-0.02em] lg:text-[24px]  lg:leading-[32px] lg:tracking-[-0.02em] `, "font-montserrat lg:text-[24px] lg:font-medium lg:leading-[32px] lg:tracking-[-0.02em] text-left")}>{data.howitworkssection.setgoals.subheading}</p>
              {activeImage === 2 &&
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 9, ease: 'linear' }}
                  className={`absolute bottom-0 z-50 rounded-xl bg-gradient-to-r from-[#6ACE57] to-[#07C8E6] h-[0.375rem] -left-3 `}
                ></motion.span>}
            </button>
            {activeImage === 2 && <div className='h-[35.25rem] overflow-hidden lg:hidden'>
              <AnimatePresence>
                {
                  activeImage === 2 && (
                    <motion.span
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "100%", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ ease: "linear", duration: 1, type: 'spring', stiffness: 100 }}
                      className=" h-full w-full overflow-hidden  flex justify-center"
                    >
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 2, x: 0 }}
                        transition={{ duration: 1, ease: 'easeIn', type: 'spring', stiffness: 100 }}
                     className=' relative '
                     >
                        <img src='/greenborder.png' alt='greenborder' className=' sm:h-[5.439rem]  w-[20rem] sm:w-[27rem] sm:block hidden md:w-[30.5rem] z-50  left-[21.5%] top-[21rem] sm:top-[20rem] absolute'></img>
                        <img src='/spytaredingcard.png' alt='spytaredingcard' className=' sm:h-[6.3rem] w-[20rem]  sm:md:w-[30.5rem] sm:block hidden md:w-[30.5rem] z-50 left-[21.5%] top-[19rem] sm:top-[18rem] absolute'></img>
                        <img src={'/PositiveVaultScreenshot1.png'} alt='positivevaultscreenshot.png' className=' w-[47.89rem] h-[80.21rem] scale-[1.2] -mt-56' />
                      </motion.div>
                    </motion.span>
                  )}
              </AnimatePresence>
            </div>}
          </>
        </div>
        <div className='hidden lg:block w-full h-full lg:h-[38rem] 2xl:h-[35.25rem] lg:w-[63%] bg-[#191A1B] border border-white/20 rounded-3xl relative '>
          <Image src={Bush} alt='Bush' className=' w-[17.92rem] h-[14.66rem] absolute top-[45%] -right-64 -translate-x-1/2 -translate-y-1/2 object-cover' />
          <div className=' bg-[#191A1B] border flex justify-center overflow-hidden border-white/20 rounded-3xl h-full w-full z-10 relative'>
            {activeImage === 0 &&
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeIn', type: 'spring', stiffness: 100 }}
              >
                <img src={'/howitworksighupimage.png'} alt='howitworksighupimage' className=' w-[25.38rem] h-[55.02rem] mt-16 ' />
              </motion.div>
            }
            {activeImage === 1 &&
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, ease: 'easeIn', type: 'spring', stiffness: 100 }}
                className=' relative'
              >
                <img src={'/howitworktreadingcard.png'} alt='howitworktreadingcard' className=' h-full  ' />
              </motion.div>
            }

            {activeImage === 2 &&
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 2, x: 0 }}
                transition={{ duration: 1, ease: 'easeIn', type: 'spring', stiffness: 100 }}
                className=' relative '
              >
                <img src='/greenborder.png' alt='greenborder' className=' h-[5.439rem] w-[27rem] z-50 left-[21.5%] top-[20rem] absolute'></img>
                <img src='/spytaredingcard.png' alt='spytaredingcard' className=' h-[6.3rem] w-[29.5rem] z-50 left-[21.5%] top-[18rem] absolute'></img>
                <img src={'/PositiveVaultScreenshot1.png'} alt='positivevaultscreenshot.png' className=' w-[47.89rem] h-[80.21rem] scale-[1.2] -mt-56' />
              </motion.div>
            }

          </div>
        </div>
      </div>
    </section>
  )
}

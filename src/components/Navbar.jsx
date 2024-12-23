'use client'

import React from 'react'
import logo from '@/../public/logo.png'
import whtielogo from '@/../public/coveLogoLight.png'
import Image from 'next/image'
import { icons } from '@/icons'
import { useState } from "react";
import { cn } from '@/lib/utils'
import { data } from '@/data'
import ThemeToggle from './ThemeToggle'
import Link from 'next/link'


export default function Nabbar() {

    const [isMenuOpen, setMenuOpen] = useState(false);


    return (
        <nav className={cn(' z-50  w-full absolute top-0 ' )} >
            <div className='max-w-7xl w-full  py-5 px-5 mx-auto flex justify-between items-center'>
                <div>
                    <Image alt='logo' className=' dark:hidden h-[2rem] w-[7.6rem] dark:invert ' src={logo}></Image>
                    <Image alt='logo' className='hidden dark:block h-[2rem] w-[7.6rem] dark:invert ' src={whtielogo}></Image>
                </div>
                <div className=' hidden md:flex gap-6 text-black '>
                    {
                        data.navigationbar.list.map((item, index) => (
                            <a href={item.href} key={index}>
                                {item.name}
                            </a>
                        )
                        )
                    }
                </div>
                <div className=' md:flex  gap-4 hidden'>

                    <ThemeToggle></ThemeToggle>
                    <Link href={data.navigationbar.buttonslinks.gettheapp} className=' bg-black hover:bg-white hover:text-black  active:bg-black/20   hover:border-black transition-all ease-out duration-300 border  gap-2 rounded-[144px] py-2.5 px-8 text-base text-white font-bold'>
                        Learn More
                    </Link>

                </div>
                <div className='md:hidden flex gap-4 items-center'>
                <ThemeToggle></ThemeToggle>
                <MenuToggle isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
                </div>
            </div>
            {isMenuOpen && (
                <div className="flex  p-5 md:hidden h-full flex-col text-lg gap-6 w-[80%] mx-auto bg-[#FFFFF0] pt-6 rounded-2xl text-center">
                    {data.navigationbar.list.map((item, index) => (
                        <a
                            key={index}
                            className=''
                            href={item.href}
                        >
                            {item.name}
                        </a>
                    ))}
                     <a href={data.navigationbar.buttonslinks.gettheapp} className=' bg-black hover:bg-white hover:text-black  active:bg-black/20   hover:border-black transition-all ease-out duration-300  gap-2 rounded-[144px] py-2.5 px-8 text-base text-white font-bold'>
                        Learn More
                    </a>
                </div>
            )}
        </nav>
    )
}

function MenuToggle({ isMenuOpen, setMenuOpen }) {
    return (
        <button
            className={cn(" ")}
            onClick={() => setMenuOpen(!isMenuOpen)}
        >
            {!isMenuOpen ? <icons.meanuelines></icons.meanuelines> : <icons.crossicon></icons.crossicon>}
        </button>
    );
}
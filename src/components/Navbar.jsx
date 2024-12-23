'use client'

import React from 'react'
import logo from '@/../public/logo.png'
import Image from 'next/image'
import { icons } from '@/icons'
import { useState } from "react";
import { cn } from '@/lib/utils'
import { data } from '@/data'


export default function Nabbar() {

    const [isMenuOpen, setMenuOpen] = useState(false);


    return (
        <nav className={cn(' z-50  w-full absolute top-0 ',isMenuOpen && 'backdrop-blur-lg md:backdrop-blur-0 md:absolute md:h-auto fixed  h-screen')} >
            <div className='max-w-7xl w-full  py-5 px-5 mx-auto flex justify-between items-center'>
                <div>
                    <Image alt='logo' className=' h-[2rem] w-[7.6rem] w-' src={logo}></Image>
                </div>
                <div className=' hidden md:flex gap-6'>
                    {
                        data.navigationbar.list.map((item, index) => (
                            <a href={item.href} key={index}>
                                {item.name}
                            </a>
                        )
                        )
                    }
                </div>
                <a href={data.navigationbar.buttonslinks.gettheapp}  className='hidden md:block bg-black gap-2 rounded-[144px] py-2.5 px-8 text-base text-white font-bold'>
                    Learn More
                </a>
                <MenuToggle isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
            </div>
                {isMenuOpen && (
                    <div className="flex top-20  p-5 md:hidden h-full absolute flex-col text-2xl gap-6 w-full">
                        {data.navigationbar.list.map((item, index) => (
                            <a
                                key={index}
                                className=''
                                href={item.href}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                )}
        </nav>
    )
}

function MenuToggle({ isMenuOpen, setMenuOpen }) {
    return (
        <button
            className={cn("md:hidden ")}
            onClick={() => setMenuOpen(!isMenuOpen)}
        >
                {!isMenuOpen? <icons.meanuelines></icons.meanuelines> : <icons.crossicon></icons.crossicon>}
        </button>
    );
}
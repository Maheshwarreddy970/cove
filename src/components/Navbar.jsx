'use client'

import React, { useState } from 'react';
import logo from '@/../public/logo.png';
import Image from 'next/image';
import { icons } from '@/icons';
import { cn } from '@/lib/utils';
import { data } from '@/data';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleSmoothScroll = (id) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <nav className={cn('z-50 w-full absolute top-0')}>
            <div className='max-w-7xl w-full py-5 px-5 mx-auto flex justify-between items-center'>
                <div>
                    <Image alt='logo' className='h-[2rem] w-[7.6rem]' src={logo}></Image>
                </div>
                <div className='hidden md:flex gap-6 text-black'>
                    {data.navigationbar.list.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleSmoothScroll(item.href)}
                            className='hover:text-gray-700 transition-colors duration-200'
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
                <div className='md:flex gap-4 hidden'>
                    <ThemeToggle></ThemeToggle>
                    <Link
                        href={data.navigationbar.buttonslinks.gettheapp}
                        className='bg-black hover:bg-white hover:text-black active:bg-black/20 hover:border-black transition-all ease-out duration-300 border gap-2 rounded-[144px] py-2.5 px-8 text-base text-white font-bold'
                    >
                        Learn More
                    </Link>
                </div>
                <div className='md:hidden flex gap-4 items-center'>
                    <ThemeToggle></ThemeToggle>
                    <MenuToggle isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
                </div>
            </div>
            {isMenuOpen && (
                <div className='flex p-5 md:hidden h-full flex-col text-lg gap-6 w-[85%] text-black mx-auto bg-[#FFFFF0] pt-6 rounded-2xl text-center'>
                    {data.navigationbar.list.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                handleSmoothScroll(item.href);
                                setMenuOpen(false);
                            }}
                            className='text-black hover:text-gray-700 transition-colors duration-200'
                        >
                            {item.name}
                        </button>
                    ))}
                    <Link
                        href={data.navigationbar.buttonslinks.gettheapp}
                        className='bg-black hover:bg-white hover:text-black active:bg-black/20 hover:border-black transition-all ease-out duration-300 gap-2 rounded-[144px] py-2.5 px-8 text-base text-white font-bold'
                    >
                        Learn More
                    </Link>
                </div>
            )}
        </nav>
    );
}

function MenuToggle({ isMenuOpen, setMenuOpen }) {
    return (
        <button
            className={cn('text-black')}
            onClick={() => setMenuOpen(!isMenuOpen)}
        >
            {!isMenuOpen ? <icons.meanuelines></icons.meanuelines> : <icons.crossicon></icons.crossicon>}
        </button>
    );
}

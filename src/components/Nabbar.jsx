import React from 'react'
import logo from '@/../public/logo.png'
import Image from 'next/image'

const navitems = [
    {
        name: 'Stats',
        href: '#'
    },
    {
        name: 'How it works',
        href: '#'
    },
    {
        name: 'Industries',
        href: '#'

    },
    {
        name: 'Features',
        href: '#'
    },
]
export default function Nabbar() {
    return (
        <nav className=' w-full fixed top-0 ' >
            <div className='max-w-7xl w-full  py-5 px-5 mx-auto flex justify-between items-center'>
                <div>
                    <Image alt='logo' className=' h-[2rem] w-[7.6rem] w-' src={logo}></Image>
                </div>
                <div className='flex gap-6'>
                    {
                        navitems.map((item, index) => (
                            <a href={item.href} key={index}>
                                {item.name}
                            </a>
                        )
                        )
                    }
                </div>
                <button className=' bg-black gap-2 rounded-[144px] py-2.5 px-8 text-lg text-white font-bold'>
                    Get the App
                </button>
            </div>
        </nav>
    )
}
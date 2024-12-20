import React from 'react'
import { icons } from '@/icons'
import logo from '@/../public/logo.png'
import Image from 'next/image'

const navitems = [
  {
    name: 'Why Us?',
    href: '#'
  },
  {
    name: 'Services',
    href: '#'
  },
  {
    name: 'Benefits',
    href: '#'

  },
  {
    name: 'FAQ',
    href: '#'
  },
]
export default function Footer() {
  return (
    <section className='px-6 py-6 md:px-20 md:py-10'>
      <div className=' flex flex-col md:flex-row md:justify-between gap-8 md:items-center w-full max-w-7xl mx-auto px-2 pb-6 '>
        <div>
          <Image alt='logo' className=' h-[2rem] w-[7.6rem] ' src={logo}></Image>
        </div>
        <div className='flex gap-6 font-normal text-sm'>
          {
            navitems.map((item, index) => (
              <a href={item.href} key={index}>
                {item.name}
              </a>
            )
            )
          }
        </div>
        <div className='font-normal text-sm'>
          Privacy Policy
        </div>
      </div>
      <div className=' flex flex-col md:flex-row md:justify-between gap-8 md:items-center w-full max-w-7xl mx-auto  pt-5 border-t  '>
        <p className=" text-black/50 font-inter text-sm font-normal leading-5 text-left underline-position-from-font decoration-skip-ink-none ">
        Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.
        </p>
        <div className=' flex gap-2 items-center'>
          <icons.linkedin></icons.linkedin>
          <icons.instagram></icons.instagram>
          <icons.facebootk></icons.facebootk>
        </div>
      </div>
    </section>
  )
}

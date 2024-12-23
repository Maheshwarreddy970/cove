import React from 'react'
import {data} from '@/data/index'
import Smoothup from './smoothup'

export default function Logosection() {
    return (
        <Smoothup className=' mt-[14rem] sm:mt-[26rem] max-w-4xl mx-auto'>
            <p className=' text-center  text-[15px] font-semibold mb-8 opacity-65 uppercase   text-[#6C6C6C] dark:text-white'>{data.trustedby.headers}</p>
            <div className="lg:grid flex p-3 flex-wrap items-center justify-center place-items-center text-[#6C6C6C] dark:text-[#6C6C6C] opacity-65 gap-7 md:gap-[100px] lg:grid-cols-5">
                {data.trustedby.icons.map((icon, index) => (
                    <div key={index}>
                        {icon}
                    </div>
                ))}
            </div>
        </Smoothup>
    )
}

import { icons } from '@/icons'
import React from 'react'


export default function Logosection() {
    return (
        <section className=' mt-[14rem] sm:mt-[26rem] max-w-4xl mx-auto'>
            <p className=' text-center  font-semibold mb-8 opacity-65 uppercase  text-[#6C6C6C]'>Trusted by industry leaders</p>
            <div className="lg:grid flex p-3 flex-wrap items-center justify-center place-items-center text-[#6C6C6C] opacity-65 gap-7 md:gap-[100px] lg:grid-cols-5">
                <div>
                    <icons.evernote></icons.evernote>
                </div>
                <div>
                    <icons.paypal2></icons.paypal2>
                </div>
                <div>
                    <icons.shpofy></icons.shpofy>
                </div>
                <div>
                    <icons.slack></icons.slack>
                </div>
                <div>
                    <icons.framer></icons.framer>
                </div>


            </div>
        </section>
    )
}

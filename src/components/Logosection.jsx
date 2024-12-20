import { icons } from '@/icons'
import React from 'react'


export default function Logosection() {
    return (
        <section className=' mt-96 max-w-6xl mx-auto'>
            <p className=' text-center'>Trusted by industry leaders</p>
            <div className="grid grid-cols-3 gap-x-6 lg:grid-cols-5">
                <div>
                    <icons.evernote></icons.evernote>
                </div>
                <div>
                    <icons.paypal></icons.paypal>
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

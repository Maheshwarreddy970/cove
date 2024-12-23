'use client'

import { useTheme } from 'next-themes'
import { icons } from '@/icons'

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <button
            className='' 
            onClick={() => {
                if (theme === 'dark') {
                    return setTheme('light')
                }
                return setTheme('dark')
            }}
        >
            <span className=' dark:hidden  p-2.5 rounded-full bg-white  flex justify-center'>
                <icons.moonicon />
            </span>
            <span className='hidden   p-2.5 rounded-full bg-white  dark:flex justify-center '>
                <icons.sunicon className='  ' />
            </span>
        </button>
    )
}
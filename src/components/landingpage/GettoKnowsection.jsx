import Image from 'next/image'
import React from 'react'
import BonsaiTree from '@/../public/orginal.png'
import { data } from '@/data'
import Smoothup from './smoothup'
import { icons } from '@/icons'
import { cn } from '@/lib/utils'


export default function GettoKnowsection() {
  return (
    <section id="aboutus">
      <Smoothup className="flex flex-col mb-5 items-center gap-1">
        <div className="h-16 w-[6.2rem] overflow-hidden">
          <Image alt="BonsaiTree" src={BonsaiTree} className="w-[6.2rem] -mt-3 h-[6.2rem]" />
        </div>
        <h1 className="text-[2.5rem] font-bold leading-[3rem] lg:text-[46px] lg:leading-[55.2px] tracking-[-0.02em] text-center decoration-skip-ink-none text-[#171717] dark:text-white">
          {data.gettoknowussection.heading}
        </h1>
        <p className="font-montserrat text-[18px] font-medium leading-[21.6px] tracking-[-0.02em] text-center decoration-skip-ink-none text-black dark:text-white">
          {data.gettoknowussection.subheading}
        </p>
      </Smoothup>
      <Smoothup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 lg:px-0 max-w-6xl xl:max-w-7xl mx-auto gap-6">
        {data.gettoknowussection.profiles.map((profile, index) => (
          <div key={index} className="w-full h-[33.875rem] overflow-hidden mt-10 p-6 border border-black/25 dark:border-white/20 rounded-3xl flex flex-col gap-6">
            <div className="border dark:border-white/20 rounded-2xl pb-4 bg-[#232526] dark:bg-[#FFFFF0] flex flex-col gap-1 h-[21.3rem] overflow-hidden">
              <div className="h-[16rem] relative flex justify-center items-center mb-4 w-full rounded-xl overflow-hidden bg-gradient-to-tr from-[#7ACF3F] to-[#00C8F0]">
                <Image alt="profile" src={profile.image} width={profile.width} height={profile.height} className={cn("filter grayscale",profile.mt)} />
              </div>
              <p className="text-2xl font-semibold text-center text-white dark:text-[#232526]">{profile.name}</p>
              <p className="text-center font-semibold text-white dark:text-[#232526] text-base opacity-70">{profile.username}</p>
              <p className="text-center font-thin text-white dark:text-[#232526] text-base opacity-70">{profile.title}</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-6 ml-1 items-center justify-start">
                <a href={profile.instagram}>
                <icons.aboutinstagramicon />
                </a>
                <a href={profile.linkedin}>
                <icons.aboutlinkeninicon />
                </a>
                <a href={profile.x}>
                <icons.aboutxicon />
                </a>
              </div>
              <div className="h-[4.5rem] overflow-hidden">
                <p className="text-start font-medium line-clamp-3 dark:text-white text-black">{profile.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Smoothup>
    </section>
  );
}

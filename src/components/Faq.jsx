'use client'

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import BonsaiTree from '@/../public/CampChair.png'
import Image from "next/image";
import { icons } from '@/icons'
import { data } from "@/data";
import Smoothup from "./smoothup";



export const Faq = () => {
  // State to manage which accordion item is open
  const [accordionOpen, setAccordionOpen] = useState(0);

  return (
    <section id="faqsection" className="flex flex-col items-center pt-20 pb-10  ">
      <Smoothup className=' flex flex-col items-center gap-1'>
        <div className=' w-[12.875rem] h-[4rem] overflow-hidden  '>
          <Image alt="BonsaiTree" src={BonsaiTree} className='w-[12.875rem]  h-[12.875rem] -mt-28'></Image>
        </div>
        <h1 className=' px-3 text-[40px] md:text-[46px] font-bold leading-[48px] md:leading-[55.2px] tracking-[-0.02em] text-center decoration-skip-ink-none text-[#171717] dark:text-white'>{data.faqsection.heading}</h1>
        <p className='font-montserrat text-[18px] font-medium leading-[21.6px] tracking-[-0.02em] text-center decoration-skip-ink-none text-[#171717] dark:text-white'>{data.faqsection.subheading}</p>
      </Smoothup>
      <Smoothup className="max-w-5xl flex w-full md:flex-row flex-col gap-9 md:gap-5  text-black dark:text-white">
        <Accordion>
          {data.faqsection.list.map((item, index) => (
            <AccordionItem
              className="  "
              accordionOpen={accordionOpen}
              setAccordionOpen={setAccordionOpen}
              title={item.title}
              answer={item.answer}
              key={index}
              i={index}
            />
          ))}
        </Accordion>
      </Smoothup>
    </section>
  );
};

const Accordion = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col gap-4  rounded-2xl px-5 py-7 md:px-10 md:py-10", className)}>
      {children}
    </div>
  );
};

// Define the AccordionItem component
const AccordionItem = ({
  title,
  answer,
  children,
  className,
  rotation,
  icon,
  i,
  setAccordionOpen,
  accordionOpen,
  ...props
}) => {
  // Handle click event to toggle accordion item
  const handleClick = () => {
    setAccordionOpen(accordionOpen === i ? -1 : i); // Toggle between open and closed state
  };

  return (
    <div
      className={cn(
        "relative flex w-full border-b last:border-b-0 border-b-black/40 dark:border-b-white/20 flex-col  overflow-hidden")}
      {...props}
    >
      <button
        onClick={handleClick}
        className={cn(
          "flex w-full  gap-4  justify-between pb-7 pt-3.5 sm:pb-8 sm:pt-5")}
      >
        <div className={cn("font-montserrat text-[20px] font-semibold leading-[24.38px] tracking-[-0.02em] text-left decoration-skip-ink-none")}>{title}</div>
        <motion.div
          initial={false}
          animate={accordionOpen === i ? "open" : "close"}
          variants={{
            open: { rotate: 0 },
            close: { rotate: 180 },
          }}
          transition={{ duration: 0.5, stiffness: 150, type: "spring" }}
          className=" mt-2"
        >
          <icons.chevron />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {accordionOpen === i && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="overflow-hidden text-wrap"
          >
            <p className=" mb-8 font-montserrat opacity-60 text-[18px] font-medium leading-[28px] text-left decoration-skip-ink-none">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


'use client'

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import BonsaiTree from '@/../public/CampChair.png'
import Image from "next/image";

// Define the Accordion component

const faqList = [
  {
    title: "Can you customize my existing Shopify theme?",
    answer:
      "Connect with other savers through leaderboards, quests, and a dedicated Discord community. Share tips, find motivation, and celebrate milestones with friends.",
  },
  {
    title: "What is a Development Sprint and how does it work?",
    answer:
      "Connect with other savers through leaderboards, quests, and a dedicated Discord community. Share tips, find motivation, and celebrate milestones with friends.",
  },
  {
    title: "How long does it typically take to build a complete Shopify site?",
    answer:
      "Connect with other savers through leaderboards, quests, and a dedicated Discord community. Share tips, find motivation, and celebrate milestones with friends.",
  },
  {
    title: "Are your Shopify solutions mobile-responsive?",
    answer:
      "Connect with other savers through leaderboards, quests, and a dedicated Discord community. Share tips, find motivation, and celebrate milestones with friends.",
  },
];

export const Faq = () => {
  // State to manage which accordion item is open
  const [accordionOpen, setAccordionOpen] = useState(-1);

  return (
    <section className="flex flex-col items-center pt-20 pb-10  ">
      <div className=' flex flex-col items-center gap-1'>
        <div className=' w-[12.875rem] h-[4rem] overflow-hidden  '>
          <Image src={BonsaiTree} className='w-[12.875rem]  h-[12.875rem] -mt-28'></Image>
        </div>
        <h1 className='text-[46px] font-bold leading-[55.2px] tracking-[-0.02em] text-center decoration-skip-ink-none text-[#171717]'>Frequently Asked Questions</h1>
        <p className='font-montserrat text-[18px] font-medium leading-[21.6px] tracking-[-0.02em] text-center decoration-skip-ink-none'>FAQs</p>
      </div>
      <div className="max-w-5xl flex w-full md:flex-row flex-col gap-9 md:gap-5">
        <Accordion>
          {faqList.map((item, index) => (
            <AccordionItem
              className="border-b last:border-b-0 border-black/40 "
              accordionOpen={accordionOpen}
              setAccordionOpen={setAccordionOpen}
              title={item.title}
              answer={item.answer}
              key={index}
              i={index}
            />
          ))}
        </Accordion>
      </div>
    </section>
  );
};

const Accordion = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col gap-4 rounded-2xl px-3 py-7 md:px-10 md:py-10", className)}>
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
        "relative flex w-full flex-col  overflow-hidden",
        accordionOpen === i && "opacity-100",
        className
      )}
      {...props}
    >
      <button
        onClick={handleClick}
        className={cn(
          "flex w-full items-center  justify-between px-5 py-8")}
      >
        <span className={cn("font-montserrat text-[20px] font-semibold leading-[24.38px] tracking-[-0.02em] text-left decoration-skip-ink-none")}>{title}</span>
        <motion.span
          initial={false}
          animate={accordionOpen === i ? "open" : "close"}
          variants={{
            open: { rotate: 180 },
            close: { rotate: 0 },
          }}
          transition={{ duration: 0.5, stiffness: 150, type: "spring" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-down text-black"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </motion.span>
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
            <p className="m-5 font-montserrat text-[18px] font-medium leading-[28px] text-left decoration-skip-ink-none">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


'use client'

import React from 'react'
import { motion } from 'framer-motion';

export default function Smoothup({ children, className, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeInOut", type: 'spring', stiffness: 100, delay: props.delay || 0 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}


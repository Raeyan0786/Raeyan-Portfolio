"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { AnimatePresence,motion } from 'framer-motion'

const PageTransition = ({children}) => {
    const path =usePathname();
  return (
    <AnimatePresence>
      <div key={path}>
      <motion.div initial={{opacity:1}} animate={{
            opacity:0,
            transition:{delay:1,duration:0.4,ease:"easeInOut"}}}
            className='h-screen w-screen bg-primary fixed top-0 pointer-events-none'/>
        {children}
      </div>
        
    </AnimatePresence>
  )
}

export default PageTransition
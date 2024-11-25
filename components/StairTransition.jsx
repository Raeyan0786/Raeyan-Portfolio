"use client"
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Stairs from './Stairs'
import { usePathname } from 'next/navigation'


const StairTransiton = () => {
  const path=usePathname()
  return (
    <AnimatePresence mode="wait">
      <div key={path}>
        <div className='h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex'>
          <Stairs/>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default StairTransiton
"use client"
import React from 'react'
import Link from 'next/link'
import { ArrowDownRight } from 'lucide-react'
import { motion } from 'framer-motion'

const services=[
  {
    num:"01",
    title:"Web Development",
    href:"",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem inventore eum explicabo vero facilis nemo incidunt error reiciendis porro voluptate! Fugiat necessitatibus voluptatum voluptate fugit sed ducimus quis recusandae sit." 
  },
  {
    num:"02",
    title:"UI/UX Design",
    href:"",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem inventore eum explicabo vero facilis nemo incidunt error reiciendis porro voluptate! Fugiat necessitatibus voluptatum voluptate fugit sed ducimus quis recusandae sit." 
  },
  {
    num:"03",
    title:"Logo Design",
    href:"",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem inventore eum explicabo vero facilis nemo incidunt error reiciendis porro voluptate! Fugiat necessitatibus voluptatum voluptate fugit sed ducimus quis recusandae sit." 
  },
  {
    num:"04",
    title:"SEO",
    href:"",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem inventore eum explicabo vero facilis nemo incidunt error reiciendis porro voluptate! Fugiat necessitatibus voluptatum voluptate fugit sed ducimus quis recusandae sit." 
  }
]

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
      <motion.div initial={{opacity:0}} animate={{
            opacity:1,
            transition:{delay:2,duration:0.4,ease:"easeIn"},
            
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((item,index)=>{
            return (
              <div key={index}
              className='flex flex-col justify-center gap-6 group'>
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{item.num}</div>
                  <Link href={item.href}
                  className='w-[70px] h-[70px] rounded-full flex justify-center items-center bg-white group-hover:bg-accent transition-all duration-500 hover:-rotate-45 '>
                    <ArrowDownRight className='text-primary text-3xl'/>
                  </Link>
                </div>
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{item.title}</h2>
                <p className='text-white/60'>{item.description}</p>
                <div className='border-white/20 border-b w-full'></div>
              </div>
            )
          })}
          </motion.div>
      </div>
    </section>
  )
}

export default Services
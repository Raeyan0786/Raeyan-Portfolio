"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';
import { GitBranchIcon } from 'lucide-react';
import { Pagination, Navigation } from 'swiper/modules';
import WorkSliderBtn from '@/components/WorkSliderBtn';

const projects=[
  {
    num:"01",
    category:"Frontend",
    title:"Project1",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem inventore eum explicabo vero facilis nemo incidunt error reiciendis porro voluptate! Fugiat necessitatibus voluptatum voluptate fugit sed ducimus quis recusandae sit." ,
    stack:[{name:"HTML 5"},{name:"CSS 3"},{name:"Javascript"}],
    image:"/assets/work/thumb1.png",
    live:"",
    github:""
  },
  {
    num:"02",
    category:"Fullstack",
    title:"Project2",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem inventore eum explicabo vero facilis nemo incidunt error reiciendis porro voluptate! Fugiat necessitatibus voluptatum voluptate fugit sed ducimus quis recusandae sit." ,
    stack:[{name:"Next.js"},{name:"Tailwind.css"},{name:"Node.js"}],
    image:"/assets/work/thumb2.png",
    live:"",
    github:""
  },
  {
    num:"03",
    category:"Frontend",
    title:"Project3",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem inventore eum explicabo vero facilis nemo incidunt error reiciendis porro voluptate! Fugiat necessitatibus voluptatum voluptate fugit sed ducimus quis recusandae sit." ,
    stack:[{name:"Next.js"},{name:"Tailwind.css"},{name:"Javascript"}],
    image:"/assets/work/thumb3.png",
    live:"",
    github:""
  }
]

 const Work = () => {
  const [project,setProject]=useState(projects[0]);
  const [curIndex,setcurIndex]=useState(0)

  const handleSlideChange=(swiper)=>{
    const currentIndex=swiper.activeIndex;
    setcurIndex(currentIndex)
    setProject(projects[currentIndex])
  }
  return (
    <motion.section
    initial={{opacity:0}} animate={{
      opacity:1,
      transition:{delay:2.4,duration:0.4,ease:"easeIn"}
  }}
  className='min-h-[80vh] flex flex-col justify-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between'>
            <div className='flex  flex-col gap-[30px]'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              <h2 className='text-[42px] leading-none text-white group-hover:text-accent font-bold transition-all duration-500 capitalize'>{project.category} Project</h2>
              <p className='text-white/60'>{project.description}</p>
              <ul className='flex gap-4'>
                {project.stack.map((item,index)=>{
                  return (
                    <li key={index} className='text-xl text-accent'>
                      {item.name}
                      {index!==project.length-1 && ','}
                    </li>
                  )
                })}
              </ul>
              <div className='border-b border-white/20'></div>
              <div className='flex items-center gap-4'>
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <ArrowUp className='text-white text-3xl group-hover:text-accent'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <GitBranchIcon className='text-white text-3xl group-hover:text-accent'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Respository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-1/2'>
                <Swiper 
                // pagination={{
                //   type: 'fraction',
                // }}
                // navigation={true}
                // modules={[ Navigation]}
                // pagination={{
                //   clickable: true,
                // }}
                // modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                className='xl:h-[520px] mb-12'
                onSlideChange={handleSlideChange}
                >
                    {projects.map((project,index)=>{
                      return <SwiperSlide key={index} className='w-full'>
                        <div className='h-[460px] flex justify-center items-center relative group bg-pink-50/20'>
                          <div></div>

                          <div className='relative w-full h-full'>
                            <Image
                            src={project.image}
                            fill
                            alt=''
                            className='object-cover'
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    })}

                    <WorkSliderBtn containerStyle="flex gap-2 absolute right-0  bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                    btnStyles="text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" currentIndex={curIndex}/>
                </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

 export default Work

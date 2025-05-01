"use client"
import React from 'react'
import {FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaNodeJs}  from 'react-icons/fa'
import {SiTailwindcss,SiNextdotjs} from "react-icons/si"
import { Tabs,TabsContent,TabsList,TabsTrigger } from '@/components/ui/tabs'
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea} from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

const about={
  title:"About me",
  description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem inventore eum explicabo vero facilis nemo incidunt error reiciendis porro voluptate! Fugiat necessitatibus voluptatum voluptate fugit sed ducimus quis recusandae sit.",
  info:[
    {
      fieldName:"Name",
      fieldValue:"Raeyan"
    },
    {
      fieldName:"Phone",
      fieldValue:"(+91) 9717614656"
    },
    {
      fieldName:"Experience",
      fieldValue:"1 Years"
    },
    {
      fieldName:"Email",
      fieldValue:"reyankhan01999@gmail.com"
    },
    {
      fieldName:"Nationality",
      fieldValue:"Indian"
    },
    
    {
      fieldName:"Freelance",
      fieldValue:"Available"
    },
    {
      fieldName:"Language",
      fieldValue:"English, Hindi"
    },
  ]
}

const experience={
  icon:"/assets/resume/badge.svg",
  title:"My experience",
  description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem inventore eum explicabo vero facilis nemo incidunt error reiciendis porro voluptate! Fugiat necessitatibus voluptatum voluptate fugit sed ducimus quis recusandae sit.",
  item:[
    {
      company:"Tech Solutions Inc.",
      position:"Full Stack Developer",
      duration:"2022 - present"
    },
    {
      company:"Web Design Studio",
      position:"Front-end Developer Intern",
      duration:"Summer 2021"
    },
    {
      company:"Tech Academy",
      position:"Teaching Assitance",
      duration:"2020 - 2021"
    },
    {
      company:"Web Design Studio",
      position:"Front-end Developer Intern",
      duration:"2019 - 2020"
    },
    {
      company:"Degital Agency",
      position:"UI/UX Designer",
      duration:"2018 - 2019"
    },
    {
      company:"Software Developer Ferm",
      position:"junior Developer",
      duration:"2017 - 2018"
    },
  ]
}

const education={
  icon:"/assets/resume/badge.svg",
  title:"My education",
  description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem inventore eum explicabo vero facilis nemo incidunt error reiciendis porro voluptate! Fugiat necessitatibus voluptatum voluptate fugit sed ducimus quis recusandae sit.",
  item:[
    {
      institute:"GLA University",
      degree:"B-Tech (CSE)",
      duration:"2018 - 2022"
    }
   
  ]
}

const skills={
  title:"My skill",
  description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem inventore eum explicabo vero facilis nemo incidunt error reiciendis porro voluptate! Fugiat necessitatibus voluptatum voluptate fugit sed ducimus quis recusandae sit.",
  skillList:[
    {
      icon:<FaHtml5/>,
      name:"html 5"
    },
    {
      icon:<FaCss3/>,
      name:"css 3"
    },
    {
      icon:<FaJs/>,
      name:"javascript"
    },
    {
      icon:<FaReact/>,
      name:"react.js"
    },
    {
      icon:<SiNextdotjs/>,
      name:"next.js"
    },
    {
      icon:<SiTailwindcss/>,
      name:"tailwind.css"
    },{
      icon:<FaNodeJs/>,
      name:"node.js"
    },
    {
      icon:<FaFigma/>,
      name:"figma"
    }
  ]
}

const Resume = () => {
  return (
    <motion.div 
            initial={{opacity:0}} animate={{
            opacity:1,
            transition:{delay:2.4,duration:0.4,ease:"easeIn"}
        }}
        className='min-h-[80vh] flex justify-center items-center py-12 xl:py-0'>
          <div className='container mx-auto'>
            <Tabs 
            defaultValue='experience'
            className='flex flex-col xl:flex-row gap-[60px]'>
              <TabsList
              className="flex- flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="about">About me</TabsTrigger>
              </TabsList>

              <div className='min-h-[70vh] w-full'>
                <TabsContent value="experience" className="w-full">
                  <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className='text-4xl font-bold'>{experience.title}</h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                    <ScrollArea className="h-[400px]">
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] '>
                        {experience.item.map((item,index)=>{
                          return (
                            <li key={index} className='bg-[#232329] h-[184px] rounded-xl py-6 px-10 flex flex-col justify-center items-center lg:items-start gap-1 '>
                               <span className='text-accent'>{item.duration}</span>
                               <h3 className='max-w-[260px] min-h-[60px] text-lg text-center lg:text-left'>{item.position}</h3>
                               <div className='flex items-center gap-3'>
                                  <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                  <p className='text-white/60'>{item.company}</p>
                               </div>
                            </li>
                          )
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent value="education" className="w-full">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className='text-4xl font-bold'>{education.title}</h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                    <ScrollArea className="h-[400px]">
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] '>
                        {education.item.map((item,index)=>{
                          return (
                            <li key={index} className='bg-[#232329] h-[184px] rounded-xl py-6 px-10 flex flex-col justify-center items-center lg:items-start gap-1 '>
                               <span className='text-accent'>{item.duration}</span>
                               <h3 className='max-w-[260px] min-h-[60px] text-lg text-center lg:text-left'>{item.degree}</h3>
                               <div className='flex items-center gap-3'>
                                  <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                  <p className='text-white/60'>{item.institute}</p>
                               </div>
                            </li>
                          )
                        })}
                      </ul>
                      
                    </ScrollArea>
                  </div>
                </TabsContent>


                <TabsContent value="skills" className="w-full">
                  <div className='flex flex-col gap-[30px]'>
                    <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                    </div>
                    <ul className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-[30px]' >
                      {skills.skillList.map((item,index)=>{
                        return (
                          <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>{item.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className='capitalize'>{item.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                        )
                      })}
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="about" className="w-full text-center xl:text-left">
                  <div className='flex flex-col gap-[30px]'>
                    <h3 className='text-4xl font-bold'>{about.title}</h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                    <ul className='grid grid-cols-1 xl:grid-cols-2 max-w-[620px] gap-y-6 mx-auto xl:mx-0'>
                      {about.info.map((item,index)=>{
                        return(
                          <li key={index} className='flex justify-start gap-4'>
                            <span className='text-white/60'>{item.fieldName}</span>
                            <span className='text-xl'>{item.fieldValue}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </TabsContent>
              </div>
              
            </Tabs>
          </div>

      </motion.div>
  )
}

export default Resume
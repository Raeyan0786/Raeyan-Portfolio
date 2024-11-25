"use client"
import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from '@/components/ui/select'
import { PhoneCall,MapPin,Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const info=[
  {
    icon:<PhoneCall/>,
    title:"Phone",
    description:"(+91) 9717614656 "
  },
  {
    icon:<Mail/>,
    title:"Email",
    description:"reyankhan01999@gmail.com"
  },
  {
    icon:<MapPin/>,
    title:"Address",
    description:"Noida Sector 63 , Uttar Pradesh"
  }
]
const Contact = () => {
  return (
    <motion.section 
            initial={{opacity:0}} animate={{
            opacity:1,
            transition:{delay:2,duration:0.4,ease:"easeIn"}
        }}
        className='py-6'>
          <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row gap-[30px]'> 
              <div className='w-[54%]'>
                <div className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
                  <h3 className='text-accent text-4xl'>Let's work together</h3>
                  <p className='text-white/60'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem inventore eum explicabo vero facilis nemo incidunt error reiciendis porro voluptate! Fugiat necessitatibus voluptatum voluptate fugit sed ducimus quis recusandae sit.
                  </p>
                  <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
                    <Input type="firstname" placeholder="First name"/>
                    <Input type="lastname" placeholder="Last name"/>
                    <Input type="email" placeholder="Email address"/>
                    <Input type="phone" placeholder="Phone number"/>
                  </div>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a service</SelectLabel>
                        <SelectItem value="cst">Full Stack Developer</SelectItem>
                        <SelectItem value="mst">Frontend Developer</SelectItem>
                        <SelectItem value="bst">Backend Developer</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Textarea 
                  className="h-[200px]"
                  placeholder="Type your message here."
                  />
                  <Button size="lg" className="max-w-40">
                    Send message
                  </Button>
                </div>
              </div>
              <div className='flex-1 flex items-center justify-end'>
                <ul className='flex flex-col gap-10'>
                  {info.map((item,index)=>{
                    return(
                      <li key={index} className='flex items-center gap-6'>
                        <div className='h-[72px] w-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center'>
                          <div className='text-[28px]'>{item.icon}</div>
                        </div>
                        <div className='flex-1'>
                          <p className='text-white/60'>{item.title}</p>
                          <h3 className='text-xl'>{item.description}</h3>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
          </motion.section>
  )
}

export default Contact
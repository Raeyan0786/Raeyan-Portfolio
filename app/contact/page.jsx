"use client"
import React, { useState } from 'react'
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
  const [service, setService] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service,
      message,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Failed')

      setStatus('success')
      ;(e.target).reset()
      setService("")
      setMessage("")
    } catch (error) {
      console.error(error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.section 
      initial={{opacity:0}} 
      animate={{
        opacity:1,
        transition:{delay:2,duration:0.4,ease:"easeIn"}
      }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'> 
          <div className='xl:w-[54%] order-2 xl:order-none'>
            {/* FORM START */}
            <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'
            >
              <h3 className='text-accent text-4xl'>Let&apos;s work together</h3>
              <p className='text-white/60'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                inventore eum explicabo vero facilis nemo incidunt error reiciendis
                porro voluptate! Fugiat necessitatibus voluptatum voluptate fugit sed
                ducimus quis recusandae sit.
              </p>

              <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
                <Input name="firstName" type="text" placeholder="First name" required />
                <Input name="lastName" type="text" placeholder="Last name" />
                <Input name="email" type="email" placeholder="Email address" required />
                <Input name="phone" type="tel" placeholder="Phone number" />
              </div>

              <Select onValueChange={setService} value={service}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="fullstack">Full Stack Developer</SelectItem>
                    <SelectItem value="frontend">Frontend Developer</SelectItem>
                    <SelectItem value="backend">Backend Developer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />

              <Button
                size="lg"
                className="max-w-40"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send message'}
              </Button>

              {status === 'success' && (
                <p className="text-green-400 text-sm">
                  ✅ Your message has been sent!
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
            {/* FORM END */}
          </div>

          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item,index)=>(
                <li key={index} className='flex items-center gap-6'>
                  <div className='h-[52px] w-[52px] xl:h-[72px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center'>
                    <div className='text-[28px]'>{item.icon}</div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-white/60'>{item.title}</p>
                    <h3 className='text-xl'>{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact

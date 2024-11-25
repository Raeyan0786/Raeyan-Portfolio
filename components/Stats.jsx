"use client"
import React from 'react'
import CountUp from 'react-countup'

const stats=[
    {
        num:1,
        text:"Years of experience"
    },
    {
        num:3,
        text:"Projects completed"
    },
    {
        num:8,
        text:"Technologies mastered"
    },
    {
        num:127,
        text:"Code commits"
    }
]

const Stats = () => {
  return (
    <section>
        <div className='container mx-auto'>
            <div className='flex gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
            {stats.map((item,index)=>{
                return(
                    <div className='flex-1 flex gap-4 justify-center items-center xl:justify-start' 
                    key={index}>
                        <CountUp end={item.num}
                        delay={2}
                        duration={5}
                        className='text-6xl font-extrabold'/>
                        <p className={`${item.text.length < 15 ?"max-w-[100px]":"max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                    </div>
                )
            })}
            </div>
        </div>
    </section>
  )
}

export default Stats
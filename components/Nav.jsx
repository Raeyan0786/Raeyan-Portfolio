"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const nav_link=[
    {
        name:"Home",
        path:"/"
    },
    {
        name:"Services",
        path:"/services"
    },
    {
        name:"Resume",
        path:"/resume"
    },
    {
        name:"Work",
        path:"/work"
    },
    {
        name:"Contact",
        path:"/contact"
    }
]

const Nav = () => {
    const path=usePathname();
  return (
    <nav className='flex gap-8'>
        {nav_link.map((item,index)=>(
            <Link key={`${index}-${item.name}`} href={item.path} className={`${path===item.path?"text-accent border-b-2 border-accent":""} capitalize hover:text-accent font-medium transition-all`}>
                {item.name}
            </Link>
        ))}
    </nav>
  )
}

export default Nav
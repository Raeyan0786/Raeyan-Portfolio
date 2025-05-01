import React from 'react'
import { Github,Linkedin } from 'lucide-react'
import Link from 'next/link'

const Socials=[
    {
        path:"/",
        icon:<Github/>
    },
    {
        path:"/",
        icon:<Linkedin/>
    }
]
const Social = ({containerStyles,iconStyle}) => {
  return (
    <div className={containerStyles}>
        {Socials.map((item,index)=>(
            <Link key={index} className={iconStyle} href={item.path}>
                {item.icon}
            </Link>
        ))}
    </div>
  )
}

export default Social
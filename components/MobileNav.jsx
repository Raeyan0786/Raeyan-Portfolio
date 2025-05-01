"use client"
import React,{useState,useEffect} from 'react'
import { Sheet,SheetTrigger,SheetContent, SheetClose } from './ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu } from 'lucide-react'
// import { nav_link } from './Nav'

const mob_link=[
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
const MobileNav = () => {
    const path=usePathname();
    const [activeMenu, setActiveMenu] = useState("/")

    useEffect(() => {
        if (typeof window !== 'undefined') {
          const storedMenu = sessionStorage.getItem('activeMenu');
          // Initialize with "/" if nothing in storage
          setActiveMenu(storedMenu || "/");
          if (!storedMenu) {
            sessionStorage.setItem('activeMenu', "/");
          }
        }
      }, []);
    
      const handleActiveMenu = (id) => {
        setActiveMenu(id);
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('activeMenu', id);
        }
      };
  return (
    <Sheet>
        <SheetTrigger asChild className='flex justify-center items-center'>
            <Menu className='text-[32px] text-accent'/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className='mt-24 mb-24 text-center text-2xl'>
            <Link href="/">
                <h1 className='text-4xl font-semibold'>
                    Link <span className='text-accent'>.</span>
                </h1>
            </Link>
            </div>
        <nav className='flex flex-col justify-center items-center gap-8'>
        {mob_link.map((item,index)=>(
            <SheetClose asChild key={`${index}-${item.name}`}>
                <Link  href={item.path} onClick={() => handleActiveMenu(item.path)} className={`${activeMenu===item.path?"text-accent border-b-2 border-accent":""} capitalize hover:text-accent font-medium transition-all`}>
                {item.name}
            </Link>
            </SheetClose>
            
        ))}
    </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
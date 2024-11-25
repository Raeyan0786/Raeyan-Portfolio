"use client"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useSwiper,Swiper } from "swiper/react"

const WorkSliderBtn = ({containerStyle,iconsStyle,btnStyles,currentIndex}) => {
    const swiper=useSwiper();
    console.log("currentIndex")
    console.log(currentIndex)
  return (
    <div className={containerStyle}>
        <button className={ `${btnStyles} ${currentIndex==0 ?"bg-slate-400 cursor-default":" bg-accent"}`}>
            <ArrowLeftIcon className={iconsStyle} onClick={()=>swiper.slidePrev()}/>
        </button>
        <button className={`${btnStyles} ${currentIndex==2 ?"bg-slate-400 cursor-default" :" bg-accent"}`}>
            <ArrowRightIcon className={iconsStyle} onClick={()=>swiper.slideNext()}/>
        </button>
    </div>
  )
}

export default WorkSliderBtn
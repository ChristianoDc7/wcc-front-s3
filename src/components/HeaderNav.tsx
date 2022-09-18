import React, { useEffect, useRef } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { ApplicationIcon, BiheartIcon, NotificationsIcon, ShopIcon } from '../icons/navbarIcons'

const HeaderNav = () => {
    const isSmall = useMediaQuery("(max-width: 768px)")

    const handleRemove = (e:React.MouseEvent<HTMLDivElement, MouseEvent>, linkClass:string, activeClass: string) => {
        document.querySelectorAll(linkClass).forEach((item)=>{
            if(item === e.currentTarget){
                item.classList.add(activeClass)
            }else{
                item.classList.remove(activeClass)
            }
        })
    }
  return (
    <div>
        <div className='HeaderIcon'>
            <div className='icon-container'>
                <div className='icon-item' onMouseEnter={(e)=>handleRemove(e, ".icon-item","active")}><ApplicationIcon /></div>
                <div className='icon-item' onMouseEnter={(e)=>handleRemove(e,".icon-item","active")}><NotificationsIcon /></div>
                <div className='icon-item active' onMouseEnter={(e)=>handleRemove(e,".icon-item","active")}><ShopIcon /></div>
                <div className='icon-item' onMouseEnter={(e)=>handleRemove(e,".icon-item","active")}><BiheartIcon /></div>
            </div>
            <img src='/img/pdp.png' alt='logo' className='pdp' />  
        </div>
        <div className='header-text'>
            <ul>
                <li><a className='first' href="#" >Book a hotel</a></li>
                <li><a href="#">Buy entrance ticket</a></li>
            </ul>
        </div>
    </div>
  )
}

export default HeaderNav
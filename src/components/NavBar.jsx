import React from 'react'
import { Link } from 'react-router-dom'
import ThemeBtn from './ThemeBtn'
import logo from '../assets/logo.png'
import { FaCircleUser } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";

function NavBar() {
  return (
    <div className='mybg bg-transparent py-4 px-4 block w-full top-0 '>
        <div className="container">
            <div className='flex justify-between items-center'>
                <Link to={'/'}>
                  <div className='cursor-pointer flex justify-center items-center '>
                    <img src={logo} className='h-[50px]' alt='logo'/>
                    <h2 className='dark:text-lime-300 text-black text-center font-bold ml-2 underline'>YouTweet</h2>
                    </div>
                </Link>
                <div>
                    <ThemeBtn/>
                </div>
                <div className='cursor-pointer'>
                  <IoLogOutOutline color='red' size={50}/>
                </div>
                <Link to={`/userdashboard/7`}>
                <div className='cursor-pointer'>
                    <FaCircleUser color='lightgreen' size={50}/>
                </div>
                </Link>
                
                
                    
            </div>
        </div>
    </div>
  )
}

export default NavBar
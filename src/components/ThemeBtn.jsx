import React from 'react'

import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../store/darkSlice';




const ThemeBtn = () => {

    const dispatch=useDispatch()

    const themeMode=useSelector((state)=>state.dark.themeMode)

    // console.log(themeMode)
    const onChangeBtn=()=>{
        const newMode = themeMode === "light" ? "dark" : "light";
    dispatch(setMode(newMode));
    }
  return (
    <label className="relative inline-flex items-center cursor-pointer" >
            
            
            
            <div onClick={onChangeBtn} className='w-12 h-12 ml-4 lg:ml-9 shadow-2xl rounded-xl border-2 border-white border-opacity-70 flex justify-center items-center hover:animate-bounce hover:border-lime-300'>
                {themeMode==='dark' ? <FiSun size={30} color='lime'   /> :<BsMoonStars size={30}/> }
                
            </div>
            

            




        </label>


 
  )
}

export default ThemeBtn
import React, { useState } from 'react'
import NavBar from './NavBar'
import { FaPencil } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';


function ChannelVideos() {
    const [loading,setLoading]=useState(false)
  return (
    <>
        <NavBar/>
        <div className="min-h-screen py-12 pt-12 overflow-hidden relative">
      {loading && <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 sm:top-1/3 sm:left-1/3 sm:transform-none'><Loader/></div>}
      <div className="flex flex-wrap lg:gap-8 justify-center">
      <div className='mybg p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className='relative w-full h-[230px]'>
            <img src='http://res.cloudinary.com/dkl6osjli/image/upload/v1709707928/izydyvnrwxlk9xbyaqcc.jpg' alt='image' className='w-full h-full object-contain rounded-2xl '/>
            <span className="absolute bottom-1 right-1 inline-block rounded text-white dark:text-white bg-black px-1.5 text-sm">20:45</span>
          </div>
          

          <div className='mt-5 flex justify-center items-center '>
          <div className="h-10 w-10 shrink-0">
              <img
                src="https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="codemaster"
                className="h-full w-full rounded-full" />
            </div>
            <div className='w-full ml-4'>
            <h3 className='text-white font-bold text-[24px]'>Title</h3>
            <p className="flex text-sm text-gray-200">10.3k Views · 44 minutes ago</p>
            <p className='mt-2 text-white text-[14px]'>Channel Name</p>
            </div>
            <div className='flex flex-col gap-4 cursor-pointer'>
                <Link to={`/update/:videoId`}>
                <FaPencil color='yellow' size={30}/>
                </Link>
                
                <MdDeleteForever color='red' size={40}/>
            </div>
            
            
            
          </div>
    </div>
      </div>
      </div>

    </>
  )
}

export default ChannelVideos
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

function ChannelStats() {

  const [channelStats,setChannelStats]=useState({})

  const GetChannelStats=async()=>{
    try {
      const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/dashboard/stats`,{withCredentials:true,headers:{
        'Content-Type':'application/json'
      }})
      console.log(response.data.data)
      setChannelStats(response.data.data)

    } catch (error) {
      
    }
  }

  useEffect(()=>{
    GetChannelStats()
  },[])
  return (
    <>
        <NavBar/>
        <div className='flex flex-wrap justify-center items-center'>
        <div className='mybg p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className="mr-auto flex flex-col justify-center items-center">
            <p className="font-bold text-xl text-black dark:text-emerald-300">Total Video Views : <span>{channelStats?.totalVideoViews}</span></p>
            <p className="text-sm text-gray-400">Total Likes : <span>{channelStats?.totalLikes}</span></p>
            <p className="text-sm text-gray-400">Total Videos : <span>{channelStats?.totalVideos}</span></p>
            <p className="text-sm text-gray-400">Total Subscribers : <span>{channelStats?.totalSubscribers}</span></p>
          </div>
        </div>

        </div>

    </>
  )
}

export default ChannelStats
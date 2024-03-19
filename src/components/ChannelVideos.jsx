import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { FaPencil } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';
import { useSnackbar } from 'notistack';


function ChannelVideos() {
    const [loading,setLoading]=useState(false)
    const [videoData,setVideoData]=useState([])
    
    const {enqueueSnackbar}=useSnackbar()

    const GetChannelVideos=async()=>{

    try {
      setLoading(true)
      const response=await axios.get(`/api/v1/dashboard/channel-videos`,{withCredentials:true,headers:{
        'Content-Type':'application/json'
      }})
      console.log('Video Data Channel Videos',response.data.data)
      setVideoData(response.data.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
      
      
      
  
    }

    const DeleteVideo=async(videoId)=>{
      try {
        setLoading(true)
        const response=await axios.delete(`/api/v1/videos/delete-video/${videoId}`,{withCredentials:true})
        console.log('Video Delete',response)
        setLoading(false)
        enqueueSnackbar(response.data.message,{
          variant:'success',
          autoHideDuration:1000,
          anchorOrigin:{
            
            vertical:'top',
            horizontal:'center'
          }
        })
      } catch (error) {
        console.log(error)
        enqueueSnackbar(error.message,{
          variant:'error',
          autoHideDuration:1000,
          anchorOrigin:{
            
            vertical:'top',
            horizontal:'center'
          }
        })
      }
    }


    useEffect(()=>{
      GetChannelVideos()
    },[])
  return (
    <>
        <NavBar/>
        <div className="min-h-screen py-12 pt-12 overflow-hidden relative">
      {loading && <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 sm:top-1/3 sm:left-1/3 sm:transform-none'><Loader/></div>}
      <div className="flex flex-wrap lg:gap-8 justify-center">
     {videoData?.map((video,index)=>(
      <div key={index} className='mybg p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className='relative w-full h-[230px]'>
            <img src={video?.thumbnail} alt={video.title} className='w-full h-full object-contain rounded-2xl '/>
            <span className="absolute bottom-1 right-1 inline-block rounded text-white dark:text-white bg-black px-1.5 text-sm">{video?.duration?.toFixed(2)}</span>
          </div>
          

          <div className='mt-5 flex justify-center items-center '>
          
            <div className='w-full ml-4'>
            <h3 className='text-white font-bold text-[24px]'>{video?.title}</h3>
            <p className="flex text-sm text-gray-200">{video?.views} Views · {(video?.createdAt && video.createdAt.split('T')[0])}</p>
            <p className='mt-2 text-white text-[14px]'>{video?.description}</p>
            </div>
            <div className='flex flex-col gap-4 cursor-pointer'>
                <Link to={`/update/${video?._id}`}>
                <FaPencil color='yellow' size={30}/>
                </Link>
                
                <MdDeleteForever onClick={()=>{DeleteVideo(video?._id)}} color='red' size={40}/>
            </div>
            
            
            
          </div>
    </div>
     ))}
      </div>
      </div>

    </>
  )
}

export default ChannelVideos
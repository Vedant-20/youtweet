import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { videoIdForDetails } from '../store/videoSlice';
import { useDispatch } from 'react-redux';


function Card({index,title,description,duration,thumbnail,videoFile,_id,views,createdAt,owner}) {

  const [videoOwner,setVideoOwner]=useState({})
  const dispatch=useDispatch()
  const navigate=useNavigate()


  const GetOwnerById=async(owner)=>{
    try {
      const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users/get-userbyid/${owner}`,{withCredentials:true})
      // console.log('Video Owner Details',response.data.data)
      setVideoOwner(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }


  const SendVideoDetails=(owner)=>{
      dispatch(videoIdForDetails(owner))
      // console.log(owner)
  }

  const NavigateToChannel=(ownerId)=>{
      navigate(`/channel-page/${ownerId}`)
  }

  useEffect(()=>{
    GetOwnerById(owner)
  },[])
  return (
    <div className='mybg p-5 rounded-2xl sm:w-[360px] w-full'>
        <Link to={`/videoDetails/${_id}`} >
        <div className='relative w-full h-[230px]' onClick={()=>{SendVideoDetails(owner)}}>
            <img src={thumbnail} alt={title} className='w-full h-full object-contain rounded-2xl '/>
            <span className="absolute bottom-1 right-1 inline-block rounded text-white dark:text-white bg-black px-1.5 text-sm">{duration.toFixed(2)}</span>
          </div>
        </Link>
        
          

          <div className='mt-5 flex justify-center items-center '>
          <div className="h-10 w-10 cursor-pointer shrink-0" onClick={()=>{NavigateToChannel(videoOwner._id)}}>
              <img
                src={videoOwner?.avatar}
                alt={videoOwner?.fullname}
                className="h-full w-full rounded-full" />
            </div>
            <div className='w-full ml-4'>
            <h3 className='text-white font-bold text-[20px]'>{title}</h3>
            <p className="flex text-sm text-gray-200">{views} Views · {createdAt.split('T')[0]}</p>
            <p className='mt-2 text-white text-[14px]'>{videoOwner?.fullname}</p>
            </div>
            
            
          </div>
    </div>
  )
}

export default Card
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";

function Tweet({index,content,createdAt,owner}) {

  const [tweetOwner,setTweetOwner]=useState({})
  const GetOwnerById=async(owner)=>{
    try {
      const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users/get-userbyid/${owner}`,{withCredentials:true})
      // console.log('Tweet Owner Details Page Owner',response.data.data)
      setTweetOwner(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    GetOwnerById(owner)
  },[])


  return (
    <div className='w-full overflow-hidden flex gap-3 border-b border-gray-700 py-4 mybg'>
        <div className="h-14 w-14 shrink-0">
              <img
                src={tweetOwner?.avatar}
                alt={tweetOwner?.fullname}
                className="h-full w-full rounded-full" />
            </div>
    <div className='text-white w-full '>
        <h4 className="mb-1 flex items-center gap-x-2">
                <span className="font-semibold">{tweetOwner?.fullname}</span>
                 
                <span className="inline-block text-sm text-gray-400">{createdAt.split('T')[0]}</span>
              </h4>
              <p className="mb-2">{content}</p>
              <div className='flex gap-4'>
              <button
                  className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)]"
                  data-like-count="425"
                  data-like-count-alt="426">
                  <SlLike color='lime'/>
                </button>
                <button
                  className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-dislike-count)] focus:after:content-[attr(data-dislike-count-alt)]"
                  data-dislike-count="87"
                  data-dislike-count-alt="88">
                  <SlDislike color='lime'/>
                </button>

              </div>

    </div>
    </div>
  )
}

export default Tweet
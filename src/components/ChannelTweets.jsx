import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { FaPencil } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from './Loader'
import axios from 'axios';
import { useSnackbar } from 'notistack';

function ChannelTweets() {

    const [loading,setLoading]=useState(false)
    const [tweets,setTweets]=useState([])
    const {enqueueSnackbar}=useSnackbar()
    const userId=useSelector((state)=>state.auth.userId)


    const GetChannelTweets=async(userId)=>{
      try {
        setLoading(true)
        const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/tweets/user/${userId}`,{withCredentials:true})
        console.log(response.data.data)
        setTweets(response.data.data)
        setLoading(false)
        
      } catch (error) {
        console.log(error)
      }
    }


    const DeleteTweet=async(tweetId)=>{
      try {
        setLoading(true)
        const response=await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/tweets/${tweetId}`,{withCredentials:true})
        console.log(response)
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
      GetChannelTweets(userId)
    },[])
  return (
    <>
        <NavBar/>
        <div className="min-h-screen py-12 pt-12 overflow-hidden relative">
        
      {loading && <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 sm:top-1/3 sm:left-1/3 sm:transform-none'><Loader/></div>}
      <div className="flex flex-wrap lg:gap-8 justify-center">
      {tweets.map((tweet,index)=>(
        <div key={index} className='w-full flex gap-3 border-b border-gray-700 py-4 mybg'>
        {/* <div className="h-14 w-14 shrink-0">
              <img
                src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="React Patterns"
                className="h-full w-full rounded-full" />
            </div> */}
    <div className='text-white w-full '>
        <h4 className="mb-1 flex items-center gap-x-2">
                <span className="font-semibold text-center">{tweet?.owner}</span>
                 
                <span className="inline-block text-sm text-gray-400">{tweet?.createdAt.split('T')[0]}</span>
              </h4>
              <p className="mb-2">{tweet?.content}</p>
              <div className='flex gap-4'>
              <button
                  className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)]"
                  data-like-count="425"
                  data-like-count-alt="426">
                  <SlLike/>
                </button>
                <button
                  className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-dislike-count)] focus:after:content-[attr(data-dislike-count-alt)]"
                  data-dislike-count="87"
                  data-dislike-count-alt="88">
                  <SlDislike/>
                </button>

              </div>
              <div className='flex justify-evenly mt-4 gap-4 '>
                <Link to={`/update/t/${tweet._id}`}>
                <FaPencil className='cursor-pointer' color='yellow' size={30}/>
                </Link>
                
                <MdDeleteForever onClick={()=>{DeleteTweet(tweet?._id)}} className='cursor-pointer' color='red' size={40}/>

              </div>

    </div>
    </div>
      ))}
      </div>
      </div>
    </>
  )
}

export default ChannelTweets
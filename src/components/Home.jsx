import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login ,logout} from '../store/authSlice'
import { useNavigate } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import Card from './Card';
import Tweet from './Tweet';
import Loader from './Loader'
import axios from 'axios';

function Home() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const loginStatus=useSelector((state)=>state.auth.loginStatus)
  const [active,setActive]=useState('videos')
  const [showVideos,setShowVideos]=useState(true)
  const [loading,setLoading]=useState(false)
  const [videoData,setVideoData]=useState([])
  const [tweetData,setTweetData]=useState([])

  const GetAllVideos=async()=>{

    
    setActive('videos')
    setShowVideos(true)
    setLoading(true)
    const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/videos/get-all-videos`)
    console.log(response.data.data)
    setVideoData(response.data.data)
    setLoading(false)
    console.log('Video Data All vsudbj',videoData)

  }

  const GetAllTweets=async()=>{
    
    setActive('tweets')
    setShowVideos(false)
    setLoading(true)
    const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/tweets/get-all-tweets`)
    console.log(response.data.data)
    setTweetData(response.data.data)
    setLoading(false)
  }

  const SendToLogin=()=>{
    navigate(`/`)
  }


  useEffect(()=>{
    GetAllVideos()
    
  },[])
  return loginStatus ? (
    <>
      <div className='flex justify-evenly items-center mybgTab'>
        <div onClick={GetAllVideos} className={`cursor-pointer flex justify-center items-center w-full mybgTab pb-2 ${active==='videos' ? 'bg-blue-400/50' : 'bg-transparent'}`} >
          <h2 className='dark:text-white text-black font-bold text-center '>Videos</h2>
        </div>
        
        <div onClick={GetAllTweets} className={`cursor-pointer flex justify-center items-center w-full mybgTab pb-2 ${active==='tweets' ? 'bg-blue-400/50' : 'bg-transparent'}`}>
          <h2 className='dark:text-white text-black font-bold text-center'>Tweets</h2>
        </div>
      </div>
      <div className="min-h-screen py-12 pt-12 overflow-hidden relative">
      {loading && <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 sm:top-1/3 sm:left-1/3 sm:transform-none'><Loader/></div>}
      <div className="flex flex-wrap lg:gap-8 justify-center">
          
          {showVideos ? (
            
            videoData.map((video,index)=>(
              <Card key={index} index={index} {...video}/>
            ))

          ) : (

          tweetData.map((tweet,index)=>(
            <Tweet key={index} index={index} {...tweet}/>
          ))
          
          )}
          
      </div>
      </div>
    </>
  ) :(
      <>
      <h2 className='text-black dark:text-yellow-300 font-extrabold text-2xl'>Please Login First To View The Content 😀</h2>
    <div onClick={SendToLogin} className="mt-2 flex justify-center items-center cursor-pointer">
            <button
                  type="button"
                  className="border-2 border-white inline-flex w-full items-center justify-center bg-black  font-semibold leading-7 text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded px-3.5 py-2.5 hover:bg-black/80"
                >
                  Go To Login Page <FaArrowRightLong className="ml-2 text-center" size={16} />
                </button>
            </div>
            </>
  )
}

export default Home
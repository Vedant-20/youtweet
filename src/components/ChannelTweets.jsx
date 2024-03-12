import React, { useState } from 'react'
import NavBar from './NavBar'
import { FaPencil } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { Link } from 'react-router-dom';

function ChannelTweets() {

    const [loading,setLoading]=useState(false)
  return (
    <>
        <NavBar/>
        <div className="min-h-screen py-12 pt-12 overflow-hidden relative">
      {loading && <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 sm:top-1/3 sm:left-1/3 sm:transform-none'><Loader/></div>}
      <div className="flex flex-wrap lg:gap-8 justify-center">
      <div className='flex gap-3 border-b border-gray-700 py-4 mybg'>
        <div className="h-14 w-14 shrink-0">
              <img
                src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="React Patterns"
                className="h-full w-full rounded-full" />
            </div>
    <div className='text-white w-full '>
        <h4 className="mb-1 flex items-center gap-x-2">
                <span className="font-semibold">React Patterns</span>
                 
                <span className="inline-block text-sm text-gray-400">5 hours ago</span>
              </h4>
              <p className="mb-2">Exploring the latest features in JavaScript ES11! The language keeps evolving. 💡 #JavaScript #ES11 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quia, facilis assumenda maxime veritatis similique, alias in doloremque vel cumque sapiente aut et! Tempora perferendis architecto autem praesentium accusamus suscipit?</p>
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
                <Link to={`/update/t/:tweetId`}>
                <FaPencil className='cursor-pointer' color='yellow' size={30}/>
                </Link>
                
                <MdDeleteForever className='cursor-pointer' color='red' size={40}/>

              </div>

    </div>
    </div>
      </div>
      </div>
    </>
  )
}

export default ChannelTweets
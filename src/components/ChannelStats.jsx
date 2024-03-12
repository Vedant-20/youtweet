import React from 'react'
import NavBar from './NavBar'

function ChannelStats() {
  return (
    <>
        <NavBar/>
        <div className='flex flex-wrap justify-center items-center'>
        <div className='mybg p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className="mr-auto flex flex-col justify-center items-center">
            <p className="font-bold text-xl text-black dark:text-emerald-300">Total Video Views : <span>69</span></p>
            <p className="text-sm text-gray-400">Total Likes : <span>672</span></p>
            <p className="text-sm text-gray-400">Total Videos : <span>78</span></p>
            <p className="text-sm text-gray-400">Total Subscribers : <span>213</span></p>
          </div>
        </div>

        </div>

    </>
  )
}

export default ChannelStats
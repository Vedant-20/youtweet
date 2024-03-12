import React from 'react'
import { Link } from 'react-router-dom'

function Card() {
  return (
    <div className='mybg p-5 rounded-2xl sm:w-[360px] w-full'>
        <Link to={`/videoDetails/:videoId`}>
        <div className='relative w-full h-[230px]'>
            <img src='http://res.cloudinary.com/dkl6osjli/image/upload/v1709707928/izydyvnrwxlk9xbyaqcc.jpg' alt='image' className='w-full h-full object-contain rounded-2xl '/>
            <span className="absolute bottom-1 right-1 inline-block rounded text-white dark:text-white bg-black px-1.5 text-sm">20:45</span>
          </div>
        </Link>
        
          

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
            
            
          </div>
    </div>
  )
}

export default Card
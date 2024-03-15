import React from 'react'

function UserProfile({userData}) {
  return (
    <>
    <div className="relative min-h-[150px] w-full pt-[16.28%]">
        <div className="absolute w-full inset-0 overflow-hidden">
          <img className='object-cover w-full h-full'
            src={userData?.data?.data?.coverImage}
            alt={userData?.data?.data?.fullname} />
        </div>
      </div>
        <div className='pc-4 pb-4'>
            <div className='flex flex-wrap gap-4 pb-4 pt-6'>
            <span className="relative -mt-12 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full border-2">
            <img
              src={userData?.data?.data?.avatar}
              alt={userData?.data?.data?.fullname}
              className="h-full w-full" />
          </span>
          <div className="mr-auto inline-block">
            <h1 className="font-bold text-xl text-black dark:text-emerald-300">{userData?.data?.data?.fullname}</h1>
            <p className="text-sm text-gray-400">{userData?.data?.data?.username}</p>
            <p className="text-sm text-gray-400">{userData?.data?.data?.email}</p>
          </div>

            </div>

        </div>
    </>
  )
}

export default UserProfile
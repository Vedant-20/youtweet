import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { FaArrowRightLong } from "react-icons/fa6";
import UserProfile from "../components/UserProfile";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function UserDashboardPage() {

  const {uid}=useParams()

  const [userData,setUserData]=useState()


  useEffect(()=>{
    GetUserById(uid)
    
  },[uid])

  const GetUserById=async(uid)=>{
    try {
      const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/get-userbyid/${uid}`)
      
    setUserData(response)
    console.log(userData)
    } catch (error) {
      console.log(error)
    }
  }

  
  return (
    <>
    
    
      <NavBar />
      <UserProfile userData={userData}/>
      <div className="mt-4 font-extrabold">
      <Link to={`/upload-video`}>
        <button
          type="button"
          className="border-2 border-white text-2xl inline-flex w-full items-center justify-center bg-black  font-bold leading-7 text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded px-3.5 py-2.5 hover:bg-black/80"
        >
          Upload Video{" "}
          <FaArrowRightLong className="ml-2 text-center " size={16} />
        </button>
        </Link>
      </div>
      <div className="mt-4 font-extrabold">
      <Link to={`/add-tweet`}>
        <button
          type="button"
          className="border-2 border-white text-2xl inline-flex w-full items-center justify-center bg-black  font-bold leading-7 text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded px-3.5 py-2.5 hover:bg-black/80"
        >
          Add Tweet{" "}
          <FaArrowRightLong className="ml-2 text-center " size={16} />
        </button>
        </Link>
      </div>
      <div className="mt-4 font-extrabold">
      <Link to={`/channel-stats`}>
        <button
          type="button"
          className="border-2 border-white text-2xl inline-flex w-full items-center justify-center bg-black  font-bold leading-7 text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded px-3.5 py-2.5 hover:bg-black/80"
        >
          See Your Channel Stats{" "}
          <FaArrowRightLong className="ml-2 text-center " size={16} />
        </button>
        </Link>
      </div>
      <div className="mt-4 font-extrabold">
        <Link to={`/channel-videos`}>
        <button
          type="button"
          className="border-2 border-white text-2xl inline-flex w-full items-center justify-center bg-black  font-bold leading-7 text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded px-3.5 py-2.5 hover:bg-black/80"
        >
          See Your Videos{" "}
          <FaArrowRightLong className="ml-2 text-center " size={16} />
        </button>
        </Link>
      </div>
      <div className="mt-4 font-extrabold">
        <Link to={`/channel-tweets`}>
        <button
          type="button"
          className="border-2 border-white text-2xl inline-flex w-full items-center justify-center bg-black  font-bold leading-7 text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded px-3.5 py-2.5 hover:bg-black/80"
        >
          See Your Tweets{" "}
          <FaArrowRightLong className="ml-2 text-center " size={16} />
        </button>
        </Link>
      </div>
      <div className="mt-4 font-extrabold">
      <Link to={`/change-password`}>
      <button
          type="button"
          className="border-2 border-white text-2xl inline-flex w-full items-center justify-center bg-black  font-bold leading-7 text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded px-3.5 py-2.5 hover:bg-black/80"
        >
          Change Password{" "}
          <FaArrowRightLong className="ml-2 text-center " size={16} />
        </button>
      </Link>
        
      </div>
      <div className="mt-4 font-extrabold">
      <Link to={`/update-name`}>
      <button
          type="button"
          className="border-2 border-white text-2xl inline-flex w-full items-center justify-center bg-black  font-bold leading-7 text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded px-3.5 py-2.5 hover:bg-black/80"
        >
          Update Full Name and Email{" "}
          <FaArrowRightLong className="ml-2 text-center " size={16} />
        </button>
      </Link>
        
      </div>
      <div className="mt-4 font-extrabold">
      <Link to={`/update-avatar`}>
      <button
          type="button"
          className="border-2 border-white text-2xl inline-flex w-full items-center justify-center bg-black  font-bold leading-7 text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded px-3.5 py-2.5 hover:bg-black/80"
        >
          Update Avatar{" "}
          <FaArrowRightLong className="ml-2 text-center " size={16} />
        </button>

      </Link>
        
      </div>
      <div className="mt-4 font-extrabold">
      <Link to={`/update-coverimage`}>
      <button
          type="button"
          className="border-2 border-white text-2xl inline-flex w-full items-center justify-center bg-black  font-bold leading-7 text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded px-3.5 py-2.5 hover:bg-black/80"
        >
          Update Cover Image{" "}
          <FaArrowRightLong className="ml-2 text-center " size={16} />
        </button>
      </Link>
        
      </div>
    </>
  );
}

export default UserDashboardPage;

import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { FaArrowRightLong } from "react-icons/fa6";
import UserProfile from "../components/UserProfile";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function UserDashboardPage() {

  const uid=useSelector((state)=>state.auth.userId)
  

  const [userData,setUserData]=useState({})


  useEffect(()=>{
    // GetUserById(uid)
    GetCurrentUser()
    
  },[uid]) 

  const GetUserById=async(uid)=>{
    try {
      const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/get-userbyid/${uid}`)
      // console.log('ndjalsncjsan fkls',response)
    setUserData(response)
    // console.log(userData)
    } catch (error) {
      console.log(error)
    }
  }
  const GetCurrentUser=async(uid)=>{
    try {
      const response=await axios.get(`/api/v1/users/current-user`,{withCredentials:true})
      // console.log('Current USer',response)
    setUserData(response)
    // console.log(userData)
    } catch (error) {
      console.log(error)
    }
  }

  
  return (
    <>
    
    
      <NavBar />
      
      <UserProfile userData={userData}/>
      <div className="mybg m-auto">
      <div className="mt-4 font-extrabold flex justify-center items-center ">
      <Link to={`/upload-video`}>
        <button
          type="button"
          className="border-2 border-white text-2xl inline-flex  items-center justify-center bg-black  font-bold leading-7 text-black bg-gradient-to-r from-yellow-200 to-green-500 rounded px-3.5 py-2.5 hover:bg-black/80"
        >
          Upload Video{" "}
          <FaArrowRightLong className="ml-2 text-center " size={16} />
        </button>
        </Link>
      </div>
      <div className="mt-4 font-extrabold flex justify-center items-center">
      <Link to={`/add-tweet`}>
        <button
          type="button"
          className="border-2 border-white text-2xl inline-flex  items-center justify-center bg-black  font-bold leading-7 text-black bg-gradient-to-r from-yellow-200 to-green-500 rounded px-3.5 py-2.5 hover:bg-black/80"
        >
          Add Tweet{" "}
          <FaArrowRightLong className="ml-2 text-center " size={16} />
        </button>
        </Link>
      </div>
      <div className="mt-4 font-extrabold flex justify-center items-center">
      <Link to={`/channel-stats`}>
        <button
          type="button"
          className="border-2 border-white text-2xl inline-flex  items-center justify-center bg-black  font-bold leading-7 text-black bg-gradient-to-r from-yellow-200 to-green-500 rounded px-3.5 py-2.5 hover:bg-black/80"
        >
          See Your Channel Stats{" "}
          <FaArrowRightLong className="ml-2 text-center " size={16} />
        </button>
        </Link>
      </div>
      <div className="mt-4 font-extrabold flex justify-center items-center">
        <Link to={`/channel-videos`}>
        <button
          type="button"
          className="border-2 border-white text-2xl inline-flex  items-center justify-center bg-black  font-bold leading-7 text-black bg-gradient-to-r from-yellow-200 to-green-500 rounded px-3.5 py-2.5 hover:bg-black/80"
        >
          See Your Videos{" "}
          <FaArrowRightLong className="ml-2 text-center " size={16} />
        </button>
        </Link>
      </div>
      <div className="mt-4 font-extrabold flex justify-center items-center">
        <Link to={`/channel-tweets`}>
        <button
          type="button"
          className="border-2 border-white text-2xl inline-flex  items-center justify-center bg-black  font-bold leading-7 text-black bg-gradient-to-r from-yellow-200 to-green-500 rounded px-3.5 py-2.5 hover:bg-black/80"
        >
          See Your Tweets{" "}
          <FaArrowRightLong className="ml-2 text-center " size={16} />
        </button>
        </Link>
      </div>
      <div className="mt-4 font-extrabold flex justify-center items-center">
      <Link to={`/change-password`}>
      <button
          type="button"
          className="border-2 border-white text-2xl inline-flex  items-center justify-center bg-black  font-bold leading-7 text-black bg-gradient-to-r from-yellow-200 to-green-500 rounded px-3.5 py-2.5 hover:bg-black/80"
        >
          Change Password{" "}
          <FaArrowRightLong className="ml-2 text-center " size={16} />
        </button>
      </Link>
        
      </div>
      <div className="mt-4 font-extrabold flex justify-center items-center">
      <Link to={`/update-name`}>
      <button
          type="button"
          className="border-2 border-white text-2xl inline-flex  items-center justify-center bg-black  font-bold leading-7 text-black bg-gradient-to-r from-yellow-200 to-green-500 rounded px-3.5 py-2.5 hover:bg-black/80"
        >
          Update Full Name and Email{" "}
          <FaArrowRightLong className="ml-2 text-center " size={16} />
        </button>
      </Link>
        
      </div>
      <div className="mt-4 font-extrabold flex justify-center items-center">
      <Link to={`/update-avatar`}>
      <button
          type="button"
          className="border-2 border-white text-2xl inline-flex  items-center justify-center bg-black  font-bold leading-7 text-black bg-gradient-to-r from-yellow-200 to-green-500 rounded px-3.5 py-2.5 hover:bg-black/80"
        >
          Update Avatar{" "}
          <FaArrowRightLong className="ml-2 text-center " size={16} />
        </button>

      </Link>
        
      </div>
      <div className="mt-4 font-extrabold flex justify-center items-center">
      <Link to={`/update-coverimage`}>
      <button
          type="button"
          className="border-2 border-white text-2xl inline-flex  items-center justify-center bg-black  font-bold leading-7 text-black bg-gradient-to-r from-yellow-200 to-green-500 rounded px-3.5 py-2.5 hover:bg-black/80"
        >
          Update Cover Image{" "}
          <FaArrowRightLong className="ml-2 text-center " size={16} />
        </button>
      </Link>
        
      </div>
      </div>
    </>
  );
}

export default UserDashboardPage;

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
      const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users/get-userbyid/${uid}`)
      // console.log('ndjalsncjsan fkls',response)
    setUserData(response)
    // console.log(userData)
    } catch (error) {
      console.log(error)
    }
  }
  const GetCurrentUser=async(uid)=>{
    try {
      const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users/current-user`,{withCredentials:true})
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
      <div className=" m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="mt-4 font-extrabold flex justify-center items-center ">
      <Link to={`/upload-video`}>
        <button
          type="button"
          className="border-2 h-[150px] w-[150px] bg-red-400 dark:bg-blue-400  border-white rounded-xl text-2xl   font-bold leading-7 text-white "
        >
          Upload Video{" "}
          {/* <FaArrowRightLong className="ml-2 text-center items-center " size={16} /> */}
        </button>
        </Link>
      </div>
      <div className="mt-4 font-extrabold flex justify-center items-center">
      <Link to={`/add-tweet`}>
        <button
          type="button"
          className="border-2 h-[150px] w-[150px] bg-red-400 dark:bg-blue-400  border-white rounded-xl text-2xl   font-bold leading-7 text-white "
        >
          Add Tweet{" "}
          {/* <FaArrowRightLong className="ml-2 text-center " size={16} /> */}
        </button>
        </Link>
      </div>
      <div className="mt-4 font-extrabold flex justify-center items-center">
      <Link to={`/channel-stats`}>
        <button
          type="button"
          className="border-2 h-[150px] w-[150px] bg-red-400 dark:bg-blue-400  border-white rounded-xl text-2xl   font-bold leading-7 text-white "
        >
          See Your Channel Stats{" "}
          {/* <FaArrowRightLong className="ml-2 text-center " size={16} /> */}
        </button>
        </Link>
      </div>
      <div className="mt-4 font-extrabold flex justify-center items-center">
        <Link to={`/channel-videos`}>
        <button
          type="button"
          className="border-2 h-[150px] w-[150px] bg-red-400 dark:bg-blue-400  border-white rounded-xl text-2xl   font-bold leading-7 text-white "
        >
          See Your Videos{" "}
          {/* <FaArrowRightLong className="ml-2 text-center " size={16} /> */}
        </button>
        </Link>
      </div>
      <div className="mt-4 font-extrabold flex justify-center items-center">
        <Link to={`/channel-tweets`}>
        <button
          type="button"
          className="border-2 h-[150px] w-[150px] bg-red-400 dark:bg-blue-400  border-white rounded-xl text-2xl   font-bold leading-7 text-white "
        >
          See Your Tweets{" "}
          {/* <FaArrowRightLong className="ml-2 text-center " size={16} /> */}
        </button>
        </Link>
      </div>
      <div className="mt-4 font-extrabold flex justify-center items-center">
      <Link to={`/change-password`}>
      <button
          type="button"
          className="border-2 h-[150px] w-[150px] bg-red-400 dark:bg-blue-400  border-white rounded-xl text-2xl   font-bold leading-7 text-white "
        >
          Change Password{" "}
          {/* <FaArrowRightLong className="ml-2 text-center " size={16} /> */}
        </button>
      </Link>
        
      </div>
      <div className="mt-4 font-extrabold flex justify-center items-center">
      <Link to={`/update-name`}>
      <button
          type="button"
          className="border-2 h-[150px] w-[150px] bg-red-400 dark:bg-blue-400  border-white rounded-xl text-2xl   font-bold leading-7 text-white "
        >
          Update Full Name and Email{" "}
          {/* <FaArrowRightLong className="ml-2 text-center " size={16} /> */}
        </button>
      </Link>
        
      </div>
      <div className="mt-4 font-extrabold flex justify-center items-center">
      <Link to={`/update-avatar`}>
      <button
          type="button"
          className="border-2 h-[150px] w-[150px] bg-red-400 dark:bg-blue-400  border-white rounded-xl text-2xl   font-bold leading-7 text-white "
        >
          Update Avatar{" "}
          {/* <FaArrowRightLong className="ml-2 text-center " size={16} /> */}
        </button>

      </Link>
        
      </div>
      <div className="mt-4 font-extrabold flex justify-center items-center">
      <Link to={`/update-coverimage`}>
      <button
          type="button"
          className="border-2 h-[150px] w-[150px] bg-red-400 dark:bg-blue-400    border-white rounded-xl text-2xl   font-bold leading-7 text-white "
        >
          Update Cover Image{" "}
          {/* <FaArrowRightLong className="ml-2 text-center " size={16} /> */}
        </button>
      </Link>
        
      </div>
      </div>
    </>
  );
}

export default UserDashboardPage;

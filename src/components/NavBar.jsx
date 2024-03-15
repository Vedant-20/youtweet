import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ThemeBtn from './ThemeBtn'
import logo from '../assets/logo.png'
import { FaCircleUser } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";
import axios from 'axios';
import { logout ,IdKeeper} from '../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

function NavBar() {
  const uid=useSelector((state)=>state.auth.userId)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [userData,setUserData]=useState({})
  const {enqueueSnackbar}=useSnackbar()

  const handleLogOut=async()=>{
    try {
      const response=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/logout`,{},{withCredentials:true,headers:{
        'Content-Type':'application/json'
      }})
    console.log(response)
    dispatch(logout())
    dispatch(IdKeeper(null))
    navigate(`/`)
    if(response.status===200){
      enqueueSnackbar(response.data.message,{
        variant:'success',
        autoHideDuration:1000,
        anchorOrigin:{
          
          vertical:'top',
          horizontal:'center'
        }
      })
    }
    } catch (error) {
      console.log('Logout Error',error)
      enqueueSnackbar(error.message,{
        variant:'warning',
        autoHideDuration:1000,
        anchorOrigin:{
          
          vertical:'top',
          horizontal:'center'
        }
      })
    }
    
  }

  const GetCurrentUser=async(uid)=>{
    try {
      const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/current-user`,{withCredentials:true})
      // console.log('Current USer',response.data.data)
    setUserData(response.data.data)
    // console.log(userData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    
    GetCurrentUser()
    
  },[uid])
  return (
    <div className='mybg bg-transparent py-4 px-4 block w-full top-0 '>
    
    
        <div className="container">
            <div className='flex justify-between items-center'>
                <Link to={`/home/${uid}`}>
                  <div className='cursor-pointer flex justify-center items-center '>
                    <img src={logo} className='h-[50px]' alt='logo'/>
                    <h2 className='dark:text-lime-300 text-black text-center font-bold ml-2 underline'>YouTweet</h2>
                    </div>
                </Link>
                <div>
                    <ThemeBtn/>
                </div>
                <div className='cursor-pointer' onClick={handleLogOut}>
                  <IoLogOutOutline color='red' size={50}/>
                </div>
                <Link to={`/userdashboard/${uid}`}>
                <div className='rounded-full  cursor-pointer'>
                    {/* <FaCircleUser color='lightgreen' size={50}/>
                     */}
                     <img className='rounded-full h-16 w-16 border-white border-2' src={userData?.avatar} alt={userData?.fullname} />
                </div>
                </Link>
                
                
                    
            </div>
        </div>
    </div>
  )
}

export default NavBar
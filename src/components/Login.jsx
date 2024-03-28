import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { login,IdKeeper } from '../store/authSlice';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import Loader from './Loader';




function Login() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {enqueueSnackbar}=useSnackbar()
  const [loading,setLoading]=useState(false)

  const [formData, setFormData] = useState({
    
    email: '',
    
    password: '',
  });


  const GetTestCredentials=()=>{
      setFormData({'email':'h@hc.com','password':'12345678'})
      // console.log('Test Creds',formData)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true)
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users/login`, formData,{withCredentials:true});
      // console.log(response)
      const {accessToken,refreshToken}=response.data.data
      // console.log('AccessToken',accessToken)
      // console.log('RefreshToken',refreshToken)
      // Cookies.set('accessToken', accessToken, { path: '/' , secure:true, sameSite:'none', expires:7} );
      // Cookies.set('refreshToken', refreshToken, { path: '/' , secure:true , sameSite:'none' , expires:7,  });
      setLoading(false)
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
      dispatch(login())
      dispatch(IdKeeper(response.data.data.user._id))
      navigate(`/home/${response.data.data.user._id}`)



      
      
    } catch (error) {
      console.log(error)
    }
  };

  return loading ? (
    <Loader/>
  ) : (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
            <img className='h-[180px]' src={logo} alt="logo" />
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-white dark:text-white">
            Sign in to your account
          </h2>
          
          <p className="mt-2 text-center text-sm text-yellow-400 ">
            Don&apos;t have an account?{' '}
            <Link
              to={`/signup`}
            >
            <span className="font-semibold text-white transition-all duration-200 hover:underline dark:text-lime-300">
            Create a free account
            </span>
            </Link>
              
            
          </p>
          
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="" className="text-base font-medium text-white dark:text-white ">
                  {' '}
                  Email address{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full text-white rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-yellow-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="text-base font-medium text-white dark:text-white">
                    {' '}
                    Password{' '}
                  </label>
                  
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md text-white border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-yellow-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    value={formData.password}
                    onChange={handleChange}
                    type="password"
                    name='password'
                    placeholder="Password"
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center border-2 border-white bg-black  font-semibold leading-7 text-black bg-gradient-to-br from-[#ff911b] dark:from-[#ff8400] dark:via-[#fff4f4] via-[#fff] dark:text-black  text-border2 to-[#43ff36] dark:to-[#12ff02] rounded px-3.5 py-2.5 hover:bg-black/80"
                >
                  Get started <FaArrowRightLong className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
          <div className='mt-4' onClick={GetTestCredentials}>
          <button
                  type="button"
                  className="inline-flex w-full items-center justify-center border-2 border-white bg-black  font-semibold leading-7 text-black bg-gradient-to-r from-teal-200 to-lime-200 rounded px-3.5 py-2.5 hover:bg-black/80"
                >
                  Get Test Credentials <FaArrowRightLong className="ml-2" size={16} />
                </button>
          </div>
         
        </div>
      </div>
    </section>
  )
}

export default Login
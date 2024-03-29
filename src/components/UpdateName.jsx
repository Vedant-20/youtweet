import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios';
import { useSnackbar } from 'notistack';

function UpdateName() {
    const [formData, setFormData] = useState({
    
        fullname: '',
        
        email: '',
      });
      const {enqueueSnackbar}=useSnackbar()
    
    
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
          const response = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users/update-account`, formData,{withCredentials:true});
          console.log(response)
          enqueueSnackbar(response.data.message,{
            variant:'success',
            autoHideDuration:1000,
            anchorOrigin:{
              
              vertical:'top',
              horizontal:'center'
            }
          })
        } catch (error) {
          console.log(error)
          enqueueSnackbar(error,{
            variant:'error',
            autoHideDuration:1000,
            anchorOrigin:{
              
              vertical:'top',
              horizontal:'center'
            }
          })
        }
      };
  return (
    <>
        <NavBar/>
        <div>
            <h1 className='text-black text-center dark:text-white text-2xl font-bold'>Change Your Name and Email</h1>
        </div>
        <div>
        <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              <div className='text-center'>
                <label htmlFor="" className="text-base font-medium text-gray-900 dark:text-white ">
                  {' '}
                  Full Name{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full dark:text-white rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-yellow-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    name='fullname'
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="Enter Your New Full Name"
                  ></input>
                </div>
              </div>
              <div className=''>
                <div className="flex items-center justify-center ">
                  <label htmlFor="" className="text-base text-center font-medium text-gray-900 dark:text-white">
                    {' '}
                    Email{' '}
                  </label>
                  
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md dark:text-white border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-yellow-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    name='email'
                    placeholder="Enter Your New Email"
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="border-2 text-2xl font-bold mt-4 mb-8 border-white inline-flex w-full items-center justify-center bg-black   leading-7 text-black bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded px-3.5 py-2.5 hover:bg-black/80"
                >
                 Update Name and Email 
                </button>
              </div>
            </div>
          </form>
        </div>
    </>
  )
}

export default UpdateName
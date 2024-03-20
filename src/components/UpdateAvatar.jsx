import React, { useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { useSnackbar } from "notistack";
import Loader from "./Loader";

function UpdateAvatar() {
  const [formData, setFormData] = useState({ avatar: null });
  const [loading,setLoading]=useState(false)

  const {enqueueSnackbar}=useSnackbar()

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      formDataToSend.append("avatar", formData.avatar);

      setLoading(true)

        const response = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users/avatar`, formDataToSend,{withCredentials:true});
        console.log(response)
        setLoading(false)
        enqueueSnackbar(response.data.message,{
          variant:'success',
          autoHideDuration:1000,
          anchorOrigin:{
            
            vertical:'top',
            horizontal:'center'
          }
        })
    } catch (error) {
      console.log(error);
      enqueueSnackbar(response.data.message,{
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
      <NavBar />
      <div className="mt-4">
        <h1 className="text-black text-center dark:text-white text-2xl font-bold">
          Change Your Avatar
        </h1>
      </div>
      {loading && <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 sm:top-1/3 sm:left-1/3 sm:transform-none'><Loader/></div>}
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <form onSubmit={handleSubmit}>
            <div className="text-center">
              <label
                htmlFor=""
                className="text-base font-medium text-center text-gray-900 dark:text-white "
              >
                {" "}
                Avatar{" "}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full dark:text-white rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-yellow-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mt-2 flex justify-center items-center">
              <button
                type="submit"
                className="border-2 border-white inline-flex w-full items-center justify-center bg-black  font-semibold leading-7 text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded px-3.5 py-2.5 hover:bg-black/80"
              >
                Update Avatar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateAvatar;

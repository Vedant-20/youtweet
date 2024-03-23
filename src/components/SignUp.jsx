import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { useSnackbar } from "notistack";
import Loader from './Loader'

function SignUp() {
  const {enqueueSnackbar}=useSnackbar()
  const navigate=useNavigate()
  const [loading,setLoading]=useState(false)
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    avatar: null,
    coverImage: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "avatar" || e.target.name === "coverImage") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullname", formData.fullname);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("username", formData.username);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("avatar", formData.avatar);
      formDataToSend.append("coverImage", formData.coverImage);

      setLoading(true)

      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users/register`, formDataToSend);
      if(response.status===201){
        enqueueSnackbar(response.data.message,{
          variant:'success',
          anchorOrigin:{
            vertical:'top',
            horizontal:'center'
          }
        })
      }
      setLoading(false)
      // console.log(response.data?.data?._id);
      navigate(`/`)
    } catch (error) {
      console.log(error);
    }
  };

  return loading ? (<Loader/>)  :  (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
            <img src={logo} alt="logo" className="h-[120px]" />
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-white dark:text-white">
            Sign up to create account
          </h2>
          <p className="mt-2 text-center text-base text-yellow-400">
            Already have an account?{" "}
            <Link to={`/`}>
              <span className="font-medium text-white dark:text-lime-300 transition-all duration-200 hover:underline">
                Sign In
              </span>
            </Link>
          </p>

          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor=""
                className="text-base font-medium text-white dark:text-white "
              >
                {" "}
                Full Name{" "}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full text-white rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-yellow-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Full Name"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor=""
                className="text-base font-medium text-white "
              >
                {" "}
                Email{" "}
              </label>

              <div className="mt-2">
                <input
                  className="flex h-10 w-full text-white rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-yellow-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor=""
                className="text-base font-medium text-white "
              >
                {" "}
                Username{" "}
              </label>

              <div className="mt-2">
                <input
                  className="flex h-10 w-full text-white rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-yellow-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor=""
                className="text-base font-medium text-white "
              >
                {" "}
                Password{" "}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full text-white rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-yellow-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor=""
                className="text-base font-medium text-white "
              >
                {" "}
                Avatar{" "}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full text-white rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-yellow-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor=""
                className="text-base font-medium text-white  "
              >
                {" "}
                Cover Image{" "}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full text-white rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-yellow-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="file"
                  name="coverImage"
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
                SignUp{" "}
                <FaArrowRightLong className="ml-2 text-center" size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignUp;

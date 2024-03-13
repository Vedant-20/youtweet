import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import axios from "axios";
import { useSelector } from "react-redux";

function VideoDetails() {
  const {videoId}=useParams()
  const OwnerId=useSelector((state)=>state.video.OwnerId)
    const [loading,setLoading]=useState(false)
    
    const [videoData,setVideoData]=useState({})
    
    const [videoOwner,setVideoOwner]=useState({})
    const [formData, setFormData] = useState({
    
        content: '',
        
        
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        // try {
        //   const response = await axios.post('/api/register', formData);
        //   console.log(response)
        // } catch (error) {
        //   console.log(error)
        // }
      };

      const GetVideoById=async(videoId)=>{
        setLoading(true)
        
          
        const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/videos/${videoId}`,{withCredentials:true})
        console.log('Video Details',response.data.data)
        setVideoData(response.data.data)
        

        setLoading(false)
        
      }

      


      useEffect(()=>{
          GetVideoById(videoId)
          
            GetOwnerById(OwnerId)
          
            
          
          
          
      },[])


      const GetOwnerById=async(user)=>{
        try {
          const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/get-userbyid/${OwnerId}`,{withCredentials:true})
          console.log('Video Owner Details Page Owner',response.data.data)
          setVideoOwner(response.data.data)
        } catch (error) {
          console.log(error)
        }
      }
      
  return (
    <>
      <NavBar />
      
      <div className="w-full  flex flex-wrap justify-center items-center">
      {/* <h1 className="text-7xl dark:text-white">{OwnerId}</h1> */}
        {loading && <Loader/>}
        <video
          className="lg:h-[500px] mybgTab"
          autoPlay
          controls
          controlsList="nodownload foobar"
          
          src={videoData?.videoFile}
        />
        {/* <div className='mt-4'>
                <div >
                    <h1 className='text-black dark:text-white text-xl font-bold text-center'>Title</h1>
                </div>
                <div>
                <h2 className='text-black dark:text-white text-xl font-bold text-center'>Description: </h2>
                <p className='dark:text-white text-black text-sm'>Video Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam quaerat ducimus ratione ipsum distinctio voluptas vero possimus, voluptatem modi, maiores facilis consectetur tenetur alias obcaecati nisi soluta inventore optio temporibus beatae non a. Similique, ea excepturi earum nihil architecto voluptate.</p>

                </div>
                <div className='mt-4 text-center'>
                    <p className='dark:text-white text-black text-sm'>Upload Date: <span>11/3/2024</span></p>
                </div>
                

            </div> */}

        <div
          className="group mb-4 w-full rounded-lg border p-4 duration-200 hover:bg-white/5 focus:bg-white/5"
          role="button"
          tabIndex="0"
        >
          <div className="flex flex-wrap gap-y-2">
            <div className="w-full md:w-1/2 lg:w-full xl:w-1/2">
              <h1 className="text-lg font-bold text-black dark:text-white">
                {videoData?.title}
              </h1>
              <p className="flex text-sm text-gray-200">
                {videoData?.views} Views ·{(videoData?.createdAt && videoData.createdAt.split('T')[0])}
              </p>
            </div>

            <div className="w-full md:w-1/2 lg:w-full xl:w-1/2">
              <div className="flex items-center justify-between gap-x-4 md:justify-end lg:justify-between xl:justify-end">
                <div className="flex overflow-hidden rounded-lg border">
                  <button
                    className="group inline-flex text-black dark:text-lime-300 items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)]"
                    data-like-count="425"
                    data-like-count-alt="426"
                  >
                    <SlLike color="lime" />
                  </button>
                  <button
                    className="group inline-flex text-black dark:text-lime-300 items-center gap-x-1 outline-none after:content-[attr(data-dislike-count)] focus:after:content-[attr(data-dislike-count-alt)]"
                    data-dislike-count="87"
                    data-dislike-count-alt="88"
                  >
                    <SlDislike color="lime" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-x-4">
              <div className="mt-2 h-12 w-12 shrink-0">
                <img
                  src={videoOwner?.avatar}
                  alt={videoOwner?.fullname }
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="block">
                <p className="text-gray-200">{videoOwner?.fullname}</p>
                <p className="text-sm text-gray-400">757K Subscribers</p>
              </div>
              <hr className="my-4 border-white" />
              <div className="h-5 overflow-hidden group-focus:h-auto">
                <p className="text-sm text-black dark:text-white">
                  {videoData?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div
            className="group mb-4 w-full rounded-lg border p-4 duration-200 hover:bg-white/5 focus:bg-white/5">
                
              <h6 className="mb-4 font-semibold text-black dark:text-white">Add Comments</h6>
              <form onSubmit={handleSubmit} >
              <input
                type="text"
                className="w-full rounded-lg border bg-transparent px-2 py-1 text-black dark:text-white placeholder-white"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Add a Comment" />
                <button className="border-2 text-2xl font-bold mt-4 mb-8 border-white inline-flex w-full items-center justify-center bg-black   leading-7 text-black bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded px-3.5 py-2.5 hover:bg-black/80" type="submit" >Add Comment</button>
              </form>
              
            
            <hr className="my-4 border-white" />
            </div>
            <div className="group mb-4 w-full rounded-lg border p-4 duration-200 hover:bg-white/5 focus:bg-white/5">
            <div>
            <div className="flex gap-x-4">
            <div className="mt-2 h-11 w-11 shrink-0">
                  <img
                    src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-woman-reading-book-on-a-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="sarahjv"
                    className="h-full w-full rounded-full" />
                </div>
                <div className="block">
                  <p className="flex items-center text-gray-200">
                    Sarah Johnson · 
                    <span className="text-sm">17 hour ago</span>
                  </p>
                  <p className="text-sm text-gray-200">@sarahjv</p>
                  <p className="mt-3 text-sm text-black dark:text-white">This series is exactly what I&#x27;ve been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!</p>
                </div>
            </div>
            <hr className="my-4 border-white" />
            </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default VideoDetails;

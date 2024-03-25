import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import UserProfile from "../components/UserProfile";
import axios from "axios";
import Loader from "../components/Loader";
import Card from "../components/Card";
import Tweet from "../components/Tweet";
import { useSnackbar } from "notistack";

function ChannelPage() {
  const { channelId } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [userData, setUserData] = useState({});
  const [error,setError]=useState(false)
  const [active, setActive] = useState("videos");
  const [loading, setLoading] = useState(false);
  const [channelVideos, setChannelVideos] = useState([]);
  const [channelTweets, setChannelTweets] = useState([]);
  const [showVideos, setShowVideos] = useState(true);
  const [showTweets, setShowTweets] = useState(false);
  const [noChannelSubscribers,setNoChannelSubscribers]=useState(false)
  const [subscribersCount,setSubscribersCount]=useState(0)
  const [channelSubscribers,setChannelSubscribers]=useState([])

  const GetUserById = async (uid) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/users/get-userbyid/${uid}`,
        { withCredentials: true }
      );
      // console.log("ndjalsncjsan fkls", response);
      setUserData(response);
      // console.log(userData)
    } catch (error) {
      console.log(error);
    }
  };

  const GetChannelVideos = async () => {
    try {
      setLoading(true);
      
      
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/videos/get-video-by-channel-id/${channelId}`,{withCredentials:true}
      );
      console.log(response.data.data);
      setChannelVideos(response.data.data);
      setLoading(false);
      setShowTweets(false);
      setShowVideos(true);
      setActive("videos");
    } catch (error) {
      console.log(error);
      setLoading(false)
      setError(true)
      enqueueSnackbar(error.message, {
        variant: "error",
        autoHideDuration: 1000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    }
  };

  const GetChannelSubscribers=async()=>{
    try {
      const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/subscriptions/c/${channelId}`,
      
      { withCredentials: true })
      console.log('Channel subscribers',response)
      setSubscribersCount(response?.data?.data?.subscriberCount)
      setChannelSubscribers(response?.data?.data?.subscribers)
    } catch (error) {
      console.log(error)
      setNoChannelSubscribers(true)
    }
  }

  const GetChannelTweets = async (channelId) => {
    try {
      
      setLoading(true);
      

      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/tweets/user/${channelId}`,
        { withCredentials: true }
      );
      console.log(response.data.data);
      setChannelTweets(response.data.data);
      
      setShowVideos(false);
      setShowTweets(true);
      setActive("tweets");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false)
      setError(true)
      enqueueSnackbar(error.message, {
        variant: "error",
        autoHideDuration: 1000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    }
  };

  useEffect(() => {
    GetUserById(channelId);
    GetChannelVideos();
    GetChannelTweets(channelId)
    GetChannelSubscribers(channelId)
  }, [channelId]);
  return (
    <>
      <NavBar />

      <UserProfile userData={userData} subscribersCount={subscribersCount} />
      
      
      {loading && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 sm:top-1/3 sm:left-1/3 sm:transform-none">
          <Loader />
        </div>
      )}
      <div>
        <div
          onClick={GetChannelVideos}
          className="flex justify-evenly items-center mybgTab"
        >
          <div
            className={`cursor-pointer flex justify-center items-center w-full mybgTab pb-2 ${
              active === "videos" ? "bg-blue-400/50" : "bg-transparent"
            }`}
          >
            <h2 className="dark:text-white text-black font-bold text-center ">
              Videos
            </h2>
          </div>

          <div
            onClick={()=>{GetChannelTweets(channelId)}}
            className={`cursor-pointer flex justify-center items-center w-full mybgTab pb-2 ${
              active === "tweets" ? "bg-blue-400/50" : "bg-transparent"
            }`}
          >
            <h2 className="dark:text-white text-black font-bold text-center">
              Tweets
            </h2>
          </div>
        </div>
      </div>
      <div className="min-h-screen py-12 pt-12 overflow-hidden relative">
        {loading && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 sm:top-1/3 sm:left-1/3 sm:transform-none">
            <Loader />
          </div>
        )}
        {error && <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 sm:top-1/3 sm:left-1/3 sm:transform-none'>
        <h1 className='text-2xl text-white font-bold'>You Have Not Posted any Tweets or Videos Yet <span>☹</span>!</h1>
      </div>}
        <div className="flex flex-wrap lg:gap-8 justify-center">
          {showVideos  && active === "videos" &&
            (
                channelVideos.map((video, index) => (
              <Card key={index} index={index} {...video} />
            ))
            )}

          {showTweets && active === "tweets" && (
            channelTweets.map((tweet, index) => (
                console.log('comeponent rereedebd'),
              <Tweet key={index} index={index} {...tweet} />
            ))
          )
            }
        </div>
      </div>

      <div className="w-full flex ">
      <div className="flex w-full justify-center items-center mb-8">
        <h1 className="text-white text-3xl font-bold">Channel Subscribers</h1>
        
      </div>
      <hr className="my-4 border-white" />
      
      </div>
      <div className="m-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8">
      {channelSubscribers?.map((subscriber)=>(
        <div key={subscriber?._id} className="ml-4 mt-4 mb-4 font-bold flex flex-col justify-center items-center">
              <img className="h-[100px] w-[100px] rounded-xl " src={subscriber?.subscriber?.avatar}/>
              
              <p className="text-sm mt-2 text-gray-400">{subscriber?.subscriber?.fullname}</p>
              
              
            </div>
      ))}

      </div>
            
      
      {noChannelSubscribers && <div><h1 className="text-4xl text-red-500">This Channel Do Not Have Any Subscriber 😥 </h1></div>}
    </>
  );
}

export default ChannelPage;

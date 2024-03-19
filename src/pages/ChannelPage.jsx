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
  const [active, setActive] = useState("videos");
  const [loading, setLoading] = useState(false);
  const [channelVideos, setChannelVideos] = useState([]);
  const [channelTweets, setChannelTweets] = useState([]);
  const [showVideos, setShowVideos] = useState(true);
  const [showTweets, setShowTweets] = useState(false);

  const GetUserById = async (uid) => {
    try {
      const response = await axios.get(
        `/api/v1/users/get-userbyid/${uid}`,
        { withCredentials: true }
      );
      console.log("ndjalsncjsan fkls", response);
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
        `/api/v1/videos/get-video-by-channel-id/${channelId}`
      );
      console.log(response.data.data);
      setChannelVideos(response.data.data);
      setLoading(false);
      setShowTweets(false);
      setShowVideos(true);
      setActive("videos");
    } catch (error) {
      console.log(error);
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

  const GetChannelTweets = async (channelId) => {
    try {
      
      setLoading(true);
      

      const response = await axios.get(
        `/api/v1/tweets/user/${channelId}`,
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
  }, [channelId]);
  return (
    <>
      <NavBar />

      <UserProfile userData={userData} />
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
    </>
  );
}

export default ChannelPage;

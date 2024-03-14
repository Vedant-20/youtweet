import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import SignUpPage from "./pages/SignUpPage"
import HomePage from "./pages/HomePage"
import UserDashboardPage from "./pages/UserDashboardPage"
import Footer from "./components/Footer"
import VideoUpload from "./components/VideoUpload"
import AddTweet from "./components/AddTweet"
import ChannelStats from "./components/ChannelStats"
import ChannelVideos from "./components/ChannelVideos"
import UpdateVideo from "./components/UpdateVideo"
import ChannelTweets from "./components/ChannelTweets"
import UpdateTweet from "./components/UpdateTweet"
import ChangePassword from "./components/ChangePassword"
import UpdateName from "./components/UpdateName"
import UpdateAvatar from "./components/UpdateAvatar"
import UpdateCoverImage from "./components/UpdateCoverImage"
import VideoDetails from "./components/VideoDetails"
import ChannelPage from "./pages/ChannelPage"



function App() {
  const dispatch=useDispatch()

  const themeMode = useSelector((state) => state.dark.themeMode);

  

useEffect(()=>{
 
  
  document.querySelector('html').classList.remove("light","dark")

    document.querySelector('html').classList.add(themeMode)
},[themeMode])


  

  return (
    <>
    <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/home/:uid" element={<HomePage/>}/>
      <Route path="/userdashboard/:uid" element={<UserDashboardPage/>} />
      <Route path="/upload-video" element={<VideoUpload/>}/>
      <Route path="/add-tweet" element={<AddTweet/>} />
      <Route path="/channel-stats" element={<ChannelStats/>}/>
      <Route path="/channel-videos" element={<ChannelVideos/>}/>
      <Route path="/update/:videoId" element={<UpdateVideo/>}/>
      <Route path="/update/t/:tweetId" element={<UpdateTweet/>}/>
      <Route path="/channel-tweets" element={<ChannelTweets/>}/>
      <Route path="/change-password" element={<ChangePassword/>}/>
      <Route path="/update-name" element={<UpdateName/>}/>
      <Route path="/update-avatar" element={<UpdateAvatar/>}/>
      <Route path="/update-coverimage" element={<UpdateCoverImage/>}/>
      <Route path="/videoDetails/:videoId" element={<VideoDetails/>}/>
      <Route path="/channel-page/:channelId" element={<ChannelPage/>}/>
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import SignUpPage from "./pages/SignUpPage"
import HomePage from "./pages/HomePage"
import UserDashboardPage from "./pages/UserDashboardPage"



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
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/userdashboard/:userId" element={<UserDashboardPage/>} />
    </Routes>
      
    </>
  )
}

export default App

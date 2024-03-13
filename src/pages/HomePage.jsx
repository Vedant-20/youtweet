import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {IdKeeper} from '../store/authSlice'

function HomePage() {
  const {uid}=useParams()
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(IdKeeper(uid))
  },[uid])
  return (
    <>
        <NavBar />
        <Home/>
        
    </>
  )
}

export default HomePage
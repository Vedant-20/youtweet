import React from 'react'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import { useParams } from 'react-router-dom'

function HomePage() {
  const {uid}=useParams()
  return (
    <>
        <NavBar uid={uid}/>
        <Home/>
        
    </>
  )
}

export default HomePage
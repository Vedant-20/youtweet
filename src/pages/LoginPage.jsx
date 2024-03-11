import React from 'react'
import Login from '../components/Login'
import ThemeBtn from '../components/ThemeBtn'


function LoginPage() {
  return (
    <>
    
    <div className='fixed top-0 w-full h-[100px] text-center pt-8'> 
    <ThemeBtn/> 
    </div>
        <div className='pt-24'>
        <Login/>
        </div>
        
    </>
  )
}

export default LoginPage
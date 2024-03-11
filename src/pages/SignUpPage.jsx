import React from 'react'
import SignUp from '../components/SignUp'
import ThemeBtn from '../components/ThemeBtn'

function SignUpPage() {
  return (
    <>

<div className='fixed top-0 w-full h-[100px] text-center pt-8'> 
    <ThemeBtn/> 
    </div>
    <div className='pt-24 md:pt-12'>
    <SignUp/>
    </div>
        
    </>
  )
}

export default SignUpPage
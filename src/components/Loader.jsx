import React from 'react'
import loadingImg from '../assets/loadingImg.gif'

function Loader() {
  return (
    

    <div className="flex justify-center items-center w-full h-full">
      <img src={loadingImg} alt="Loading" />
    </div>
  )
}

export default Loader
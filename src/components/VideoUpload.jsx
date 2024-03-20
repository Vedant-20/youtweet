import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios';
import Loader from './Loader'
import { useSnackbar } from 'notistack';

function VideoUpload() {
    const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [loading,setLoading]=useState(false)
  const {enqueueSnackbar}=useSnackbar()

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (event.target.name === 'video') {
      setVideoFile(file);
    } else if (event.target.name === 'thumbnail') {
      setThumbnail(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('videoFile', videoFile);
    formData.append('thumbnail', thumbnail);
    console.log('Uplaod video form',formData)

    try {
      setLoading(true)
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/videos/publish-video`, formData, {
        withCredentials:true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Video Upload',response)
      console.log(response.data);
      if(response.data.statusCode===200){
          enqueueSnackbar(response.data.message,{
            variant:'success',
            autoHideDuration:1000,
            anchorOrigin:{
              
              vertical:'top',
              horizontal:'center'
            }
          })
      }

      setLoading(false)
    } catch (error) {
      console.error('Error uploading video:', error.response.data.message);
      enqueueSnackbar(error.message,{
        variant:'warning',
        autoHideDuration:1000,
        anchorOrigin:{
          
          vertical:'top',
          horizontal:'center'
        }
      })
    }
  };

  return loading ? (<Loader/>) : (
    <>
        <NavBar/>
        <div>
          <h1 className='text-black dark:text-white text-2xl font-bold text-center mb-4'>Upload Your Video</h1>
        </div>
        <div>
        <form onSubmit={handleSubmit}>
      <div className='text-center'>
      <label htmlFor="" className="text-base text-center font-medium text-gray-900 dark:text-white ">
                  {' '}
                  Title:{' '}
                </label>
        <div className='mt-2'>
        <input className="flex h-10 w-full dark:text-white rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-yellow-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" placeholder='Enter Video Title' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
      </div>
      <div className='text-center'>
      <label htmlFor="" className="text-base font-medium text-gray-900 dark:text-white ">
                  {' '}
                  Description:{' '}
                </label>
        <textarea className="flex h-50 w-full dark:text-white rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-yellow-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" placeholder='Enter Video Description' value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className='text-center'>
      <label htmlFor="" className="text-base font-medium text-gray-900 dark:text-white ">
                  {' '}
                  Video File:{' '}
                </label>
        <input className="flex h-10 w-full dark:text-white rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-yellow-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" type="file" name="video" accept="video/*" onChange={handleFileChange} />
      </div>
      <div className='text-center '>
      <label htmlFor="" className="text-base font-medium text-gray-900 dark:text-white ">
                  {' '}
                  Thumbnail:{' '}
                </label>
        <input className="flex h-10 w-full dark:text-white rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-yellow-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" type="file" name="thumbnail" accept="image/*" onChange={handleFileChange} />
      </div>
      <button className="border-2 text-2xl font-bold mt-4 mb-8 border-white inline-flex w-full items-center justify-center bg-black   leading-7 text-black bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded px-3.5 py-2.5 hover:bg-black/80" type="submit">Upload</button>
    </form>
        </div>
    </>
  )
}

export default VideoUpload
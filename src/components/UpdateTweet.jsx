import React, { useState } from 'react'
import NavBar from './NavBar';

function UpdateTweet() {
    const [formData, setFormData] = useState({
    
        content: '',
        
        
      });



      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        // try {
        //   const response = await axios.post('/api/register', formData);
        //   console.log(response)
        // } catch (error) {
        //   console.log(error)
        // }
      };
  return (
    <>
        <NavBar/>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div>
                <h1 className='text-black dark:text-white text-2xl font-bold text-center mb-4'>Update Tweet On Timeline</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                <div className='text-center'>
      <label htmlFor="" className="text-base font-medium text-gray-900 dark:text-white ">
                  {' '}
                  Add Content For Your Tweet:{' '}
                </label>
        <textarea className="flex h-50 w-full dark:text-white rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-yellow-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" placeholder='Enter Tweet Content' name='content' value={formData.content} onChange={handleChange} />
      </div>


      <div>
      <button className="border-2 text-2xl font-bold mt-4 mb-8 border-white inline-flex w-full items-center justify-center bg-black   leading-7 text-black bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded px-3.5 py-2.5 hover:bg-black/80" type="submit">Update Tweet</button>
      </div>
                </form>
            </div>
        </div>
        </div>
    </>
  )
}

export default UpdateTweet
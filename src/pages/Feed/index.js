import React from 'react'
import NavBar from '../../components/NavBar'
import CandidateFeed from '../../components/Feed'


const Feed = () => {
  return (
    <div className='w-screen'>
        <NavBar/>
        <div className='flex'>
        <div className='w-2/3'>
        <CandidateFeed/>
        </div>
        <div className='w-1/3  flex  items-center flex-col p-16 border-l-2 border-l-grey-500 h-screen'>
            <h1 className='text-2xl font-bold pb-4'>Enter Job Description</h1>
            <textarea className='bg-purple-100 p-4 outline-none rounded-md' id="w3review" placeholder='enter job description..' name="w3review" rows="20" cols="75"></textarea>
        </div>
        </div>
    </div>
  )
}

export default Feed
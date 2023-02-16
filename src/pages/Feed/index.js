import React, {useState} from 'react'
import NavBar from '../../components/NavBar'
import CandidateFeed from '../../components/Feed'


const Feed = () => {
  const [description, setDescription] = useState("")
  const [showCandidate, setShowCandidate] = useState(false)
  return (
    <div className='w-screen'>
        <NavBar/>
        <div className='flex'>
        <div className='w-2/3'>
        {showCandidate && <CandidateFeed/>}
        </div>
        <div className='w-1/3  flex  items-center flex-col p-16 border-l-2 border-l-grey-500 h-screen'>
            <h1 className='text-2xl font-bold pb-4'>Enter Job Description</h1>
            <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='bg-purple-100 p-4 outline-none rounded-md' id="w3review" placeholder='enter job description..' name="w3review" rows="20" cols="75"></textarea>
            <div class="flex items-center justify-center pt-12">
      <button onClick={()=>setShowCandidate(true)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
        Submit
      </button>
    </div>
        </div>
        </div>
    </div>
  )
}

export default Feed
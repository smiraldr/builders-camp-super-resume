import React from 'react'
import Candidate from '../Candidate'

const CandidateFeed = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-y-[30px] py-12'>
        <h1 className='font-bold text-xl'>Matching Candidates</h1>
            <Candidate/>
            <Candidate/>
            <Candidate/>
        </div>
  )
}

export default CandidateFeed